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


//============> Pulse Check <============
