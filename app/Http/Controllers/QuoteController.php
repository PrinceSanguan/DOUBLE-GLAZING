<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class QuoteController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'interest' => 'required|string',
            'when' => 'required|string',
            'postcode' => 'nullable|string',
            'address' => 'nullable|string',
            'name' => 'nullable|string',
            'number' => 'nullable|string',
            'email' => 'nullable|email',
        ]);

        $webhookUrl = config('services.google_apps_script.quote_webhook');
        $secret = config('services.google_apps_script.secret');
        if (!$webhookUrl) {
            return response()->json(['message' => 'Webhook URL not configured'], 500);
        }

        try {
            $payload = $data;
            if ($secret) {
                $payload['_secret'] = $secret;
            }
            $response = Http::retry(2, 500)->timeout(10)->post($webhookUrl, $payload);
            if ($response->failed()) {
                Log::error('Apps Script submission failed', ['status' => $response->status(), 'body' => $response->body()]);
                return response()->json(['message' => 'Submission failed'], 500);
            }
        } catch (\Throwable $e) {
            Log::error('Apps Script submission exception', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Submission error'], 500);
        }

        return response()->json(['message' => 'Submitted']);
    }
}
