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

let cashInRegister = 100;
let orderId = 1;

const orderQueue = [];

const addNewPizza = (newPizza) => {
  menu.push(newPizza);
};

const placeOrder = (pizzaName) => {
  const pizza = menu.find((menuItem) => menuItem.name === pizzaName);
  if (!pizza) {
    console.error(
      `There is no ${pizzaName} on the menu, please consider adding this before placing this order.`
    );
    return;
  }
  cashInRegister += pizza.price;
  const newOrder = { id: orderId++, pizza, status: 'ordered' };
  orderQueue.push(newOrder);
  return newOrder;
};

const completeOrder = (id) => {
  const order = orderQueue.find((order) => order.id === id);
  order.status = 'completed';
  return order;
};

addNewPizza({ name: 'Chicken Bacon Ranch', cost: 12 });
addNewPizza({ name: 'BBQ Chicken', cost: 12 });
addNewPizza({ name: 'Spicy Sausage', cost: 11 });

placeOrder('Chicken Bacon Ranch');
completeOrder('1');

console.log({ menu, cashInRegister, orderQueue });
