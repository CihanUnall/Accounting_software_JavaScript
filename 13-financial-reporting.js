import { keyInYNStrict } from "readline-sync"; // `readline-sync`'i import ediyoruz
import { accountingPage } from "./01-start.js";

export default function financialPage() {
  console.clear();
  console.log("============================================================");
  console.log("||                                                        ||");
  console.log("||                  ACCOUTING PROGRAM                     ||");
  console.log("||                 Financial Reporting                    ||");
  console.log("============================================================");

  console.log("============================================================");
  console.log(`Income Statement:
    Total Revenue: 10,000 €,
    Other Revenue: 2,000 €,
    Gross Profit: 4,500 €,
    Operating Expenses: 1,200 €,
    Net Income: 2,500 €,
Balance Sheet:

    Assets:
        Cash and Cash Equivalents: 1,000€,
        Receivables: 500 €,
        Inventories: 300 €,
    Liabilities:
        Current Liabilities: 1,000 €,
        Long-term Liabilities: 2,000 €,
        Equity: 2,800 €,

Cash Flow Statement:

    Operating Cash Flow: 3,000 €,
    Investing Cash Flow: 500 €,
    Financing Cash Flow: 200 €,
    Net Cash Flow: 2,300 €`);
  console.log("============================================================");

  //---------------------------------------------------------------------------------------------

  const continueApp = keyInYNStrict("Do you want to return to the main menu?");

  if (continueApp) {
    accountingPage();
  } else {
    console.log("Exiting the application...");
  }
}

//Gelir Tablosu:

// Toplam Gelir: 10.000.000 TL
// Satış Gelirleri: 8.000.000 TL
// Diğer Gelirler: 2.000.000 TL
// Brüt Kar: 4.500.000 TL
// Faaliyet Giderleri: 1.200.000 TL
// Net Kar: 2.500.000 TL

// Bilanço:

// Aktifler:
//     Nakit ve Nakit Benzerleri: 1.000.000 TL
//     Alacaklar: 500.000 TL
//     Stoklar: 300.000 TL
// Pasifler:
//     Kısa Vadeli Borçlar: 1.000.000 TL
//     Uzun Vadeli Borçlar: 2.000.000 TL
//     Özsermaye: 2.800.000 TL

// Nakit Akış Tablosu:

// İşletme Faaliyetlerinden Elde Edilen Nakit: 3.000.000 TL
// Yatırım Faaliyetlerinden Elde Edilen Nakit: (500.000 TL)
// Finansman Faaliyetlerinden Elde Edilen Nakit: (200.000 TL)
// Net Nakit Akışı: 2.300.000 TL sadece ingilizce tercümesini
