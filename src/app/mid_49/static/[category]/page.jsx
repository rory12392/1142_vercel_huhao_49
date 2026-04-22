'use client';

import { useEffect, useState } from 'react';
import Product_49 from '../../_components/Product_49';
import Wrapper from '../../_assets/wrappers/Shop_49';

import { useParams } from 'next/navigation';

const FetchProductsByCategory_49 = () => {
  const [shop_49, setShop_49] = useState([]);
  const params = useParams();
  const cat = params.category;

  const fetchProductsFromNode = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/shop_49/${cat}`);
      const data = await response.json();
      console.log('shop_49 data', data);
      if (data.length !== 0) {
        setShop_49(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductsFromNode();
  }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4> Hsingtai Chung, 123456789 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title capitalize'>{cat}</h1>
          <div className='items'>
            {shop_49?.map((item) => {
              const { id, img_url, name, price } = item;
              return (
                <Product_49
                  key={id}
                  img_url={img_url}
                  name={name}
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
