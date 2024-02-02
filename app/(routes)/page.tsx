import Billboard from '@/components/Billboard';
import Container from '@/components/ui/Container';
import ProductList from '@/components/ProductList';

import getBillboards from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards('e84395c0-9711-4c92-bb34-bb9b3a84b964');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured List" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
