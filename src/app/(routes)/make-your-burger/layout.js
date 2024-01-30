import Ingredients from "@/app/_containers/make-burger/Ingredients";
import { BurgerProvider } from "@/app/_contexts/burgerContext";

export const metadata = {
  title: "Make Your Burger",
  description: "This is a burger building website created by Abubaker Jamil",
};

export default function MakeYourBurgerLayout({ children, burger, summary }) {
  return (
    <>
      <BurgerProvider>
        <section className="container">
          <div className="grid lg:min-h-[570px] lg:grid-cols-[1fr_500px_1fr]">
            {children}
            {burger}
            {summary}
          </div>
          <Ingredients />
        </section>
      </BurgerProvider>
    </>
  );
}
