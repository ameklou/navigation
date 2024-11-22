// app/javascript/controllers/dropdown_controller.js

import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["menu", "mobileMenu"];

  toggle(event) {
    // Toggle the visibility of the desktop dropdown menu
    if (this.hasMenuTarget) {
      this.menuTarget.classList.toggle("hidden");
    }
  }

  toggleMobile(event) {
    // Toggle the visibility of the mobile dropdown menu
    if (this.hasMobileMenuTarget) {
      this.mobileMenuTarget.classList.toggle("hidden");
    }
  }
}
