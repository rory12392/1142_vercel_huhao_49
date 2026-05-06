import Wrapper from './_assets/wrappers/Shop_49';
import Link from 'next/link';

import { prisma } from '@/lib/prisma';

const fetchCategory_49 = async () => {
  const categories = await prisma.category_49.findMany();
  return categories;
};

const StaticPage_49 = async () => {
  const categories_49 = await fetchCategory_49();
  // console.log('Fetched categories:', categories_49);
  return (
    <Wrapper>
      <div className='max-w-4xl mx-auto shop-page'>
        <div className='section-title'>
          <h4> Hsingtai Chung, 123456789 </h4>
        </div>
        <div className='homepage'>
          <div className='directory-menu'>
            {categories_49?.map((item) => {
              const { cid, cname, size, image_url } = item;
              return (
                <div className={`${size} menu-item`} key={cid}>
                  <img
                    className='background-image'
                    src={image_url || 'default.jpg'}
                    alt=''
                  />
                  <Link href={`/mid_49/${cname}`} className='content'>
                    <h1 className='title'>{item.cname}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StaticPage_49;
