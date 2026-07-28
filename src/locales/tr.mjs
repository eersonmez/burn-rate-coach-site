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
    usageGuide: "Kullanım sınırları",
    pacingGuide: "Kota temposu",
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
    metaDescription: "Her Codex kotasının sıfırlamaya kadar nereye gittiğini yerel tahminlerle görün; hiçbir şey cihazınızdan çıkmaz.",
    title: "Burn Rate Coach — her Codex kotasının nereye gittiğini görün",
    hero: {
      eyebrow: "Ücretsiz Chrome uzantısı · Yerel kullanım için tasarlandı",
      headlinePrimary: "Her kotanın nereye gittiğini görün.",
      headlineSecondary: "Sıfırlanmadan önce.",
      lede: "Burn Rate Coach, desteklenen her Codex kullanım kartına tek bir tahmini sonuç ve küçük bir yerel gidişat ekler.",
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
      heading: "Her kartta tek sonuç.",
      intro: "Başka bir panel açmadan sıfırlamadaki tahmini bakiyeyi veya erken tükenme zamanını görün.",
      items: [
        { heading: "Önce sonuç", body: "Her ölçer, sıfırlamadaki tahmini bakiyesini veya ne zaman sıfıra ulaşabileceğini bağımsız gösterir. Kartlar birbirini geçersiz kılmaz." },
        { heading: "Hedef ayrı kalır", body: "Tahmini gözlenen kullanım belirler. Hedefiniz yalnızca yolu sabit koridora göre renklendiren sessiz bir referanstır." },
        { heading: "Tek ayar", body: "Dönem sonu hedefini seçin. Sınırlı 14 günlük geçmiş otomatiktir, cihazınızda kalır ve açılır pencereden silinebilir." }
      ]
    },
    screenshots: {
      eyebrow: "Uzantı tarafından oluşturuldu",
      heading: "Gerçek arayüz. Sentetik örnek veri.",
      intro: "Bu görseller, üretim uzantısı kodunu özel ve yapısal olarak gerçeğe uygun bir test düzeneğinde çalıştırır. Burada hiçbir hesap verisi bulunmaz.",
      items: [
        { alt: "Sıfırlamadaki tahmini bakiyeyi gösteren koyu temalı sentetik Codex kota kartı", caption: "Bir bakışta sonuç" },
        { alt: "Gözlemleri, hedefi ve tahmini gösteren açık temalı sentetik Codex kota kartı", caption: "Açıkta da koyuda da okunaklı" },
        { alt: "Sıfırlanmadan önce sıfıra inen tahmini gösteren sentetik durum", caption: "Erken sıfır tahmini" },
        { alt: "Tek hedef ayarı ve otomatik yerel geçmiş içeren Burn Rate Coach açılır penceresi", caption: "Tek ayar · otomatik yerel geçmiş" }
      ]
    },
    private: {
      eyebrow: "Gizlilik odaklı tasarım",
      heading: "Kota verilerin Chrome’da kalır.",
      body: [
        "Codex Analytics açıkken Burn Rate Coach, sayfa okuduğunda sayfanın başarıyla çözümlediği kota sonucunu pasif olarak gözlemler. Yalnızca tahmin için gereken kararlı ölçer ve dönem kimliklerine, kullanılan yüzdeye, dönem süresine ve sıfırlanma zamanına erişir. Gözlem zamanını yerel olarak üretir ve sonuçları yerel kartlarla yalnızca eşleşen sayısal ilerleme ve sıfırlanma meta verileri üzerinden ilişkilendirir; çevrilmiş etiketleri veya kart sırasını asla kullanmaz. Ayarlar ve otomatik sınırlı anlık görüntüler <code>chrome.storage.local</code> içinde kalır.",
        "Ek bir ağ isteği başlatmaz; yanıtı klonlamaz veya kendi başına çözümlemez, çerezleri ya da yetkilendirme üstbilgilerini incelemez, kota verisi göndermez ve hesap, e-posta, plan, kredi ya da harcama denetimi alanlarına erişmez. Arka uç, telemetri, reklam, uzaktan kod veya Burn Rate Coach hesap sistemi yoktur."
      ],
      policyLink: "Gizlilik politikasını oku"
    },
    limitations: {
      eyebrow: "Sınırları bil",
      heading: "Bir koçtur, garanti değil.",
      items: [
        "Otomatik geçmiş yalnızca Analytics sayfası açık ve görünürken gözlenir; gizli sekmelerde zamanlanmış örnek kaydedilmez.",
        "Yüzde puanları görev, token, mesaj veya dakika değildir.",
        "Tahminler model tabanlıdır, garanti değildir ve gerçek kullanım geçmişleri üzerinde ampirik olarak kalibre edilmemiştir.",
        "Kota toplama Codex arayüz dilinden bağımsızdır; koç arayüzü İngilizce, Türkçe, Hintçe, İspanyolca ve Arapçayı destekler."
      ]
    },
    closing: {
      heading: "Her sıfırlanmayı değerlendir.",
      body: "Burn Rate Coach, Chrome Web Mağazası’nda ücretsizdir.",
      cta: "Chrome’a ekle"
    }
  },
  usageGuide: {
    metaDescription: "Codex kullanım bakiyeleri, sıfırlanma zamanları, ortak sınırlar ve yüzdelerin neden görevlere doğrudan karşılık gelmediği hakkında sade bir rehber.",
    title: "Codex kullanım sınırları nasıl çalışır — Burn Rate Coach",
    eyebrow: "Codex kullanım rehberi",
    heading: "Codex kullanım sınırları nasıl çalışır",
    lede: "Gerçeğin kaynağı Codex kullanım sayfanızdır. Gösterilen bakiyeler ve sıfırlanma zamanları planınıza, geçerli tekliflere ve kullandığınız yüzeylere bağlıdır.",
    sections: [
      {
        heading: "Bakiyeyi ve sıfırlanmayı birlikte okuyun",
        paragraphs: [
          "Gösterilen her bakiye, yanında belirtilen sıfırlanma dönemi için kalan kullanım hakkıdır. Codex bir veya daha fazla kullanım dönemi, kredi bakiyesi ya da plana özgü başka sınırlar gösterebilir.",
          "Her hesabın aynı kartlara sahip olduğunu varsaymayın. OpenAI dönemleri ve kampanyaları değiştirebilir; kendi kullanım sayfanızdaki etiketleri ve zaman damgalarını esas alın."
        ]
      },
      {
        heading: "Bazı yüzeyler aynı havuzu paylaşabilir",
        paragraphs: [
          "OpenAI, plana ve kullanılabilir ürünlere bağlı olarak Codex, ChatGPT Work, ChatGPT for Excel ve Workspace Agents ürünlerinin ortak bir ajan kullanım havuzunu paylaşabileceğini belirtir.",
          "Bu nedenle bir üründeki etkinlik, daha sonra başka bir üründe gördüğünüz bakiyeyi değiştirebilir. Kalan hakkın pratik kaydı kullanım sayfası ve sınır bildirimidir."
        ]
      },
      {
        heading: "Yüzde, görev sayacı değildir",
        paragraphs: [
          "Bir görevin tüketimi boyutuna, karmaşıklığına, modele ve çalıştığı yüzeye göre değişir. On küçük düzenleme ile tek bir uzun ajan çalışması benzer paylar tüketmek zorunda değildir.",
          "Bu yüzden kalan yüzde, kaç istem, token veya dakika kaldığını güvenilir biçimde söylemez. Bu bir kullanım hakkı göstergesidir; birim dönüştürücü değildir."
        ]
      },
      {
        heading: "Gösterilen sıfırlanma zamanını kullanın",
        paragraphs: [
          "Ezberlenmiş bir takvim yerine sayfada gösterilen tam sıfırlanma zamanına göre plan yapın. Bazı geçici teklifler biriktirilmiş veya ayarlanmış sıfırlanmalar da kullanabilir.",
          "Geçerli görünüm için <code>https://chatgpt.com/codex/cloud/settings/analytics</code> adresini açın. Yol veya kartlar değişirse güncel Codex gezinmesini ve görünür hesap yönlendirmesini izleyin."
        ]
      }
    ],
    sourceLabel: "OpenAI’ın güncel Codex kullanım rehberini okuyun",
    productBody: "Burn Rate Coach, Codex kullanım sayfanızın gerçekten gösterdiği bakiyelere yerel tempo ve sıfırlanma anı tahminleri ekler. Tahminler açıklayıcı kestirimlerdir; sağlayıcı garantisi değildir.",
    cta: "Burn Rate Coach’u edinin"
  },
  pacingGuide: {
    metaDescription: "Codex kota tahminini okumak, hedefi ayrı tutmak ve yerel model kanıtını anlamak için rehber.",
    title: "Codex kota tahmini nasıl okunur — Burn Rate Coach",
    eyebrow: "Pratik tempo rehberi",
    heading: "Kota tahmini nasıl okunur",
    lede: "Mevcut bakiye kotanın şimdi nerede olduğunu söyler. Betimleyici tahmin, sıfırlamada nerede olabileceğini veya ne zaman sıfıra ulaşabileceğini kestirir.",
    sections: [
      {
        heading: "Erken yoğun kullanım gerçek tempoyu gizler",
        paragraphs: [
          "Verimli bir yoğun dönem, sıfırlanma döneminin başında büyük bir pay tüketebilir. Kalan yüzde rahat görünebilir ama dönemin geri kalanı için gereken ortalama tempo artık çok daha düşük olabilir.",
          "Kalan bakiyeyi kalan süreyle karşılaştırın. Hakkın %60’ı dönemin %85’ini karşılamak zorundaysa, takvim başlıktaki yüzdeden daha az esnektir."
        ]
      },
      {
        heading: "Ağır görevler eğimi değiştirir",
        paragraphs: [
          "Codex kullanımı görevin boyutuna, karmaşıklığına, modele ve yüzeye göre değişir. Uzun bir ajan çalışması, gidişatı birkaç hafif istemden çok daha fazla değiştirebilir.",
          "İzdüşümü hareketli bir tahmin olarak görün. Olağandışı ağır işlerden sonra dünün temposunun değişmeden süreceğini varsaymak yerine tekrar kontrol edin."
        ]
      },
      {
        heading: "Her dönemi bağımsız okuyun",
        paragraphs: [
          "Sayfa birden fazla sınır gösterdiğinde her kartın kendi bakiyesi, sıfırlanması, kanıtı ve tahmini sonucu vardır.",
          "İşiniz için geçerli sonuçları karşılaştırın, ancak bir kartı diğerini denetleyen olarak görmeyin. Farklı dönemler farklı ve uyumlu gerçekler söyleyebilir."
        ]
      },
      {
        heading: "Hedefi tahminden ayrı tutun",
        paragraphs: [
          "Sıfırlamada kalmasını istediğiniz bakiyeyi referans olarak seçin. Bu hedefi değiştirmek tahmini ona doğru çekmemelidir; kestirimi yalnızca gözlenen kullanım belirler.",
          "Belirsiz kanıt sahte kesinlik yerine daha yumuşak veya nötr bir renk üretmelidir. Dağılım model tabanlıdır ve gerçek kullanım geçmişlerinde ampirik olarak kalibre edilmemiştir."
        ]
      }
    ],
    sourceLabel: "OpenAI’ın güncel Codex kullanım rehberini okuyun",
    productBody: "Burn Rate Coach bu karşılaştırmayı Codex kullanım sayfasında, Chrome içinde yerel olarak yapar. Her kartta tek bir betimleyici sonuç gösterir ve hedefi tahminden ayrı tutar.",
    cta: "Yerel koçu ekleyin"
  },
  privacy: {
    metaDescription: "Burn Rate Coach gizlilik politikası özeti.",
    title: "Gizlilik — Burn Rate Coach",
    effectiveDate: "Yürürlük tarihi: 28 Temmuz 2026",
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
          "Burn Rate Coach koçun gösterilip gösterilmediğini, hedef yüzdeyi, uyumluluk durumunu ve otomatik zaman damgalı kota yüzdeleri ile sıfırlanma zamanlarını Chrome’un yerel uzantı deposunda tutar. Tarayıcı sekmesi gizliyken zamanlanmış örnek kaydetmez. 14 günden eski kayıtlar Analytics geçmişi bir sonraki işlediğinde budanır ve her ölçer 10.082 örnekle sınırlandırılır."
        ]
      },
      {
        heading: "Bilgilerin kullanımı",
        paragraphs: [
          "İzin verilen kota bilgileri yalnızca mevcut konumu, hedef referansını, yerel gidişatı, sıfırlanmadaki tahmini bakiyeyi veya erken tükenme zamanını, renk sınıflandırmasını ve en son etkin ya da tanınmayan uyumluluk durumunu göstermek için kullanılır. Her ölçer bağımsız değerlendirilir."
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
          "Chrome Web Mağazası sayfası yerel kota verisi kullanımını kurulumdan önce açıklar; açılır pencere bunu sade bir dille tekrarlar. <strong>Koçu göster</strong> seçeneğini kapatmak arayüzü kaldırır ancak Analytics görünürken sayfa gözlemini, uyumluluk denetimlerini veya otomatik yerel geçmişi durdurmaz. İki tıklamalı <strong>Geçmişi temizle</strong> denetimi mevcut ve eski anlık görüntüleri siler; sonraki taze gözlemler yeni geçmiş oluşturabilir. Uzantıyı kaldırmak yerel uzantı verilerini Chrome üzerinden siler."
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
        "Otomatik geçmiş yalnızca Analytics açık ve görünürken toplanır; gizli sekme zamanlanmış örnek kaydetmez.",
        "Sayfa kapalıyken gerçekleşen etkinlik yalnızca gözlemler arasında boşluk olarak görünür.",
        "14 günden eski kayıtlar Analytics geçmişi bir sonraki işlediğinde budanır; her ölçer 10.082 örnekle sınırlandırılır ve etkin olmayan kurulumlarda eski yerel veriler temizlemeye veya kaldırmaya kadar kalabilir.",
        "Tahmin dağılımları model tabanlıdır ve gerçek kullanım geçmişlerinde ampirik olarak kalibre edilmemiştir.",
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
