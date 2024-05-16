import React from "react";
import BannerCharacter from "../assets/images/banner-character.png";

const JoinUs = () => {
  return (
    <section className="flex h-[386px]">
      <div className="flex-1 flex justify-center items-center flex-col">
        <h1 className="joinus-paragraph mb-[60px]">Sudah siap bergabung?</h1>
        <button className="joinus-button hover:bg-[#FCBC30]">
          Daftar kelas
        </button>
      </div>
    </section>
  );
};

export default JoinUs;
