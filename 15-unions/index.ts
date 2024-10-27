type User = {
  username: string,
  // union of literal types, that allows only one of those 3 values to the role property of a user
  role: 'guest' | 'member' | 'admin'
  password?: string
}

let guest1: User = {
  username: 'bob',
  role: "guest",
}

let member: User = {
  username: 'bob',
  role: "member",
  password: 'member-pass'
}

let admin: User = {
  username: 'bob',
  role: "admin",
  password: 'admin-pass'
}

// this will trigger an error because we are trying to set an undeclared type value to role

let guest2: User = {
  username: 'bob',
  role: 'some-role',
  password: 'guest-pass'
};