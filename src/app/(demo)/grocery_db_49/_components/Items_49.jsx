import SingleItem_49 from './SingleItem_49';
import { fetchGrocery } from '@/actions/grocery.action_49';

const Items_49 = async () => {
  const items = await fetchGrocery();

  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem_49 key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items_49;