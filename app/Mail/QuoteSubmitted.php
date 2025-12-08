<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class QuoteSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public array $data;

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this
            ->subject('New Quote Request')
            ->from(config('mail.from.address'), config('mail.from.name'))
            ->replyTo('sales@selectproductsonline.co.uk', 'Select Products')
            ->view('emails.quote-submitted')
            ->with(['data' => $this->data]);
    }
}
