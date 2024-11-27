type User = {
  id: number;
  username: string;
  role: 'member' | 'contributor' | 'admin';
};

const users: User[] = [
  {
    id: 1,
    username: 'john_doe',
    role: 'member',
  },
  {
    id: 2,
    username: 'jane_doe',
    role: 'contributor',
  },
  {
    id: 3,
    username: 'alice_doe',
    role: 'admin',
  },
  {
    id: 4,
    username: 'charlie_doe',
    role: 'member',
  },
];

const updateUser = (id: any, updates: any) => {};

updateUser(1, { username: 'new_john_doe' });
updateUser(4, { role: 'contributor' });
