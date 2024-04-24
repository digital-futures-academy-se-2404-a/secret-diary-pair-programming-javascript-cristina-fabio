export default class Diary {
	#diaryEntries = [];

	getEntries = () => this.#diaryEntries;

	addEntry = (entry) => {
		if (!entry) return;
		this.#diaryEntries.push(entry);
	};
}
