import { Outlet } from "react-router-dom";

import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
