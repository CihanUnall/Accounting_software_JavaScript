import { keyInYNStrict } from "readline-sync";
import { accountingPage } from "./01-start.js";
import readlineSync from "readline-sync";

export default function recordsPage() {
  console.clear();
  console.log(
    "========================================================================================"
  );
  console.log(`
  █████╗  ██████╗ ██████╗ ██████╗ ██╗   ██╗███╗   ██╗████████╗██╗███╗   ██╗ ██████╗   
 ██╔══██╗██╔════╝██╔════╝██╔═══██╗██║   ██║████╗  ██║╚══██╔══╝██║████╗  ██║██╔════╝    
 ███████║██║     ██║     ██║   ██║██║   ██║██╔██╗ ██║   ██║   ██║██╔██╗ ██║██║  ███╗    
 ██╔══██║██║     ██║     ██║   ██║██║   ██║██║╚██╗██║   ██║   ██║██║╚██╗██║██║   ██║   
 ██║  ██║╚██████╗╚██████╗╚██████╔╝╚██████╔╝██║ ╚████║   ██║   ██║██║ ╚████║╚██████╔╝    
 ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝               `);
  console.log(
    "                                          Payment                                                "
  );
  console.log(
    "========================================================================================"
  );

  class Payment {
    constructor(amount, method, accountBalance) {
      this.amount = amount; // Ödeme tutarı
      this.method = method; // Ödeme yöntemi (örneğin, kredi kartı, PayPal vb.)
      this.accountBalance = accountBalance; // Hesap bakiyesi (kredi kartı, PayPal, banka)
    }

    // Ödeme durumu kontrolü
    checkPaymentStatus() {
      if (this.amount <= this.accountBalance) {
        return `Payment of ${this.amount} € using ${this.method} was successful.`;
      } else {
        return `Payment of ${this.amount} € using ${this.method} failed due to insufficient balance.`;
      }
    }
  }

  const account = {
    creditCard: 1200,
    paypal: 1500,
    bank: 750,
  };

  console.log(`1-Credit Card`);
  console.log(`2-Paypal`);
  console.log(`3-Bank`);

  let paymentOption = readlineSync.question(`Select payment option (1-3): `);
  paymentOption = parseInt(paymentOption); // Kullanıcının girdiği değeri sayıya çeviriyoruz

  // paymentOption değerine göre doğru bakiyeyi seçiyoruz
  let selectedMethod;
  let selectedBalance;

  if (paymentOption === 1) {
    selectedMethod = "Credit Card";
    selectedBalance = account.creditCard;
  } else if (paymentOption === 2) {
    selectedMethod = "Paypal";
    selectedBalance = account.paypal;
  } else if (paymentOption === 3) {
    selectedMethod = "Bank";
    selectedBalance = account.bank;
  } else {
    console.log("Invalid option. Please select a valid payment option.");
    return; // Hatalı giriş varsa fonksiyonu sonlandırıyoruz
  }

  // Örnek Kullanımlar
  const payment1 = new Payment(1500, selectedMethod, selectedBalance);
  console.log(payment1.checkPaymentStatus()); // Ödeme başarılı veya başarısız

  const payment2 = new Payment(2000, selectedMethod, selectedBalance);
  console.log(payment2.checkPaymentStatus()); // Ödeme başarısız

  const payment3 = new Payment(1000, selectedMethod, selectedBalance);
  console.log(payment3.checkPaymentStatus()); // Durum başarılı

  //-----------------------------------------------------------
  const continueApp = keyInYNStrict("Do you want to return to the main menu?");

  if (continueApp) {
    accountingPage(); // Ana menüye dönüyoruz
  } else {
    console.log("Exiting the application...");
  }
}
