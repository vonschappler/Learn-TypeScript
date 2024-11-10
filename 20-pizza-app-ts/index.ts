type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: 'ordered' | 'completed';
};

const menu: Pizza[] = [
  {
    id: 1,
    name: 'Margherita',
    price: 8,
  },
  {
    id: 2,
    name: 'Pepperoni',
    price: 10,
  },
  {
    id: 3,
    name: 'Hawaiian',
    price: 10,
  },
  {
    id: 4,
    name: 'Veggie',
    price: 9,
  },
];

let cashInRegister: number = 100;
let orderId: number = 1;

const orderQueue: Order[] = [];

const addNewPizza = (newPizza: Pizza) => {
  menu.push(newPizza);
  return menu;
};

const placeOrder = (pizzaName: string) => {
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

const completeOrder = (orderId: number) => {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`There is no order with the id ${orderId}`);
    return;
  }
  order.status = 'completed';
  return order;
};

export const getPizzaDetail = (identifier: string | number) => {
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

addNewPizza({ id: 5, name: 'Chicken Bacon Ranch', price: 12 });
addNewPizza({ id: 6, name: 'BBQ Chicken', price: 12 });
addNewPizza({ id: 7, name: 'Spicy Sausage', price: 11 });

placeOrder('Chicken Bacon Ranch');
completeOrder(1);

getPizzaDetail('Margeritta');
getPizzaDetail(3);

console.log({ menu, cashInRegister, orderQueue });
