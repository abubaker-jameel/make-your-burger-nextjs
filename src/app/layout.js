import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_containers/header";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Burger Website",
  description: "This is a burger building website created by Abubaker Jamil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        {
          <>
            <Header />
            {children}
          </>
        }
      </body>
    </html>
  );
}
