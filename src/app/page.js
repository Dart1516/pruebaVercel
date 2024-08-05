import styles from "./page.module.css";

export default function Home() {
  return (
    
    <main className={styles.main}>
      <h1> Hello world </h1>

         <li> <a href="./about"> esta es mi primera about  </a></li>
         <li> <a href="./profile"> esta es la página de Perfil  </a></li>
         <li> <a href="./blog"> esta son las páginas de blog </a></li>
         <li> <a href="./products"> ir a los productos </a></li>
         
    </main>
  );
}
