import Billboard from '@/components/Billboard';
import Container from '@/components/ui/Container';
import ProductList from '@/components/ProductList';

import getBillboards from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards('13017d6d-1a60-4d9f-98d1-1d6bd1de97e6');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured List" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
