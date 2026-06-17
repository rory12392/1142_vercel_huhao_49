import { fetchCategory_49 } from './_utils/action';
import Wrapper from './_assets/wrapper/Shop_49';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function FinalHome_49() {
  const categories_49 = await fetchCategory_49();
  console.log('Fetched:', categories_49);
  return (
    <>
      <Wrapper>
        <div className='shop-page'>
          <div className='section-title'>
            <h4> HU HAO, 213417149 </h4>
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
                    <Link href={`/final_49/${cname}`} className='content'>
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
    </>
  );
}
