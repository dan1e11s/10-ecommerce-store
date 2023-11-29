'use client';

import Image from 'next/image';

import { Product } from '@/types';

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  console.log(data);

  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image src={data?.images?.[0]?.url} fill alt="Image" />
      </div>
    </div>
  );
};

export default ProductCard;
