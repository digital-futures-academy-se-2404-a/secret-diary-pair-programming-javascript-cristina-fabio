import Lock from "../src/Lock.js";

describe("Lock Class tests", () => {
	describe("Test unlock functionality", () => {
		let testLock;

		beforeEach(() => {
			testLock = new Lock();
		});

		afterEach(() => {
			testLock = undefined;
		});
		xit("should unlock when passed correct pin number into unlock()", () => {
			//Arrange
			const expected = true;
			//Act

			//Assert
			expect(testLock.unlock(1234)).toBe(expected);
		});
		xit("should not unlock when passed incorrect pin number into unlock()", () => {
			//Arrange
			const expected = false;
			//Act

			//Assert
			expect(testLock.unlock(1334)).toBe(expected);
		});
		xit("should change the value of lock to true when call", () => {
			//Arrange
			const expected = true;
			//Act
			testLock.lock();
			//Assert
			expect(testLock.checkLock()).toBe(expected);
		});
	});
});
