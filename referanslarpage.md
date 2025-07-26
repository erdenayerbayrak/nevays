Elbette, anlaşıldı. Ana sayfadaki referans şeridi talebini not alarak, şimdi sadece **özel "Referanslar" sayfası** için, kullanıcının beklentilerini karşılayan ve ötesine geçen, "daha iyi bir tasarım" sunan bir prompt hazırlıyorum.

Bu sayfadaki amaç, sadece kimlerle çalışıldığını göstermek değil, bu iş birliklerinin ne kadar başarılı ve teknik olarak ne kadar derin olduğunu kanıtlayarak ziyaretçide maksimum güven oluşturmaktır.

---

### **Claude için Prompt: "Referanslar" Sayfası Stratejisi, Tasarım Konsepti ve Vaka Analizi Yapısı**

**Rol:** Sen, bir B2B mühendislik firmasının en önemli varlığı olan müşteri referanslarını, maksimum güven ve kredibilite oluşturacak şekilde sunan bir UX/UI tasarımcısı ve pazarlama stratejistisin. Görevin, basit bir logo galerisinin ötesine geçerek, başarı hikayeleri anlatan bir sayfa tasarlamaktır.

**Proje Bağlamı (Genel Strateji):**
Bu sayfayı oluştururken, NEVAYS web sitesinin genel proje hedeflerine sadık kalmalısın:
* **Tasarım Dili:** Sitenin genelinde kullanılacak olan minimalist, profesyonel ve prestijli UI kitine uygun olmalı. Tasarım, referans verilen firmaların (ASELSAN, VALEO, SAMSUNG gibi) marka değerine saygı göstermelidir.
* **Performans Hedefi:** Sayfa, yüksek çözünürlüklü logolar ve görseller içereceği için, imaj optimizasyonu ve lazy loading teknikleri kullanılarak Google PageSpeed 100 hedefine hizmet etmelidir.
* **Genel Ton:** Metinler, övünmekten çok, başarıyı ve mühendislik yetkinliğini mütevazı bir özgüvenle sergilemelidir.

---

**Ana Görev: "Referanslar" Sayfasını Sıfırdan Tasarlamak**

NEVAYS web sitesi için, verilen referans listesini kullanarak, hem görsel olarak etkileyici hem de stratejik olarak ikna edici bir "Referanslar" sayfası için **UI/UX tasarım önerilerini** ve **sayfa yapısını** oluştur.

**1. Sayfanın Stratejik Hedefi ve "Daha İyi Tasarım" Önerisi:**

* **Strateji:** Ziyaretçiye sadece "kimlerle çalıştığımızı" değil, "**onlar için neyi başardığımızı**" da göstermeliyiz. Bu nedenle, basit bir logo şeridi veya duvarı yerine, **iki katmanlı bir yapı** öneriyorum:
    1.  **Katman 1 - Vaka Analizleri (Case Studies):** En prestijli veya en kapsamlı projelerden 3-4 tanesini "Başarı Hikayesi" olarak öne çıkaracağız.
    2.  **Katman 2 - Filtrelenebilir Logo Galerisi:** Tüm referansların logolarını, sektörlere göre filtrelenebilir modern bir galeride sunacağız.

* **Referans Listesi:** `ASELSAN`, `ATABAY İLAÇ`, `WORD MEDICINE`, `TÜRK İLAÇ SERUM SANAYİ`, `VALEO`, `SMART GÜNEŞ TEKNOLOJİLERİ`, `ARMADA FOODS`, `SİSTEMA`, `SAMSUNG`, `AYSAM`, `SONİTUS`, `SONOFARMA`, `TAY AVİATION`, `ARİON İLAÇ`

**2. Sayfa Yapısı ve İçerik Mimarisi:**

