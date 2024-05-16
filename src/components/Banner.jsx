import React from "react";
import BannerCharacter from "../assets/images/banner-character.png";

const Banner = () => {
  return (
    <section className="flex h-full mt-10 md:mt-0">
      <div className="flex-1 flex justify-center items-start flex-col lg:flex-row">
        <div className="justify-center items-start mt-0 sm:mt-[0px] md:mt-[15px] lg:mt-[40px] xl:mt-[70px] 2xl:mt-[100px]">
          <h2 className="banner-heading text-center lg:text-left">
            Jadi expert bersama, <br />
            edspert.id
          </h2>
          <p className="banner-paragraph text-center lg:text-left mt-5 max-w-[100%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[80%] 2xl:max-w-[70%]">
            Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
            bidangnya, untuk siapkan karir impian anda.
          </p>
        </div>
        <div>
          <img
            src={BannerCharacter}
            alt="Banner Character"
            className="h-full md object-center object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
