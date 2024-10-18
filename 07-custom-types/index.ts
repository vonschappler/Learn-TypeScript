type Food = string;

let favoriteFoot: Food = 'pizza';

type Person = {
  age: number;
  name: string;
  isAdult: boolean;
};

let person1: Person = {
  name: 'von',
  age: 40,
  isAdult: true,
};

let person2: Person = {
  name: 'Schappler',
  age: 40,

  // this will trigger a potential error, since the person object does not expect the porperty "isadult", but "isAdult" instead
  isadult: true,
};
