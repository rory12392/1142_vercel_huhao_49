
import { fetchUsers } from '@/actions/userActions_49';
const UserList_49 = async () => {
  const users = await fetchUsers();
  console.log('users', users);

  return (
    <>
      {users?.map((user) => {
        return <h3 key={user.id}>{user.email}</h3>;
      })}
    </>
  );
};

export default UserList_49;