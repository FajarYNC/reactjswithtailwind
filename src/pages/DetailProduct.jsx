import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Product from "../components/Product";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

const DetailProduct = () => (
  <div className="">
    <div className="flex justify-center items-center bg-primary">
      <div className="container py-[28px]">
        <Navbar />
      </div>
    </div>
    <div className="flex justify-center items-center bg-primary">
      <div className="container">
        <Header />
      </div>
    </div>

    <div className="flex justify-center items-center bg-secondary">
      <div className="container">
        <Product />
      </div>
    </div>

    <div className="flex justify-center items-center bg-primary">
      <div className="container">
        <JoinUs />
      </div>
    </div>

    <div className="flex justify-center items-center bg-white">
      <div className="container">
        <Footer />
      </div>
    </div>
  </div>
);

export default DetailProduct;
