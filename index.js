// CommonJS library

// const Car = require("./car");

// import Car from "./car.js"; // Para export default
import { Car } from "./car.js"; // 1º opção: Renomear os arquivos car.mjs e index.mjs; 2º opção: npm init para criar um packge.json

function createCars() {
  const car1 = new Car("Toyota", "Corola", 2022);
  const car2 = new Car("Honda", "Civic", 2023);

  car1.turnOn();
  car2.turnOn();

  console.log(car1.getDetails());
  console.log(car2.getDetails());

  car1.turnOff();
  car2.turnOff();
}

createCars();

// const buttonElement = document.getElementById("run-function");

// buttonElement.addEventListener("click", createCars);
