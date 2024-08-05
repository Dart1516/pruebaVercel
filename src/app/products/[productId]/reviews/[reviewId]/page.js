import Link from 'next/link';
import {notFound} from 'next/navigation';

export default function ReviewDetail({ params }) {
  const { productId, reviewId } = params;

  if(parseInt(reviewId) > 5) {
    notFound()
  }
  return (
    <div>
      <h1>Detalle del review {reviewId} para el producto {productId}</h1>
      <div>
        <Link href={`/products/${productId}/reviews`}>Volver a los reviews</Link>
      </div>
      <div>
        <Link href={`/products/${productId}`}>Volver al producto</Link>
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
