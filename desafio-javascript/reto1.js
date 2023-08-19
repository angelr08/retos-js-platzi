// Escribir una función que retorne el tipo de dato del valor pasado 
function solution(valor) {
    return typeof valor;
  }

// Función que devuelve el valor de la propina requerida
function calculateTip(billAmount, tipPercentage) {
    return (billAmount / 100) * tipPercentage;
  }

// Función que determina que un año es un bisiesto 
function isLeapYear(year) {
    if (year <= 0) {
      return false
    }
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    } else {
      if (year % 100 === 0 && year % 400 === 0) {
        return true;
      }
      return false;
    }
  }

// Función que dibuja un triángulo isósceles 
function printTriangle(size, character) {
  const triangle = []
  for (let i = 1; i <= size; i++) {
    triangle.push(character.repeat(i).padStart(size));
  }
  return triangle.join('\n');
}

console.log(printTriangle(5, "*"));

// Función que retorna un array con los gatos con más seguidores
function findFamousCats(cats) {
  const maxFamousCats = [];
  const totalFollowers = cats.map(cat => cat.total = cat.followers.reduce((a, b) => a + b)).sort((a, b) => b - a);
  const maxFollowers = totalFollowers[0];
  cats.filter(cat => cat.total === maxFollowers).forEach(michi => maxFamousCats.push(michi.name));
  return maxFamousCats;
}

console.log(findFamousCats([
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Michi",
    followers: [100, 300]
  },
]));
console.log(findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  }
]));

// Función que retorna el promedio de la nota de estudiantes y su curso.

function getStudentAverage(students) {
  const averages = {
    classAverage: null,
    students: []
  }
  students.forEach(student => {
    averages.students.push({
      name: student.name,
      average: Number((student.grades.reduce((a, b) => a + b) / student.grades.length).toFixed(2))
    })
  })
  averages.students.forEach(student => averages.classAverage += student.average);
  averages.classAverage = Number((averages.classAverage / averages.students.length).toFixed(2));
  return averages;
}

console.log(getStudentAverage([
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
]));

// Función que retorna el palíndromo más largo en una lista 

function findLargestPalindrome(words) {
  let maxNumber = 0;
  const palindromes = []
  words.forEach(word => {
    let word2 = '';
    let extension = word.length - 1;
    while (extension > -1) {
      word2 += word[extension];
      extension--;
    }
    if (word === word2) {
      palindromes.push({
        name: word,
        length: word.length
      });
    } 
  })
  if (palindromes.length < 1) {
    return null;
  }
  palindromes.forEach(number => {
    if (number.length > maxNumber) {
      maxNumber = number.length;
    }
  })
  const palindrome = palindromes.filter(palindrome => palindrome.length === maxNumber);
  return palindrome[0].name;
}

console.log(findLargestPalindrome(["racecar", "level", "world", "hello"]));
console.log(findLargestPalindrome(["Platzi", "javascript", "html", "css"]));

// Calculadora usando closures
function createCalculator() {
  let total = 0;
  return {
    add (n) {
      return total += n
    },
    subtract (n) {
      return total -= n
    }
  }
}

const calculator = createCalculator()
console.log(calculator.add(10));
console.log(calculator.subtract(-10));

//Simulador de Map
function myMap(array, func) {
  const result = []
  array.forEach(element => {
    result.push(func(element))
  })
  return result;
}

console.log(myMap([1,2,3,4], (num) => num * 2));
console.log(myMap([
  {name: "michi", age: 2},
  {name: "firulais", age: 6}],
  (pet) => pet.name));

// Planificador de tareas

function createTaskPlanner() {
  let tasksList = [];
  return {
    addTask(task) {
      task.completed = false;
      tasksList.push(task);
    },
    removeTask(value) {
      const eliminatedTask = tasksList.find(task => task.id == value);
      const removeIndex = tasksList.findIndex(task => task.id == value);
      tasksList.splice(removeIndex, 1);
      return eliminatedTask;
    },
    getTasks() {
      return tasksList;
    },
    getPendingTasks() {
      const pendingTasks = tasksList.filter(task => task.completed == false);
      return pendingTasks;
    },
    getCompletedTasks() {
      const completedTasks = tasksList.filter(task => task.completed == true);
      return completedTasks;
    }, 
    markTaskAsCompleted(value) {
      const taskIndex = tasksList.findIndex(task => task.id == value || task.name == value);
      tasksList[taskIndex].completed = true;
    },
    getSortedTasksByPriority() {
      const priorityTasks = [...tasksList].sort((a, b) => a.priority - b.priority);
      return priorityTasks;
    },
    filterTasksByTag(tag) {
      const tagTasks = tasksList.filter(task => {
        if (task.tags.includes(tag) == true) {
          return task;
        }
      })
      return tagTasks;
    },
    updateTask(taskId, updates) {
      const updateIndex = tasksList.findIndex(task => task.id == taskId);
      tasksList[updateIndex] = {...tasksList[updateIndex], ...updates};
    }
  }
}

const planner = createTaskPlanner();

planner.addTask({
  id: 2,
  name: "Llamar a Juan",
  priority: 3,
  tags: ["personal"]
});

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.updateTask(1, {
  id: 1,
  name: "Comprar granos",
  priority: 3,
  tags: ["shopping", "home"]
})


console.log(planner.getTasks());

