import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import { fetchFeaturedProducts } from '../../_utils/action';
import ProductsGrid_49 from '../products/ProductsGrid_49';

const FeaturedProducts_49 = async () => {
  const products = await fetchFeaturedProducts();
  console.log('featured products', products);

  return (
    <section className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid_49 products={products} />
    </section>
  );
};

export default FeaturedProducts_49;
