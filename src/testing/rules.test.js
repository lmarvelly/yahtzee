import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from '../Rules';

const diceCombo1 = [1, 1, 1, 2, 2];
const diceCombo2 = [3, 2, 2, 2, 2];
const diceCombo3 = [4, 2, 1, 2, 4];

test("Should correctly count 3 One's and return the score of 3", () =>
{
	const result = ones.evalRoll(diceCombo1);

	expect(result).toBe(3);
});

test("Should correctly count 0 One's and return the score of 0", () =>
{
	const result = ones.evalRoll(diceCombo2);

	expect(result).toBe(0);
});

test("Should correctly count 4 Twos and return a score of 8", () =>
{
	const result = twos.evalRoll(diceCombo2);

	expect(result).toBe(8);
});

test("Should correctly count 2 Twos and return a score of 4", () =>
{
	const result = twos.evalRoll(diceCombo1);

	expect(result).toBe(4);
});

test("Should correctly count 1 Three and return a score of 3", () =>
{
	const result = threes.evalRoll(diceCombo2);

	expect(result).toBe(3);
});

test("Should correctly count 0 fours and return a score of 0", () =>
{
	const result = fours.evalRoll(diceCombo2);

	expect(result).toBe(0);
});

test("Should correctly count 2 fours and return a score of 8", () =>
{
	const result = fours.evalRoll(diceCombo3);

	expect(result).toBe(8);
});

// @TODO Finish simple test cases