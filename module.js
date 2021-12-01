const name = "shay";
const number = 22;
console.log(number);

const text = "hi world";
console.log(text);


const car = {

    name: "mercedes",

    year: 2019,

}

console.log(car)

const bool = true

console.log(bool)

// console.log(name)

// function HelloWorld() 

// console.log("hi")

// 
// HelloWorld()
// export default name;
// export default HelloWorld("shay belayneh");

// export { name, HelloWorld };


//שאלה 1

// export default number


//שאלה 2

// export { text }

//שאלה3

// export { car }

//שאלה 4

export { number, car, bool, text };


//שאלה 5

function Maarah(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {

        sum += array[i]

    }
    return sum
}

export default Maarah



