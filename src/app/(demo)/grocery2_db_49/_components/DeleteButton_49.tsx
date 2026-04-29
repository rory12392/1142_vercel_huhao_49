import { removeGrocery } from '@/actions/grocery.action_49';

const DeleteButton_xx = ({ id }: { id: string }) => {
  const removeGroceryWithId = removeGrocery.bind(null, id);

  return (
    <form action={removeGroceryWithId}>
      <input type="hidden" name="name" value="random" />
      <button
        type="submit"
        className="bg-red-500 text-white p-2 text-xs rounded"
      >
        delete
      </button>
    </form>
  );
};

export default DeleteButton_xx;