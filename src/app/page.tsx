import BreadCrumbs from "@/components/BreadCrumbs";
import Header from "../components/Header";
import LogoSection from "@/components/LogoSection";
import ProductContainer from "@/components/ProductContainer";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="container">
      <Header/>
      <BreadCrumbs/>
      <LogoSection/>
      <ProductContainer/>
    </div>
  );
}
