class Car {
  constructor() {
    this.on = false;
  }
  injectFuel() {
    console.log("Spraying fuel");
  }
  igniteFuel() {
    console.log("Boom");
  }
  startUp() {
    this.on = true;
    while (this.on) {
      this.injectFuel();
      this.igniteFuel();
    }
  }
}
