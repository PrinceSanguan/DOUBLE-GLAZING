<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;
use App\Mail\QuoteSubmitted;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('app:send-test-quote-email', function () {
    $data = [
        'interest' => 'Composite Doors',
        'when' => 'Within 2 weeks',
        'postcode' => 'LS1 2AB',
        'address' => '10 Example Street, Leeds',
        'name' => 'Test User',
        'number' => '01132578933',
        'email' => 'test@selectproductsonline.co.uk',
    ];

    Mail::to('sales@selectproductsonline.co.uk')
        ->cc('john@choros.io')
        ->send(new QuoteSubmitted($data));

    $this->info('Test quote email dispatched to sales (CC: john@choros.io).');
})->purpose('Send a test quote email using current SMTP settings');
