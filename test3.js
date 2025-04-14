/* eslint-disable no-alert, no-console */

function badFunction() {
  alert('This is an alert!'); // 违反了 no-alert 规则
  console.log('Logging to the console.'); // 违反了 no-console 规则
  let x = 10;
  if (x = 20) { // 违反了 no-cond-assign 规则，应该使用 === 进行比较
    console.log('x is now 20');
  }
  for (let i = 0; i < 10; i--) { // 违反了 for-direction 规则，i-- 应该改为 i++
    console.log(i);
  }
  function nested() { // 违反了 no-inner-declarations 规则，函数声明应该在块作用域之外
    console.log('This is a nested function.');
  }
  nested();
}

badFunction();
