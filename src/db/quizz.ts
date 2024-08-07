import { ImageSourcePropType } from "react-native";

export interface QuizzData {
  image: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      image: require("../assets/moveblock.jpeg"),
      ques: "Question 1: What does this block do?",
      choose: ["Create condition", "Move", "Turn degree"],
      ans: 1,
    },

    {image: require("../assets/turnblock.jpeg"),
      ques: "Question 2: What does this block do?",
      choose: ["Create condition", "Move", "Turn degree"],
      ans: 2,
    },

    {
      image: require("../assets/Goblock.jpeg"),
      ques: "Question 3: What does this block do?",
      choose: ["Create condition", "Move", "Go to"],
      ans: 2,
    },

    {
      image: require("../assets/setXblock.jpeg"),
      ques: "Question 4: What does this block do?",
      choose: ["Set X value", "Move", "Turn degree"],
      ans: 0,
    },

    {
      image: require("../assets/setYblock.jpeg"),
      ques: "Question 5: What does this block do?",
      choose: ["Create condition", "Set Y value", "Turn degree"],
      ans: 1,
    },

    {
      image: require("../assets/pointblock.jpeg"),
      ques: "Question 6: What does this block do?",
      choose: ["Point towards mouse", "Move", "Turn degree"],
      ans: 0,
    },

    {
      image: require("../assets/directionblock.jpeg"),
      ques: "Question 7: What does this block do?",
      choose: ["Create condition", "Points the sprite in direction", "Turn degree"],
      ans: 1,
    },

    {
      image: require("../assets/bounceblock.jpeg"),
      ques: "Question 8: What does this block do?",
      choose: ["Bounce when on edge", "Move", "Turn degree"],
      ans: 0,
    },

    {
      image: require("../assets/changexblock.jpeg"),
      ques: "Question 9: What does this block do?",
      choose: ["Change X position", "Move", "Turn degree"],
      ans: 0,
    },
    {
      image: require("../assets/changeyblock.jpeg"),
      ques: "Question 10: What does this block do?",
      choose: ["Change Y position", "Move", "Turn degree"],
      ans: 0,
    },
  ],
  medium: [
    {
      image: require("../assets/changexblock.jpeg"),
      ques: "",
      choose: ["Change Y", "Turn X", "Change X"],
      ans: 2, 
    },
  ],
  hard: [
        {
      image: require("../assets/A+B(1).jpeg"),
      ques: "What is the result",
      choose: ["10", "4", "8"],
      ans: 2, 
    },

    {
      image: require("../assets/A-B(1).jpeg"),
      ques: "What is the result",
      choose: ["10", "0", "8"],
      ans: 1,
    },

    {
      image: require("../assets/A*B(1).jpeg"),
      ques: "What is the result",
      choose: ["16", "0", "8"],
      ans: 0,
    },

    {
      image: require("../assets/AdivB(1).jpeg"),
      ques: "What is the result",
      choose: ["16", "1", "8"],
      ans: 1,
    },

    {
      image: require("../assets/AdivB(2).jpeg"),
      ques: "What is the result",
      choose: ["2", "1", "8"],
      ans: 0,
    },

    {
      image: require("../assets/A+B(2).jpeg"),
      ques: "What is the result",
      choose: ["12", "1", "4"],
      ans: 0,
    },

    {
      image: require("../assets/A*B(2).jpeg"),
      ques: "What is the result",
      choose: ["12", "16", "48"],
      ans: 2,
    },
  
    {
      image: require("../assets/A*B(2).jpeg"),
      ques: "What is the result",
      choose: ["12", "16", "48"],
      ans: 2,
    },

    {
      image: require("../assets/A*B(3).jpeg"),
      ques: "What is the result",
      choose: ["12", "16", "4"],
      ans: 2,
    },

    {
      image: require("../assets/A-B(2).jpeg"),
      ques: "What is the result",
      choose: ["8", "16", "4"],
      ans: 0,
    },
  ]
};
