import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="mobile-menu"
export default class extends Controller {
  static targets = ["dropdown"]

  toggle() {
    console.log(event.currentTarget.querySelector("svg:first-child").classList)
    const menuButton = event.currentTarget.querySelector("svg:first-child")
    const closeButton = event.currentTarget.querySelector("svg:last-child")
    menuButton.classList.toggle("hidden")
    //closeButton.classList.toggle("hidden")
  }

  toggleDropdown() {
    this.dropdownTarget.classList.toggle("hidden")
  }
}