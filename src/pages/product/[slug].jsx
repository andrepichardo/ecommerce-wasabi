import Layout from '@/components/Layout/Layout';
import data from '../../utils/data';
import { useRouter } from 'next/router';
import { FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const ProductDetails = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) return <div>Product not Found.</div>;

  return (
    <Layout title={product.name}>
      <div className="pt-5 pb-10 flex flex-col gap-3">
        <Link
          className="text-blue-500 flex items-center underline underline-offset-4 hover:text-blue-400"
          href="/"
        >
          <FiChevronLeft /> Back to Homepage
        </Link>

        <div className="grid md:grid-cols-4 gap-10  md:place-items-stretch">
          <div className="md:col-span-2">
            <Image
              priority
              className="w-full object-cover shadow-lg h-auto max-h-[450px] md:max-h-[500px] lg:max-h-[600px] mx-auto md:mx-0 rounded-lg"
              width={1000}
              height={1000}
              sizes="100vw"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-10">
            <ul className="flex flex-col gap-2">
              <div className="w-full flex items-center justify-between border-b mb-2">
                <li>
                  <h1 className="text-xl font-bold">{product.name}</h1>
                </li>
                <li>
                  {product.rating} of {product.numReviews} reviews
                </li>
              </div>
              <li>
                <b>Category</b>: {product.category}
              </li>
              <li>
                <b>Brand</b>: {product.brand}
              </li>
              <li>
                <b>Description</b>: {product.description}
              </li>
              <li>
                <b>Status</b>:{' '}
                {product.countInStock > 0 ? (
                  <span className="text-green-600 font-semibold">In Stock</span>
                ) : (
                  <span className="text-red-500 font-semibold">
                    Unavailable
                  </span>
                )}
              </li>
            </ul>
            <hr />
            <div className="w-full flex justify-between items-center gap-5 md:gap-10 lg:gap-16">
              <h3 className="text-2xl">
                RD$<b>{product.price.toFixed(2)}</b>
              </h3>
              <div className="w-full">
                <button className="w-full bg-pink-100 hover:bg-pink-50 transition-all rounded-md py-2">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
