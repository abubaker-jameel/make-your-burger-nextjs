import { tv } from "tailwind-variants";

const phoneNumber = tv({
  base: "text-base font-normal",
  variants: {
    color: {
      primary: "bg-primary-titan-white",
      secondary: "bg-primary-white",
    },
    size: {
      lg: "text",
      md: "w-12 h-12",
      sm: "w-10 h-10",
    },
  },
});

const circle = tv({
  base: "flex justify-center items-center rounded-full",
  variants: {
    color: {
      primary: "bg-primary-titan-white",
      secondary: "bg-primary-white",
    },
    size: {
      lg: "w-14 h-14",
      md: "w-12 h-12",
      sm: "w-10 h-10",
    },
  },
});

export { phoneNumber, circle };
