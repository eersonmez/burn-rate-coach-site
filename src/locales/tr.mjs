export default {
  review: {
    state: "draft",
    fluentReviewRequired: true,
    reviewedBy: null,
    reviewedAt: null
  },
  common: {
    skipToContent: "İçeriğe geç",
    home: "Ana sayfa",
    features: "Özellikler",
    privacy: "Gizlilik",
    support: "Destek",
    issues: "Sorunlar",
    mainNavigation: "Ana gezinme",
    footerNavigation: "Alt bilgi gezinmesi",
    languageNavigation: "Dil",
    brandHome: "Burn Rate Coach ana sayfası",
    independentShort: "Burn Rate Coach bağımsızdır ve OpenAI tarafından desteklenmez.",
    independentLong: "Burn Rate Coach bağımsız bir uzantıdır; OpenAI ile bağlantılı değildir ve OpenAI tarafından desteklenmez."
  },
  home: {
    metaDescription: "Burn Rate Coach, Codex kota sınırlarını telemetri olmadan, yerel olarak net kullanım temposu önerilerine ve sıfırlanma tahminlerine dönüştürür.",
    title: "Burn Rate Coach — Codex kotanı dengeli kullan",
    hero: {
      eyebrow: "Ücretsiz Chrome uzantısı · Yerel kullanım için tasarlandı",
      headlinePrimary: "Ne zaman yavaşlayacağını bil.",
      headlineSecondary: "Ne zaman daha fazlasını kullanabileceğini de.",
      lede: "Burn Rate Coach, Codex kota yüzdelerini net bir tempo kararına, ideal-an göstergesine ve bir sonraki sıfırlanma tahminine dönüştürür.",
      storeCta: "Chrome Web Mağazası’ndan edinin",
      examplesCta: "Örnek verileri gör",
      privacyHighlightsLabel: "Gizlilik özellikleri",
      noAccount: "Burn Rate Coach hesabı yok",
      noTelemetry: "Telemetri yok",
      storagePermission: "Yalnızca depolama izni",
      promoAlt: "Burn Rate Coach göstergesi ve kullanım temposu eğrisi çizimi"
    },
    features: {
      eyebrow: "Bir bakışta yararlı",
      heading: "Bir yüzde, karara dönüşür.",
      intro: "Başka bir panel açmadan bugünkü konumunun ve son kullanım hızının kalan süreye nasıl uyduğunu gör.",
      items: [
        { heading: "Net yönlendirme", body: "Yavaşla, Tempoya uygun, Kullanım payı var veya Bekle—mevcut konuma ve gidişata göre. Daha uzun dönemli sınırlar aynı havuzdaki kısa dönemleri korur." },
        { heading: "Dürüst tahminler", body: "Tahminler, Analytics açıkken gözlenen dilden bağımsız kota etkinliğini ve isteğe bağlı yerel gözlemleri kullanır; düşük güveni yaklaşık işaretiyle belirtir ve negatif kota göstermek yerine sıfırda biter." },
        { heading: "Senin hedefin", body: "Dönem sonu rezervini ve toleransını seç veya yerel geçmişi duraklat. Açılır pencere ayarları hemen kaydedilir ve açık ya da koyu modda çalışır." }
      ]
    },
    screenshots: {
      eyebrow: "Uzantı tarafından oluşturuldu",
      heading: "Gerçek arayüz. Sentetik örnek veri.",
      intro: "Bu görseller, üretim uzantısı kodunu özel ve yapısal olarak gerçeğe uygun bir test düzeneğinde çalıştırır. Burada hiçbir hesap verisi bulunmaz.",
      items: [
        { alt: "Dört sentetik Codex kota kartı ve tempo yönlendirmesi içeren koyu tema görünümü", caption: "Koyu görünüm · dönemler arası koruma" },
        { alt: "Dört sentetik Codex kota kartı ve tempo yönlendirmesi içeren açık tema görünümü", caption: "Açık görünüm · okunabilir durum kontrastı" },
        { alt: "Sıfırlanmadan önce sıfıra inen tahmini gösteren sentetik durum", caption: "Erken sıfır tahmini" },
        { alt: "Haftalık kotanın kısa dönem önerisini sınırladığı dar düzen", caption: "Dar düzen · haftalık denetleyici" }
      ]
    },
    private: {
      eyebrow: "Gizlilik odaklı tasarım",
      heading: "Kota verilerin Chrome’da kalır.",
      body: [
        "Codex Analytics açıkken Burn Rate Coach, sayfa okuduğunda sayfanın başarıyla çözümlediği kota sonucunu pasif olarak gözlemler. Yalnızca koçluk için gereken kararlı ölçer ve dönem kimliklerine, kullanılan yüzdeye, dönem süresine ve sıfırlanma zamanına erişir. Gözlem zamanını yerel olarak üretir ve sonuçları yerel kartlarla yalnızca eşleşen sayısal ilerleme ve sıfırlanma meta verileri üzerinden ilişkilendirir; çevrilmiş etiketleri veya kart sırasını asla kullanmaz. Ayarlar ve isteğe bağlı anlık görüntüler <code>chrome.storage.local</code> içinde kalır.",
        "Ek bir ağ isteği başlatmaz; yanıtı klonlamaz veya kendi başına çözümlemez, çerezleri ya da yetkilendirme üstbilgilerini incelemez, kota verisi göndermez ve hesap, e-posta, plan, kredi ya da harcama denetimi alanlarına erişmez. Arka uç, telemetri, reklam, uzaktan kod veya Burn Rate Coach hesap sistemi yoktur."
      ],
      policyLink: "Gizlilik politikasını oku"
    },
    limitations: {
      eyebrow: "Sınırları bil",
      heading: "Bir koçtur, garanti değil.",
      items: [
        "Geçmiş yalnızca Analytics sayfası açıkken gözlenir.",
        "Yüzde puanları görev, token, mesaj veya dakika değildir.",
        "Tahminler daha yoğun ya da hafif kullanım dönemlerinden sonra değişebilir.",
        "Kota toplama Codex arayüz dilinden bağımsızdır; koç arayüzü İngilizce, Türkçe, Hintçe, İspanyolca ve Arapçayı destekler."
      ]
    },
    closing: {
      heading: "Her sıfırlanmayı değerlendir.",
      body: "Burn Rate Coach, Chrome Web Mağazası’nda ücretsizdir.",
      cta: "Chrome’a ekle"
    }
  },
  privacy: {
    metaDescription: "Burn Rate Coach gizlilik politikası özeti.",
    title: "Gizlilik — Burn Rate Coach",
    effectiveDate: "Yürürlük tarihi: 16 Temmuz 2026",
    heading: "Gizlilik politikası özeti",
    lede: "Burn Rate Coach, Codex Analytics kullanım sayfasına tempo yönlendirmesi ekleyen bağımsız bir Chrome uzantısıdır. OpenAI ile bağlantılı değildir ve OpenAI tarafından desteklenmez.",
    canonicalNotice: {
      heading: "Taslak çeviri",
      body: "Bu özetin akıcı bir insan incelemesine ihtiyacı vardır. Bağlayıcı metin İngilizce politikadır:",
      link: "İngilizce gizlilik politikası"
    },
    sections: [
      {
        heading: "İşlenen bilgiler",
        paragraphs: [
          "Codex Analytics açıkken paketlenmiş bir sayfa köprüsü, sayfa çözümlediğinde sayfanın kendi başarılı kota sonucunu pasif olarak gözlemler. Yalnızca koçluk için gereken kararlı hız sınırı ölçer ve dönem kimliklerine, kullanılan yüzdeye, kota dönemi süresine ve sıfırlanma zamanına doğrudan erişir. İzole uzantı, sonuçları yerel kartlarla yalnızca eşleşen sayısal ilerleme ve sıfırlanma meta verileri üzerinden ilişkilendirir; çevrilmiş etiketleri veya kart sırasını asla kullanmaz. Uzantı gözlem zaman damgasını yanıttan okumak yerine yerel olarak üretir. İsteği başlatmaz, yanıtı klonlamaz veya kendi başına çözümlemez; üstbilgileri, çerezleri, yetkilendirme belirteçlerini ya da diğer kimlik bilgilerini incelemez.",
          "Sayfanın sonucu e-posta, hesap ve kullanıcı kimlikleri ile plan, kredi ve harcama denetimi alanlarını da içerebilir. Burn Rate Coach bu ilgisiz alanlara erişmez veya bunları sıralamaz; alanları hiçbir zaman köprüden geçirmez, günlüğe kaydetmez, saklamaz ya da göndermez. İstemleri, konuşmaları, kaynak kodunu, parolaları, ödeme kimlik bilgilerini veya API anahtarlarını da okumaz ya da saklamaz.",
          "Burn Rate Coach seçtiğiniz ayarları saklar. Yerel geçmiş etkinse zaman damgalı kota yüzdeleri ve sıfırlanma zamanları Chrome’un yerel uzantı deposunda tutulur. 14 günden eski kayıtlar Analytics geçmişi bir sonraki işlediğinde budanır ve her ölçer 10.082 örnekle sınırlandırılır."
        ]
      },
      {
        heading: "Bilgilerin kullanımı",
        paragraphs: [
          "İzin verilen kota bilgileri yalnızca mevcut tempo konumunu, önerilen eylemi, yerel gidişatı, sıfırlanma anında kalacağı tahmin edilen kotayı ve en son etkin ya da tanınmayan uyumluluk durumunu hesaplamak ve göstermek için kullanılır."
        ]
      },
      {
        heading: "Depolama ve aktarım",
        paragraphs: [
          "Ayarlar, uyumluluk durumu ve kota geçmişi cihazınızdaki <code>chrome.storage.local</code> içinde kalır. Burn Rate Coach’un arka ucu yoktur; uzantı verilerini geliştiriciye veya üçüncü taraflara göndermez, analiz ya da reklam SDK’ları kullanmaz ve kullanıcı verisi satmaz.",
          "Harici bir destek veya gizlilik bağlantısını seçerseniz Chrome ilgili herkese açık siteyi açar. Burn Rate Coach bağlantıya izleme parametresi eklemez."
        ]
      },
      {
        heading: "Paylaşım",
        paragraphs: [
          "Burn Rate Coach uzantı verilerini üçüncü taraflarla paylaşmaz veya aktarmaz. Verileri reklam, profil oluşturma, kredi değerliliği veya kota temposuyla ilgisiz amaçlar için kullanmaz."
        ]
      },
      {
        heading: "Denetimleriniz",
        paragraphs: [
          "Chrome Web Mağazası sayfası, yerel kota verisi kullanımını kurulumdan önce açıklar; açılır pencere bunu sade bir dille tekrarlar. <strong>Koçu göster</strong> seçeneğini kapatmak yönlendirmeyi kaldırır ancak sayfa gözlemini ya da uyumluluk denetimlerini durdurmaz. <strong>Yerel tempo geçmişi</strong> kapatıldığında kayıtlı örneklerin toplanması ve kullanımı durur. <strong>Geçmişi temizle</strong> mevcut ve eski kota anlık görüntülerini siler. Uzantıyı kaldırmak yerel uzantı verilerini Chrome üzerinden siler."
        ]
      },
      {
        heading: "Güvenlik ve politika uyumu",
        paragraphs: [
          "Çalıştırılabilir kodun tamamı uzantıyla paketlenir. Sayfa köprüsü izole uzantı bağlamına yalnızca izin verilen kota izdüşümünü gönderir; ham yanıtı iletmez. Burn Rate Coach bilgileri yalnızca açıklanan tek amacı için kullanır ve Chrome Web Mağazası Kullanıcı Verileri Politikası’nın Sınırlı Kullanım koşullarına uyar."
        ]
      },
      {
        heading: "Değişiklikler",
        paragraphs: [
          "Veri işleme uygulamalarındaki önemli değişiklikler bu politikaya, Chrome Web Mağazası gizlilik açıklamalarına ve gerektiğinde değişiklik başlamadan önce ürün içi bir bildirime yansıtılır."
        ]
      }
    ],
    contact: {
      heading: "İletişim",
      privacyLabel: "Gizlilik soruları",
      supportLabel: "Destek bildirimleri",
      issueTracker: "herkese açık sorun takipçisi"
    }
  },
  support: {
    metaDescription: "Burn Rate Coach yardım ve destek sayfası.",
    title: "Destek — Burn Rate Coach",
    eyebrow: "Yardım ve uyumluluk",
    heading: "Destek",
    lede: "Çoğu sorun tam Codex Analytics kullanım yolu açılıp sayfa bir kez yenilenerek giderilebilir. Sayfa veya kota yanıtı değiştiyse açılır pencere en son uyumluluk durumunu bildirir.",
    openIssue: "Destek bildirimi aç",
    quickChecks: {
      heading: "Hızlı denetimler",
      items: [
        "<code>https://chatgpt.com/codex/cloud/settings/analytics</code> adresini açın ve Kullanım görünümünü seçin.",
        "Chrome sürümünün 111 veya daha yeni olduğunu ve Burn Rate Coach’un <code>chrome://extensions</code> sayfasında etkin olduğunu doğrulayın.",
        "Analytics’i yenileyin. Uzantı yalnızca bu tam kullanım yolunda çalışır ve yalnızca sayfa çözümlediğinde sayfanın kendi başarılı kota sonucunu gözlemler.",
        "Uzantı açılır penceresini açıp Codex uyumluluğunu kontrol edin.",
        "Bir kart yerel görünümde kalırsa sayfanın yüklenmesini bekleyip bir kez yenileyin. Burn Rate Coach, 900 ms içinde başarısız olan bir iyileştirme denemesinden sonra kartları bilinçli olarak yerel görünüme döndürür."
      ]
    },
    include: {
      heading: "Bildirime eklenecekler",
      items: [
        "Chrome ve uzantı sürümleri;",
        "Codex arayüz diliniz;",
        "Analytics’e doğrudan mı yoksa Codex gezinmesi üzerinden mi girdiğiniz;",
        "açık veya koyu tema, görünüm alanı genişliği ve tarayıcı yakınlaştırması;",
        "açılır penceredeki uyumluluk iletisi;",
        "yenilemenin sonucu değiştirip değiştirmediği."
      ]
    },
    accountNotice: {
      heading: "Hesabınızı koruyun.",
      body: "HAR dosyalarını, tam ağ yanıtı gövdelerini, çerezleri, kimlik doğrulama belirteçlerini, kimlik bilgilerini, istemleri, konuşmaları, tam sayfa dışa aktarımlarını, özel kaynak kodunu veya hesap verisi içeren ekran görüntülerini asla paylaşmayın. Codex kullanım yanıtı e-posta ve hesap kimliklerini içerebilir. Sentetik veya sıkıca kırpılmış arayüz kanıtı tercih edilir."
    },
    limitations: {
      heading: "Bilinen sınırlamalar",
      items: [
        "Geçmiş yalnızca Analytics açıkken toplanır.",
        "Sayfa kapalıyken gerçekleşen etkinlik gözlemler arasında boşluk olarak görünür.",
        "14 günden eski kayıtlar Analytics geçmişi bir sonraki işlediğinde budanır; her ölçer 10.082 örnekle sınırlandırılır ve etkin olmayan kurulumlarda eski yerel veriler temizlemeye veya kaldırmaya kadar kalabilir.",
        "Kota çıkarımı dilden bağımsızdır; koç arayüzü İngilizce, Türkçe, Hintçe, İspanyolca ve Arapçayı destekler.",
        "Codex yanıtı veya arayüzündeki değişiklikler kartların tanınmasını geçici olarak engelleyebilir.",
        "Paketlenmemiş kurulum ile Chrome Web Mağazası kurulumu farklı uzantı depolama kimlikleri kullanır."
      ]
    },
    privateContact: {
      heading: "Özel iletişim",
      bodyBefore: "Gizlilik sorusu veya herkese açık olmaması gereken bir bildirim için şu adrese e-posta gönderin:",
      bodyAfter: "Kimlik bilgilerini, HAR dosyalarını, tam yanıt gövdelerini veya hesap dışa aktarımlarını e-postayla göndermeyin."
    }
  }
};
