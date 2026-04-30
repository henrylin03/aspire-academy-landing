import type { ImageMetadata } from "astro";
import groupClassImg from "@images/group-call.jpg";
import soloImg from "@images/happy-online-student.jpg";

export type ClassOffering = {
  title: string;
  description: string;
  imgSrc: ImageMetadata;
};

export const CLASSES_DATA: ClassOffering[] = [
  {
    imgSrc: groupClassImg,
    title: "Online Debating Classes",
    description:
      "Learn and practise core persuasion techniques with students of your own age group, starting from Year 4. Classes are kept small to ensure meaningful speaking time and feedback during frequent practice debates.",
  },
  {
    imgSrc: soloImg,
    title: "1:1 debating private coaching",
    description:
      "Get the maximum opportunity for tailored feedback in one-on-one private coaching for debating and public speaking, helping you get into your school's debating teams, win more debates and sharpen your speaking.",
  },
];
