import { generateId } from "../Utils/generateId"

export class House {
  constructor({ age, color, sqft, imgUrl, price }) {
    this.id = generateId()
    this.age = age,
      this.color = color,
      this.sqft = sqft,
      this.imgUrl = imgUrl
    this.price = price
  }
  get Template() {
    return `
    <div class="col-md-4">
      <div class="bg-white rounded shadow">
        <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="car image">
        <div class="p-3">
          <p>${this.age}</p>
          <p>${this.color}</p>
          <p>${this.sqft}</p>
          <p>$${this.price}</p>
          <p>Color: ${this.color}</p>
        </div>
        <button class="btn btn-outline-danger" onclick="app.carsController.deleteCar('${this.id}')"> delete </button>
      </div>
    </div>
  `
  }
}