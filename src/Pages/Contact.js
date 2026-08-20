import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { ImMap } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { toast } from "react-toastify";
import { useState } from "react";
import FadeIn from 'react-fade-in';
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gb7mmvo', 'template_vm4z694', form.current, 'mNmiYG7vipCLRoH6s')
      .then((result) => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, (error) => {
        toast.error("Please try again");
      });
  };


  return (
    <FadeIn className="flex flex-col w-screen h-screen bg-color-two text-white relative">
      <div className="flex flex-col mt-20">
        <Link to="/">
          <p className="text-5xl absolute top-6 right-16 font-thin">
            <RxCross2 className="text-purple-400 hover:text-purple-700" />
          </p>
        </Link>
        <p className="text-gray-500">Feel free to contact me anytime</p>
        <h2 className="pt-2 text-[46px] font-extrabold">Get in Touch</h2>
      </div>

      <div className="flex flex-row w-[1300px] mt-16 gap-x-16 mx-auto">
        <form ref={form}
          className="flex flex-col gap-y-4 w-3/5 text-gray-500"
          onSubmit={sendEmail}
        >
          <h1 className="text-left text-2xl font-semibold text-white">
            Message Me
          </h1>
          <div className="flex flex-row gap-x-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 w-1/2 h-[44px] bg-color-one focus:border-b-2 focus:border-b-purple-700 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-2 w-1/2 h-[44px] bg-color-one focus:border-b-2 focus:border-b-purple-700 focus:outline-none"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="px-4 py-2 h-[44px] bg-color-one focus:border-b-2 focus:border-b-purple-700 focus:outline-none"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="80"
            rows="6"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-2 bg-color-one focus:border-b-2 focus:border-b-purple-700 focus:outline-none"
            required
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="text-white font-medium bg-purple-600 w-1/5 h-[44px] hover:bg-purple-800 transform transition-transform hover:scale-105"
          />
        </form>

        <div className="flex flex-col gap-y-10 h-full w-2/5">
          <h1 className="text-left text-2xl font-semibold text-white">
            Contact Information
          </h1>
          <div className="grid grid-cols-2 gap-y-12 gap-x-16 ">
            <div className="flex flex-row transform transition-transform hover:scale-110  hover:opacity-40 gap-x-2 ">
              <IoIosContact className="text-3xl" />
              <p className="text-gray-500 py-[6px] ">Shreyas Lohakare</p>
            </div>
            <div className="flex flex-row transform transition-transform hover:scale-110  hover:opacity-40 gap-x-2">
              <ImMap className="text-3xl pt-2" />
              <p className="text-gray-500 py-[12px]">Pune, Maharashtra</p>
            </div>
            <div>
              <a
                href="tel:+917387005602"
                target="_blank"
                className="flex flex-row transform transition-transform hover:scale-110  hover:opacity-40 gap-x-2 "
              >
                <BsTelephoneFill className="text-3xl pt-2" />
                <p className="text-gray-500 py-[12px]">+91-7387005602</p>
              </a>
            </div>
            <div>
              <a
                href="mailto:shreyaslohakare40@gmail.com"
                target="_blank"
                className="flex flex-row transform transition-transform hover:scale-110  hover:opacity-40 gap-x-2 "
              >
                <MdEmail className="text-4xl pt-3" />
                <p className="text-gray-500 py-[14px] text-sm">
                  shreyaslohakare40@gmail.com
                </p>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/shreyas-lohakare-651aa92a3/"
                target="_blank"
                className="flex flex-row transform transition-transform hover:scale-110  hover:opacity-40 gap-x-2 "
              >
                <IoLogoLinkedin className="text-4xl pt-3" />
                <p className="text-gray-500 py-[12px]">Shreyas Lohakare</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/shreyaslohakare015/"
                target="_blank"
                className="flex flex-row transform transition-transform hover:scale-110  hover:opacity-40 gap-x-2 "
              >
                <IoLogoInstagram className="text-4xl pt-2" />
                <p className="text-gray-500 py-[12px]">Shreyas Lohakare</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
