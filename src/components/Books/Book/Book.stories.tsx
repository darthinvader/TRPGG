// Button.stories.js|jsx

import React from "react";
import { ComponentMeta } from "@storybook/react";

import Book from "./Book";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Book",
  component: Book,
} as ComponentMeta<typeof Book>;

export const Primary = () => (
  <Book
    book={{
      title: "Player's Handbook",
      description: "The basic D&D Book",
      imageUrl:
        "https://b.scdn.gr/images/sku_main_images/025564/25564969/20201109094336_wizards_of_the_coast_dungeons_dragons_5_playe_s_handbook.jpeg",
      downloadLink: "",
    }}
  >
    Button
  </Book>
);
