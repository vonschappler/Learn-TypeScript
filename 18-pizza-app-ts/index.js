import { getPizzaDetail } from './index.ts';

// this will work as expected since the passed identifer is a number
console.log(getPizzaDetail(1));

// this will work as expected since the passed identifer is a string
console.log(getPizzaDetail('Veggie'));

// this will frown an error since the passed identifier is neither a string or a number
console.log(getPizzaDetail(false));
