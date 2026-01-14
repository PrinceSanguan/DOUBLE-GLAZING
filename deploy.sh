#!/bin/bash
# Deployment Script for Production Server
# Run this on your server after git pull

echo "🚀 Starting deployment..."

# 1. Pull latest code
echo "📥 Pulling latest code..."
git pull origin main

# 2. Clean node_modules and reinstall (critical for removed packages)
echo "🧹 Cleaning node_modules..."
rm -rf node_modules package-lock.json

# 3. Install Node dependencies (clean install)
echo "📦 Installing Node dependencies..."
npm install

# 4. Install PHP dependencies (production only, optimized)
echo "📦 Installing PHP dependencies..."
composer install --no-dev --optimize-autoloader --no-interaction

# 5. Build assets with SSR support
echo "🔨 Building assets..."
npm run build:ssr

# 6. Clear all caches
echo "🧹 Clearing caches..."
php artisan optimize:clear
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear

# 7. Rebuild optimized caches
echo "⚡ Optimizing application..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 8. Restart SSR server (if using Inertia SSR)
echo "🔄 Restarting SSR server..."
php artisan inertia:stop-ssr 2>/dev/null || true
sleep 2
php artisan inertia:start-ssr &

# 9. Set correct permissions
echo "🔒 Setting permissions..."
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache 2>/dev/null || true

echo "✅ Deployment complete!"
echo "⏰ Wait 30 seconds for SSR server to fully start, then test your site."
