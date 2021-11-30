import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from '../Rules';

const diceCombo1 = [1, 1, 1, 2, 2];

test("Should correctly count the amount of One's and return the score of the One's added together", () =>
{
	const result = ones.evalRoll(diceCombo1);

	expect(result).toBe(3);
});