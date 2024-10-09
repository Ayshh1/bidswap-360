// Server component (app/(frontend)/products/[slug]/page.jsx)
import ProductDetailClient from '../../ProductDetailClient';
import { getData } from '@/lib/getData';

export default async function ProductDetailPage({ params: { slug } }) {
  const product = await getData(`products/product/${slug}`);
  return <ProductDetailClient product={product} />;
}
