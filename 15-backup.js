import { keyInYNStrict } from "readline-sync"; // `readline-sync`'i import ediyoruz

export default function backupPage() {
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
    "========================================================================================"
  );
  const backup = keyInYNStrict(
    "Do you want to start the backup process? (yes/no): "
  );

  if (backup) {
    console.log(`The backup process is complete.`);
  } else {
    console.log("The application was exited.");
  }
}
