import { ProxyState } from "../AppState"

function _draw() {
  let template = ''
  ProxyState.houses.forEach(c => template += c.Template)
  document.getElementById('listings').innerHTML = template
}

export class HosueController() {

  constructor(){
    ProxyState.on('cars', _draw)
    console.log('cars controller loaded')
  }

  viewHouses() {
    _draw()
    document.getElementById('modal-body-slot').innerHTML = getHouseForm()
  }

  createHouse(event) {
    event.preventDefault()
    let form = event.target
    console.log('hi from ')
  }
}