* **H1 Başlığı:** Güçlü ve net bir başlık. Örn: "**Referanslarımız**" veya "**Güven Üzerine İnşa Edilen Projeler**".
* **Bölüm 1: Öne Çıkan Başarı Hikayeleri (Vaka Analizleri)**
    * Bu bölümde, seçilecek 3-4 referans (örn: ASELSAN, ATABAY İLAÇ, VALEO) için ayrı ayrı "vaka analizi" blokları tasarlanmalıdır.
    * **Her bir vaka analizi bloğu şu bilgileri içermelidir:**
        1.  **Firma Logosu:** Büyük ve net bir şekilde.
        2.  **Proje Başlığı:** Kısa ve açıklayıcı. Örn: "ASELSAN - Mikroelektronik Üretim Tesisi ISO 7 Temiz Oda Projesi".
        3.  **Zorluk (Challenge):** 1-2 cümle ile projenin temel amacı veya karşılaşılan zorluk. Örn: "Yüksek hassasiyete sahip elektronik komponentlerin üretimi için statik kontrolün ve partikül seviyelerinin kritik olduğu bir alan yaratmak."
        4.  **NEVAYS'ın Çözümü (Solution):** 1-2 cümle ile sunulan mühendislik çözümü. Örn: "ESD zemin kaplaması, HEPA filtreli tavan sistemleri ve hassas nem kontrollü HVAC ünitelerini içeren anahtar teslim bir sistem kuruldu."
        5.  **Proje Görseli:** İlgili projeden yüksek kaliteli, profesyonel bir fotoğraf.
* **Bölüm 2: Tüm Referanslarımız (Filtrelenebilir Galeri)**
    * Bu bölümün başında, sektörel filtreleme butonları bulunmalıdır. Örn: **[Tümü]**, **[İlaç ve Sağlık]**, **[Savunma ve Havacılık]**, **[Elektronik]**, **[Otomotiv]**, **[Gıda]**.
    * Altında, tüm referansların logolarının yer aldığı temiz ve düzenli bir grid (ızgara) yapısı olmalıdır.

**3. UI/UX Tasarım Konsept Önerileri:**

* **Sayfa Yerleşimi:** Sayfa yukarıdan aşağıya şu şekilde akmalıdır: Ana Başlık -> Vaka Analizi 1 (Görsel solda, metin sağda) -> Vaka Analizi 2 (Metin solda, görsel sağda) -> ... -> "Tüm Referanslarımız" ara başlığı -> Filtre Butonları -> Logo Galerisi. Bu yerleşim, sayfayı dinamik ve ilgi çekici kılar.
* **Vaka Analizi Tasarımı:** Her bir vaka analizi bloğu, bol beyaz alan kullanılarak ferah ve prestijli bir tasarıma sahip olmalıdır. Başlıklar net, metinler kolay okunur olmalıdır.
* **Filtreleme İnteraksiyonu:** Kullanıcı bir sektör filtresine (örn: "İlaç ve Sağlık") tıkladığında, diğer sektörlere ait logolar **sayfa yenilenmeden, yumuşak bir animasyonla (fade out)** kaybolmalı ve sadece seçilen sektörün logoları kalmalıdır. Bu, modern ve profesyonel bir kullanıcı deneyimi sunar.
* **Logo Kalitesi:** Kullanıcının belirttiği gibi, **tüm logolar yüksek çözünürlüklü, dekupe edilmiş (arka plansız) ve en güncel halleriyle** kullanılmalıdır. Bulanık veya kalitesiz logo kullanımından kesinlikle kaçınılmalıdır.

---

**Nihai Çıktı Talebi:**

Bu prompt sonucunda senden üç temel çıktı beklenmektedir:

1.  **Stratejik Konsept Raporu:** Önerilen "Vaka Analizi + Filtrelenebilir Galeri" yapısının, basit bir logo duvarına göre avantajlarını ve müşteride yaratacağı etkiyi açıklayan bir strateji belgesi.
2.  **Sayfa Wireframe'i / Yerleşim Planı:** "Referanslar" sayfasının tamamı için, vaka analizi bloklarının ve filtrelenebilir logo galerisinin yerleşimini gösteren detaylı bir görsel taslak veya yazılı konsept.
3.  **İnteraktif Filtreleme Fonksiyonu Açıklaması:** Filtre butonlarının tasarımı ve tıklandığında logo galerisinin nasıl davranacağını (animasyon vb.) açıklayan bir fonksiyonel tarif.