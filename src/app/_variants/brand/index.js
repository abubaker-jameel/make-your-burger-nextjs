import { tv } from "tailwind-variants";

const brand = tv({
  base: "flex justify-center items-center rounded-full",
  variants: {
    color: {
      primary: "bg-primary-titan-white text-primary-indigo",
      secondary: "bg-primary-white text-primary-danger",
    },
    size: {
      lg: "w-12 h-12",
      md: "w-10 h-10",
      sm: "w-8 h-8",
    },
  },
});

export { brand };
