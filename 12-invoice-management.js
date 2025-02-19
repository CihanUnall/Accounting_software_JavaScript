import { keyInYNStrict } from "readline-sync"; // `readline-sync`'i import ediyoruz
import { accountingPage } from "./01-start.js";
import readlineSync from "readline-sync";

export default function invoicePage() {
  // Fatura bilgilerini al
  let customerName = readlineSync.question("Enter customer name: ");
  let invoiceNumber = readlineSync.question("Enter invoice number: ");
  let amountComment = readlineSync.question("Enter amount comment: ");
  let amount = readlineSync.questionFloat("Enter invoice amount: ");
  let date = readlineSync.question("Enter invoice date (YYYY-MM-DD): ");
  let paymentStatus = readlineSync.keyInYNStrict(
    "Has the invoice been paid? (yes/no): "
  );

  // Fatura objesi oluştur

  let invoice = {
    customerName,
    invoiceNumber,
    amountComment,
    amount,
    date,
    paymentStatus: paymentStatus ? "Paid" : "Unpaid",
  };
  //----------------------------- Fatura yazdırmak ister misiniz?--------------------------
  let printInvoice = readlineSync.keyInYNStrict(
    "Do you want to print the invoice? (yes/no): "
  );

  if (printInvoice) {
    // Terminali temizle
    console.clear();

    // Faturayı yazdır
    console.clear();
    console.log(
      "======================================================================"
    );

    console.log("Invoice");
    console.log(
      `                                                     Date: ${invoice.date}`
    );
    console.log(` `);
    console.log(
      "                                           Invoice Number: " +
        invoice.invoiceNumber
    );
    console.log(
      "======================================================================"
    );

    console.log(
      `${invoice.amountComment}                                                     ${invoice.amount} €`
    );
    console.log(` `);
    console.log(` `);
    console.log(` `);
    console.log(` `);
    console.log(` `);
    console.log(` `);
    console.log(` `);
    console.log(` `);
    console.log(` `);
    console.log(` `);
    console.log(` `);
    console.log(
      "======================================================================"
    );
    console.log(`Customer      : ${invoice.customerName}`);

    console.log(`Payment Status: ${invoice.paymentStatus}`);
    console.log(
      "======================================================================"
    );
  } else {
    console.log("Invoice not printed.");
  }
  //---------------------------------------------------------------------------------------------

  const continueApp = keyInYNStrict("Do you want to return to the main menu?");

  if (continueApp) {
    accountingPage();
  } else {
    console.log("Exiting the application...");
  }
}
