import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../store/product/action";
import Character from "../assets/images/card-character.png";
import IconLeft from "../assets/icons/left.svg";
import IconRight from "../assets/icons/right.svg";
import IconBca from "../assets/icons/bca.svg";
import IconMandiri from "../assets/icons/mandiri.svg";

const Checkout = () => {
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

  const goToInstructions = () => {
    navigate(`/instructions`);
  };

  return (
    <section className="flex mt-[30px] mb-[100px] flex-col">
      <div className="flex flex-col justify-center items-start">
        <div className="flex gap-3 px-5 py-5">
          <img src={IconLeft} alt="arrow left" />
          <p className="breadcrumb-active">Checkout</p>
          <img src={IconRight} alt="arrow rigth" />
          <p className="breadcrumb">Instruksi Bayar</p>
        </div>
        <h2 className="checkout-heading p-5 mb-8">Checkout</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="card px-8">
          <div className="flex flex-col">
            <h3 className="checkout-sub-heading my-4 mt-8">
              Pilih Metode Pembayaran
            </h3>
            <h6 className="checkout-pay-title">
              Bank Transfer (verifikasi manual)
            </h6>
            <p className="checkout-desc my-1">
              Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar
              ini memerlukan verifikasi pembayaran manual melalui Whatsapp
            </p>
            <hr className="my-1" />
            <div className="flex flex-row mt-3 py-2 px-3 justify-between border-[1px] h-[56px]">
              <div className="flex flex-row gap-3 checkout-item items-center ">
                <img
                  src={IconMandiri}
                  alt="Bank Mandiri"
                  className="w-[72px] h-[28px]"
                />
                <p className="text-[14px] items-center">
                  Transfer Ke Rekening Bank Mandiri
                </p>
              </div>
              <div className="flex">
                <input type="radio" name="Bank" className="items-center" />
              </div>
            </div>
            <div className="flex flex-row mt-3 py-2 px-3 justify-between border-[1px] h-[56px]">
              <div className="flex flex-row gap-3 checkout-item items-center ">
                <img
                  src={IconBca}
                  alt="Bank Mandiri"
                  className="w-[72px] h-[28px]"
                />
                <p className="text-[14px] items-center">
                  Bank Transfer ke Rek Bank BCA
                </p>
              </div>
              <div className="flex">
                <input type="radio" name="Bank" className="items-center" />
              </div>
            </div>

            <h6 className="checkout-pay-title mt-6">
              Virtual Account (verifikasi otomatis)
            </h6>
            <p className="checkout-desc my-1">
              Pembayaran melalui virtual account berbagai bank. Metode bayar ini
              akan diverifikasi secara otomatis.
            </p>
            <hr className="my-1" />
            <div className="flex flex-row mt-3 py-2 px-3 justify-between border-[1px] h-[56px]">
              <div className="flex flex-row gap-3 checkout-item items-center ">
                <img
                  src={IconMandiri}
                  alt="Bank Mandiri"
                  className="w-[72px] h-[28px]"
                />
                <p className="text-[14px] items-center">
                  Transfer Ke Rekening Bank Mandiri
                </p>
              </div>
              <div className="flex">
                <input type="radio" name="Bank" className="items-center" />
              </div>
            </div>
            <div className="flex flex-row mt-3 py-2 px-3 justify-between border-[1px] h-[56px]">
              <div className="flex flex-row gap-3 checkout-item items-center ">
                <img
                  src={IconBca}
                  alt="Bank Mandiri"
                  className="w-[72px] h-[28px]"
                />
                <p className="text-[14px] items-center">
                  Bank Transfer ke Rek Bank BCA
                </p>
              </div>
              <div className="flex">
                <input type="radio" name="Bank" className="items-center" />
              </div>
            </div>

            <div className="pt-5"></div>
          </div>
        </div>
        <div className="card px-8">
          <div className="flex flex-col">
            <h3 className="checkout-sub-heading my-4 mt-8">
              Ringkasan Pesanan
            </h3>
            <div className="flex flex-row gap-3">
              <div className="bg-primary w-[120px] rounded-[5px] flex justify-center">
                <img src={Character} alt="Person" />
              </div>
              <div className="">
                <h3 className="checkout-title">{entity.title}</h3>
                <h4 className="checkout-sub-title">{entity.description}</h4>
                <div className="flex flex-row items-center mt-3">
                  <p className="card-sub-item flex-initial w-12">Batch</p>
                  <p className="card-item">{entity.batch}</p>
                </div>
                <div className="flex flex-row items-center mt-1">
                  <p className="card-sub-item flex-initial w-12">Mentor</p>
                  <p className="card-item">
                    {entity.mentor.map((itemMentor, index) =>
                      entity.mentor.length - 1 == index ? (
                        <>{itemMentor.name}</>
                      ) : (
                        <>{itemMentor.name}, </>
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3 mt-6">
              <h4 className="checkout-item-title">Kode Promo</h4>
              <div className="flex flex-row my-3 gap-3 items-center">
                <input
                  type="text"
                  className="w-[80%] h-[50px] border-[1px] p-3 rounded-l-[4px]"
                  placeholder="Masukkan Kode Promo"
                />
                <button className="btn-promo-checkout justify-center h-[50px] w-[20%]">
                  Terapkan
                </button>
              </div>
            </div>
            <div className="my-2 mt-2">
              <h4 className="checkout-item-title mb-2">Metode Pembayaran</h4>
              <p className="checkout-pay-title">
                Bank Transfer (verifikasi manual)-Mandiri
              </p>
            </div>
            <div className="my-2 mt-2">
              <h4 className="checkout-item-title mb-3">Ringkasan Pembayaran</h4>
              <div className="flex justify-between my-3">
                <p className="checkout-list-item">Harga Kelas</p>
                <p className="checkout-list-item">{entity.price}</p>
              </div>
              <div className="flex justify-between my-3">
                <p className="checkout-list-item">Potongan</p>
                <p className="checkout-list-item">-</p>
              </div>
              <div className="flex justify-between my-3">
                <p className="checkout-list-item">Promo</p>
                <p className="checkout-list-item">-</p>
              </div>
              <div className="flex justify-between my-3">
                <p className="checkout-list-item">Kode Unit</p>
                <p className="checkout-list-item">-</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between my-3">
                <p className="checkout-item-title">Total Pembayaran</p>
                <p className="checkout-item-title">{entity.price}</p>
              </div>

              <p className="checkout-desc-card">
                Dengan menekan tombol <b>Bayar</b> kamu telah menyetujui syarat
                dan ketentuan yang berlaku, silahkan baca kembali{" "}
                <a href="#" style={{ color: "#1097E7" }}>
                  Syarat & ketentuan
                </a>{" "}
                yang berlaku.
              </p>
            </div>
            <div className="flex justify-between my-3 mt-8">
              <p className="checkout-pay-title">&#8249; Batalkan</p>
              <button className="btn-bayar">Bayar</button>
            </div>
            <div className="mb-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
