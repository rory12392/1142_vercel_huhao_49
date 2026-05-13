import { auth } from '@clerk/nextjs/server';
import StoreSignInOut_49 from './StoreSigninOut_49';

const StoreSignInOutAuth_49 = async () => {
  const { userId } = await auth();

  const isAdminUser = userId === process.env.ADMIN_USER_ID;

  return <StoreSignInOut_49 isAdminUser={isAdminUser} />;
};

export default StoreSignInOutAuth_49;
