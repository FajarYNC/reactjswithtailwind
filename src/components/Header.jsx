import React from "react";
import HeaderCharacter from "../assets/images/banner-character.png";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/product/action";

const Header = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { entity } = useSelector((state) => state.product);

  useEffect(() => {
    const fetchProduct = async () => {
      await dispatch(getProduct(id));
    };

    fetchProduct();
  }, [dispatch, id]);

  return (
    <section className="flex h-full mt-10 md:mt-0">
      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="justify-center items-start mt-0 sm:mt-[0px] md:mt-[15px] lg:mt-[40px] xl:mt-[70px] 2xl:mt-[100px] ">
          <h2 className="detail-heading text-center lg:text-left">
            {entity.title}
          </h2>
          <h3 className="detail-desc-heading text-center lg:text-left mt-1">
            {entity.description}
          </h3>
          <p className="detail-sub-heading mt-6 mb-3 text-center lg:text-left">
            Mentor
          </p>
          <div className="flex flex-1 gap-10 flex-col lg:flex-row">
            <div className="flex flex-col">
              <p className="mentor-name text-center lg:text-left">
                {entity.mentor[0].name}
              </p>
              <p className="mentor-job text-center lg:text-left">
                Developer at Widya Edu
              </p>
            </div>
            <div className="flex flex-col">
              <p className="mentor-name text-center lg:text-left">
                {entity.mentor[1].name}
              </p>
              <p className="mentor-job text-center lg:text-left">
                Developer at Widya Edu
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={HeaderCharacter}
            alt="Header Character"
            className="h-80 mt-[40px] lg:mt-[130px] object-right"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
