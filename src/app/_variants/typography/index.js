import { tv } from "tailwind-variants";

const typography = tv({
  variants: {
    heading: {
      h1: "text-4xl font-semibold lg:font-bold lg:text-6xl 2xl:text-8xl",
      h2: "text-3xl font-semibold lg:font-bold lg:text-5xl ",
      h3: "text-2xl font-semibold lg:font-bold lg:text-4xl",
      h4: "text-xl font-semibold lg:font-bold lg:text-2xl",
      h5: "text-xl font-semibold lg:font-bold",
      h6: "text-xl font-semibold lg:font-bold",
    },
    paragraph: {
      p: "text-base",
    },
  },
});

export { typography };
