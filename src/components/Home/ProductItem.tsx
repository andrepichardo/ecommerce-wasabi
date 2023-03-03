import Image from 'next/image';
import Link from 'next/link';

export const ProductItem = ({ product }: any) => {
  return (
    <div className="shadow-xl w-full h-fit rounded-lg bg-white flex flex-col hover:scale-[101%] hover:shadow-2xl transition-all">
      <Link className="w-full" href={`/product/${product.slug}`}>
        <Image
          priority
          className="w-full object-cover h-auto max-h-[220px] md:max-h-[260px] lg:max-h-[300px] rounded-t-lg"
          width={1000}
          height={1000}
          sizes="100vw"
          src={product.image}
          alt={product.name}
        />
        <div className="flex flex-col gap-0.5 justify-center items-center text-sm md:text-base px-2 py-3">
          <h2 className="font-bold md:text-lg">{product.name}</h2>
          <p>{product.brand}</p>
          <p>${product.price}</p>
          <button
            type="button"
            className="bg-[#e0c7f9] hover:bg-[#e0c7f9]/70 px-2 py-1 rounded-md"
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};
