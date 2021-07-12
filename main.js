console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

//============> Pulse Check <============

//Q1- Define the following objects.

//Define an object person containing three attributes: name, age, gender.
const person = { name: "Naif", age: "28",gender: "Male" };

//Define an object movie containing three attributes: name, length, genre.
const movie = { name: "Naif", length: "2:00",genre: "Action" };

//Define an object store containing two attributes, name and address.
//Address is an object with two attributes, buildingNumber and street.

const store={name: "Naif",Address: { buildingNumber: 10, street: "Madaba" } }

//Q2- Access the following values.

//Access the value of the key Mars in the following objects:
// a- using a dot notation
const orderedSolarSystem = {
    Mercery: "first",
    Venus: "second",
    Earth: "third",
    Mars: "fourth",
  };
  orderedSolarSystem.Mars
  // b- using a bracket notation
  const unorderedSolarSystem = {
    Mars: "fourth",
    Earth: "third",
    Mercery: "first",
    Venus: "second",
  };
  unorderedSolarSystem["Mars"]

//Access the value of the key koala in the following object:
const animalDiet = {
    mammals: {
      cat: "carnivore",
      dog: "carnivore",
      koala: "herbivore",
    },
    fish: {
      shark: "carnivore",
    },
  };
  animalDiet.mammals.koala

//Q3- Assign the following values to the corresponding object.
const studentOne = {
    englishGrade: 80,
    scienceGrade: 90,
  };
  
//   Add the math grade (80) to the student using a dot notation.
    studentOne.mathGrade=80
//   Change the english grade to a 90 using a dot notation.
    studentOne.englishGrade=90
//   Add an attribute average with the average of the score of all three grades using a dot notation.
  studentOne.average=((studentOne.englishGrade+studentOne.scienceGrade))/3

//__________________________________________________________________
  const studentTwo = {
    englishGrade: 80,
    scienceGrade: 90,
  };
//   Add the math grade (80) to the student using a bracket notation.
    studentTwo["mathGrade"]=80
// Change the english grade to an 90 using a bracket notation.
    studentTwo["englishGrade"]=90
// Add an attribute average with the average of the score of all three grades using a bracket notation.
    studentTwo["average"]=(studentTwo.englishGrade+studentTwo.scienceGrade+studentTwo.mathGrade)/3

//Assign the following variables as a key-value pair to the object. Make sure to use the name of the variables.

const objectKey = "key";
const ObjectValue = "value";
Object[objectKey]
Object[ObjectValue]
const object = {objectKey:ObjectValue};


//============> Practice <============

//Q1- Figure out the syntax errors in the following, and fix them.
const person_1 = {name:"john", age:20} //curly brackets && john in qouts

const car = {brand: "Toyota", model: 2020} //Clone

const employee ={name: "Jane", position: "developer"} //developer in qouts

//Q2- Check the following objects and solve the requirements.
const person_2 = {
    firstName: "John",
    lastName: "Doe",
    age: 24,
  };

// Access the age property.
person_2.age
// Modify the person's age to be 23 years old.
person_2.age=23
// Add a property called work with the value of an object with two keys, position and salary.
person_2.work={position:"developer",salary:700}
//________________________________________________________
const employees = [
    {
      id: 1,
      name: {
        first: "John",
        last: "Doe",
      },
      position: "Designer",
    },
    {
      id: 2,
      name: {
        first: "Jane",
        last: "Doe",
      },
      position: "Engineer",
    },
  ];

//   Access the first name property of both employees.
    employees[0].name.first
    employees[1].name.first
// Add an employee object with your name and the position of full-stack developer.
    employees[2]={id:3,name:{first: "Naif",last: "ALZriqat",},position: "full-stack developer",}

//__________________________________________________________
const cars = {
    toyota: {
      name: "prius",
      model: 2019,
    },
    nissan: {
      name: "leaf",
      model: 2020,
    },
  };
//   Access the model value of both cars.
    cars.toyota.model
    cars.nissan.model
// Change the prius model from 2019 to 2020.
cars.toyota.model=2020
// Add a new car of your choice.
cars.mercedes={name:"maybach", model:2020}
// Add a property isAutomatic for all three cars.
cars.toyota.isAutomatic=true
cars.nissan.isAutomatic=false
cars.mercedes.isAutomatic=true

//Q3- Write a factory function createUser that accepts two string
// arguments, firstName and lastName, returning an object
// representing the user.

const createUser = function (firstName, lastName) {
    const user={firstName:firstName,lastName:lastName}
    return user
  };

//Q4- Write a factory function createCar that accepts three string
//arguments, brand, name, and color, returning an object representing the car.

const createCar = function (brand, name, color) {
    const car={brand: brand, name: name, color: color}
    return car
  };

//Q5- Write a function getFullName that accepts an object representing a person and
//returns that person's full name in a string.

const getFullName = function (person) {
    return person.first+" "+person.middle+" "+person.last
  };
  
