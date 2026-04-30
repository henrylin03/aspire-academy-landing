import type { ImageMetadata } from "astro";

export type ClassOffering = {
  title: string;
  description: string;
  imgSrc: ImageMetadata;
};

export const CLASSES_DATA: ClassOffering[] = [
  {
    imgSrc: "",
    title: "small classes",
    description:
      "Learn with students of your own age group, starting from Year 4. Classes are kept small (max 6 students) to ensure meaningful speaking time and feedback during frequent practice debates",
  },
  {
    imgSrc: "",
    title: "1:1 private coaching",
    description:
      "Get the maximum opportunity for tailoed feedback in weekly, one-on-one private coaching, helping you get into your school teams, win more debates and sharpen your speaking.",
  },
];
