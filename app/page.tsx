import Header from "./[components]/main-page/header";
import AboutMainPage from "./[components]/main-page/about";
import WhyChooseUs from "./[components]/main-page/whychooseus";
import Services from "./[components]/main-page/services";
import Member from "./[components]/main-page/member";
import Galery from "./[components]/main-page/galery";
import ServicesArea from "./[components]/main-page/servicearea";

export default function Home() {
  return (
    <main>
      <Header />
      {/* <AboutMainPage /> */}
      <WhyChooseUs />
      <Services />
      <Member />
      <Galery />
      <ServicesArea />
    </main>
  );
}
