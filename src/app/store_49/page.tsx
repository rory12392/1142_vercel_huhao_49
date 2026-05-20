import Image from 'next/image';
import Hero_49 from './_components/home/Hero_49';
import FeaturedProducts from './_components/home/FeaturedProducts_49';
import { Suspense } from 'react';
import LoadingContainer from './_components/global/LoadingContainer';

export default function Home() {
  return (
    <>
      <Hero_49 />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
