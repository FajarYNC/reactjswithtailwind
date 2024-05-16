import React from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/product/action";
import { addItem } from "../store/cart/slice";
import Icon from "../assets/icons/checklist.svg";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { entity } = useSelector((state) => state.product);

  useEffect(() => {
    const fetchProduct = async () => {
      await dispatch(getProduct(id));
    };

    fetchProduct();
  }, [dispatch, id]);

  const checkoutPage = () => {
    navigate("/checkout");
  };

  return (
    <section className="flex mt-[40px] mb-[100px]">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="">
          <div className="flex flex-col card">
            <div className="pt-4"></div>
            <div className="bg-[#197bff]/20">
              <p className="pl-8 pr-20 detail-sub-content-active my-2">
                Materi
              </p>
            </div>
            <p className="pl-8 pr-20 my-2 detail-sub-content">Fasilitas</p>
            <hr />
            <div className="flex justify-center mt-4">
              <p className="detail-price-real mx-4">{entity.pricereal}</p>
              <p className="detail-price mx-4">{entity.price}</p>
            </div>
            <button
              className="btn-cart mx-5 my-5"
              onClick={() => {
                dispatch(addItem(entity));
                checkoutPage(id);
              }}
            >
              Daftar Kelas
            </button>
          </div>
        </div>
        <div className="col-span-3">
          <div className="card">
            <div className="flex flex-col">
              <div className="pt-4"></div>
              <div className="pl-8 pr-4">
                <h1 className="detail-materi-heading py-4 mb-4">Materi</h1>
                <div className="flex flex-row items-top gap-4">
                  <img src={Icon} alt="Icon" className="w-[20px] h-[20px]" />
                  <div>
                    <h3 className="detail-materi-sub-heading">
                      Pengenalan {entity.title}
                    </h3>
                    <p className="detail-materi-desc mt-3">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-top gap-4 mt-4">
                  <img src={Icon} alt="Icon" className="w-[20px] h-[20px]" />
                  <div>
                    <h3 className="detail-materi-sub-heading">
                      Materi Bootcamp {entity.title} 2
                    </h3>
                    <p className="detail-materi-desc mt-3">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-top gap-4 mt-4">
                  <img src={Icon} alt="Icon" className="w-[20px] h-[20px]" />
                  <div>
                    <h3 className="detail-materi-sub-heading">
                      Materi Bootcamp {entity.title} 3
                    </h3>
                    <p className="detail-materi-desc mt-3">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-top gap-4 mt-4">
                  <img src={Icon} alt="Icon" className="w-[20px] h-[20px]" />
                  <div>
                    <h3 className="detail-materi-sub-heading">
                      Materi Bootcamp {entity.title} 4
                    </h3>
                    <p className="detail-materi-desc mt-3">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-top gap-4 mt-4">
                  <img src={Icon} alt="Icon" className="w-[20px] h-[20px]" />
                  <div>
                    <h3 className="detail-materi-sub-heading">
                      Materi Bootcamp {entity.title} 5
                    </h3>
                    <p className="detail-materi-desc mt-3">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-top gap-4 mt-4">
                  <img src={Icon} alt="Icon" className="w-[20px] h-[20px]" />
                  <div>
                    <h3 className="detail-materi-sub-heading">
                      Materi Bootcamp {entity.title} 6
                    </h3>
                    <p className="detail-materi-desc mt-3">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-8"></div>
            </div>
          </div>

          <div className="card mt-8">
            <div className="flex flex-col">
              <div className="pt-4"></div>
              <div className="pl-8 pr-4">
                <h1 className="detail-materi-heading py-4 mb-4">Fasilitas</h1>
                <div className="flex flex-row items-top gap-4">
                  <img src={Icon} alt="Icon" className="w-[20px] h-[20px]" />
                  <div>
                    <h3 className="detail-materi-sub-heading">E-Sertifikat</h3>
                  </div>
                </div>
                <div className="flex flex-row items-top gap-4 mt-4">
                  <img src={Icon} alt="Icon" className="w-[20px] h-[20px]" />
                  <div>
                    <h3 className="detail-materi-sub-heading">Portfolio</h3>
                  </div>
                </div>
                <div className="flex flex-row items-top gap-4 mt-4">
                  <img src={Icon} alt="Icon" className="w-[20px] h-[20px]" />
                  <div>
                    <h3 className="detail-materi-sub-heading">Job Connector</h3>
                  </div>
                </div>
                <div className="flex flex-row items-top gap-4 mt-4">
                  <img src={Icon} alt="Icon" className="w-[20px] h-[20px]" />
                  <div>
                    <h3 className="detail-materi-sub-heading">
                      Career Development
                    </h3>
                  </div>
                </div>
              </div>
              <div className="pb-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
