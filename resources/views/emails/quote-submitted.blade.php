<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Quote Request</title>
    <style>
      body { font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; color: #111; }
      .wrap { max-width: 640px; margin: 0 auto; padding: 16px; }
      .h1 { font-size: 20px; font-weight: 700; margin: 0 0 8px; }
      .small { color: #555; margin-top: 0; }
      .card { border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px; background: #fafafa; }
      .row { margin: 6px 0; }
      .label { font-weight: 600; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <h1 class="h1">New Quote Request</h1>
      <p class="small">You have received a new quote enquiry from the website.</p>
      <div class="card">
        <div class="row"><span class="label">Interest:</span> {{ $data['interest'] ?? '-' }}</div>
        <div class="row"><span class="label">When:</span> {{ $data['when'] ?? '-' }}</div>
        <div class="row"><span class="label">Postcode:</span> {{ $data['postcode'] ?? '-' }}</div>
        <div class="row"><span class="label">Address:</span> {{ $data['address'] ?? '-' }}</div>
        <div class="row"><span class="label">Name:</span> {{ $data['name'] ?? '-' }}</div>
        <div class="row"><span class="label">Number:</span> {{ $data['number'] ?? '-' }}</div>
        <div class="row"><span class="label">Email:</span> {{ $data['email'] ?? '-' }}</div>
      </div>
      <p class="small">Sent automatically by Select Products website.</p>
    </div>
  </body>
</html>
