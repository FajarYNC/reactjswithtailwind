import IconAddress from "../assets/icons/address.svg";
import IconPhone from "../assets/icons/phone.svg";
import IconMail from "../assets/icons/mail.svg";

export const navMenu = [
  {
    id: "program",
    title: "Program",
    link: "#program",
    target: "",
  },
  {
    id: "ilmu",
    title: "Bidang Ilmu",
    link: "#bidang-ilmu",
    target: "",
  },
  {
    id: "tentang",
    title: "Tentang edspert",
    link: "https://edspert.id/",
    target: "_blank",
  },
];

export const footerInfo = [
  {
    id: "address",
    title:
      "Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581",
    icon: IconAddress,
  },
  {
    id: "phone",
    title: "+62-821-2382-4483",
    icon: IconPhone,
  },
  {
    id: "mail",
    title: "halo@widyaedu.com",
    icon: IconMail,
  },
];

export const footerMenu = [
  {
    title: "Program",
    menu: [
      {
        id: "online-courses",
        name: "Online Courses",
      },
      {
        id: "mini-bootcamp",
        name: "Mini bootcamp",
      },
      {
        id: "bootcamp",
        name: "Bootcamp",
      },
    ],
  },
  {
    title: "Bidang Ilmu",
    menu: [
      {
        id: "digital-marketing",
        name: "Digital marketing",
      },
      {
        id: "product-management",
        name: "Product management",
      },
      {
        id: "english",
        name: "English",
      },
      {
        id: "programming",
        name: "Programming",
      },
    ],
  },
  {
    title: "Tentang edspert",
    menu: [
      {
        id: "bantuan",
        name: "Bantuan",
      },
      {
        id: "kontak-kami",
        name: "Kontak kami",
      },
      {
        id: "media-sosial",
        name: "Media sosial",
      },
    ],
  },
];
