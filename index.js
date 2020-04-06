function add(a , b) {
    return a + b
}

add(5, 10);

//Arguments are the value you pass in
//Param are the named variables inside the function
//that recieve 

function sub(x , y) {
    return x - y
}

sub(10, 5)

////

function foo(z = 3) {
    console.log(z)
}

foo()

function example(a, b, c) {
    return (a + b + c)
}

example (10, 5, 3)
console.log(example.length)

// if(example.length == 1) {
//     return example(a - b - c)
// }

function foof(x,y = 1) {
    return console.log(x)
}

console.log(foof.length)

////

function wtf(q, w, e) {
    console.log(arguments.length)
    return q + w + e
}
//qwe but only q=4 and w=20 atm, so 2 arguments
//if we add another number below, it will assign it
//to 'e' and there will then be 3 arguments
wtf (4, 20,)

function foof(x,y = 1) {
    console.log(arguments.length)
}

foof(1,3)


////
// function foo (... args) {
//     console.log(args[3])
// }

// var arr = [1, 2, 3, 4, 5]

// foo(... arr)

function foo (x,y,z, ...args) {
    console.log(x,y,z, args)
}
//If you add a 4 below, it will be added to the array
foo(1 , 2, 3, 4, 5, 6, 7)

//////
function asd(...args) {
    console.log(args[5])
}

var arr = [1, 2, 3, 4, 5, 6, 7]

asd(...arr)


////
// let arr1 = [1,2,3]
// let arr2 = [arr1,4,5,6]
let arr1 = [1,2,3]
let arr2 = [...arr1,4,5,6]
console.log(arr2)
//
function gg(...args) {
    console.log(args[5])
}
gg (1, 3, 5, 4, 66, 77, 88)

//
