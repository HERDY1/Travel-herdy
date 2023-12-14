import React from "react";
import img from "../assets/img/contact.jpg";
import Button from "../layouts/Button";

const Contact = () => {
  const backgroundColor = `bg-white`;
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className=" flex flex-col lg:flex-row justify-between w-full">
        <form className=" w-full lg:w-2/5 space-y-5 bg-[#090808] p-5 rounded-xl">
          <h1 className=" text-white text-4xl font-semibold text-center">Isi Data Kamu</h1>
          <div className=" text-black flex flex-col">
            <label htmlFor="userName">Nama Lengkap</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Masukan Namamu"
            />
          </div>
          <div className=" text-black flex flex-col">
            <label htmlFor="userEmail">Email</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Masukan Email"
            />
          </div>
          <div className=" text-black flex flex-col">
            <label htmlFor="userMessage">Pesan</label>
            <textarea
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              name="userMessage"
              id="userMessage"
              cols="30"
              rows="3"
              placeholder="Masukan pesanmu"
            ></textarea>
          </div>

          <div className="flex flex-row justify-center">
            <Button title="Kirim" backgroundColor={backgroundColor} />
          </div>
        </form>
        <div className=" flex flex-col items-center w-full lg:w-2/4 my-5">
          <img className=" rounded-lg" src={img} alt="" />
          <p className=" text-center text-sm pt-4 text-[#898888]">
            Kami ingin mendengar pendapat Anda! Jika Anda memiliki pertanyaan,
            masukan, atau memerlukan bantuan terkait rencana perjalanan Anda,
            jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda di
            setiap langkah. Cukup isi formulir di bawah ini, dan kami akan
            segera menghubungi Anda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
