/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// Створюємо функцію конструктор Vehicle.
function Vehicle(brand, model, year, mileage) {
  // Записуємо в this.brand значення аргументу brand, в this.model значення аргументу model і так далі зі всіма аргументами.
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}

// Рядкове представлення Vehicle - функція, яка повертає рядок: <brand> <model> <year>.
Vehicle.prototype.toString = function () {
  return `${this.brand} ${this.model} ${this.year}`;
};

// valueOf - метод, який використовується JavaScript для конвертації об'єкта в примітивне значення.
Vehicle.prototype.valueOf = function () {
  // Перевизначаємо його тут, щоб він повертав this.mileage.
  return this.mileage;
};

/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

// Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(brand, model, year, mileage, fuelType, speed) {
  // Викликаємо конструктор Vehicle за допомогою apply, передаємо в нього this та масив аргументів [brand, model, year, mileage].
  Vehicle.apply(this, [brand, model, year, mileage]);
  // Записуємо в this.fuelType значення аргументу fuelType, в this.speed значення аргументу speed.
  this.fuelType = fuelType;
  this.speed = speed;
}

// Перевизначаємо методи з Vehicle в Car.
// Рядкове представлення прототипу Car - функція, яка повертає рядок: <brand> <model> <year> - <fuelType>.
Car.prototype.toString = function () {
  return `${this.brand} ${this.model} ${this.year} - ${this.fuelType}`;
};

// Метод accelerate для прискорення швидкості прототипу Car, збільшує this.speed на передане число та виводить рядок в консоль: Автомобіль <brand> <model> прискорився до швидкості <speed> км/год.
Car.prototype.accelerate = function (value) {
  this.speed += value;
  console.log(
    `Автомобіль ${this.brand} ${this.model} прискорився до швидкості ${this.speed} км/год`
  );
};

// Метод brake для гальмування прототипу Car, зменшує this.speed на передане число та виводить рядок в консоль: Автомобіль <brand> <model> зменшив до швидкості <speed> км/год.
Car.prototype.brake = function (value) {
  this.speed -= value;
  console.log(
    `Автомобіль ${this.brand} ${this.model} зменшив до швидкості ${this.speed} км/год`
  );
};

/*
 * Функція конструктор: Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Конструктор Truck наслідуємо Vehicle, викликавши його в конструкторі з call.
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  // Викликаємо Vehicle.call та передаємо в нього this, brand, model, year, mileage.
  Vehicle.call(this, brand, model, year, mileage);
  // Записуємо в this.color значення аргументу color, в this.engineType значення аргументу engineType і так далі зі всіма аргументами.
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
}

// Додатковий метод specific для прототипу Truck, приймає число. Якщо воно більше towingCapacity, виводить рядок в консоль: Навантаження занадто важке для буксирування, інакше - Тягнення навантаження...
Truck.prototype.specific = function (value) {
  if (value > this.towingCapacity) {
    console.log(`Навантаження занадто важке для буксирування`);
  } else {
    console.log(`Тягнення навантаження...`);
  }
};

// Створюємо новий екземпляр об'єкта Truck
let truck = new Truck(
  "Toyota",
  "Tundra",
  2019,
  20000,
  "Red",
  "V8",
  10000,
  "Gasoline",
  "Automatic",
  4,
  5600
);

// Викликаємо метод specific з вагою меншою за towingCapacity
truck.specific(8000);

// Викликаємо метод specific з вагою більшою за towingCapacity
truck.specific(13000);

// Додаємо метод drive для прототипу Car, який збільшує kilometers на передане число, та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.
Car.prototype.drive = function (kilometers) {
  console.log(
    `Подорожуємо ${kilometers} кілометрів у ${this.brand} ${this.model}.`
  );
};

// Створюємо нову змінну car, що містить екземпляр об'єкта Car
var car = new Car("Audi", "A6", 2018, 30000, "Petrol", 0);

// Викликаємо функції toString та valueOf об'єкта car
console.log(car.toString());
console.log(car.valueOf());

// Використовуємо методи для прискорення та передаємо 50
car.accelerate(50);

// Використовуємо методи для гальмування та передаємо 20
car.brake(20);

// Викликаємо метод drive на об'єкті car з параметром 100
car.drive(100);

/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  // Перевіряємо, чи функцію було викликано з new, якщо ні виводимо помилку "Конструктор має бути викликаний з 'new'"
  if (new.target) {
    // Викликаємо Car.call та передаємо в нього this, brand, model, year, mileage
    Car.call(this, brand, model, year, mileage);
    //  Записуєм в this.batteryCapacity значення аргументу batteryCapacity
    this.batteryCapacity = batteryCapacity;
  } else {
    throw new Error("Конструктор має бути викликаний з 'new'");
  }
}

// Перевизначаємо toString для прототипу ElectricCar. Він має повертати <brand> <model> <year> - Батарея: <batteryCapacity> kWh.
ElectricCar.prototype.toString = function () {
  return `${this.brand} ${this.model} ${this.year} - Батарея: ${this.batteryCapacity} kWh`;
};

// Створюємо новий екземпляр ElectricCar.
let electricCar = new ElectricCar("Tesla", "Model S", 2020, 10000, 100);

// Викликаємо метод toString об'єкту electricCar та виводимо в консоль.
console.log(electricCar.toString());
