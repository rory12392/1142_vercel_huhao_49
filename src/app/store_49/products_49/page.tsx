import ProductsContainer_49 from '../_components/products/ProductsContainer_49';

const ProductPage_49 = async ({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) => {
  const { layout = 'grid', search = '' } = await searchParams;
  return <ProductsContainer_49 layout={layout} search={search} />;
};

export default ProductPage_49;
