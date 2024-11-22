// app/javascript/controllers/navbar_controller.js

import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["menu", "mobileMenu"];

  toggleMenu() {
    // Toggle the mobile menu visibility
    this.mobileMenuTarget.classList.toggle("hidden");
  }

  closeMenu() {
    // Ensure the mobile menu is hidden when a link is clicked
    this.mobileMenuTarget.classList.add("hidden");
  }
}
