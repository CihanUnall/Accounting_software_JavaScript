import { keyInYNStrict } from "readline-sync"; // `readline-sync`'i import ediyoruz
import { accountingPage } from "./01-start.js";

export default function recordsPage() {
  console.log("Welcome to the Income and Expense Records page!");

  const income = 1000;
  const expense = 500;
  const balance = income - expense;

  console.log(`Income: ${income}`);
  console.log(`Expense: ${expense}`);
  console.log(`Balance: ${balance}`);

  const continueApp = keyInYNStrict("Do you want to return to the main menu?");

  if (continueApp) {
    accountingPage(); // Ana menüye dönüyoruz
  } else {
    console.log("Exiting the application...");
  }
}
