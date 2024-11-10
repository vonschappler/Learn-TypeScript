type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: string;
};

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

let cashInRegister: number = 100;
let orderId: number = 1;

const orderQueue: Order[] = [];

const addNewPizza = (newPizza: Pizza) => {
  menu.push(newPizza);
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
  const newOrder = { id: orderId++, pizza, status: 'ordered' };
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

addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });
addNewPizza({ name: 'BBQ Chicken', price: 12 });
addNewPizza({ name: 'Spicy Sausage', price: 11 });

placeOrder('Chicken Bacon Ranch');
completeOrder(1);

console.log({ menu, cashInRegister, orderQueue });
