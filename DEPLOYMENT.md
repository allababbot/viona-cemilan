# Deployment ke Cloudflare Pages

## Cara Deploy

1. Login ke [Cloudflare Pages](https://pages.cloudflare.com/)
2. Klik "Create a project"
3. Connect ke GitHub repository: `allababbot/viona-cemilan`
4. Gunakan konfigurasi berikut:

### Build Settings
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** (kosongkan atau `/`)

### Environment Variables
Tidak ada environment variable yang diperlukan.

## Troubleshooting

Jika styling atau gambar tidak muncul:
1. Pastikan build command adalah `npm run build`
2. Pastikan output directory adalah `dist`
3. Cek bahwa semua gambar ada di folder `public/`
4. Trigger rebuild manual di Cloudflare Pages dashboard
