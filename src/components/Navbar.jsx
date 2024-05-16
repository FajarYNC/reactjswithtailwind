import Logo from "../assets/images/logo-white.png";
import IconMenu from "../assets/icons/menu.svg";
import IconClose from "../assets/icons/close.svg";
import { useState } from "react";
import { navMenu } from "./Data";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-primary">
      <nav className="flex flex-row items-center font-bevietnam">
        <img
          src={Logo}
          alt="Edspert Logo"
          className="w-[150px] h-[30px] items-center cursor-pointer"
          onClick={() => navigate("/")}
        />

        <ul className="list-none md:flex hidden justify-end items-center flex-1">
          {navMenu.map((item) => (
            <li key={item.id} className="mr-10">
              <a href={item.link} target={item.target} className="navbar-item">
                {item.title}
              </a>
            </li>
          ))}
          <li>
            <button className="btn-login">Masuk/Daftar</button>
          </li>
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={
              toggle
                ? IconClose
                : // <FontAwesomeIcon icon={["fas", "xmark"]} />
                  IconMenu
              // <FontAwesomeIcon icon={["fas", "bars"]} />
            }
            alt="Menu"
            className="w-[28px] h-[28] object-contain text-white"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={
              !toggle
                ? "hidden"
                : "flex absolute top-14 mx-3 my-2 min-w-[140px] rounded-xl bg-[#255391] py-0 px-4"
            }
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navMenu.map((item) => (
                <li key={item.id} className="my-2">
                  <a
                    href={item.link}
                    target={item.target}
                    className="navbar-item"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li className="my-3">
                <button className="btn-login">Masuk/Daftar</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
