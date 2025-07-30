import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from 'lucide-react';
import { MainLayout } from '@/components/layout';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import CTABanner from '@/components/sections/cta-banner';


interface Props {
  params: { locale: string; slug: string };
}

// Mock blog data
const blogData: { [key: string]: any } = {
  'temiz-oda-nedir': {
    title: 'Temiz Oda Nedir? Cleanroom Sistemleri Rehberi',
    excerpt: 'Temiz oda tanımı, sınıflandırması, uygulama alanları ve kurulum süreçleri hakkında kapsamlı bilgiler.',
    author: 'NEVAYS Mühendislik Ekibi',
    publishDate: '2024-01-20',
    readingTime: '6 dakika',
    category: 'Temel Bilgiler',
    tags: ['Temiz Oda', 'Cleanroom', 'Tanım', 'Sınıflandırma'],
    image: '/images/blog/temiz-oda-nedir.jpg',
    content: `
      <h2>Temiz Oda (Cleanroom) Nedir?</h2>
      <p>Temiz oda, havadaki parçacık konsantrasyonunun kontrol edildiği ve belirli sınırlar içinde tutulduğu özel tasarlanmış kapalı alanlardır. Bu ortamlar, üretim süreçlerinde kontaminasyonu önlemek için kritik öneme sahiptir.</p>
      
      <h3>Temiz Oda Özellikleri</h3>
      <ul>
        <li>Kontrollü hava kalitesi</li>
        <li>Düzenli hava akışı</li>
        <li>Basınç kontrolü</li>
        <li>Sıcaklık ve nem kontrolü</li>
        <li>Özel yüzey malzemeleri</li>
        <li>Kontrollü giriş sistemleri</li>
      </ul>
      
      <h3>Uygulama Alanları</h3>
      <p>Temiz odalar birçok endüstride kullanılır:</p>
      <ul>
        <li><strong>Farmasötik:</strong> İlaç üretimi, steril dolum</li>
        <li><strong>Elektronik:</strong> Yarı iletken üretimi, mikroçip</li>
        <li><strong>Sağlık:</strong> Ameliyathaneler, laboratuvarlar</li>
        <li><strong>Gıda:</strong> Steril gıda üretimi</li>
        <li><strong>Havacılık:</strong> Hassas komponent üretimi</li>
      </ul>
      
      <h3>NEVAYS Temiz Oda Çözümleri</h3>
      <p>20+ yıllık deneyimimizle, her sektöre özel temiz oda sistemleri tasarlıyor ve kuruyoruz. Anahtar teslim projelerimizde ISO 14644 ve GMP standartlarına tam uyumluluk sağlıyoruz.</p>
    `,
    relatedPosts: ['temiz-oda-standartlari-2024', 'gmp-nedir-iyi-uretim-uygulamalari']
  },
  'temiz-oda-nedir-kapsamli-rehber': {
    title: 'Temiz Oda Nedir? Kapsamlı Rehber 2024',
    excerpt: 'Temiz oda tanımı, sınıflandırması, uygulama alanları ve tasarım prensipleri hakkında detaylı bilgi.',
    author: 'NEVAYS Mühendislik',
    authorBio: 'NEVAYS mühendislik ekibi, 20+ yıllık temiz oda teknolojileri deneyimi.',
    authorImage: '/images/team/nevays-team.jpg',
    publishDate: '2024-01-20',
    readingTime: 12,
    category: 'Temel Bilgiler',
    tags: ['Temiz Oda', 'Cleanroom', 'ISO 14644', 'Temiz Oda Sistemleri'],
    image: '/images/temizodasistemcard.webp',
    content: `
      <p><strong>Temiz oda</strong>, havadaki parçacık konsantrasyonunun kontrol edildiği ve gerektiğinde sıcaklık, nem, basınç ve hava akışı gibi diğer parametrelerin de düzenlendiği özel olarak tasarlanmış kapalı alanlardır.</p>

      <h2>Temiz Oda Tanımı ve Temel Prensipler</h2>
      <p>Temiz oda sistemleri, üretim süreçlerinde kontaminasyonu önlemek amacıyla geliştirilmiş mühendislik çözümleridir. Bu sistemler özellikle:</p>
      <ul>
        <li>Farmasötik üretim tesisleri</li>
        <li>Elektronik ve yarıiletken üretimi</li>
        <li>Biyoteknoloji laboratuvarları</li>
        <li>Tıbbi cihaz üretimi</li>
        <li>Gıda işleme tesisleri</li>
      </ul>
      <p>gibi kritik sektörlerde yaygın olarak kullanılmaktadır.</p>

      <h2>Temiz Oda Sınıflandırması</h2>
      <p>ISO 14644 standardına göre temiz odalar, havadaki parçacık konsantrasyonuna göre sınıflandırılır:</p>
      
      <h3>ISO Sınıf 1-9 Aralığı</h3>
      <ul>
        <li><strong>ISO Sınıf 1:</strong> En yüksek temizlik seviyesi (10 parçacık/m³)</li>
        <li><strong>ISO Sınıf 5:</strong> Farmasötik üretim için yaygın (3,520 parçacık/m³)</li>
        <li><strong>ISO Sınıf 7:</strong> Genel üretim alanları (352,000 parçacık/m³)</li>
        <li><strong>ISO Sınıf 8:</strong> Giyinme odaları ve koridor alanları</li>
      </ul>

      <h2>Temiz Oda Sistemlerinin Bileşenleri</h2>
      
      <h3>1. HVAC Sistemleri</h3>
      <p>Havalandırma, ısıtma ve klima sistemleri temiz odanın kalbini oluşturur. Bu sistemler:</p>
      <ul>
        <li>HEPA/ULPA filtreler ile hava filtreleme</li>
        <li>Laminer hava akışı sağlama</li>
        <li>Basınç farkı kontrolü</li>
        <li>Sıcaklık ve nem kontrolü</li>
      </ul>
      <p>işlevlerini yerine getirir.</p>

      <h3>2. Yapısal Bileşenler</h3>
      <p>Temiz oda panelleri, kapılar ve tavan sistemleri:</p>
      <ul>
        <li>Antibakteriyel yüzey kaplamaları</li>
        <li>Kolay temizlenebilir malzemeler</li>
        <li>Hava sızdırmazlığı</li>
        <li>Elektrostatik deşarj (ESD) koruması</li>
      </ul>
      <p>özelliklerine sahip olmalıdır.</p>

      <h2>Temiz Oda Tasarım Prensipleri</h2>
      
      <h3>Hava Akış Paternleri</h3>
      <p>Temiz oda tasarımında iki temel hava akış türü kullanılır:</p>
      <ul>
        <li><strong>Laminer Akış:</strong> Tek yönlü, paralel hava akışı</li>
        <li><strong>Türbülan Akış:</strong> Karışık hava akışı ile seyreltme</li>
      </ul>

      <h3>Basınç Kademesi</h3>
      <p>Kontaminasyonu önlemek için temiz odalar pozitif basınç altında tutulur. Basınç kademesi:</p>
      <ul>
        <li>En temiz alandan dışarıya doğru azalır</li>
        <li>Minimum 5-15 Pa fark korunur</li>
        <li>Kapı açılımlarında hava akışı kontrol edilir</li>
      </ul>

      <h2>Uygulama Alanları</h2>
      
      <h3>Farmasötik Sektör</h3>
      <p>İlaç üretiminde GMP (Good Manufacturing Practice) standartlarına uygun temiz oda sistemleri kritik öneme sahiptir.</p>
      
      <h3>Elektronik Sektörü</h3>
      <p>Yarıiletken ve mikroelektronik üretiminde parçacık kontaminasyonu ürün kalitesini doğrudan etkiler.</p>
      
      <h3>Biyoteknoloji</h3>
      <p>Biyolojik ürün üretimi ve araştırma faaliyetlerinde steril çalışma ortamları gereklidir.</p>

      <h2>Temiz Oda Validasyonu</h2>
      <p>Temiz oda sistemlerinin performansı düzenli olarak test edilmelidir:</p>
      <ul>
        <li>Parçacık sayım testleri</li>
        <li>Hava akış hızı ölçümleri</li>
        <li>Basınç farkı kontrolü</li>
        <li>HEPA filtre bütünlük testleri</li>
        <li>Mikrobiyal kontaminasyon testleri</li>
      </ul>

      <h2>Sonuç</h2>
      <p>Temiz oda teknolojileri, modern üretim süreçlerinin vazgeçilmez bir parçasıdır. NEVAYS olarak, müşterilerimize ISO 14644 standartlarına uygun, enerji verimli ve sürdürülebilir temiz oda çözümleri sunuyoruz.</p>
      
      <p>Temiz oda projeniz için profesyonel danışmanlık ve mühendislik hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçin.</p>
    `,
    relatedPosts: ['gmp-nedir-iyi-uretim-uygulamalari', 'iso-14644-standartlari-temiz-oda-siniflari']
  },
  'steril-alan-nedir-sterilizasyon': {
    title: 'Steril Alan Nedir? Sterilizasyon Yöntemleri ve Uygulamaları',
    excerpt: 'Steril alan tanımı, sterilizasyon teknikleri ve farmasötik sektöründe steril üretim alanları.',
    author: 'NEVAYS Sterilizasyon Ekibi',
    authorBio: 'NEVAYS sterilizasyon uzmanları, 15+ yıllık steril alan deneyimi.',
    authorImage: '/images/team/nevays-team.jpg',
    publishDate: '2024-01-08',
    readingTime: 8,
    category: 'Sterilizasyon',
    tags: ['Steril Alan', 'Sterilizasyon', 'Farmasötik', 'Aseptik'],
    image: '/images/blog/steril-alan.jpg',
    content: `
      <h2>Steril Alan Nedir?</h2>
      <p>Steril alan, mikroorganizmaların tamamen elimine edildiği ve kontaminasyon riskinin minimize edildiği özel tasarlanmış üretim alanlarıdır. Farmasötik endüstrisinde hasta güvenliği için kritik öneme sahiptir.</p>
      
      <h3>Steril Alan Özellikleri</h3>
      <ul>
        <li>Mikrobiyal kontaminasyon kontrolü</li>
        <li>Aseptik üretim koşulları</li>
        <li>Kontrollü personel erişimi</li>
        <li>Steril hava sirkülasyonu</li>
        <li>Validasyonlu temizlik prosedürleri</li>
      </ul>
      
      <h3>Sterilizasyon Yöntemleri</h3>
      
      <h4>1. Isı Sterilizasyonu</h4>
      <p>Yüksek sıcaklık ile mikroorganizmaların yok edilmesi:</p>
      <ul>
        <li>Kuru ısı sterilizasyonu (160-180°C)</li>
        <li>Nemli ısı sterilizasyonu (121-134°C)</li>
        <li>Otoklavlama</li>
      </ul>
      
      <h4>2. Kimyasal Sterilizasyon</h4>
      <p>Kimyasal ajanlar ile sterilizasyon:</p>
      <ul>
        <li>Etilen oksit (EtO)</li>
        <li>Hidrojen peroksit buharı (VHP)</li>
        <li>Formaldehit</li>
        <li>Ozon</li>
      </ul>
      
      <h4>3. Radyasyon Sterilizasyonu</h4>
      <p>İyonize radyasyon ile sterilizasyon:</p>
      <ul>
        <li>Gamma ışını</li>
        <li>Elektron ışını</li>
        <li>X-ışını</li>
      </ul>
      
      <h4>4. Filtrasyon</h4>
      <p>Fiziksel filtreleme ile sterilizasyon:</p>
      <ul>
        <li>HEPA filtreleri (0.3 μm)</li>
        <li>ULPA filtreleri (0.12 μm)</li>
        <li>Membran filtreleri</li>
      </ul>
      
      <h3>Aseptik Üretim Alanları</h3>
      <p>Steril ürün üretimi için özel tasarlanmış alanlar:</p>
      <ul>
        <li>Sınıf A laminer akış alanları</li>
        <li>Sınıf B arka plan alanları</li>
        <li>İzolatör sistemleri</li>
        <li>RABS (Restricted Access Barrier Systems)</li>
      </ul>
      
      <h3>Validasyon ve İzleme</h3>
      <p>Steril alan performansının doğrulanması:</p>
      <ul>
        <li>Mikrobiyal izleme programları</li>
        <li>Sterilizasyon validasyonu</li>
        <li>Biyolojik indikatör testleri</li>
        <li>Endotoksin testleri</li>
      </ul>
      
      <h3>NEVAYS Steril Alan Çözümleri</h3>
      <p>Steril üretim alanları için kapsamlı hizmetlerimiz:</p>
      <ul>
        <li>Aseptik alan tasarımı</li>
        <li>Sterilizasyon sistem kurulumu</li>
        <li>Validasyon ve kalifikasyon</li>
        <li>Sürekli izleme sistemleri</li>
      </ul>
    `,
    relatedPosts: ['farmasotik-temiz-oda-tasarimi-gmp', 'gmp-nedir-iyi-uretim-uygulamalari']
  },
  'modular-temiz-oda-sistemleri': {
    title: 'Modüler Temiz Oda Sistemleri: Hızlı Kurulum Çözümleri',
    excerpt: 'Modüler temiz oda panelleri ile hızlı kurulum, esneklik ve maliyet avantajları. Modern cleanroom teknolojileri.',
    author: 'NEVAYS Tasarım Ekibi',
    authorBio: 'NEVAYS tasarım uzmanları, modüler sistem teknolojilerinde 10+ yıllık deneyim.',
    authorImage: '/images/team/nevays-team.jpg',
    publishDate: '2024-01-05',
    readingTime: 7,
    category: 'Teknoloji',
    tags: ['Modüler Sistem', 'Panel', 'Kurulum', 'Cleanroom'],
    image: '/images/blog/modular-cleanroom.jpg',
    content: `
      <h2>Modüler Temiz Oda Sistemleri Nedir?</h2>
      <p>Modüler temiz oda sistemleri, önceden üretilmiş standart paneller kullanılarak hızlı ve esnek kurulum imkanı sunan modern cleanroom çözümleridir.</p>
      
      <h3>Modüler Sistemlerin Avantajları</h3>
      
      <h4>1. Hızlı Kurulum</h4>
      <p>Geleneksel inşaat yöntemlerine göre %50-70 daha hızlı kurulum süresi.</p>
      
      <h4>2. Esneklik ve Genişletebilirlik</h4>
      <p>İhtiyaç değişikliklerinde kolay genişletme, küçültme veya yeniden düzenleme imkanı.</p>
      
      <h4>3. Maliyet Etkinliği</h4>
      <p>Düşük başlangıç maliyeti ve uzun vadeli tasarruf sağlar.</p>
      
      <h4>4. Kalite Kontrolü</h4>
      <p>Fabrika ortamında üretilen panellerde yüksek kalite standardı.</p>
      
      <h3>Panel Türleri ve Özellikler</h3>
      
      <h4>Duvar Panelleri</h4>
      <ul>
        <li>Çelik sandviç paneller (50-100mm kalınlık)</li>
        <li>Alüminyum çerçeveli paneller</li>
        <li>Cam paneller (görüş pencereleri)</li>
        <li>Özel kaplama panelleri (epoksi, PVC)</li>
      </ul>
      
      <h4>Tavan Panelleri</h4>
      <ul>
        <li>HEPA/ULPA filtreli paneller</li>
        <li>LED aydınlatma panelleri</li>
        <li>Servis panelleri (elektrik, gaz)</li>
        <li>Düz tavan panelleri</li>
      </ul>
      
      <h3>Uygulama Alanları</h3>
      <p>Modüler temiz oda sistemleri şu sektörlerde yaygın kullanılır:</p>
      <ul>
        <li><strong>Farmasötik:</strong> Steril üretim, tablet üretimi</li>
        <li><strong>Elektronik:</strong> Yarı iletken, mikroçip üretimi</li>
        <li><strong>Gıda:</strong> Steril gıda üretimi, paketleme</li>
        <li><strong>Sağlık:</strong> Ameliyathaneler, laboratuvarlar</li>
        <li><strong>Araştırma:</strong> Biyoteknoloji, nanoteknoloji</li>
      </ul>
      
      <h3>Teknik Özellikler</h3>
      <p>NEVAYS modüler panellerin teknik özellikleri:</p>
      <ul>
        <li>ISO 14644 uyumlu tasarım</li>
        <li>GMP gereksinimlerine uygunluk</li>
        <li>Kolay temizlenebilir yüzeyler</li>
        <li>Antimikrobiyal kaplamalar</li>
        <li>Yangın dayanımlı malzemeler</li>
      </ul>
      
      <h3>NEVAYS Modüler Çözümleri</h3>
      <p>Müşterilerimize sunduğumuz kapsamlı hizmetler:</p>
      <ul>
        <li>3D tasarım ve simülasyon</li>
        <li>Anahtar teslim proje yönetimi</li>
        <li>Hızlı kurulum ve devreye alma</li>
        <li>Validasyon ve test hizmetleri</li>
        <li>Bakım ve destek hizmetleri</li>
      </ul>
    `,
    relatedPosts: ['temiz-oda-nedir-kapsamli-rehber', 'iso-14644-standartlari-temiz-oda-siniflari']
  },
  'gmp-nedir-iyi-uretim-uygulamalari': {
    title: 'GMP Nedir? İyi Üretim Uygulamaları Rehberi',
    excerpt: 'Good Manufacturing Practice (GMP) standartları, farmasötik sektörde uygulanması ve temiz oda gereksinimlerini kapsamlı açıklama.',
    author: 'NEVAYS Mühendislik',
    authorBio: 'NEVAYS mühendislik ekibi, farmasötik sektörde 20+ yıllık deneyim.',
    authorImage: '/images/team/nevays-team.jpg',
    publishDate: '2024-01-18',
    readingTime: 10,
    category: 'Standartlar',
    tags: ['GMP', 'İyi Üretim Uygulamaları', 'Farmasötik', 'Kalite Güvence'],
    image: '/images/hvac.webp',
    content: `
      <p><strong>GMP (Good Manufacturing Practice - İyi Üretim Uygulamaları)</strong>, farmasötik ürünlerin kaliteli, güvenli ve etkili bir şekilde üretilmesini sağlamak amacıyla geliştirilmiş uluslararası standartlar bütünüdür.</p>

      <h2>GMP'nin Tanımı ve Kapsamı</h2>
      <p>GMP, ilaç üretim süreçlerinin her aşamasında kalite güvencesini sağlayan sistematik bir yaklaşımdır. Bu standartlar:</p>
      <ul>
        <li>Üretim tesislerinin tasarımı ve yapısı</li>
        <li>Personel eğitimi ve yetkinlikleri</li>
        <li>Üretim süreçlerinin kontrolü</li>
        <li>Kalite kontrol sistemleri</li>
        <li>Dokümantasyon ve kayıt tutma</li>
      </ul>
      <p>alanlarını kapsamaktadır.</p>

      <h2>GMP'nin Temel Prensipleri</h2>
      
      <h3>1. Kalite Yönetim Sistemi</h3>
      <p>Tüm üretim süreçleri dokümante edilmeli ve sürekli iyileştirme yaklaşımı benimsenmelidir.</p>
      
      <h3>2. Personel Yetkinliği</h3>
      <p>Çalışanlar düzenli eğitimlerle güncel tutulmalı ve yetkinlikleri değerlendirilmelidir.</p>
      
      <h3>3. Tesis ve Ekipman</h3>
      <p>Üretim tesisleri ve ekipmanlar GMP gereksinimlerine uygun tasarlanmalı ve bakımları yapılmalıdır.</p>

      <h2>GMP ve Temiz Oda İlişkisi</h2>
      <p>Farmasötik üretimde GMP uyumluluğu için temiz oda sistemleri kritik öneme sahiptir:</p>
      
      <h3>Çevresel Kontrol</h3>
      <ul>
        <li>Parçacık kontaminasyonu kontrolü</li>
        <li>Mikrobiyal kontaminasyon önleme</li>
        <li>Çapraz kontaminasyon engelleme</li>
        <li>Ürün kalitesinin korunması</li>
      </ul>

      <h3>Temiz Oda Sınıflandırması</h3>
      <p>GMP gereksinimlerine göre farmasötik üretim alanları sınıflandırılır:</p>
      <ul>
        <li><strong>Sınıf A:</strong> Kritik operasyonlar (ISO 5)</li>
        <li><strong>Sınıf B:</strong> Sınıf A'yı destekleyen alanlar (ISO 5)</li>
        <li><strong>Sınıf C:</strong> Daha az kritik üretim aşamaları (ISO 7)</li>
        <li><strong>Sınıf D:</strong> Genel üretim alanları (ISO 8)</li>
      </ul>

      <h2>GMP Validasyon Süreçleri</h2>
      
      <h3>Tasarım Kalifikasyonu (DQ)</h3>
      <p>Tesis ve sistemlerin GMP gereksinimlerine uygun tasarlandığının doğrulanması.</p>
      
      <h3>Kurulum Kalifikasyonu (IQ)</h3>
      <p>Ekipman ve sistemlerin spesifikasyonlara uygun kurulduğunun teyidi.</p>
      
      <h3>Operasyonel Kalifikasyon (OQ)</h3>
      <p>Sistemlerin belirlenen parametreler dahilinde çalıştığının kanıtlanması.</p>
      
      <h3>Performans Kalifikasyonu (PQ)</h3>
      <p>Sistemlerin sürekli ve tutarlı performans gösterdiğinin doğrulanması.</p>

      <h2>GMP Denetim ve Uyumluluk</h2>
      <p>GMP uyumluluğu düzenli denetimlerle kontrol edilir:</p>
      <ul>
        <li>İç denetimler (Self-inspection)</li>
        <li>Tedarikçi denetimleri</li>
        <li>Resmi otorite denetimleri</li>
        <li>Müşteri denetimleri</li>
      </ul>

      <h2>Türkiye'de GMP Mevzuatı</h2>
      <p>Türkiye'de GMP uygulamaları şu mevzuatlarla düzenlenir:</p>
      <ul>
        <li>İyi Üretim Uygulamaları Yönetmeliği</li>
        <li>Beşeri Tıbbi Ürünler Yönetmeliği</li>
        <li>Veteriner Hekimliği Tıbbi Ürünler Yönetmeliği</li>
        <li>Kozmetik Yönetmeliği</li>
      </ul>

      <h2>GMP Uyumlu Temiz Oda Tasarımı</h2>
      <p>NEVAYS olarak GMP uyumlu temiz oda projelerinde:</p>
      <ul>
        <li>Risk bazlı tasarım yaklaşımı</li>
        <li>Validasyon destekli mühendislik</li>
        <li>Sürekli izleme sistemleri</li>
        <li>Dokümantasyon desteği</li>
      </ul>
      <p>hizmetlerini sunuyoruz.</p>

      <h2>Sonuç</h2>
      <p>GMP standartları, farmasötik sektörde kalite güvencesinin temel taşıdır. Temiz oda sistemleri, bu standartların uygulanmasında kritik rol oynar.</p>
      
      <p>GMP uyumlu temiz oda projeniz için uzman mühendislik desteği almak üzere NEVAYS ile iletişime geçin.</p>
    `,
    relatedPosts: ['temiz-oda-nedir-kapsamli-rehber', 'farmasotik-temiz-oda-tasarimi-gmp']
  },
  'iso-14644-standartlari-temiz-oda-siniflari': {
    title: 'ISO 14644 Standartları ve Temiz Oda Sınıfları',
    excerpt: 'ISO 14644 standardının detayları, temiz oda sınıflandırması ve test prosedürleri hakkında uzman analizi.',
    author: 'NEVAYS Mühendislik',
    authorBio: 'NEVAYS mühendislik ekibi, ISO standartları konusunda uzman.',
    authorImage: '/images/team/nevays-team.jpg',
    publishDate: '2024-01-15',
    readingTime: 8,
    category: 'Standartlar',
    tags: ['ISO 14644', 'Temiz Oda Sınıfları', 'Standartlar', 'Test Prosedürleri'],
    image: '/images/temizodamalzeme.webp',
    content: `
      <p><strong>ISO 14644</strong>, temiz odaların sınıflandırılması, tasarımı, yapımı ve işletilmesi için uluslararası standartları belirleyen kapsamlı bir standart serisidir.</p>

      <h2>ISO 14644 Standart Serisi</h2>
      <p>ISO 14644 standart ailesi şu bölümlerden oluşur:</p>
      <ul>
        <li><strong>ISO 14644-1:</strong> Hava temizliği sınıflandırması</li>
        <li><strong>ISO 14644-2:</strong> İzleme ve test gereksinimleri</li>
        <li><strong>ISO 14644-3:</strong> Test metodları</li>
        <li><strong>ISO 14644-4:</strong> Tasarım, yapım ve devreye alma</li>
        <li><strong>ISO 14644-7:</strong> Ayrılabilir temiz hava cihazları</li>
        <li><strong>ISO 14644-8:</strong> Moleküler kontaminasyon</li>
      </ul>

      <h2>Temiz Oda Sınıflandırması (ISO 14644-1)</h2>
      <p>Temiz odalar, havadaki parçacık konsantrasyonuna göre ISO Sınıf 1'den ISO Sınıf 9'a kadar sınıflandırılır:</p>
      
      <h3>ISO Sınıf Tablosu</h3>
      <table>
        <tr>
          <th>ISO Sınıfı</th>
          <th>≥0.1 μm parçacık/m³</th>
          <th>≥0.5 μm parçacık/m³</th>
          <th>Tipik Uygulama</th>
        </tr>
        <tr>
          <td>ISO 1</td>
          <td>10</td>
          <td>2</td>
          <td>Yarıiletken üretimi</td>
        </tr>
        <tr>
          <td>ISO 3</td>
          <td>1,000</td>
          <td>35</td>
          <td>Elektronik montaj</td>
        </tr>
        <tr>
          <td>ISO 5</td>
          <td>100,000</td>
          <td>3,520</td>
          <td>Farmasötik üretim</td>
        </tr>
        <tr>
          <td>ISO 7</td>
          <td>-</td>
          <td>352,000</td>
          <td>Genel üretim alanları</td>
        </tr>
        <tr>
          <td>ISO 8</td>
          <td>-</td>
          <td>3,520,000</td>
          <td>Koridor ve giyinme odaları</td>
        </tr>
      </table>

      <h2>Test ve Ölçüm Prosedürleri</h2>
      
      <h3>Parçacık Sayım Testi</h3>
      <p>Temiz oda sınıflandırması için temel test:</p>
      <ul>
        <li>Optik parçacık sayıcı kullanımı</li>
        <li>Minimum örnekleme noktası sayısı</li>
        <li>Örnekleme süresi ve hacmi</li>
        <li>İstatistiksel değerlendirme</li>
      </ul>

      <h3>Hava Akış Hızı Testi</h3>
      <p>Laminer akış alanlarında hava hızı ölçümü:</p>
      <ul>
        <li>0.36-0.54 m/s hız aralığı (ISO 5)</li>
        <li>Düzgün hız dağılımı kontrolü</li>
        <li>Türbülans seviyesi ölçümü</li>
      </ul>

      <h3>Hava Değişim Oranı</h3>
      <p>Türbülan akış alanlarında:</p>
      <ul>
        <li>ISO 7: Minimum 20 hava değişimi/saat</li>
        <li>ISO 8: Minimum 10 hava değişimi/saat</li>
        <li>Etkili hava değişim hesaplaması</li>
      </ul>

      <h2>Basınç Farkı Gereksinimleri</h2>
      <p>ISO 14644-4'e göre basınç farkı kriterleri:</p>
      <ul>
        <li>Minimum 5 Pa fark (aynı temizlik seviyesi)</li>
        <li>Minimum 10 Pa fark (farklı temizlik seviyeleri)</li>
        <li>Sürekli izleme gerekliliği</li>
      </ul>

      <h2>HEPA/ULPA Filtre Testleri</h2>
      
      <h3>Bütünlük Testi</h3>
      <p>Filtre performansının doğrulanması:</p>
      <ul>
        <li>DOP (Dioctyl Phthalate) test metodu</li>
        <li>PAO (Poly Alpha Olefin) test metodu</li>
        <li>Sızıntı tespiti ve onarımı</li>
      </ul>

      <h3>Filtre Verimliliği</h3>
      <ul>
        <li>HEPA: %99.97 (0.3 μm parçacıklar için)</li>
        <li>ULPA: %99.999 (0.12 μm parçacıklar için)</li>
      </ul>

      <h2>Mikrobiyal Kontaminasyon Kontrolü</h2>
      <p>ISO 14644-1 parçacık kontrolünün yanında mikrobiyal kontrol:</p>
      <ul>
        <li>Aktif hava örnekleme</li>
        <li>Pasif hava örnekleme (settle plate)</li>
        <li>Yüzey örnekleme</li>
        <li>Personel izleme</li>
      </ul>

      <h2>Validasyon ve Yeniden Sınıflandırma</h2>
      
      <h3>Periyodik Testler</h3>
      <p>ISO 14644-2'ye göre test sıklığı:</p>
      <ul>
        <li>Parçacık sayımı: 6-12 ay</li>
        <li>Hava akış testi: 12 ay</li>
        <li>Basınç farkı: Sürekli izleme</li>
        <li>HEPA filtre testi: 24 ay</li>
      </ul>

      <h2>Dokümantasyon Gereksinimleri</h2>
      <p>ISO 14644 uyumluluğu için gerekli dokümantasyon:</p>
      <ul>
        <li>Tasarım spesifikasyonları</li>
        <li>Test protokolleri ve raporları</li>
        <li>Kalibrasyon kayıtları</li>
        <li>Bakım ve işletme prosedürleri</li>
      </ul>

      <h2>NEVAYS ISO 14644 Hizmetleri</h2>
      <p>NEVAYS olarak ISO 14644 standartlarına uygun:</p>
      <ul>
        <li>Temiz oda tasarım ve mühendislik</li>
        <li>Kurulum ve devreye alma</li>
        <li>Validasyon ve test hizmetleri</li>
        <li>Periyodik kalifikasyon</li>
      </ul>
      <p>hizmetlerini sunuyoruz.</p>

      <h2>Sonuç</h2>
      <p>ISO 14644 standartları, temiz oda teknolojilerinin uluslararası referansıdır. Bu standartlara uygun tasarım ve işletme, ürün kalitesi ve güvenilirliğin garantisidir.</p>
      
      <p>ISO 14644 uyumlu temiz oda projeniz için uzman danışmanlık almak üzere NEVAYS ile iletişime geçin.</p>
    `,
    relatedPosts: ['temiz-oda-nedir-kapsamli-rehber', 'temiz-oda-validasyonu-test-prosedurleri']
  },
  'temiz-oda-validasyonu-test-prosedurleri': {
    title: 'Temiz Oda Validasyonu ve Test Prosedürleri',
    excerpt: 'Temiz oda sistemlerinin validasyonu, test metodları ve periyodik kontrol prosedürleri hakkında uzman rehberi.',
    author: 'NEVAYS Validasyon Ekibi',
    authorBio: 'NEVAYS validasyon uzmanları, 15+ yıllık test ve validasyon deneyimi.',
    authorImage: '/images/team/nevays-team.jpg',
    publishDate: '2024-01-12',
    readingTime: 9,
    category: 'Validasyon',
    tags: ['Validasyon', 'Test', 'Kalifikasyon', 'IQ/OQ/PQ'],
    image: '/images/validasyon.webp',
    content: `
      <p><strong>Temiz oda validasyonu</strong>, sistemlerin tasarım gereksinimlerini karşıladığını ve sürekli olarak belirlenen parametreler dahilinde çalıştığını kanıtlayan sistematik süreçtir.</p>

      <h2>Validasyon Aşamaları</h2>
      
      <h3>1. Tasarım Kalifikasyonu (DQ)</h3>
      <p>Temiz oda sisteminin tasarım spesifikasyonlarının gereksinimleri karşıladığının doğrulanması:</p>
      <ul>
        <li>Kullanıcı gereksinim spesifikasyonu (URS) kontrolü</li>
        <li>Tasarım dokümantasyonu incelemesi</li>
        <li>Risk analizi ve FMEA çalışmaları</li>
        <li>Tedarikçi kalifikasyonu</li>
      </ul>

      <h3>2. Kurulum Kalifikasyonu (IQ)</h3>
      <p>Ekipman ve sistemlerin spesifikasyonlara uygun kurulduğunun teyidi:</p>
      <ul>
        <li>Ekipman listesi ve seri numarası kontrolü</li>
        <li>Kurulum dokümantasyonu incelemesi</li>
        <li>Kalibrasyonlu enstrüman kontrolü</li>
        <li>Güvenlik sistemleri testi</li>
      </ul>

      <h3>3. Operasyonel Kalifikasyon (OQ)</h3>
      <p>Sistemlerin belirlenen parametreler dahilinde çalıştığının kanıtlanması:</p>
      <ul>
        <li>Hava akış hızı ve yönü testleri</li>
        <li>Basınç farkı testleri</li>
        <li>HEPA filtre bütünlük testleri</li>
        <li>Sıcaklık ve nem dağılımı testleri</li>
      </ul>

      <h3>4. Performans Kalifikasyonu (PQ)</h3>
      <p>Sistemlerin sürekli ve tutarlı performans gösterdiğinin doğrulanması:</p>
      <ul>
        <li>Parçacık sayım testleri</li>
        <li>Mikrobiyal izleme</li>
        <li>Kurtarma testleri</li>
        <li>Sürekli izleme sistemi testleri</li>
      </ul>

      <h2>Test Metodları ve Standartlar</h2>
      
      <h3>ISO 14644 Test Prosedürleri</h3>
      <p>Uluslararası standartlara uygun test metodları:</p>
      <ul>
        <li>Parçacık konsantrasyonu ölçümü</li>
        <li>Hava akış hızı ölçümü</li>
        <li>Basınç farkı ölçümü</li>
        <li>Hava değişim oranı hesaplaması</li>
      </ul>

      <h3>Mikrobiyal Validasyon</h3>
      <p>Biyolojik kontaminasyon kontrolü:</p>
      <ul>
        <li>Aktif hava örnekleme</li>
        <li>Pasif hava örnekleme (settle plate)</li>
        <li>Yüzey örnekleme</li>
        <li>Personel izleme</li>
      </ul>

      <h2>Periyodik Yeniden Kalifikasyon</h2>
      <p>Temiz oda sistemlerinin sürekli performansının garanti edilmesi için:</p>
      <ul>
        <li>6 aylık parçacık sayım testleri</li>
        <li>Yıllık kapsamlı performans testleri</li>
        <li>Filtre değişimi sonrası testler</li>
        <li>Sistem modifikasyonu sonrası re-validasyon</li>
      </ul>

      <h2>Dokümantasyon ve Raporlama</h2>
      <p>Validasyon sürecinin dokümantasyonu:</p>
      <ul>
        <li>Validasyon master planı (VMP)</li>
        <li>Test protokolleri</li>
        <li>Test raporları</li>
        <li>Sapma raporları ve CAPA</li>
      </ul>

      <h2>NEVAYS Validasyon Hizmetleri</h2>
      <p>Uzman ekibimizle sunduğumuz validasyon hizmetleri:</p>
      <ul>
        <li>Validasyon planlaması ve yönetimi</li>
        <li>IQ/OQ/PQ protokol hazırlama ve uygulama</li>
        <li>Periyodik re-kalifikasyon</li>
        <li>Düzenleyici otorite denetim desteği</li>
      </ul>

      <h2>Sonuç</h2>
      <p>Temiz oda validasyonu, sistem güvenilirliğinin ve ürün kalitesinin garantisidir. Doğru planlanan ve uygulanan validasyon süreçleri, uzun vadeli başarının anahtarıdır.</p>
      
      <p>Temiz oda validasyon projeniz için uzman desteği almak üzere NEVAYS ile iletişime geçin.</p>
    `,
    relatedPosts: ['iso-14644-standartlari-temiz-oda-siniflari', 'gmp-nedir-iyi-uretim-uygulamalari']
  },
  'farmasotik-temiz-oda-tasarimi-gmp': {
    title: 'Farmasötik Temiz Oda Tasarımı: GMP Gereksinimleri',
    excerpt: 'Farmasötik sektöründe GMP uyumlu temiz oda tasarımı, EU Annex 1 gereksinimleri ve uygulama örnekleri.',
    author: 'NEVAYS Farmasötik Ekibi',
    authorBio: 'NEVAYS farmasötik uzmanları, GMP projelerinde 20+ yıllık deneyim.',
    authorImage: '/images/team/nevays-team.jpg',
    publishDate: '2024-01-10',
    readingTime: 11,
    category: 'Farmasötik',
    tags: ['Farmasötik', 'GMP', 'EU Annex 1', 'Steril Üretim'],
    image: '/images/farmasotik.webp',
    content: `
      <p><strong>Farmasötik temiz oda tasarımı</strong>, ilaç üretiminde hasta güvenliğini sağlamak amacıyla en yüksek kalite standartlarına uygun olarak gerçekleştirilmelidir.</p>

      <h2>EU GMP Annex 1 Gereksinimleri</h2>
      <p>Avrupa İlaç Ajansı'nın (EMA) steril ilaç üretimi için belirlediği temel gereksinimler:</p>
      
      <h3>Temiz Oda Sınıflandırması</h3>
      <ul>
        <li><strong>Sınıf A:</strong> Kritik operasyonlar (steril dolum, kapatma)</li>
        <li><strong>Sınıf B:</strong> Sınıf A'yı destekleyen arka plan alanları</li>
        <li><strong>Sınıf C:</strong> Daha az kritik üretim aşamaları</li>
        <li><strong>Sınıf D:</strong> Genel üretim ve hazırlık alanları</li>
      </ul>

      <h3>Hava Kalitesi Parametreleri</h3>
      <p>Farmasötik üretimde kritik hava kalitesi gereksinimleri:</p>
      <ul>
        <li>Parçacık konsantrasyonu limitleri</li>
        <li>Mikrobiyal kontaminasyon limitleri</li>
        <li>Hava değişim oranları</li>
        <li>Basınç kademesi</li>
      </ul>

      <h2>Steril Üretim Alanları Tasarımı</h2>
      
      <h3>Laminer Akış Sistemleri</h3>
      <p>Sınıf A alanlarında kullanılan laminer akış özellikleri:</p>
      <ul>
        <li>0.36-0.54 m/s hava hızı</li>
        <li>Tek yönlü hava akışı</li>
        <li>HEPA/ULPA filtre kullanımı</li>
        <li>Türbülans minimizasyonu</li>
      </ul>

      <h3>İzolasyon Teknolojileri</h3>
      <p>Yüksek riskli ürünler için gelişmiş koruma:</p>
      <ul>
        <li>RABS (Restricted Access Barrier Systems)</li>
        <li>İzolatör sistemleri</li>
        <li>Negatif basınç odaları</li>
        <li>Containment sistemleri</li>
      </ul>

      <h2>Personel ve Malzeme Akışı</h2>
      
      <h3>Giriş Sistemleri</h3>
      <p>Kontaminasyon riskini minimize eden giriş tasarımı:</p>
      <ul>
        <li>Kademeli giyinme odaları</li>
        <li>Hava duşları</li>
        <li>Interlock kapı sistemleri</li>
        <li>Basınç farkı kontrolü</li>
      </ul>

      <h3>Malzeme Transfer Sistemleri</h3>
      <p>Steril malzeme transferi için özel sistemler:</p>
      <ul>
        <li>Pass-through sistemleri</li>
        <li>Dekontaminasyon odaları</li>
        <li>VHP (Vaporized Hydrogen Peroxide) sistemleri</li>
        <li>Gamma ışını sterilizasyonu</li>
      </ul>

      <h2>Çevresel İzleme Sistemleri</h2>
      
      <h3>Sürekli İzleme</h3>
      <p>Kritik parametrelerin 7/24 izlenmesi:</p>
      <ul>
        <li>Parçacık sayıcıları</li>
        <li>Basınç farkı sensörleri</li>
        <li>Sıcaklık ve nem sensörleri</li>
        <li>Hava akış monitörleri</li>
      </ul>

      <h3>Mikrobiyal İzleme</h3>
      <p>Biyolojik kontaminasyon kontrolü:</p>
      <ul>
        <li>Aktif hava örnekleme</li>
        <li>Yüzey örnekleme</li>
        <li>Personel izleme</li>
        <li>Su sistemi izleme</li>
      </ul>

      <h2>Validasyon ve Kalifikasyon</h2>
      
      <h3>Commissioning ve Qualification</h3>
      <p>Farmasötik sistemlerde validasyon aşamaları:</p>
      <ul>
        <li>DQ (Design Qualification)</li>
        <li>IQ (Installation Qualification)</li>
        <li>OQ (Operational Qualification)</li>
        <li>PQ (Performance Qualification)</li>
      </ul>

      <h3>Sürekli Doğrulama</h3>
      <p>Sistem performansının sürekli kontrolü:</p>
      <ul>
        <li>Trend analizi</li>
        <li>Periyodik re-kalifikasyon</li>
        <li>Değişiklik kontrolü</li>
        <li>CAPA (Corrective and Preventive Actions)</li>
      </ul>

      <h2>Enerji Verimliliği ve Sürdürülebilirlik</h2>
      <p>Modern farmasötik tesislerde enerji optimizasyonu:</p>
      <ul>
        <li>Değişken hava hacmi (VAV) sistemleri</li>
        <li>Isı geri kazanım sistemleri</li>
        <li>LED aydınlatma</li>
        <li>Akıllı kontrol sistemleri</li>
      </ul>

      <h2>NEVAYS Farmasötik Çözümleri</h2>
      <p>Farmasötik sektöründe sunduğumuz kapsamlı hizmetler:</p>
      <ul>
        <li>GMP uyumlu tasarım ve mühendislik</li>
        <li>Anahtar teslim proje yönetimi</li>
        <li>Validasyon ve dokümantasyon</li>
        <li>Düzenleyici otorite denetim desteği</li>
      </ul>

      <h2>Sonuç</h2>
      <p>Farmasötik temiz oda tasarımı, hasta güvenliği ve ürün kalitesi açısından kritik öneme sahiptir. GMP gereksinimlerine tam uyumluluk, başarılı projelerin temel şartıdır.</p>
      
      <p>Farmasötik temiz oda projeniz için uzman danışmanlık almak üzere NEVAYS ile iletişime geçin.</p>
    `,
    relatedPosts: ['gmp-nedir-iyi-uretim-uygulamalari', 'temiz-oda-validasyonu-test-prosedurleri']
  }
};

