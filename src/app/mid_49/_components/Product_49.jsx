import Wrapper from '../_assets/wrappers/Shop_49';
import DeleteProduct_49 from './DeleteProduct_49';

const Product_49 = ({ img_url, pname, price, pid }) => {
  return (
    <Wrapper>
      <div className='collection-item'>
        <img className='image' src={img_url} />
        <div className='collection-footer'>
          <span className='name'>{pname}</span>
          <span className='price'>{price}</span>
        </div>
        <div className='flex justify-between items-center gap-4 custom-button'>
          <button>Add to Cart</button>
          <DeleteProduct_49 pid={pid} />
        </div>
      </div>
    </Wrapper>
  );
};
export default Product_49;
