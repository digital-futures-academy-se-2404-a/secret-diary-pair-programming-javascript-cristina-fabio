import Diary from "../src/Diary.js";

describe("Diary Test", () => {
	describe("Entires Tests", () => {
		let testDiary;

		beforeEach(() => {
			testDiary = new Diary();
		});

		afterEach(() => {
			testDiary = undefined;
		});

		it("should increase the length of the array by 1", () => {
			//Arrange
			const expected = testDiary.getEntries().length + 1;
			//Act
			testDiary.addEntry("entry");
			//Assert
			expect(testDiary.getEntries().length).toBe(expected);
		});
		it("should add the entry we pass on to diaryEntires[]", () => {
			//Arrange
			const testEntry = "Hello";

			//Act
			testDiary.addEntry(testEntry);
			//Assert
			expect(testDiary.getEntries().includes("Hello")).toBeTrue();
		});
		it("should add the entry we pass on to diaryEntires[]", () => {
			//Arrange
			const testEntry = null;
			const expected = [];

			//Act
			testDiary.addEntry(testEntry);
			//Assert
			expect(testDiary.getEntries()).toEqual(expected);
		});
	});
});
