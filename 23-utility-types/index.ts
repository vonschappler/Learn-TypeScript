type User = {
  id: number;
  username: string;
  role: 'member' | 'contributor' | 'admin';
};

type UpdateUser = Partial<User>;
type NewUser = Omit<User, 'id'>;

let newUserId: number = 1;

const users: User[] = [
  {
    id: newUserId++,
    username: 'john_doe',
    role: 'member',
  },
  {
    id: newUserId++,
    username: 'jane_doe',
    role: 'contributor',
  },
  {
    id: newUserId++,
    username: 'alice_doe',
    role: 'admin',
  },
  {
    id: newUserId++,
    username: 'charlie_doe',
    role: 'member',
  },
];

const updateUser = (id: number, updates: UpdateUser): void => {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) return console.log(`There is no user with id ${id}`);
  Object.assign(foundUser, updates);
};

const addUser = (newUser: NewUser): User => {
  const user: User = { id: newUserId++, ...newUser };
  users.push(user);
  return user;
};

updateUser(1, { username: 'new_john_doe' });
updateUser(4, { role: 'contributor' });

addUser({ username: 'joe_schmoe', role: 'member' });

console.log(users);
