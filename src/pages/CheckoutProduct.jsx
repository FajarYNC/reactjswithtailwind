import Navbar from "../components/Navbar";
import Checkout from "../components/Checkout";
import Footer from "../components/Footer";

const CheckoutProduct = () => (
  <div className="">
    <div className="flex justify-center items-center bg-primary">
      <div className="container py-[28px]">
        <Navbar />
      </div>
    </div>

    <div className="flex justify-center items-center bg-secondary">
      <div className="container">
        <Checkout />
      </div>
    </div>

    <div className="flex justify-center items-center bg-white">
      <div className="container">
        <Footer />
      </div>
    </div>
  </div>
);

export default CheckoutProduct;
