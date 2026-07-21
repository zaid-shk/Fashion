"use client";

import Line from "../sections/Line";
import { motion } from "motion/react";
import Link from "next/link";

export const Facebook = ({ size = 24, color = "#000000" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4418_10208)">
      <path
        d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4418_10208">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Instagram = ({ size = 24, color = "#000000" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4418_9861)">
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6361 7H17.6477"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4418_9861">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#fdfaf4] px-4 md:px-10 py-8 md:py-2 text-[#222]">
      {/* <Line /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">
            GET THE LATEST TRENDS
          </h2>
          <p className="mt-2 max-w-[330px] text-sm text-gray-500">
            Subscribe with your email address to receive updates and news about
            the store & us!
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 w-full sm:w-[280px] lg:w-[310px] rounded-full border border-gray-200 bg-transparent px-5 outline-none text-sm"
            />
            <button className="h-12 rounded-full bg-black px-6 text-base md:text-lg text-white whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex justify-start md:justify-end gap-16 md:gap-20">
          <div>
            <h3 className="font-bold">Shop</h3>
            <div className="mt-4 space-y-2 flex flex-col text-sm text-gray-400">
              <Link href={"/men"}><motion.p whileHover={{ color: 'black' }}>Men</motion.p></Link>
              <Link href={"/women"}><motion.p whileHover={{color:"black"}}>Women</motion.p></Link>
              <Link href={"/newcollections"}><motion.p whileHover={{color:"black"}}>New Collections</motion.p></Link>
              <Link href={"/summer26"}><motion.p whileHover={{color:"black"}}>Summer 26&apos;</motion.p></Link>
              <Link href={"/brands"}><motion.p whileHover={{color:"black"}}>By Popular Brands</motion.p></Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Company</h3>
            <div className="mt-4 space-y-2 text-sm flex flex-col text-gray-400">
              <Link href={"/about"}><motion.p whileHover={{ color: 'black' }}>About Us</motion.p></Link>
              <Link href={"/careers"}><motion.p whileHover={{color:"black"}}>Careers</motion.p></Link>
              <Link href={"/resources"}><motion.p whileHover={{color:"black"}}>Resources</motion.p></Link>
              <Link href={"/support"}><motion.p whileHover={{color:"black"}}>Support Us</motion.p></Link>
              <Link href={"/contact"}><motion.p whileHover={{color:"black"}}>Contact Us</motion.p></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-14 flex items-center gap-3">
        <Instagram size={22} />
        <Facebook size={22} />
        <span className="text-sm">/ @clothess.n.co</span>
      </div>

      <div className="mt-8 md:mt-10 flex flex-wrap gap-y-2 justify-between text-sm text-gray-600">
        <motion.p whileHover={{ color: 'black' }}>&copy;Clothes.co</motion.p>
        <motion.p whileHover={{ color: 'black' }}>All Rights Reserved</motion.p>
        <motion.p whileHover={{ color: 'black' }}>Terms of Service</motion.p>
        <motion.p whileHover={{ color: 'black' }}>Privacy Policy</motion.p>
      </div>

    </footer>
  );
};

export default Footer;
