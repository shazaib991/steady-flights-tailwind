import Head from "next/head";
import { Details } from "../components/LoginAndRegister/Details";
import { Footer } from "../components/LoginAndRegister/Footer";
import { FormSection } from "../components/LoginAndRegister/FormSection";
import { Header } from "../components/LoginAndRegister/Header";

export default function login() {
  return (
    <div>
      <Header />
      <FormSection />
      <Details />
      <Footer />
    </div>
  );
}
