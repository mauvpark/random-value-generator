export class RandomValueGenerator {
	private index: number;
	constructor() {
		this.index = 0;
	}

	/**
	 *
	 * @param array Arrays that you want to pick
	 * @param random Whether it will be picked randomly
	 * @returns {any} An element which is returned from the array.
	 *
	 * @example
	 * const RandomGenerator = new RandomValueGenerator();
	 * RandomGenerator.generate(["1", "2", "3"], true);
	 */
	public generate(array: any[], random: boolean): any {
		const length = array.length;

		if (random) {
			// Random values will be picked from here.
			return array[Math.floor(Math.random() * length)];
		} else {
			// Serial values will be picked from here.
			const val = array[this.index];
			if (this.index === length - 1) {
				this.index = 0;
			} else {
				this.index++;
			}
			return val;
		}
	}
}
