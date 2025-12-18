export const userOrderHistory = (userId, orders) => {
  return orders.filter(o => o.userId === userId);
};
