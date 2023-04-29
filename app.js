// const obj = {
//     name: "Alex",
//     age: 21
// }

// console.log(obj);
// //
// const data = JSON.stringify(obj)
// console.log(data, "stringify")

// console.log(JSON.parse(data), "parse");

// const btn = document.querySelector("button")

// // btn.addEventListener("click", () =>{
//     const getData = () => {
//     const request = new XMLHttpRequest() // создание запроса
//     request.open("GET", "data.json") // обьявление метода запроса и его путь
//     request.setRequestHeader("Content-Type", "application/json") //добавление
//     request.send() // отправка запроса

//     request.addEventListener('load', () =>{
//         const data = JSON.parse(request.response)
//         console.log(data);
//         // document.querySelector(".name").innerHTML = data.name
//         // document.querySelector(".age").innerHTML = data.age
//     })
// }
// //})
// getData()



// str num bool null undef - primitive
// objeckt arr - ob|links

// const num = 5
// const num2 = 7 * num
// console.log(num, "1");
// console.log(num2, "2");

// const obj = {
//     name: "Alex",
//     id: 1
// }
// const obj2 = { ...obj}
// obj2.name = "John"

// console.log(obj, "1")
// console.log(obj2, "2")

// const myFunc = (arg1, ...arg2) => {
//     console.log(arg1, "arg1")
//     console.log(arg2, "arg2")
// }

// myFunc("1", "2", "3", "4", "5", "6")

// const [one, ...two] = ["1", "2", "3", "4", "5", "6"]

// console.log(one)
// console.log(two)

// const [one, two, three, ...four] = "123 456 789 010"

// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);

// console.log("123".split(" ").join(""))

const wrapper = document.