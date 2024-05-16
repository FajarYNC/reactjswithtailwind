import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const ProductCatalog = () => (
  <div className="">
    <div className="flex justify-center items-center bg-primary">
      <div className="container py-[28px]">
        <Navbar />
      </div>
    </div>
    <div className="flex justify-center items-center bg-primary">
      <div className="container">
        <Banner />
      </div>
    </div>

    <div className="flex justify-center items-center bg-secondary">
      <div className="container">
        <Card />
        <Pagination />
      </div>
    </div>

    <div className="flex justify-center items-center bg-white">
      <div className="container">
        <Footer />
      </div>
    </div>
  </div>
);

export default ProductCatalog;
