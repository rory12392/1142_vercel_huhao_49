'use client';

import DeleteButton_49 from './DeleteButton_49';
import { editGrocery } from '@/actions/grocery.action_49';

type GroceryItem = {
  id: string;
  name: string;
  completed: boolean;
};

const SingleItem_49 = ({ item }: { item: GroceryItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        name='completed'
        onChange={() => editGrocery(item.id, !item.completed)}
      />

      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed ? 'line-through' : undefined,
        }}
      >
        {item.name}
      </p>

      <DeleteButton_49 id={item.id} />
    </div>
  );
};

export default SingleItem_49;
