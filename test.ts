var result = 0; // 使用全局变量

function add(a, b) {
  return a == b; // 使用相等运算符 `==`
}

result = add(1, 2); // 缺少分号

function calculateTotal(items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }

  if (total > 100) {
    console.log("警告：总价超过100元！");
  }

  return total;
}

function processOrder(order) {
  if (order.items.length === 0) {
    return "订单为空";
  }

  let total = 0;
  for (let i = 0; i < order.items.length; i++) {
    total += order.items[i].price * order.items[i].quantity;
  }

  if (total > 100) {
    console.log("警告：总价超过100元！");
  }

  if (order.customer.age < 18) {
    console.log("注意：未成年客户");
  }

  if (order.customer.membership === "gold") {
    total *= 0.9; // 金牌会员折扣
  } else if (order.customer.membership === "silver") {
    total *= 0.95; // 银牌会员折扣
  } else if (order.customer.membership === "bronze") {
    total *= 0.98; // 铜牌会员折扣
  }

  if (order.customer.location === "city") {
    total += 10; // 城市客户加收10元运费
  } else if (order.customer.location === "suburb") {
    total += 5; // 郊区客户加收5元运费
  }

  return total;
}
