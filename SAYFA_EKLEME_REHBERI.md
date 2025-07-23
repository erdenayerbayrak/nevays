# Yeni Sayfa Ekleme Rehberi

## 📄 Örnek: Kariyer Sayfası Ekleme

### 1. Sayfa Dosyasını Oluşturun:

`src/app/[locale]/career/page.tsx`:

```tsx
import { useTranslations } from 'next-intl';
import MainLayout from '@/components/layout/main-layout';

export default function CareerPage() {
  const t = useTranslations('career');
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
        <p>{t('description')}</p>
      </div>
    </MainLayout>
  );
}
```

### 2. Çevirileri Ekleyin:

`messages/tr.json`:
```json
{
  "career": {
    "title": "Kariyer",
    "description": "NEVAYS'ta kariyer fırsatları"
  }
}
```

`messages/en.json`:
```json
{
  "career": {
    "title": "Career",
    "description": "Career opportunities at NEVAYS"
  }
}
```

### 3. URL'ler:
- Türkçe: `http://localhost:3000/career`
- İngilizce: `http://localhost:3000/en/career`

## 🚨 Yaygın Hatalar ve Çözümleri

### 1. 404 Hatası
- ✅ URL'nin doğru olduğundan emin olun
- ✅ Sayfanın `src/app/[locale]/` içinde olduğundan emin olun
- ✅ `page.tsx` dosya adının doğru olduğundan emin olun

### 2. Çeviri Hatası
- ✅ `messages/tr.json` ve `messages/en.json` dosyalarına çevirileri ekleyin
- ✅ `useTranslations` hook'unu doğru namespace ile kullanın

### 3. Layout Hatası
- ✅ Her sayfa `MainLayout` wrapper'ını kullanmalı
- ✅ Metadata ve SEO bilgilerini ekleyin