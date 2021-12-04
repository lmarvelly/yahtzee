import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from '../functions/Rules';

/**
 * @constant diceCombo1 [1, 1, 1, 2, 2]
 * @constant diceCombo2 [3, 2, 2, 2, 2]
 * @constant diceCombo3 [4, 2, 1, 2, 4]
 * @constant diceCombo4 [3, 5, 2, 2, 2]
 * @constant diceCombo5 [6, 1, 1, 6, 2]
 * @constant diceCombo6 [1, 1, 1, 1, 1]
 * @constant diceCombo7 [1, 3, 4, 2, 2]
 * @constant diceCombo8 [1, 3, 4, 5, 2]
 * @constant diceCombo9 [6, 3, 3, 5, 2]
 * @constant diceCombo10 [3, 3, 3, 3, 3]
 */
const diceCombo1 = [1, 1, 1, 2, 2];
const diceCombo2 = [3, 2, 2, 2, 2];
const diceCombo3 = [4, 2, 1, 2, 4];
const diceCombo4 = [3, 5, 2, 2, 2];
const diceCombo5 = [6, 1, 1, 6, 2];
const diceCombo6 = [1, 1, 1, 1, 1];
const diceCombo7 = [1, 3, 4, 2, 2];
const diceCombo8 = [1, 3, 4, 5, 2];
const diceCombo9 = [6, 3, 3, 5, 2];
const diceCombo10 = [3, 3, 3, 3, 3];

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

test("Should correctly count 1 five and return a score of 5", () =>
{
	const result = fives.evalRoll(diceCombo4);

	expect(result).toBe(5);
});

test("Should correctly count 0 fives and return a score of 0", () =>
{
	const result = fives.evalRoll(diceCombo3);

	expect(result).toBe(0);
});

test("Should correctly count 0 sixes and return a score of 0", () =>
{
	const result = sixes.evalRoll(diceCombo3);

	expect(result).toBe(0);
});

test("Should correctly count 2 sixes and return a score of 12", () =>
{
	const result = sixes.evalRoll(diceCombo5);

	expect(result).toBe(12);
});

test(`Three of a kind: Should count up the value of all the dice if there's at least three of a kind`, () =>
{
	const result1 = threeOfKind.evalRoll(diceCombo4);
	const result2 = threeOfKind.evalRoll(diceCombo6);
	const result3 = threeOfKind.evalRoll(diceCombo2);

	expect(result1).toEqual(14);
	expect(result2).toEqual(5);
	expect(result3).toEqual(11);
});

test(`Four of a kind: Should count up the value of all the dice if there's at least four of a kind`, () =>
{
	const result1 = fourOfKind.evalRoll(diceCombo4);
	const result2 = fourOfKind.evalRoll(diceCombo6);
	const result3 = fourOfKind.evalRoll(diceCombo2);

	expect(result1).toEqual(0);
	expect(result2).toEqual(5);
	expect(result3).toEqual(11);
});

test(`Full House: 3 of one kind and 2 of another, returns 25 points`, () =>
{
	const result1 = fullHouse.evalRoll(diceCombo1);
	const result2 = fullHouse.evalRoll(diceCombo6);
	const result3 = fullHouse.evalRoll(diceCombo2);

	expect(result1).toEqual(25);
	expect(result2).toEqual(0);
	expect(result3).toEqual(0);
});

test(`Small straight: 4 in a row, returns 25 points`, () =>
{
	const result1 = smallStraight.evalRoll(diceCombo1);
	const result2 = smallStraight.evalRoll(diceCombo7);
	const result3 = smallStraight.evalRoll(diceCombo8);
	const result4 = smallStraight.evalRoll(diceCombo9);

	expect(result1).toEqual(0);
	expect(result2).toEqual(30);
	expect(result3).toEqual(30);
	expect(result4).toEqual(0);
});

test(`Large Straight: 4 in a row, returns 25 points`, () =>
{
	const result1 = largeStraight.evalRoll(diceCombo1);
	const result2 = largeStraight.evalRoll(diceCombo7);
	const result3 = largeStraight.evalRoll(diceCombo8);
	const result4 = largeStraight.evalRoll(diceCombo9);

	expect(result1).toEqual(0);
	expect(result2).toEqual(0);
	expect(result3).toEqual(40);
	expect(result4).toEqual(0);
});

test(`Yahtzee: 5 of the same, returns 50 points`, () =>
{
	const result1 = yahtzee.evalRoll(diceCombo1);
	const result2 = yahtzee.evalRoll(diceCombo7);
	const result3 = yahtzee.evalRoll(diceCombo8);
	const result4 = yahtzee.evalRoll(diceCombo9);
	const result5 = yahtzee.evalRoll(diceCombo6);
	const result6 = yahtzee.evalRoll(diceCombo10);

	expect(result1).toEqual(0);
	expect(result2).toEqual(0);
	expect(result3).toEqual(0);
	expect(result4).toEqual(0);
	expect(result5).toEqual(50);
	expect(result6).toEqual(50);
});

test(`Change: Adds the total of all the rolled dice`, () =>
{
	const result1 = chance.evalRoll(diceCombo1);
	const result2 = chance.evalRoll(diceCombo7);
	const result3 = chance.evalRoll(diceCombo8);
	const result4 = chance.evalRoll(diceCombo9);
	const result5 = chance.evalRoll(diceCombo6);
	const result6 = chance.evalRoll(diceCombo10);

	expect(result1).toEqual(7);
	expect(result2).toEqual(12);
	expect(result3).toEqual(15);
	expect(result4).toEqual(19);
	expect(result5).toEqual(5);
	expect(result6).toEqual(15);
});

