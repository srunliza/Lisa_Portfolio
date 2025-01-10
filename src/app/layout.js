import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "LONG SREYLY",
  description: "Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavbarComponent /> 
        {children}
      <FooterComponent/>           
      </body>
    </html>
  );
}
