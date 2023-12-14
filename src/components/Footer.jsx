import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTiktokFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const facebookLink = "https://www.facebook.com/facebook";
  const tiktokLink = "https://www.tiktok.com/@john_smitch14";
  const instagramLink = "https://www.instagram.com/herdii.pak";

  return (
    <div className="bg-darkBackground text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">HerdyTrip</h1>
          <p className="text-sm">
            Dengan HerdyTrip Anda dapat merasakan perjalanan baru dan wisata
            terbaik destinasi yang kami tawarkan
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Destinasi Wisata</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Paris, France
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Dubai, UAE
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Venice, Italy
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">About</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Kontak Kami
            </a>
            <a
              className="text-white hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Testimoni
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Rating
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" transform:font-medium text-xl pb-4 pt-5 md:pt-0">Follow Social Media</h1>
          <nav className="flex flex-col md:items-center gap-2">
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-all cursor-pointer"
            >
              <BsFacebook size={25} />
            </a>
            <a
              href={tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              <RiTiktokFill size={25} />
            </a>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition-all cursor-pointer"
            >
              <BsInstagram  size={25} />
            </a>
          </nav>
        </div>
      </div>
      <div className="text-center py-4">
        <p className=" text-white" >
          @copyright developed by{" "}
          <span className="text-brightColor">Herdy programmers 2023</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
