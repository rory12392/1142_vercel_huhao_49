
import { fetchUsers } from '@/actions/user.actions_49';
import DeleteButton_49 from './DeleteButton_49';
const UserList_49 = async () => {
  const users = await fetchUsers();
  console.log('users', users);
  return (
    <div className='mt-4'>
      {users.length ? (
        <div className='max-w-lg'>
          {users.map((user) => {
            return (
              <h4
                key={user.id}
                className='text-lg flex justify-between items-center mb-2'
              >
                <div>{user.name}</div>
                <div>{user.email}</div>
                <DeleteButton_49 id={user.id} />
              </h4>
            );
          })} 
        </div>
        ) : (
        <p>No users found...</p>
      )}
    </div>
  );
};
export default UserList_49;