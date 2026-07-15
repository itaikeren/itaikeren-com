import type { CSSProperties } from "react";

import { Outlet } from "react-router-dom";

import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Layout() {
  return (
    <Container>
      <div className="rise" style={{ "--rise-delay": "0ms" } as CSSProperties}>
        <Header />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <div className="rise" style={{ "--rise-delay": "320ms" } as CSSProperties}>
        <Footer />
      </div>
    </Container>
  );
}
