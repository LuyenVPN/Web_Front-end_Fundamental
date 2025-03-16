const cart = [
  { name: "Mèn mén", price: 30000, quantity: 2 },
  { name: "Mì tôm", price: 5000, quantity: 1 },
  { name: "Bánh bao", price: 15000, quantity: 3 },
];
console.log(totalPrice(cart));
function totalPrice(cart) {
  return cart.reduce((acc, cur) => {
      return acc + (cur.price * cur.quantity);
  }, 0);
}
