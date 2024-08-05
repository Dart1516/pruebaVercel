import Link from 'next/link';

export default function Products() {
  const productIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <h1>Página de productos</h1>
      <div>
        <h2>Lista de productos</h2>
        <ul>
          {productIds.map((id) => (
            <li key={id}><Link href={`/products/${id}`}>Producto {id}</Link></li>
          ))}
        </ul>
      </div>
      <li>
        <Link href="/">Volver a la página de home</Link>
      </li>
    </div>
  );
}
