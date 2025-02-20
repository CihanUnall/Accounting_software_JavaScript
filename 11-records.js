import { keyInYNStrict } from "readline-sync";
import { accountingPage } from "./01-start.js";
import readlineSync from "readline-sync";

export default function recordsPage() {
  // Başlangıçta toplam gelir, gider, alışverişler ve ödemeler
  let income = 0; //gelirler
  let expenses = 0; //giderlerl
  let purchases = []; //alışverişler
  let payments = []; //ödemeler
  let incomeComment = [];
  let expenseComment = [];

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
    "                           Income and Expense Records                         "
  );
  console.log(
    "========================================================================================"
  );

  function mainMenu() {
    let choice = [];
    do {
      console.log(
        "========================================================================================"
      );
      console.log(
        "||   Select an action:                                                                ||"
      );
      console.log(
        "||   1 - Record Income                                                                ||"
      );
      console.log(
        "||   2 - Record Expense                                                               ||"
      );
      console.log(
        "||   3 - Record Purchase                                                              ||"
      );
      console.log(
        "||   4 - Record Payment                                                               ||"
      );
      console.log(
        "||   5 - Report                                                                       ||"
      );
      console.log(
        "||   6 - Exit                                                                         ||"
      );
      console.log(
        "========================================================================================"
      );
      choice = readlineSync.questionInt("Make your choice: ");

      if (choice === 1) {
        console.clear();
        console.log("===========================================");
        console.log("||   Select an action:                   ||");
        console.log("||   1 - Record Income                   ||");
        console.log("===========================================");
        recordIncome();
      } else if (choice === 2) {
        console.clear();
        console.log("===========================================");
        console.log("||   Select an action:                   ||");
        console.log("||   2 - Record Expense                  ||");
        console.log("===========================================");
        recordExpense();
      } else if (choice === 3) {
        console.clear();
        console.log("===========================================");
        console.log("||   Select an action:                   ||");
        console.log("||   3 - Record Purchase                   ||");
        console.log("===========================================");
        recordPurchase();
      } else if (choice === 4) {
        console.clear();
        console.log("===========================================");
        console.log("||   Select an action:                   ||");
        console.log("||   4 - Record Payment                  ||");
        console.log("===========================================");
        recordPayment();
      } else if (choice === 5) {
        console.clear();
        console.log("===========================================");
        console.log("||   Select an action:                   ||");
        console.log("||   5 - Report                          ||");
        console.log("===========================================");
        generateReport();
      } else if (choice === 6) {
        console.clear();
        console.log("Exiting...");
      } else {
        console.log("Invalid option!");
      }
    } while (choice !== 6);
  }

  mainMenu();

  function recordIncome() {
    //gelir
    let commentIncome = readlineSync.question("Enter comment: ");
    let incomeAmount = readlineSync.questionFloat("Enter income amount: ");
    incomeComment.push({
      commentIncome: commentIncome,
      incomeAmount: incomeAmount,
    });
    income += incomeAmount;
  }

  function recordExpense() {
    //gider
    let commentExpense = readlineSync.question("Enter comment: ");
    let expenseAmount = readlineSync.questionFloat("Enter expense amount: ");
    expenseComment.push({
      commentExpense: commentExpense,
      expenseAmount: expenseAmount,
    });
    expenses += expenseAmount;
  }

  function recordPurchase() {
    //satınalma
    let companyName = readlineSync.question("Enter company name: ");
    let product = readlineSync.question("Enter purchased product: ");
    let amount = readlineSync.questionFloat("Enter purchase amount: ");
    purchases.push({ company: companyName, product: product, amount: amount });
    expenses += amount;
  }

  function recordPayment() {
    //ödemeler
    let companyName = readlineSync.question("Enter payment company name: ");
    let amount = readlineSync.questionFloat("Enter payment amount: ");
    payments.push({ company: companyName, payment: amount });
    expenses += amount;
  }
  //--------------------------------------------Report--------------------------------
  function generateReport() {
    console.log(`Total Income: ${income} €`);

    incomeComment.map((item) => {
      console.log(
        `Comment:  ${item.commentIncome}, Amount: ${item.incomeAmount} € `
      );
    });
    //---------------------------------------

    console.log(`Total Expenses: ${expenses} €`);

    expenseComment.map((item) => {
      console.log(
        `Comment:  ${item.commentExpense}, Amount: ${item.expenseAmount} € `
      );
    });
    //----------------------------------------------

    console.log("Purchases: ");
    purchases.map((item) => {
      console.log(
        `Company: ${item.company}, Product: ${item.product}, Amount: ${item.amount} €`
      );
    });
    //-------------------------------------------------
    console.log("Payments: ");
    payments.map((item) => {
      console.log(
        `Company: ${item.company}, Payment Amount: ${item.payment} €`
      );
      console.log(`Cash on hand: ${income - expenses} €`);
      //--------------------------------------------------------
    });
  }
  //-----------------------------------------
  const continueApp = keyInYNStrict("Do you want to return to the main menu?");

  if (continueApp) {
    accountingPage();
  } else {
    console.log("Exiting the application...");
  }
}
