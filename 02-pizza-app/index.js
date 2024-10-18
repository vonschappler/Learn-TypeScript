const menu = [
  {
    name: 'Margherita',
    price: 8,
  },
  {
    name: 'Pepperoni',
    price: 10,
  },
  {
    name: 'Hawaiian',
    price: 10,
  },
  {
    name: 'Veggie',
    price: 9,
  },
];

const cashInRegister = 100;
const orderId = 1;

const orderQueue = [];

const addNewPizza = (newPizza) => {
  menu.push(newPizza);
  return menu;
};

const placeOrder = (pizzaName) => {
  const pizza = menu.find((menuItem) => menuItem.name === pizzaName);
  if (!pizza)
    return `There is no ${pizzaName} on the menu, please consider adding this before placing this order.`;
  cashInRegister += pizza.price;
  const newOrder = { id: orderId++, pizza, status: 'ordered' };
  orderQueue.push(newOrder);
  console.log(orderQueue, cashInRegister);
  return newOrder;
};

const completeOrder = (id) => {
  const order = orderQueue.find((order) => order.id === id);
  order.status = 'completed';
  return order;
};

addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });
addNewPizza({ name: 'BBQ Chicken', price: 12 });
addNewPizza({ name: 'Spicy Sausage', price: 11 });

placeOrder('Chicken Bacon Ranch');
completeOrder('1');

console.log({ menu, cashInRegister, orderQueue });

// console.log(placeOrder('Veggi'));
// console.log(placeOrder('Veggie'));
// console.log(placeOrder('Pepperoni'));
// console.log(completeOrder(1));
