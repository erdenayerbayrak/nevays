# NEVAYS Görsel SEO Altyapısı Standartları

## Görsel Dosya Adlandırma Kuralları

### Genel Kural
Tüm görsel dosyaları Türkçe karakterler kullanmadan, tire (-) ile ayrılmış, açıklayıcı isimlerle adlandırın.

### Örnekler
```
✅ Doğru:
- temiz-oda-kapi-sistemleri.jpg
- nevays-hijyen-paneli-2024.png
- pass-box-statik-model.webp
- clean-room-installation-pharmaceuticals.jpg

❌ Yanlış:
- IMG_1234.jpg
- photo1.png
- kapı.jpg
- temizoda.webp
```

### Kategori Bazında Adlandırma

#### Temiz Oda Panelleri
- `temiz-oda-panel-[tip]-[ozellik].jpg`
- Örnek: `temiz-oda-panel-sandwich-antibakteriyel.jpg`

#### Temiz Oda Kapıları
- `temiz-oda-kapi-[tip]-[ozellik].jpg`
- Örnek: `temiz-oda-kapi-otomatik-cam-panel.jpg`

#### Pass Box Sistemleri
- `pass-box-[tip]-[ozellik].jpg`
- Örnek: `pass-box-dinamik-uv-sterilizasyon.jpg`

#### Proje Fotoğrafları
- `proje-[firma]-[sehir]-[yil].jpg`
- Örnek: `proje-atabay-kimya-istanbul-2024.jpg`

## Alt Metin (Alt Text) Standartları

### Genel Kurallar
1. **Açıklayıcı**: Görselin içeriğini net bir şekilde tanımlayın
2. **Anahtar Kelime Odaklı**: İlgili anahtar kelimeleri doğal bir şekilde dahil edin
3. **Uzunluk**: 50-125 karakter arası ideal
4. **Bağlam**: Sayfanın konusuyla uyumlu olsun

### Ürün Görselleri İçin Alt Metinler

#### Temiz Oda Panelleri
```html
<img src="temiz-oda-panel-sandwich-antibakteriyel.jpg" 
     alt="NEVAYS antibakteriyel sandwich panel temiz oda duvar sistemi - beyaz renk" />
```

#### Temiz Oda Kapıları
```html
<img src="temiz-oda-kapi-otomatik-cam-panel.jpg" 
     alt="Otomatik cam panelli temiz oda kapısı - paslanmaz çelik çerçeve" />
```

#### Pass Box Sistemleri
```html
<img src="pass-box-dinamik-uv-sterilizasyon.jpg" 
     alt="UV sterilizasyonlu dinamik pass box ünitesi - çift kapılı sistem" />
```

### Proje Fotoğrafları İçin Alt Metinler
```html
<img src="proje-atabay-kimya-istanbul-2024.jpg" 
     alt="Atabay Kimya İstanbul fabrikası temiz oda kurulumu - NEVAYS projesi 2024" />
```

### Sertifika ve Belgeler
```html
<img src="iso-14644-sertifika-nevays.jpg" 
     alt="ISO 14644 temiz oda standardı sertifikası - NEVAYS belgesi" />
```

### Teknik Çizimler ve Şemalar
```html
<img src="temiz-oda-havalandirma-semasi.jpg" 
     alt="Temiz oda havalandırma sistemi teknik şeması - hava akış yönleri" />
```

## SEO Optimizasyon Kontrol Listesi

### Her Görsel İçin Kontrol Edin:
- [ ] Dosya adı açıklayıcı ve SEO dostu mu?
- [ ] Alt text mevcut ve optimize edilmiş mi?
- [ ] Görsel boyutu web için optimize edilmiş mi?
- [ ] Dosya formatı uygun mu? (WebP tercih edilir)
- [ ] Görsel lazy loading kullanıyor mu?

### Sayfa Bazında Kontrol:
- [ ] Tüm görsellerin alt text'i var mı?
- [ ] Alt textler sayfa konusuyla uyumlu mu?
- [ ] Anahtar kelimeler doğal bir şekilde dağıtılmış mı?
- [ ] Görsel dosya boyutları PageSpeed'i etkilemiyor mu?

## Uygulama Örnekleri

### 1. Ürün Katalog Sayfası
```tsx
<Image
  src="/products/temiz-oda-panel-hijyen-beyaz.webp"
  alt="Beyaz hijyen paneli temiz oda duvar sistemi - antibakteriyel yüzey"
  width={400}
  height={300}
  loading="lazy"
/>
```

### 2. Proje Galeri Sayfası
```tsx
<Image
  src="/projects/proje-istanbul-eczane-2024.webp"
  alt="İstanbul eczane temiz oda projesi tamamlanmış hali - NEVAYS kurulumu"
  width={600}
  height={400}
  loading="lazy"
/>
```

### 3. Blog Makalesi İçi Görseller
```tsx
<Image
  src="/blog/temiz-oda-bakim-teknikleri.webp"
  alt="Temiz oda panel temizliği ve bakım teknikleri uygulama örneği"
  width={800}
  height={450}
  loading="lazy"
/>
```

## Performans Optimizasyonu

### Görsel Formatları
1. **WebP**: Modern tarayıcılar için birincil format
2. **JPEG**: Fotoğraflar için fallback
3. **PNG**: Şeffaflık gereken logolar için
4. **SVG**: İkonlar ve basit grafikler için

### Boyut Optimizasyonu
- Desktop: Max 1920px genişlik
- Tablet: Max 1024px genişlik  
- Mobile: Max 768px genişlik
- Thumbnail: Max 300px genişlik

### Lazy Loading
Tüm görsellerde `loading="lazy"` attribute'u kullanın.

---

**Not**: Bu standartlar PageSpeed 100 hedefine ulaşmak ve SEO performansını maksimize etmek için tasarlanmıştır.