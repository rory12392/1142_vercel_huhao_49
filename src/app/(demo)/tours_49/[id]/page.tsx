'use client';

import { useParams } from 'next/navigation';

const TourDetailPage_49 = () => {
  const params = useParams();

  return (
    <div>
      <h2 className="text-2xl">ID: {params.id}</h2>
    </div>
  );
};

export default TourDetailPage_49;