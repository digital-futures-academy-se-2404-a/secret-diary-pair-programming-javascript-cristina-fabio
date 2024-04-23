export default class Lock {
	#pin = 1234;
	#isLocked = false;

	unlock = (pin) => pin === this.#pin;

	lock = () => {
		this.#isLocked = true;
	};
	checkLock = () => this.#isLocked;
}
