type PuzzleLength = {
	easy: number;
	medium: number;
	hard: number;
	[key: string]: number;
};

export enum EMode {
	EASY,
	MEDIUM,
	HARD,
}

export const checkEqualPuzzle = (puzzle1: readonly number[], puzzle2: number[]) => {
	for (let i = 0; i < puzzle1.length; i++) {
		if (puzzle1[i] !== puzzle2[i]) return false;
	}
	return true;
};

export const finishPuzzle = {
	[EMode.EASY]: [0, 1, 2, 3],
	[EMode.MEDIUM]: [0, 1, 2, 3, 4, 5, 6, 7, 8],
	[EMode.HARD]: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
};

export const puzzleLength: PuzzleLength = {
	easy: 4,
	medium: 9,
	hard: 16,
};

export const randomPuzzle = {
	[EMode.EASY]: [
		[0, 2, 1, 3],
		[0, 3, 1, 2],
	],
	[EMode.MEDIUM]: [
		[0, 2, 8, 1, 5, 4, 7, 3, 6],
		[0, 6, 5, 2, 7, 8, 4, 1, 3],
		[0, 8, 3, 5, 6, 2, 4, 7, 1],
		[0, 6, 3, 8, 7, 1, 5, 2, 4],
		[0, 8, 1, 5, 3, 4, 6, 7, 2],
		[0, 1, 4, 8, 5, 2, 6, 3, 7],
	],
	[EMode.HARD]: [
		[0, 5, 2, 3, 8, 4, 1, 7, 9, 10, 6, 11, 12, 13, 14, 15],
		[0, 8, 2, 3, 4, 5, 1, 6, 9, 13, 11, 7, 12, 14, 10, 15],
		[0, 4, 8, 3, 9, 13, 2, 1, 12, 11, 5, 6, 14, 10, 15, 7],
	],
};

export const modePuzzle = (mode: string) => {
	const n = puzzleLength[mode];
	return Array.from({ length: n }, (_, index) => index);
};

export interface IPuzzle {
	id: number;
	image: string;
	mode: EMode;
	result: string[];
}

export const puzzleData: IPuzzle[] = [
	{
		id: 1,
		image: "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/02wchouritvxqgixxoeagap-2.fit-scale.size-760x427.v1569482197_ver_1.jpg",
		mode: EMode.EASY,
		result: ["1", "8", "3"],
	},
	{
		id: 4,
		image: "https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/04/Screen-Shot-2022-04-19-at-9.44.45-AM.png",
		mode: EMode.EASY,
		result: ["9", "2", "10"],
	},
	{
		id: 2,
		image: "https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/04/Screen-Shot-2022-04-19-at-9.45.54-AM.png",
		mode: EMode.MEDIUM,
		result: ["5", "3", "2"],
	},
	{
		id: 3,
		image: "https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/04/Screen-Shot-2022-04-19-at-9.48.59-AM-1.png",
		mode: EMode.HARD,
		result: ["7", "10", "9"],
	},
];
