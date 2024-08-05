import "../globals.css";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Inicio",
  description: "Admin Panel",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
  <>
    {children}
  </>
  )
};

export default RootLayout;