//Función que envía un mensaje tras 2 segundos
function sendEmail(email, subject, body) {
  return new Promise((resolve, reject) => {
    const isNotAEmail = email == '' || subject == '' || body == ''
    if (isNotAEmail) {
      reject(new Error('Hacen falta campos para enviar el mensaje'))
    } else {
      setTimeout(() => {
        const message = {
          email: email,
          subject: subject,
          body: body
        }
        resolve(message)
      }, 2000)
    }
  })
}

sendEmail(
  "test@mail.com",
  "Nuevo reto",
  "Únete a los 30 días de JS"
)
.then(result => console.log(result))

sendEmail(
  "test@mail.com",
  "",
  "Únete a los 30 días de JS"
)
.then(result => console.log(result))
.catch(error => console.log(error))

// De callback Hell a Promesas 
//Código en callback hell
/*function runCode() {
  const strings = [];
  return new Promise((resolve) => {
    doTask1((rta1) => {
      strings.push(rta1);
      doTask2((rta2) => {
        strings.push(rta2);
        doTask3((rta3) => {
          strings.push(rta3);
          resolve(strings);
        })
      })
    })
  })
}*/

// Código en Promesas
function runCode() {
  const strings = [];
  return doTask1()
    .then(rta1 => {
      strings.push(rta1)
      return doTask2()
    })
    .then(rta2 => {
      strings.push(rta2)
      return doTask3()
    })
    .then(rta3 => {
      strings.push(rta3)
      return strings
    })
  }


function doTask1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(('Task 1'), 300));
  })
}

function doTask2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(('Task 2'), 300));
  })
}

function doTask3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(('Task 3'), 300));
  })
}

console.log(runCode());

// Código con async-await
async function runCode() {
  const strings = [];
  strings.push(await doTask1())
  strings.push(await doTask2())
  strings.push(await doTask3())
  return strings;
}

async function doTask1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(('Task 1'), 300));
  })
}

async function doTask2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(('Task 2'), 300));
  })
}

async function doTask3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(('Task 3'), 300));
  })
}

console.log(runCode());

// Función que valida un formulario de registro de usuario 
function validateForm(formData, registeredUsers) {
  const requiereInputs = ['name', 'lastname', 'email', 'password']
  const missingInputs = []
  let haveAllInputs = true;
  requiereInputs.forEach(input => {
    if (formData.hasOwnProperty(input) === false) {
      haveAllInputs = false;
      missingInputs.push(input);
    }
  })
  if (haveAllInputs === false) {
    let errorMessage = `Faltan los siguientes campos: ${missingInputs.join(', ')}`;
    throw new Error(errorMessage);
  } 
 const isEmailRegistered = registeredUsers.some(user => user.email == formData.email);
 if(isEmailRegistered === true) {
  throw new Error(`El email ${formData.email} ya se encuentra registrado`);
 } else {
  delete formData.password;
  registeredUsers.push(formData);
  return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`;
 }
}

const formData = {
  name: "Juan",
  lastname: "Perez",
  email: "juan@example.com",
  password: "123456"
}

const registeredUsers = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]

console.log(validateForm(formData, registeredUsers))

//Función para agrupar listas de productos

function groupProducts(products, category) {
  const bill = {
    products,
    totalPrice: 0
  }
  const productNames = []
  const productsByCategory = products.filter(product => product.category === category);
  productsByCategory.forEach(product => productNames.push(product.name));
  bill.products = productNames.join(', ');
  bill.totalPrice = productsByCategory.reduce((a, b) => a.price + b.price)
  return bill;
}

const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

console.log(groupProducts(products, "Clothing"));

// Función que encuentra la posición de un valor en un array bidimensional

function searchValue(array, value) {
  const positions = {
    row: undefined,
    column: undefined
  }
  array.forEach((element, index) => {
    if (element.includes(value)) {
      positions.row = index;
      positions.column = element.findIndex(number => number == value);
    }
  })
  if (positions.row == undefined || positions.column == undefined) {
    throw new Error("Valor no encontrado");
  }
  return positions;
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const value = 45

console.log(searchValue(array, value))

//Función que procesa una lista de compras

function processShoppingList(list) {
  let total = 0
  list.forEach(product => {
    if (product.name.includes('oferta')) {
      product.price -= product.price * 0.2;
    }
    product.price *= product.quantity;
    delete product.quantity;
    total += product.price
  })
  return total;
}

const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
]

console.log(processShoppingList(shoppingList));

function sortByAvailabilityAndPrice(products) {
  const orderProducts = [...products]
  const inStock = [];
  const outStock = [];
  orderProducts.forEach(product => {
    if(product.inStock == true) {
      inStock.push(product);
    } else {
      outStock.push(product);
    }
  })
  inStock.sort((a, b) => a.price - b.price);
  outStock.sort((a,b) => a.price - b.price);
  const productsByAvailability = [...inStock, ...outStock];
  return productsByAvailability;
}

const products1 = [
  { name: "product1", price: 10, inStock: true },
  { name: "product2", price: 20, inStock: false },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
]

console.log(sortByAvailabilityAndPrice(products1))

function hotelSystem(rooms) {
  const hotelRooms = new Array(rooms);
  console.log(hotelRooms, hotelRooms.length);
  return {
    searchReservation(id) {
      const reservation = hotelRooms.find(room => room.id = id)
      if (reservation !== undefined) {
        return reservation;
      } else {
        return "La reservación no fue encontrada";
      }
    },
    getSortReservations() {
      const hotelRoomsCopy = [...hotelRooms];
      sortReservations = hotelRoomsCopy.sort()
    }
  }
}

const hotel = hotelSystem(10);

hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.searchReservation(1);