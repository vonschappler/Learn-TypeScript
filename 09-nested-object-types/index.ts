type Food = string;

let favoriteFoot: Food = 'pizza';

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  age: number;
  name: string;
  isAdult: boolean;
  address: Address;
};

let person1: Person = {
  name: 'von',
  age: 40,
  isAdult: true,
  address: {
    street: 'Some street',
    city: 'Some city',
    country: 'Some country',
  },
};

let person2: Person = {
  name: 'Schappler',
  age: 40,
  isAdult: true,
  // this line will trigger an error because the address does not match the type address declared
  address: 'Street Address',
};
