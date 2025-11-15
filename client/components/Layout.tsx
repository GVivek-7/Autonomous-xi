import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
