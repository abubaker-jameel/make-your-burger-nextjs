import { tv } from "tailwind-variants";
const header = tv({
  slots: {
    base: "container flex items-center justify-between py-4 z-[1000",
    headerContent: "flex basis-full items-center justify-between",
    logo: "aspect-square lg:mr-16",
    menuWrapper:
      "lg:position-unset lg:h-unset absolute bottom-0 left-0 right-0 top-20 max-h-[80vh] flex-col items-center justify-between bg-primary-white z-[999] ",
    phoneNumberMobile: "font-semibold lg:hidden",
    nav: "lg:flex lg:basis-1/2 lg:items-center lg:justify-start",
    navList: "flex flex-col items-center justify-center lg:flex-row",
    avatarWrapper: "flex flex-col items-center  lg:hidden",
    callWrapper: "flex items-center justify-end lg:basis-1/2 lg:[&>*]:mr-14",
    callMePhoneNumber: "hidden lg:inline-block",
    dropDown: "hidden aspect-square lg:block",
    toggleButton:
      "aspect-square lg:hidden [&>*]:!position-unset [&>*]:!h-3 [&>*]:!w-3 bg-primary-titan-white",
  },
  variants: {
    isActive: {
      true: {
        menuWrapper: "flex",
      },
      false: {
        menuWrapper: "hidden lg:flex",
      },
    },
  },
});

export { header };
