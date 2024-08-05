import Link from 'next/link';

export default function Reviews({ params }) {
  const reviewIds = [1, 2, 3, 4, 5];
  const { productId } = params;

  return (
    <div>
      <h1>Reviews para el producto número {productId}</h1>
      <h2>Lista de reviews</h2>
      <ul>
        {reviewIds.map((id) => (
          <li key={id}><Link href={`/products/${productId}/reviews/${id}`}>Review {id}</Link></li>
        ))}
      </ul>
      <div>
        <Link href={`/products/${productId}`}>Volver a los detalles del producto {productId}</Link>
      </div>
      <div>
        <Link href="/products">Volver a la página de productos</Link>
      </div>
      <div>
        <Link href="/">Volver a la página de home</Link>
      </div>
    </div>
  );
}
