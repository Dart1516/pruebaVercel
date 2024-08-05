export default function AuthLayout({
    children}) {
    return (
        <div> 
            <header> otro header que debe salir en login y register</header>
            <h2> otra titulo </h2>
            {children}
        </div>

    );
  }
  