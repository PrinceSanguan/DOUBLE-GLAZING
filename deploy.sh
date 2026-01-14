#!/bin/bash
# Deployment Script for Production Server
# Run this on your server after git pull

echo "🚀 Starting deployment..."

# 1. Pull latest code
echo "📥 Pulling latest code..."
git pull origin main

# 2. Install PHP dependencies (production only, optimized)
echo "📦 Installing PHP dependencies..."
composer install --no-dev --optimize-autoloader --no-interaction

# 3. Install Node dependencies (clean install)
echo "📦 Installing Node dependencies..."
npm ci --production=false

# 4. Build assets with SSR support
echo "🔨 Building assets..."
npm run build:ssr

# 5. Clear all caches
echo "🧹 Clearing caches..."
php artisan optimize:clear
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear

# 6. Rebuild optimized caches
echo "⚡ Optimizing application..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize

# 7. Restart SSR server (if using Inertia SSR)
echo "🔄 Restarting SSR server..."
php artisan inertia:stop-ssr 2>/dev/null || true
php artisan inertia:start-ssr &

# 8. Set correct permissions
echo "🔒 Setting permissions..."
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache 2>/dev/null || true

echo "✅ Deployment complete!"
echo "⏰ Wait 30 seconds for SSR server to fully start, then test your site."
