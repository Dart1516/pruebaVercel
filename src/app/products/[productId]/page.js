import Link from 'next/link';

export default function ProductDetail({ params }) {
  return (
    <div>
      <h1>Este es el detalle del producto número {params.productId}</h1>
      <Link href={`/products/${params.productId}/reviews`}>Ver reviews</Link>
      <div>
        <Link href="/products">Volver a la página de productos</Link>
      </div>
      <div>
        <Link href="/">Volver a la página de home</Link>
      </div>
    </div>
  );
}
