// function sum1/2(args) {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];    
//     }
//     return total;
// }

function sum1(args) {
    let total = 0;
    for (num of arguments){
        total += num;    
    }
    return total;
}

function sum2(...args) {
    let total = 0;
    for (num of args){
        total += num;    
    }
    return total;
}


// console.log(sum(1, 2, 3, 4))// === 10;
// console.log(sum(1, 2, 3, 4, 5))// === 15;

Function.prototype.myBind1 = function (context, ...bindTime) {
    let that = this;
    return function (...callTime) {
        //   return that.apply(context, bindTime.concat(callTime));
      return that.apply(context, [...bindTime, ...callTime]);
    }
 }

Function.prototype.myBind2 = function () {
  // arguments[0] = context
  let prevArgs = [];
  for(arg of arguments) {
    prevArgs.push(arg);
  }
  let that = this;
  return function () {
    // arguments
    let currArgs = [];
    for (arg of arguments) {
      currArgs.push(arg);
    }
    return that.apply(prevArgs[0], prevArgs.slice(1).concat(currArgs));
  }
}

Function.prototype.myBind = function () {
  let prevArgs = Array.from(arguments);
  let that = this;
  return function () {
    return that.apply(prevArgs[0], prevArgs.slice(1).concat(Array.from(arguments)));
  }
}


class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  // const markov = new Cat("Markov");
  // const pavlov = new Dog("Pavlov");
  
  // markov.says("meow", "Ned");
  // // Markov says meow to Ned!
  // // true
  
  // // bind time args are "meow" and "Kush", no call time args
  // markov.says.myBind(pavlov, "meow", "Kush")();
  // // Pavlov says meow to Kush!
  // // true
  
  // // no bind time args (other than context), call time args are "meow" and "a tree"
  // markov.says.myBind(pavlov)("meow", "a tree");
  // // Pavlov says meow to a tree!
  // // true
  
  // // bind time arg is "meow", call time arg is "Markov"
  // markov.says.myBind(pavlov, "meow")("Markov");
  // // Pavlov says meow to Markov!
  // // true
  
  // // no bind time args (other than context), call time args are "meow" and "me"
  // const notMarkovSays = markov.says.myBind(pavlov);
  // notMarkovSays("meow", "me");
  // // Pavlov says meow to me!
  // // true


 //      func.myBind
 // this  ^
 



 ////////////////////////////////////////////////////////////////////////////////



function curriedSum (amount) {
  let arr = [];
  return function _curry(num) {
      arr.push(num);
      amount -= 1;
      if (!amount) return arr.reduce((acc, ele) => acc + ele);
      return _curry;
  }
}

function curriedSum (amount) {
  let arr = [];
  return function _curry(num) {
      arr.push(num);
      if (arr.length === amount) return arr.reduce((acc, ele) => acc + ele);
      return _curry;
  }
}


// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// console.log(sumThree(4, 20, 6)); // == 30

// you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
// sumThree.curry(3)(4)(20)(6); // == 30

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));

// const sum = curriedSum(4);
// sum(5);
// sum(6);
// sum(7);
// console.log(sum(8));

Function.prototype.curry = function (numArgs) {
    let arr = [];
    let that = this;
    return function _curry(num) {
        arr.push(num);
        if (arr.length === numArgs) {
            return that.apply(that, arr)
        };
        return _curry;
    }
}
Function.prototype.curry = function (numArgs) {
    let arr = [];
    let that = this;
    return function _curry(num) {
        arr.push(num);
        if (arr.length === numArgs) {
            return that.call(that, ...arr)
        };
        return _curry;
    }
}

function sum(a,b,c,d) {
    return a + b + c + d;
}

// let a = sum.curry(4);
// console.log(a(1)(6)(5)(4));


 
    
  
  