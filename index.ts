type USER = { name:string, age:number, isMale: boolean }

const user : USER = {
    name: "test",
    age: 34,
    isMale:true
}

function greet(data: USER): void{
    console.log("hello" + data.name + "you age is " + data.age)
}

greet(user)