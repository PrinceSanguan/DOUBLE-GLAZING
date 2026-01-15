<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Removed dark mode detection script --}}

    {{-- Inline style to set the HTML background color for white mode --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }
        /* Critical CSS - inline above-the-fold styles */
        body{margin:0;padding:0;min-height:100vh}
        .font-sans{font-family:'Instrument Sans',ui-sans-serif,system-ui,sans-serif}
        .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
    </style>

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <link rel="icon" href="/select-logo.ico">

    <!-- Performance: DNS Prefetch & Preconnect -->
    <link rel="dns-prefetch" href="https://www.googletagmanager.com">
    <link rel="dns-prefetch" href="https://www.youtube-nocookie.com">
    <link rel="dns-prefetch" href="https://elfsightcdn.com">
    <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
    
    <!-- Performance: Preload critical assets -->
    <link rel="preload" as="image" href="/images/Hero/Airbrush-image-extender (6).webp" fetchpriority="high" imagesrcset="/images/Hero/Airbrush-image-extender (6).webp 1x">
    <link rel="preload" as="style" href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" fetchpriority="high">

    <!-- Optimized font loading -->
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
    <noscript><link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600&display=swap" rel="stylesheet" /></noscript>

    <!-- Google Tag Manager (Optimized timing) -->
    <script>
    (function() {
        var gtmLoad = function() {
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TDMS6FF5');
        };
        if (document.readyState === 'complete') {
            setTimeout(gtmLoad, 500);
        } else {
            window.addEventListener('load', function() {
                setTimeout(gtmLoad, 500);
            });
        }
    })();
    </script>
    <!-- End Google Tag Manager -->

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDMS6FF5"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    @inertia
</body>

</html>
