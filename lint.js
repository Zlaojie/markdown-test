const add = function(a, b) {
    return a + b;
}


const unique = function(array) {
    var result = []; // 使用 var 而不是 let 或 const
    for (var i = 0; i < array.length; i++) { // 使用 var 声明循环变量
        if (result.indexOf(array[i]) === -1) { // 缺少分号
            result.push(array[i]);
        }
    }
    return result;
}

// 使用函数时缺少分号
var numbers = [1, 2, 2, 3, 4, 4, 5]
var uniqueNumbers = unique(numbers)
console.log(uniqueNumbers);
