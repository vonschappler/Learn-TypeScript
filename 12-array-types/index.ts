type Food = string;

let favoriteFood: Food = 'pizza';

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  age: number;
  name: string;
  isAdult: boolean;
  address?: Address;
};

type People = Person[];

let person1: Person = {
  name: 'von',
  age: 40,
  isAdult: true,
};

let person2: Person = {
  name: 'Schappler',
  age: 40,
  isAdult: true,
  address: {
    street: 'Some street',
    city: 'Some city',
    country: 'Some country',
  },
};

let people = [person1, person2];

const displayInfo = (person: Person) => {
  /*
    Because address is an optional property, we need to use optional chaining on that property to avoid type errors in our code.
    Here still there is another problem, because this specific function body has no type security checking, this can cause bad experience to the final user
  */
  console.log(`${person.name} lives at ${person.address?.street}`);
};

displayInfo(person1);
