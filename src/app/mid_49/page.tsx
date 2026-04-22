import Wrapper from './_assets/wrappers/Shop_49';
import Link from 'next/link';

import { prisma } from '@/lib/prisma';

type Category = {
  cid: number;
  cname: string;
  size: string | null;
  image_url: string;
  remote_image_url: string;
  link_url: string;
};

export const fetchcategory = async (): Promise<Category[]> => {
  const data = await prisma.category_49.findMany();
  return data as Category[];
};

const StaticPage_49 = async () => {
  const category_49: Category[] = await fetchcategory();
  console.log(category_49);
  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4> huhao, 213417149 </h4>
        </div>
        <div className='homepage'>
          <div className='directory-menu'>
            {category_49?.map((category) => {
              const { cname, image_url, link_url } = category;
              return (
                <div className='menu-item'>
                  <img className='background-image' src={image_url} alt='' />
                  <Link href={link_url} className='content'>
                    <h1 className='title'>{cname}</h1>
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
