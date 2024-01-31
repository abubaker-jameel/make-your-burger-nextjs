import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_containers/header";
import Footer from "./_containers/footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Burger Website",
  description: "This is a burger building website created by Abubaker Jamil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="flex min-h-screen flex-col justify-between">
        {
          <>
            <Header />
            {children}
            <Footer />
          </>
        }
      </body>
    </html>
  );
}
