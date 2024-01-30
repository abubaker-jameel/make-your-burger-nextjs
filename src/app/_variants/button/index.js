import { tv } from "tailwind-variants";

const button = tv({
  base: "border-none cursor-pointer capitalize rounded-full",
  variants: {
    color: {
      primary:
        "text-primary-white bg-primary-indigo hover:bg-indigo-600 focus-visible:bg-indigo-600",
      ghost:
        "text-primary-indigo bg-primary-titan-white hover:bg-primary-danger hover:text-primary-white focus-visible:text-primary-white focus-visible:bg-primary-danger disabled:red-300 disabled:cursor-not-allowed",
      red: "text-primary-danger bg-red-200 hover:bg-primary-danger hover:text-primary-titan-white focus-visible:bg-primary-danger focus-visible:text-primary-titan-white",
      titan:
        "text-primary-indigo bg-primary-titan-white hover:text-primary-titan-white hover:bg-primary-danger focus-visible:text-primary-titan-white focus-visible:bg-primary-danger",
      hero: "bg-primary-indigo hover:bg-indigo-600 text-primary-white font-bold uppercase text-base xl:text-xl",
    },
    size: {
      lg: "py-2 px-10",
      md: "py-4 px-6",
      sm: "py-2 px-4",
      xsm: "py-2 px-2",
      hero: "py-6 px-6 xl:py-8 xl:px-8",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "sm",
  },
});

export { button };