//Q6- Write a function olderThan that accepts two objects, personOne
//and personTwo, and returns a string that represent who is older than the other.
const olderThan = function (personOne, personTwo) {
    if(personOne.age>personTwo.age){
        return personOne.name+" is older than "+ personTwo.name
    }else{
        return personTwo.name+" is older than "+ personOne.name
    }
  };


//Q7- Write a function isPropertyOf that accepts a string
//and an object and returns true if the string is a property of
//the object. Return false if it isn't.

const isPropertyOf = function (string, object) {
    if(object.hello===string)
    {
        return true
    }else{ return false}
  };

//Q8- Write a function numberOfKeys that accepts an object and
//returns the number of keys present in the object.
const numberOfKeys = function (object) {
    return Object.keys(object).length
  };
  
//Q9- Write a function valuesToString that accepts an object and
//returns a string of all the values from the object separated
//by an empty space.
const valuesToString = function (object) {
    const arr= Object.values(object)
   return arr.join(" ")
  };


//Q10- Write a function keyInObject that accepts two arguments,
//object and key, and checks if the key is present within the
//object. Return true if the key is present and false if it is absent.

const keyInObject = function (object, key) {
    
    if(object.hasOwnProperty(key)){
        return true
    }else{
        false
    }
  };//why else is undefinde



//============> Extra  Practice <============

//Q1- Check the following object and solve the requirements.
// HINT: read about the delete operator
const family = {
    name: "John",
    children: [
      {
        name: "Bill",
        children: [
          {
            name: "Mark",
            children: [],
          },
          {
            name: "Sarah",
            children: [
              {
                name: "Smith",
                children: [],
              },
              {
                name: "Stan",
                children: [],
              },
            ],
          },
          {
            name: "Samuel",
            children: [],
          },
        ],
      },
      {
        name: "Jane",
        children: [],
      },
    ],
  };
  

// Access the value of Sarah's children and the value of Samuel's children.
family.children[0].children[1].children
family.children[1].children

// Add a child for Samuel named Sam that has two children Marry and Gwen.
family.children[1].children.name="Sam "
family.children[1].children.children={name:"Marry"}
family.children[1].children.children[1]={name:"Gwen"}
// Delete the children property from the people who don't have children.
// if(family.children[0].object.keys("children")[0]===""||family.children[1].object.keys("children")[1]===""){
//     return 0
// }

//Q2- Write a factory function createIceCream that accepts Three
//arguments, coneType, flavour, and topping, and returns an 
//object representing the ice-cream.
const createIceCream = function (coneType, iceCreamFlavour, topping) {
   const ice= {coneType: coneType, flavour: iceCreamFlavour, topping: topping}
   return ice
  };


//Q3- Try the following code and explain the results
const employeeOne = {
    id: 0,
    name: "John",
    position: "",
  };
  
  const employeeTwo = {
    id: 1,
    name: "Jane",
    position: "Developer",
  };
  
  if (employeeOne.id) {
    console.log(employeeOne.name);
  }//will not return the value of name because the value of if is false
  
  if (employeeTwo.id) {
    console.log(employeeOne.name);
  } //will return the value of name
  
  if (employeeOne.position) {
    console.log(employeeOne.name);
  }//will not return the value of name because the value of if is false
  
  if (employeeTwo.position) {
    console.log(employeeOne.name);
  } ////will return the value of name
  
  if (employeeOne.salary) {
    console.log(employeeOne.name);
  }//will not return the value of name because the value of if is false (salary not defind)


//Q4- Write a function isValidUser that accepts an object representing login information and returns true if the user is valid otherwise return false. Read the comments for more information.
// things to validate:
// 1- length of the email is greater than or equal to 6
// 2- length of the password is greater than or equal to 8
// 3- email contains `@` and `.com`
// 4- the user must be in the users object
// 5- both of the passwords match
// 6- when you compare information make sure to reference
//the users object and access the value form there
const users = {
    mrpotato: {
      email: "mr.potato@gmail.com",
      password: "LonelyPotato",
    },
    thewiseman: {
      email: "wiseMan9999@gmail.com",
      password: "12345678",
    },
  };
  
  const isValidUser = function (loginInfo) {
    if(loginInfo.email.length>=6&&loginInfo.password.length>=8){
        if(loginInfo.email.includes("@")&&".com"){
            if((loginInfo.username===users[0]||loginInfo.username===users[1])&&(loginInfo.password===users[0].password||loginInfo.password===users[1].password)){
                    return true
            }
        }
    }else{return false}
  };
  
  //Q5- Write a function compareKeys that accepts two objects
  //and returns true if the key names and their order match.
  //Return false if they don't.
  const compareKeys = function (objectOne, objectTwo) {
    const keys1 = Object.keys(objectOne);
    const keys2 = Object.keys(objectTwo);
    if(keys1.length !== keys2.length){
        return false
    }else{return true}
  };
