import Product_49 from '../_components/shop/Product_49';
import Wrapper from '../_assets/wrapper/Shop_49';

import { prisma } from '@/lib/prisma';

type Product = {
  pid: string;
  pname: string;
  cat_id: number;
  price: number;
  img_url: string;
  remote_img_url: string;
};

const FetchProductsByCategory_49 = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  console.log('category param:', category);

  const categoryRecord = await prisma.category2_49.findFirst({
    where: { cname: category },
  });

  if (!categoryRecord) {
    return <div>Category not found</div>;
  }

  const shop_49 = await prisma.shop2_49.findMany({
    where: { cat_id: categoryRecord.cid },
  });

  console.log('Products by category:', shop_49);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4> HU HAO, 213417149 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_49?.map((item: Product) => {
              const { pid, img_url, pname, price } = item;
              return (
                <Product_49
                  key={pid}
                  pid={pid}
                  img_url={img_url}
                  pname={pname}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchProductsByCategory_49;
