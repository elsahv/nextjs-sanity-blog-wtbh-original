import GlobalStyles from "./Global.js";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar.js";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Sidebar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
