import "../globals.css";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "User Panel",
  description: "User Panel",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
  <>
    {children}
  </>
  )
};

export default RootLayout;

