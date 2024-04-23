export default class Lock {
  #pin = 1234;

  unlock = (pin) => pin === this.#pin;
}
