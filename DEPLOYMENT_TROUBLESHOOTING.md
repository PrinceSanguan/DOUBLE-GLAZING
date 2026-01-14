# Server Error 500 Troubleshooting Checklist

## Issue: SSR Build Failure was causing 500 errors

### Root Cause Found:
The Vite config was applying `manualChunks` to SSR builds, which is not supported. This has been fixed.

### What Was Fixed:
1. ✅ Updated vite.config.ts to conditionally apply manualChunks (client-side only)
2. ✅ Removed .htaccess cache headers (may cause issues if modules not enabled on server)
3. ✅ Removed unused dependencies (react-router-dom, react-hot-toast)

### Deployment Steps for Production Server:

#### Option 1: Manual Deployment
SSH into your server and run:
```bash
cd /path/to/your/app
bash deploy.sh
```

#### Option 2: Step-by-Step
```bash
git pull
composer install --no-dev --optimize-autoloader
npm ci
npm run build:ssr
php artisan optimize:clear
php artisan optimize
php artisan inertia:stop-ssr
php artisan inertia:start-ssr &
```

### Common 500 Error Causes (If Still Failing):

1. **SSR Server Not Running**
   ```bash
   php artisan inertia:stop-ssr
   php artisan inertia:start-ssr
   ```

2. **Node.js Version Mismatch**
   - Check: `node -v` (should be 18+ or 20+)
   - Fix: Use nvm to switch: `nvm use 20`

3. **Missing Environment Variables**
   - Check .env file exists on server
   - Ensure APP_KEY is set
   - Run: `php artisan key:generate` if needed

4. **Permission Issues**
   ```bash
   chmod -R 775 storage bootstrap/cache
   chown -R www-data:www-data storage bootstrap/cache
   ```

5. **Stale Cache**
   ```bash
   php artisan optimize:clear
   php artisan cache:clear
   php artisan config:clear
   ```

6. **Build Assets Missing**
   - Ensure `public/build/` directory exists
   - Ensure `bootstrap/ssr/ssr.js` exists
   - Re-run: `npm run build:ssr`

7. **Database Connection**
   - Check database credentials in .env
   - Test: `php artisan migrate:status`

### Check Server Logs:
```bash
tail -f storage/logs/laravel.log
# Or your hosting provider's error logs
```

### Quick Test:
After deployment, test if SSR is working:
```bash
curl -I https://your-domain.com
# Should return 200 OK
```
