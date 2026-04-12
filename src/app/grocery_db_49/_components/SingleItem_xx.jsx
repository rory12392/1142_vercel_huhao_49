'use client';

import DeleteButton_xx from './DeleteButton_49';
import { editGrocery } from '@/actions/grocery.action_49';

const SingleItem_xx = ({ item }) => {
  return (
    <div className="single-item flex items-center gap-2">

      <form action={editGrocery.bind(null, item.id, !item.completed)}>
        <input
          type="checkbox"
          defaultChecked={item.completed}
        />
      </form>

      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed ? 'line-through' : 'none',
        }}
      >
        {item.name}
      </p>

      <DeleteButton_xx id={item.id} />
    </div>
  );
};

export default SingleItem_xx;