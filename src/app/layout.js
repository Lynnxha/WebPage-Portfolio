import ScrollToTop from "@/components/common/ScrollToTop";
import "./globals.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["devanagari", "latin"],
  display: "swap",
});

export const metadata = {
  title: "Kibieptr | Portfolio",
  description:
    "Welcome to my portfolio website! I am a budding backend developer dedicated to creating and designing user-centered software that prioritizes ease of use. With proficiency in back-end development, I specialize in seamlessly integrating cutting-edge technologies..",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ScrollToTop /> {children}
      </body>
    </html>
  );
};

export default RootLayout;
