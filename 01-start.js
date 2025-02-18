import { question, keyInYNStrict, questionInt } from "readline-sync";
import recordsPage from "./11-records.js";
import invoicePage from "./12-invoice-management.js";
import financialPage from "./13-financial-reporting.js";
import paymentPage from "./14-payment.js";
import backupPage from "./15-backup.js";

let users = [
  { username: "admin", password: "1234" },
  { username: "user", password: "1234" },
];

startApp();

function startApp() {
  console.clear();
  console.log("===========================================");
  console.log("||                                       ||");
  console.log("||           ACCOUTING PROGRAM           ||");
  console.log("||                                       ||");
  console.log("===========================================");

  const username = question("Enter your username: ");

  // let user = users.filter((user) => user.username === username);
  // user = user[0];

  let user = users.find((user) => user.username === username);

  if (!user) {
    return console.log("Username not found. Please try again.");
  }

  const password = question("Enter your password: ");

  if (user.password !== password) {
    return console.log("Incorrect password. Please try again.");
  }

  if (username === "admin") {
    adminPanel();
  } else {
    accountingPage();
  }
}

function adminPanel() {
  console.clear();
  console.log("Welcome Admin!");

  const newUsername = question("Enter new username for user: ");
  const newPassword = question("Enter new password for user: ");

  users.push({ username: newUsername, password: newPassword });
  console.log(`User ${newUsername} has been created successfully!`);

  const continueApp = keyInYNStrict("Do you want to return to the main menu?");
  if (continueApp) {
    startApp();
  } else {
    console.log("Exiting the application...");
    return;
  }
}

export function accountingPage() {
  console.clear();
  console.log("===========================================");
  console.log("||                                       ||");
  console.log("||          ACCOUTING PROGRAM            ||");
  console.log("||                                       ||");
  console.log("===========================================");
  console.log("||     Main Menu:                        ||");
  console.log("||  1. Income and Expense Records        ||");
  console.log("||  2. Invoice Management                ||");
  console.log("||  3. Financial Reporting               ||");
  console.log("||  4. Payment and Receivables Tracking  ||");
  console.log("||  5. Data Backup and Security          ||");
  console.log("||  6. Exit Application                  ||");
  console.log("===========================================");

  const choice = questionInt("Enter a choice (1-6): ");

  if (choice === 1) {
    console.clear();
    recordsPage();
  } else if (choice === 2) {
    console.clear();
    invoicePage();
  } else if (choice === 3) {
    console.clear();
    financialPage();
  } else if (choice === 4) {
    console.clear();
    paymentPage();
  } else if (choice === 5) {
    console.clear();
    backupPage();
  } else if (choice === 6) {
    console.clear();
    console.log("Application exited.");
    return;
  } else {
    console.log("Invalid choice. Try again.");
  }
}

// const choice = readlineSync.questionInt("Enter a choice (1-6): ");

// if (choice === 1) {
//   console.clear();

//   recordIncome();
// } else if (choice === 2) {
//   console.clear();
//   recordExpense();
// } else if (choice === 3) {
//   console.clear();
//   recordPurchase();
// } else if (choice === 4) {
//   console.clear();
//   recordPayment();
// } else if (choice === 5) {
//   console.clear();
//   generateReport();
// } else if (choice === 6) {
//   console.clear();
//   console.log("Application exited.");
//   return;
// } else {
//   console.log("Invalid choice. Try again.");
// }
// }
