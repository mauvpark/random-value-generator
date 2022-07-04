/**
 * @method generator
 * @example
 * const RandomGenerator = new RandomValueGenerator();
 * RandomGenerator.generate(["1", "2", "3"], true);
 */
export class RandomValueGenerator {
	/**
	 *
	 * @param array Arrays that you want to pick
	 * @param random Whether it will be picked randomly
	 * @returns {any} An element which is returned from the array.
	 * @example
	 * const RandomGenerator = new RandomValueGenerator();
	 * RandomGenerator.generate(["1", "2", "3"], true);
	 */
	public generator: (array: any[], random: boolean) => any;
}
