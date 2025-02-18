Muhasebe Pseudocode

    1) Proje başlangıcı :
        a) npm install   : Proje klasöründe package.json ve package-lock.json dosyasını oluşturur.
           Bu dosya, proje adı, sürümü, açıklaması gibi bilgileri içerir.
           package-lock.json bu dosya, projeyi farklı ortamlarda çalıştırırken tutarlılığı sağlar ve bağımlılıkların doğru sürümlerinin yüklendiğinden emin olur.
        b) npm install readline-sync  : readline-sync paketini indirir ve node_modules/ dizinine ekler. Sorular sorup cevaplar almak için kullanılan bir komut sistemidir.
        c) Dosya içerisine  bu kodu yazmalıyız.  import { question, keyInYNStrict, questionInt } from "readline-sync”
    2) Kullanıcı paneli
        a) Kullanıcılar için bir dizi oluşturup içerine objeler yerleştirilir.
            1) Admin için bilgiler
            2) user için bilgiler
        b) Başlangış için bir fonksiyon oluşturacağız ve bu fonksiyonda terminalde kodu başlattıktan sonra kullanıcı adı sorsun, daha sonra parola sorsun.
        c) Eğer admin bilgileri girilirse kullanıcı oluşturmak için bir sayfa açılsın ve kullanıcı oluşturulsun.
        d) Eğer user bilgileri girilirse main panele gidip işlem yapsın.

    3) Anasayfada menüler gözükecek ve seçim yapılması için soru sorulacak.
    4) Menüdeki sayfalar oluşturulacak
    5) Gelir ve Gider Kayıtları:
        a) Kullanıcılar, gelir ve giderleri belirli kategoriler altında girebilir.
        b) Kategori bazında raporlama yapılabilir.
        c) Gelir ve giderlerin açıklamaları ile birlikte kaydedilmesi sağlanır.
        d) Otomatik toplam hesaplama (toplam gelir, toplam gider, net kar vb.).
    6) Fatura Yönetimi:
        a) Fatura düzenleme, fatura numarası oluşturma, ve fatura tarihleri eklenebilir.
        b) Fatura şablonları oluşturulabilir ve bunlar sistem üzerinden kullanılabilir.
        c) Vergi hesaplamaları (KDV, Stopaj vb.) yapılabilir.
        d) Fatura ödeme takibi (ödenen ve ödenmeyen faturalar) yapılabilir.
    7) Finansal Raporlama:
        a) Kullanıcılar için gelir-gider raporları oluşturulabilir.
        b) Aylık ve yıllık raporlar ile finansal durumu takip edebilme.
        c) Gelir ve gider grafikleri (Chart.js veya D3.js kullanılarak).
        d) Vergi raporları oluşturulabilir.
    8) Ödeme ve Alacak Takibi:
        a) Ödenmesi gereken borçlar ve alacaklar takip edilebilir.
        b) Ödeme hatırlatıcıları eklenebilir.
    9) Veri Yedekleme ve Güvenlik:

