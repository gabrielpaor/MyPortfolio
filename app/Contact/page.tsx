import React, { FC, JSX } from "react";
import Image from "next/image";
import ContactCard from "./ContactCard";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Contact: FC = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col gap-5">
      <div className="flex flex-col items-center gap-5 mb-5">
        <h1 className="text-4xl">Get in touch</h1>
        <p className="text-center">
          If you have any inquiries or something to discuss, here are the few
          ways to reach out with me.
        </p>
      </div>
      {/* <div className="min-w-[80%] flex flex-row self-center">
        <div className="min-w-[70%] flex flex-col gap-1 p-24 bg-slate-700">
          <p>Get in touch</p>
          <p>
            If you have any inquiries or something to discuss, here are the few
            ways to reach out with me.
          </p>
          <div className="flex flex-row gap-3 mt-12">
            <div className="flex flex-col w-1/2">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                name="first-name"
                placeholder="First"
                className="p-2 border-bottom bg-transparent border-b-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                name="last-name"
                placeholder="Last"
                className="p-2 border-bottom bg-transparent border-b-2 border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-row gap-3 mt-3">
            <div className="flex flex-col w-1/2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 border-bottom bg-transparent border-b-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="phone-number">Phone number</label>
              <input
                type="number"
                name="phone-number"
                className="p-2 border-bottom bg-transparent border-b-2 border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="p-2 border-bottom bg-transparent border-b-2 border-gray-300"
            ></textarea>
          </div>
        </div>
        <div className="px-2 min-h-full flex flex-col bg-gray-300">
          <p>Contact Information</p>
          <p>Escopa 3, Project 4, Quezon City, 1109</p>
          <p>Philippines</p>
        </div>
      </div> */}
      <div className="gap-5 flex flex-row w-full">
        <ContactCard
          image={<FaPhoneAlt size={60} />}
          contact="+63 936 390 9904"
          text="Call me directly"
          buttonText="Call"
        />
        <ContactCard
          image={<MdEmail size={60} />}
          contact="gabrielpaor07@gmail.com"
          text="Send me an email"
          buttonText="Email"
        />
        <ContactCard
          image={<FaLinkedin size={60} />}
          contact="/gabriel-john-paor-ba0bb4235/"
          text="Send me an email"
          buttonText="Message"
        />
      </div>
      <p className="mt-5">or follow my social media below</p>
      <div className="flex flex-row w-1/2 items-center justify-center gap-5 mt-5">
        <a href="">
          <FaFacebook size={32} />
        </a>
        <a href="">
          <FaTwitter size={32} />
        </a>
        <a href="">
          <FaLinkedin size={32} />
        </a>
        <a href="">
          <FaGithubSquare size={32} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
