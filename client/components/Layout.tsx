import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground mesh-gradient">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
