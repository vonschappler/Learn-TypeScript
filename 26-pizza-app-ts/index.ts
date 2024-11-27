type Pizza = {
  id: number;
  name: string;
  price: number;
};

type NewPizza = Omit<Pizza, 'id'>;

type Order = {
  id: number;
  pizza: Pizza;
  status: 'ordered' | 'completed';
};

let cashInRegister: number = 100;
let orderId: number = 1;
let pizzaId: number = 1;
const orderQueue: Order[] = [];

const menu: Pizza[] = [
  {
    id: pizzaId++,
    name: 'Margherita',
    price: 8,
  },
  {
    id: pizzaId++,
    name: 'Pepperoni',
    price: 10,
  },
  {
    id: pizzaId++,
    name: 'Hawaiian',
    price: 10,
  },
  {
    id: pizzaId++,
    name: 'Veggie',
    price: 9,
  },
];

const addNewPizza = (newPizzaObj: NewPizza): Pizza => {
  const newPizza: Pizza = { id: pizzaId++, ...newPizzaObj };
  menu.push(newPizza);
  return newPizza;
};

const placeOrder = (pizzaName: string): Order | undefined => {
  const pizza = menu.find((menuItem) => menuItem.name === pizzaName);
  if (!pizza) {
    console.error(
      `There is no ${pizzaName} on the menu, please consider adding this before placing this order.`
    );
    return;
  }
  cashInRegister += pizza.price;
  const newOrder: Order = { id: orderId++, pizza, status: 'ordered' };
  orderQueue.push(newOrder);
  return newOrder;
};

const completeOrder = (orderId: number): Order | undefined => {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`There is no order with the id ${orderId}`);
    return;
  }
  order.status = 'completed';
  return order;
};

export const getPizzaDetail = (
  identifier: string | number
): Pizza | undefined => {
  if (typeof identifier === 'string') {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === 'number') {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError(
      'Parameter `identifier` must be of type string or number'
    );
  }
};

// this will trigger a type checking error, which will be fixed in later sections
addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });
addNewPizza({ name: 'BBQ Chicken', price: 12 });
addNewPizza({ name: 'Spicy Sausage', price: 11 });

placeOrder('Chicken Bacon Ranch');
completeOrder(1);

getPizzaDetail('Margeritta');
getPizzaDetail(3);

console.log({ menu, cashInRegister, orderQueue });
