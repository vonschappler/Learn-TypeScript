type Student = {
  name: string;
  grade: number;
};

const scores: number[] = [14, 21, 33, 42, 59];
const favs: string[] = ['chocolate', 'dogs', 'cuddling'];
const students: Student[] = [
  { name: 'Student A', grade: 10 },
  { name: 'Student B', grade: 9 },
  { name: 'Student C', grade: 7 },
  { name: 'Student D', grade: 3 },
  { name: 'Student E', grade: 2 },
  { name: 'Student F', grade: 5 },
];

function getLastItemNF<Type>(array: Type[]): Type | undefined {
  return array.at(-1);
}

const getLastItemAF = <Type>(array: Type[]): Type | undefined => {
  return array.at(-1);
};

console.log(getLastItemNF(scores));
console.log(getLastItemAF(favs));
console.log(getLastItemAF(students));
