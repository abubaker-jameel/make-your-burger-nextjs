import { tv } from "tailwind-variants";

const alert = tv({
  base: "absolute top-0 left-0 right-0 text-primary-white",
  variants: {
    color: {
      error: "bg-red-600",
      success: "bg-green-600",
    },
  },
});

export { alert };
