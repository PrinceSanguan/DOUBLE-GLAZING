<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\JsonResponse;

class GoogleReviewsController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $apiKey = config('services.google_places.api_key');
        $placeId = config('services.google_places.place_id');

        if (!$apiKey || !$placeId) {
            return response()->json([
                'ok' => false,
                'reason' => 'missing_credentials',
                'message' => 'Google Places API key or Place ID not configured.',
                'reviews' => [],
            ], 200);
        }

        $cacheKey = 'google_reviews_' . md5($placeId);
        $data = Cache::remember($cacheKey, now()->addHours(6), function () use ($apiKey, $placeId) {
            try {
                $url = 'https://maps.googleapis.com/maps/api/place/details/json';
                $response = Http::get($url, [
                    'place_id' => $placeId,
                    'fields' => 'reviews,rating,user_ratings_total,url,name',
                    'key' => $apiKey,
                ]);

                if (!$response->ok()) {
                    Log::warning('Google Places API error', ['status' => $response->status(), 'body' => $response->body()]);
                    return null;
                }

                $json = $response->json();
                if (($json['status'] ?? null) !== 'OK') {
                    Log::warning('Google Places API non-OK', ['status' => $json['status'] ?? 'unknown', 'error' => $json['error_message'] ?? null]);
                    return null;
                }

                $result = $json['result'] ?? [];
                $reviews = collect($result['reviews'] ?? [])->map(function ($r) {
                    return [
                        'author_name' => $r['author_name'] ?? 'Anonymous',
                        'rating' => $r['rating'] ?? null,
                        'relative_time' => $r['relative_time_description'] ?? null,
                        'text' => $r['text'] ?? '',
                        'profile_photo_url' => $r['profile_photo_url'] ?? null,
                        'time' => $r['time'] ?? null,
                    ];
                })->take(9)->values()->all();

                return [
                    'ok' => true,
                    'place' => [
                        'name' => $result['name'] ?? null,
                        'url' => $result['url'] ?? null,
                        'rating' => $result['rating'] ?? null,
                        'user_ratings_total' => $result['user_ratings_total'] ?? null,
                    ],
                    'reviews' => $reviews,
                ];
            } catch (\Throwable $e) {
                Log::error('Google Places fetch exception', ['error' => $e->getMessage()]);
                return null;
            }
        });

        if (!$data) {
            return response()->json([
                'ok' => false,
                'reason' => 'fetch_failed',
                'message' => 'Unable to fetch Google reviews at this time.',
                'reviews' => [],
            ], 200);
        }

        return response()->json($data, 200);
    }
}
