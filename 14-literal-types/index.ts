// this is a generic type "string" (so any string can assigned to myName1)
let myName1 = 'Bob';

// this is a literal type (so only the string "Bob" can be assigned to it)
const myName2 = 'Bob';

// this will set a literal type to variables declared with let
let myName3: 'Bob' = 'Bob';

// it's also possible to to declare literal types to const declarations
const myName4: 'Bob' = 'Bob';

// this will trigger a type error because we are trying to reasign the value of myName1 to a different data type
myName1 = true;

// these will trigger a type error because we are trying to reasign the value of myName2 to a different value and / or data type
myName2 = 'bob';
myName2 = true;

// this will trigger a type error because we are trying to reasing the literal type for myName3
myName3 = 'Bobby';

// these will trigger a type error because we are trying to reasign the value of myName4 to a different value and / or data type
myName4 = 'bob';
myName4 = true;
