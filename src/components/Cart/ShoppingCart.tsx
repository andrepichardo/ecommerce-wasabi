import { FiX } from 'react-icons/fi';
import { Gotu } from '@next/font/google';
import EmptyCart from './EmptyCart';
const GotuFont = Gotu({ weight: '400', subsets: ['latin'] });

export const ShoppingCart = () => {
  return (
    <aside className={GotuFont.className}>
      <div className="w-full min-h-full flex flex-col">
        <div className="w-full px-6 py-6">
          <div className="w-full flex justify-between items-center">
            <h3 className="font-bold text-xl">Shopping Cart</h3>
            <FiX className="cursor-pointer text-2xl hover:text-gray-500 active:scale-90 transition-all" />
          </div>
        </div>
        <hr />
        <div className="w-full flex justify-center">
          <EmptyCart />
        </div>
      </div>
    </aside>
  );
};
