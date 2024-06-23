
import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import FacebookIcon from "../../../public/facebook-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import MailIcon from "../../../public/mail-icon.svg";

const Footer = () => {
  return (
    <footer className="footer border z-8 border-t-[#33353F] border-l-transparent border-r-transparent text-white font-bold">
      <div className="container p-6 pb-12 items-center justify-center flex justify-between">
        <span className="text-white">Rajasekhar</span>
        <div className="socials flex flex-row gap-4 items-center justify-center">
          <Link href="https://github.com/kvnrajasekhar/"  className="hover-[#ff9500]">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com/in/kvnrs23"  >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://www.facebook.com/kanagala.vnrajasekar/" >
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
          <Link href="https://www.instagram.com/vnrajasekar_.rahul/" >
            <Image src={InstagramIcon} alt="Insta Icon" />
          </Link>
          <Link href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRsnxJhdjrdsNqZxHfFsTDChJBtJRCDTxcgRwNRzRsDtWmThCgxhTcnnJRGRTQwHqVvNtxg" >
            <Image src={MailIcon} alt="Mail Icon" />
          </Link>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
