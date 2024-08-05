export const metadata = {
    title: "blog de prueba",
    description: "estoi es para ver si aprareece en el blog",
  };

  
export default function Blog(){
    return (
        <div> 
            <h1> Este es mi blog </h1>
            <li> <a href=".."> volver al home   </a></li>
            <li> <a href="/blog/blog1"> ir al primer blog </a></li>
            <li> <a href="/blog/blog2"> ir al segundo blog </a></li>
        </div>
    )
}