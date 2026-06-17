import {
  fetchAdminProductDetails,
  updateProductAction,
} from '../../../../_utils/action';
import FormContainer from '../../../../_components/form/FormContainer';
import FormInput from '../../../../_components/form/FormInput';
import PriceInput from '../../../../_components/form/PriceInput';
import { SubmitButton } from '../../../../_components/form/Buttons';

const EditProductPage_xx = async ({
  params,
}: {
  params: Promise<{ pid: string }>;
}) => {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>update product</h1>
      <div className='border p-8 rounded-md'></div>
    </section>
  );
};
export default EditProductPage_xx;
