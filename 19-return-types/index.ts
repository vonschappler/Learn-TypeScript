type UserRole = 'guest' | 'member' | 'admin';

type User = {
  username: string;
  role: UserRole;
};

const users: User[] = [
  {
    username: 'user1',
    role: 'admin',
  },
  {
    username: 'user2',
    role: 'member',
  },
  {
    username: 'user3',
    role: 'guest',
  },
];

const fetchUserDetails = (username: string): User => {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User owht username ${username} not found`);
  }
  return user;
};

const sum = (a: number, b: number) => {
  return a + b;
};
