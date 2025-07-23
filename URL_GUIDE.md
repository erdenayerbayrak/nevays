# NEVAYS Website - URL Rehberi

## 🌐 Doğru URL'ler

### Türkçe Sayfalar (Varsayılan)
- Ana Sayfa: `http://localhost:3000` veya `http://localhost:3000/tr`
- Hakkımızda: `http://localhost:3000/about` veya `http://localhost:3000/tr/about`
- İletişim: `http://localhost:3000/contact` veya `http://localhost:3000/tr/contact`
- Blog: `http://localhost:3000/blog` veya `http://localhost:3000/tr/blog`
- Projeler: `http://localhost:3000/projects` veya `http://localhost:3000/tr/projects`
- Sertifikalar: `http://localhost:3000/certificates` veya `http://localhost:3000/tr/certificates`

### İngilizce Sayfalar
- Ana Sayfa: `http://localhost:3000/en`
- About: `http://localhost:3000/en/about`
- Contact: `http://localhost:3000/en/contact`
- Blog: `http://localhost:3000/en/blog`
- Projects: `http://localhost:3000/en/projects`
- Certificates: `http://localhost:3000/en/certificates`

### Çözümler Sayfaları
- Hava Teknolojileri: `http://localhost:3000/solutions/air-handling`
- Temiz Oda: `http://localhost:3000/solutions/clean-room`
- Mühendislik: `http://localhost:3000/solutions/engineering`

## ⚠️ Önemli Notlar

1. **URL'de Türkçe kullanılmıyor**: `/hakkimizda` yerine `/about` kullanın. Türkçe çeviri UI'da görünür, URL'de değil.

2. **Locale Prefix**: `localePrefix: 'as-needed'` ayarı sayesinde Türkçe (varsayılan dil) için `/tr` prefix'i zorunlu değil.

3. **404 Hatası Alıyorsanız**:
   - Server'ın çalıştığından emin olun: `npm run dev`
   - Doğru URL'yi kullandığınızdan emin olun (yukarıdaki listeden)
   - Browser cache'ini temizleyin

## 🔧 Sorun Giderme

```bash
# Server'ı durdurup yeniden başlatın
pkill -f "next dev"
npm run dev

# Build cache'ini temizleyin
rm -rf .next
npm run dev
```