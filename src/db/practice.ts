import { ImageSourcePropType } from "react-native";


export interface PracticeData {
  ques: string;
  ans: string[];
}

export const practiceData: { [key: string]: PracticeData[] } = {
  easy: [
    {
      ques:"Question 1: Which group of animals Tortoises are: ",
      ans:['R','E','P','T','I','L','E'],
    },
    {
      ques:"Question 2: Which is the reptile animal that can not swim?: ",
      ans:['T','O','R','T','O','I','S','E'],
    },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
  ],
  medium: [
    {
      ques:"Question 1: Which group of animals Tortoises are: ",
      ans:['R','E','P','T','I','L','E'],
    },
    {
      ques:"Question 2: Which is the reptile animal that can not swim?: ",
      ans:['S','U','L','C','A','T','A',' ','T','O','R','T','O','I','S','E'],
    },
    // {
    //   ques:"Question 1: : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
  ],
  hard: [
    {
      ques:"Question 1: Which group of animals Tortoises are: ",
      ans:['R','E','P','T','I','L','E'],
    },
    {
      ques:"Question 2: Which is the reptile animal that can not swim?: ",
      ans:['S','U','L','C','A','T','A',' ','T','O','R','T','O','I','S','E'],
    },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
  ],
};
export type Exercise = {
	title: string;
	description: string;
	image: ImageSourcePropType;
};

export const excercises: Exercise[] = [
	{
		title: "Ngôi sao 5 cánh",
		description: "Viết chương trình vẽ ngôi sao 5 cánh",
		image: require("../assets/ngoisaocodon.jpg"),
	},
	{
		title: "Ô tô chạy",
		description: "Viết chương trình mô tả chiếc ô tô chuyển động trên màn hình",
		image: require("../assets/practice1.png"),
	},
	{
		title: "Lưới ô vuông",
		description: "Viết chương trình vẽ lưới ô vuông",
		image: require("../assets/Ve_luoi_o_vuong_16a0fd5f12.png"),
	},
	{
		title: "Trò chơi chọn màu đúng",
		description: "Viết chương trình của trò chơi chọn màu đúng",
		image: require("../assets/Chon_mau_dung_18d5685138.png"),
	},
];