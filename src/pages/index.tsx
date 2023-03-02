import Layout from '@/components/Layout/Layout';
import { ProductItem } from '../components/Home/ProductItem';
import data from '../utils/data';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="w-full h-full min-h-screen py-5 grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  );
}
