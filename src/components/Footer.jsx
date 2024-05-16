import Logo from "../assets/images/logo-black.png";
import { footerInfo, footerMenu } from "./Data";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="flex flex-col lg:flex-row justify-center items-center h-full py-[30px] lg:py-[70px]">
      <div className="flex-col max-w-[100%] mr-16 lg:max-w-[45%] mb-10 lg:mb-[65px] justify-start">
        <img
          src={Logo}
          alt="Edspert Logo"
          className="h-[30px] items-center cursor-pointer my-6"
          onClick={() => navigate("/")}
        />
        {footerInfo.map((item) => (
          <div key={item.id} className="flex flex-row items-center">
            <img src={item.icon} alt="Icon" className="w-[20px] h-[20px]" />
            <p className="footer-info my-3 ml-4">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between flex-wrap">
        {footerMenu.map((item) => (
          <div className="flex flex-col" key={item.title}>
            <h4 className="footer-title-menu mb-4 mt-6 md:mt-0 text-center md:text-left">
              {item.title}
            </h4>
            <ul className="list-none text-center md:text-left">
              {item.menu.map((items) => (
                <li key={items.id} className="footer-list-menu my-3">
                  <a href="#" className="hover:text-[#152a46]">
                    {items.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex items-center md:flex-row flex-col mt-[60px]">
          <p className="footer">
            Edspert, copyright &copy; 2023 Alamat boleh ditaruh disini apabila
            diinginkan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
