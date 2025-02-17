const readlineSync = require("readline-sync");

let users = [
  { username: "admin", password: "1234" },
  { username: "user", password: "1234" },
]; // Başlangıçta admin ve user'ı ekliyoruz.

startApp();

function startApp() {
  console.clear();
  console.log("==============================");
  console.log("||        MUHASEBE          ||");

  // Kullanıcı adı soruluyor
  const username = readlineSync.question("Enter your username: ");

  // Kullanıcı adı doğruysa parola soruluyor
  // let user = users.filter((user) => user.username === username);
  // user = user[0];

  let user = users.find((user) => user.username === username);

  if (!user) {
    return console.log("Username not found. Please try again.");
    // Kullanıcı adı bulunamazsa tekrar sor
  }

  const password = readlineSync.question("Enter your password: "); // Şifreyi string olarak soruyoruz

  if (user.password !== password) {
    return console.log("Incorrect password. Please try again.");
    // Yanlış parola girildiyse yeniden başlat
  }

  // Şifre doğruysa ve kullanıcı bulunduysa, kullanıcıya yönlendirme yapılır
  if (username === "admin") {
    adminPanel(); // Admin paneline yönlendir
  } else {
    userPanel(); // Kullanıcı paneline yönlendir
  }
}

// Admin paneli: Kullanıcı oluşturulacak
function adminPanel() {
  console.clear();
  console.log("Welcome Admin!");

  const newUsername = readlineSync.question("Enter new username for user: ");
  const newPassword = readlineSync.question("Enter new password for user: "); // Şifreyi string olarak soruyoruz

  // Yeni kullanıcı ekleniyor
  users.push({ username: newUsername, password: newPassword });
  console.log(`User ${newUsername} has been created successfully!`);

  // Admin işlemi bitince ana menüye dönülüyor
  const continueApp = readlineSync.keyInYNStrict(
    "Do you want to return to the main menu?"
  );
  if (continueApp) {
    startApp();
  } else {
    console.log("Exiting the application...");
    return; // Uygulamayı sonlandırıyor
  }
}

// User paneli: "Merhaba Dünya" mesajı ve devam etme seçeneği
function userPanel() {
  console.clear();
  console.log("Hello World!");

  const continueApp = readlineSync.keyInYNStrict(
    "Do you want to return to the main menu?"
  );
  if (continueApp) {
    startApp();
  } else {
    console.log("Exiting the application...");
    return; // Uygulamayı sonlandırıyor
  }
}
