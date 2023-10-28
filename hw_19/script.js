/*
1 Створіть об'єкт room з параметри:
ключ height зі значенням 3
ключ tv зі значенням samsung
ключ big зі значенням true

2 Виведіть в alert тип даних параметра big
*/
let room = {
    height: 3,
    tv: 'samsung',
    big: true,
};
alert(typeof(room.big));



/*3 Перевірте, що цей об'єкт не є порожнім і що в ньому є ключ age.*/

let user = {
    name: "John",
    age: 30,
};
if (Object.keys(user).length !== 0) {
    console.log("This object is not empty");
    if ("age" in user) {
        console.log("Key 'age' exists");
    }
    else {
        console.log("Key 'age' does not exist");
    }
}
else {
    console.log("This object is empty");
}


/*
4 Отримайте з цього об'єкту елемент, де name == "Bob" і збережіть це в будь-якій змінній.
Видаліть із об'єктів (завдання 4) об'єкт з name == "Anna".*/

let users = {
    user_1: {
        name: "John",
        age: 30,
    },
    user_2: {
        name: "Bob",
        age: 21,
    },
    user_3: {
        name: "Anna",
        age: 19,
    }
}
let findUser;
for (let key in users) {
    if (users[key].name === "Bob") {
        findUser = users[key];
    }
    else if (users[key].name === "Anna") {
        delete users[key];
    }
}
if (!findUser) {
    console.log("Користувача з ім'ям 'Bob' не знайдено.");
}
console.log(users);




/* 5 Отримайте з об'єкта obj значення id у констанду id, не використовуючи вираз obj.id */
const obj = {
    id: 5,
    token: 12343423,
};
const { id } = obj;
console.log(id);

/*6 Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, 
середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
- Метод, який виводить на екран інформацію про автомобіль.
- Додавання ім’я водія у список
- Перевірка водія на наявність його ім’я у списку
- Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. */

let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2023,
    averageSpeed: 120,
    fuelTankCapacity: 60,
    fuelPer100Km: 7.5,
    drivers: ["John", "Elena", "Alex"],
};
function showCarInfo() {
    let carInfo = "Car info:\n";
    for (let key in car) {
        carInfo += key + " : " + car[key] + "\n";
    }
    alert(carInfo);
}
function addDriver() {
    let newDriverName = prompt('Name of driver');
    car.drivers.push(newDriverName);
    let driversList = "Updated drivers list:\n";
    for (let key in car.drivers) {
        driversList += car.drivers[key] + "\n";
    }
    alert(driversList);
}
function checkDriver() {
    let nameCheck = prompt("Введіть ім'я водія для перевірки:");
    let isDriverFound;
    for (let key in car.drivers) {
        if (car.drivers[key] == nameCheck) {
            isDriverFound = true;
            break;
        }
        else {
            isDriverFound = false;
        }
    }
    if (isDriverFound) {
        alert("Driver " + nameCheck + " is on the list");
    }
    else {
        alert("Driver " + nameCheck + " is not on the list");
    }
}
function calc(averageSpeed, fuelPer100Km) {
    
    let distance = parseFloat(prompt('Input distance (km)'));
    alert("Avarage speed = " + averageSpeed + " (km/hour)")
    let time = distance / averageSpeed;
    const hoursPerBreak = 4;
    const breakDuration = 1;
    let numberOfBreaks = Math.floor(time / hoursPerBreak);
    let totalBreakDuration = numberOfBreaks * breakDuration;
    let finalTime = (time + totalBreakDuration).toFixed(3);

    const distance100km = 100;
    let fuel = ((distance * fuelPer100Km) / distance100km).toFixed(3);

    alert("Final Time = " + time.toFixed(3) + " + " + totalBreakDuration.toFixed(3) + " = " + finalTime + " (hours)");
    alert("Fuel = " + fuel + " (liters)");
}
let choose = prompt('Choose an action: \n 1 - show car info \n 2 - add driver to the list \n 3 - checking if the driver is on the list \n 4 - time and fuel calculations');
switch (choose) {
    case '1':
        showCarInfo();
        break;
    case '2':
        addDriver();
        break;
    case '3':
        checkDriver();
        break;
    case '4':
        calc(car.averageSpeed, car.fuelPer100Km);
        break;
    default:
        alert("Error");
        break;
}
