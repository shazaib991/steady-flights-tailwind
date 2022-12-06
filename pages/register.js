import Head from "next/head";
import { Details } from "../components/LoginAndRegister/Details";
import { Footer } from "../components/LoginAndRegister/Footer";
import { FormSection } from "../components/LoginAndRegister/FormSection";
import { Header } from "../components/LoginAndRegister/Header";

export default function register() {
  return (
    <div>
      <Header />
      <FormSection isRegisterPage={true} />
      <Details isRegisterPage={true} />
      <Footer />
    </div>
  );
}
