import { tv } from "tailwind-variants";

const typography = tv({
  variants: {
    textStyles: {
      h1: "text-4xl font-semibold md:text-5xl lg:font-bold lg:text-6xl",
      h2: "text-3xl font-semibold lg:font-bold lg:text-5xl ",
      h3: "text-2xl font-semibold lg:font-bold md:text-3xl lg:text-4xl",
      h4: "text-xl font-semibold lg:font-bold lg:text-2xl",
      h5: "text-xl font-semibold lg:font-bold",
      h6: "text-xl font-semibold lg:font-bold",
      p: "text-base",
      type36: "text-2xl md:text-3xl lg:text-4xl",
    },
  },
});

export { typography };
