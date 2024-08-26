import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Title from "@/components/Title/Title"
import { Sora } from '@next/font/google';

const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '800'], 
  variable: '--font-sora',
});

export const metadata = {
  title: "Bluten",
  description: "Bluten is a medical pharmacy store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body >
        
        <Header />
        <BreadCrumbs/>
        <Title/>
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