// Generate static params for all locale and slug combinations
export async function generateStaticParams() {
  const locales = ['tr', 'en'];
  const blogSlugs = Object.keys(blogData);
  
  return locales.flatMap((locale) =>
    blogSlugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const post = blogData[slug as keyof typeof blogData];
  
  if (!post) {
    return { title: 'Blog Yazısı Bulunamadı' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params: { locale, slug } }: Props) {
  const post = blogData[slug as keyof typeof blogData];

  if (!post) {
    notFound();
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-end">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="mb-8">
              <Button variant="ghostButton" size="sm" asChild>
                <Link href={`/${locale}/blog`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Blog\'a Dön
                </Link>
              </Button>
            </div>

            <div className="max-w-4xl text-white">
              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="px-3 py-1 bg-brand-primary rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(post.publishDate).toLocaleDateString('tr-TR')}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readingTime} dk okuma
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-heading mb-4 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-lg text-white/90 max-w-3xl leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Author Info */}
          <div className="flex items-center mb-8 p-6 bg-gray-50 rounded-lg">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
              <Image
                src={post.authorImage}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 mr-2 text-gray-500" />
                <span className="font-semibold text-gray-900">{post.author}</span>
              </div>
              <p className="text-gray-600 text-sm">{post.authorBio}</p>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Paylaş
            </Button>
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center mb-4">
              <Tag className="h-5 w-5 text-gray-500 mr-2" />
              <span className="font-medium text-gray-700">Etiketler:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm rounded-full hover:bg-brand-primary hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Related Posts */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-display font-heading text-gray-900 mb-8 text-center">
            İlgili Makaleler
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {post.relatedPosts.map((relatedSlug: string, index: number) => (
              <Link
                key={index}
                href={`/${locale}/blog/${relatedSlug}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/images/blog/${relatedSlug}.jpg`}
                    alt="Related Post"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-display font-heading text-lg text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                    İlgili Makale Başlığı
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Makale açıklaması ve özet bilgiler...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTABanner
        title="Uzman Görüşlerimizi Kaçırmayın"
        description="Blog yazılarımızı takip edin ve sektördeki en son gelişmelerden haberdar olun."
        buttonText="Blog\'a Abone Ol"
        buttonAction="contact"
      />
    </MainLayout>
  );
}