import Billboard from '@/components/Billboard';
import Container from '@/components/ui/Container';

import getBillboards from '@/actions/get-billboards';

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboards('13017d6d-1a60-4d9f-98d1-1d6bd1de97e6');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
