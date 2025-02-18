import { keyInYNStrict } from "readline-sync";
import { accountingPage } from "./01-start.js";
import readlineSync from "readline-sync";
// Başlangıçta toplam gelir, gider, alışverişler ve ödemeler
let income = 0; //gelirler
let expenses = 0; //giderlerl
let purchases = []; //alışverişler
let payments = []; //ödemeler

export default function recordsPage() {
  console.clear();
  console.log("===========================================");
  console.log("||                                       ||");
  console.log("||           ACCOUTING PROGRAM           ||");
  console.log("||     Income and Expense Records        ||");
  console.log("===========================================");

  function recordIncome() {
    let incomeAmount = readlineSync.questionFloat("Enter income amount: ");
    income += incomeAmount;
  }

  function recordExpense() {
    let expenseAmount = readlineSync.questionFloat("Enter expense amount: ");
    expenses += expenseAmount;
  }

  function recordPurchase() {
    let companyName = readlineSync.question("Enter company name: ");
    let product = readlineSync.question("Enter purchased product: ");
    let amount = readlineSync.questionFloat("Enter purchase amount: ");
    purchases.push({ company: companyName, product: product, amount: amount });
    expenses += amount;
  }

  function recordPayment() {
    let companyName = readlineSync.question("Enter payment company name: ");
    let amount = readlineSync.questionFloat("Enter payment amount: ");
    payments.push({ company: companyName, payment: amount });
    income += amount;
  }

  function generateReport() {
    console.log("Total Income: " + income);
    console.log("Total Expenses: " + expenses);
    console.log("Purchases: ");
    purchases.forEach((purchase, index) => {
      console.log(
        `${index + 1}. Company: ${purchase.company}, Product: ${
          purchase.product
        }, Amount: ${purchase.amount}`
      );
    });
    console.log("Payments: ");
    payments.forEach((payment, index) => {
      console.log(
        `${index + 1}. Company: ${payment.company}, Payment Amount: ${
          payment.payment
        }`
      );
    });
  }

  function mainMenu() {
    console.clear();
    console.log("===========================================");
    console.log("||                                       ||");
    console.log("||           ACCOUTING PROGRAM           ||");
    console.log("||     Income and Expense Records        ||");
    console.log("===========================================");
    let choice = [];
    do {
      console.log("===========================================");
      console.log("||   Select an action:                   ||");
      console.log("||   1 - Record Income                   ||");
      console.log("||   2 - Record Expense                  ||");
      console.log("||   3 - Record Purchase                 ||");
      console.log("||   4 - Record Payment                  ||");
      console.log("||   5 - Report                          ||");
      console.log("||   6 - Exit                            ||");
      console.log("===========================================");

      choice = readlineSync.questionInt("Make your choice: ");

      switch (choice) {
        case 1:
          recordIncome();
          break;
        case 2:
          recordExpense();
          break;
        case 3:
          recordPurchase();
          break;
        case 4:
          recordPayment();
          break;
        case 5:
          generateReport();
          break;
        case 6:
          console.log("Exiting...");
          break;
        default:
          console.log("Invalid option!");
      }
    } while (choice !== 6);
  }

  // Start the program
  mainMenu();

  const continueApp = keyInYNStrict("Do you want to return to the main menu?");

  if (continueApp) {
    accountingPage();
  } else {
    console.log("Exiting the application...");
  }
}
