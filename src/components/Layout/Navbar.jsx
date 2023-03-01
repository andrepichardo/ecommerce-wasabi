import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/WASABI-COLOR.svg';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {
  RiHome5Line,
  RiMenu2Line,
  RiSearchLine,
  RiShoppingBagLine,
  RiUserLine,
} from 'react-icons/ri';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SwipeableDrawer } from '@mui/material';
import { Box } from '@mui/system';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#fff');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const [drawer, setDrawer] = useState(false);
  const router = useRouter();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawer({ ...drawer, [anchor]: open });
  };

  useEffect(() => {
    setNavBg('#fff');
    setLinkColor('#1f2937');
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  if (typeof window !== 'undefined') {
    if (nav === true) {
      document.documentElement.style.overflowY = 'hidden';
      document.body.scroll = 'no';
    } else {
      document.documentElement.style.overflowY = 'auto';
      document.body.scroll = 'yes';
    }
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= window.innerHeight * 0.04) {
        setShadow(true);
        setNavBg('#fff');
        setLinkColor('#1f2937');
      } else {
        setShadow(false);
        setNavBg('#fff');
        setLinkColor('#1f2937');
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, [router]);

  return (
    <header
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <nav className="flex justify-between items-center containerLayout">
        <Link href="/">
          <Image
            className="cursor-pointer active:scale-95 transition-all"
            src={logo}
            alt="Logo"
            width="75"
            height="50"
          />
        </Link>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex items-center gap-10"
          >
            <div className="cursor-pointer active:scale-95 transition-all">
              <RiSearchLine size={24} />
            </div>
            <div className="cursor-pointer active:scale-95 transition-all">
              <button className="font-bold">Sign In</button>
            </div>
            {[''].map((anchor) => (
              <React.Fragment key={anchor}>
                <RiShoppingBagLine
                  className="cursor-pointer active:scale-95 transition-all"
                  onClick={toggleDrawer(anchor, true)}
                  size={24}
                />
                <SwipeableDrawer
                  anchor="right"
                  open={drawer[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  <Box
                    className="min-w-[250px] xs:min-w-[300px] sm:min-w-[400px] w-full"
                    height={'100%'}
                  >
                    Hola
                  </Box>
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </nav>

      <div
        className={
          nav ? 'fixed left-0 top-0 w-full h-full min-h-screen bg-black/60' : ''
        }
      >
        <div className="flex">
          <div
            className={
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] lg:w-[30%] xl:w-[25%] flex flex-col overflow-y-auto bg-[#ecf0f3] h-full min-h-full  px-5 pt-5 pb-8 xs:px-10 transition-all duration-1000'
                : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] lg:w-[30%] xl:w-[25%] flex flex-col overflow-y-auto bg-[#ecf0f3] h-full min-h-full px-5 pt-5 pb-8 xs:px-10 transition-all duration-1000'
            }
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Link onClick={() => setNav(false)} href="/">
                  <Image
                    className="cursor-pointer active:scale-95 transition-all"
                    src={logo}
                    alt="Logo"
                    width="80"
                    height="45"
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer active:scale-95 transition-all"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-full py-4 text-sm xs:text-base">
                  Let&apos;s build something together!
                </p>
              </div>
            </div>
            <div className=" flex flex-col justify-between gap-8 xs:mb-0 h-full">
              <ul className="uppercase flex flex-col gap-1">
                <Link href="/">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm rounded-md text-black hover:text-[#5651e5] transition-all"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm rounded-md text-black hover:text-[#5651e5] transition-all"
                  >
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm rounded-md text-black hover:text-[#5651e5] transition-all"
                  >
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm rounded-md text-black hover:text-[#5651e5] transition-all"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/resume">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm rounded-md text-black hover:text-[#5651e5] transition-all"
                  >
                    Resume
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm rounded-md text-black hover:text-[#5651e5] transition-all"
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let&apos;s Connect
                </p>
                <div className="flex items-center justify-between flex-wrap gap-2 mt-4 w-full">
                  <a
                    className="rounded-full"
                    href="https://www.linkedin.com/in/andre-pichardo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 xs:p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn className="w-5 h-5 text-blue-800" />
                    </div>
                  </a>
                  <a
                    className="rounded-full"
                    href="https://github.com/andrepichardo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 xs:p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub className="w-5 h-5 text-blue-800" />
                    </div>
                  </a>
                  <Link
                    className="rounded-full"
                    onClick={() => setNav(false)}
                    href="/#contact"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 xs:p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail className="w-5 h-5 text-blue-800" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={handleNav}
          className={
            nav
              ? 'w-full h-full min-h-screen'
              : 'w-full h-full min-h-screen hidden'
          }
        ></div>
      </div>

      <div className="flex md:hidden w-full items-center bg-white -z-10 shadow-inner justify-between min-h-[3.5rem] max-h-[3.5rem] py-5 px-6 2xl:px-16 fixed bottom-0">
        <div
          onClick={handleNav}
          className="cursor-pointer active:scale-95 transition-all"
        >
          <RiMenu2Line size={24} />
        </div>
        <div className="cursor-pointer active:scale-95 transition-all">
          <RiSearchLine size={24} />
        </div>
        <Link
          href="/"
          className="cursor-pointer active:scale-95 transition-all"
        >
          <RiHome5Line size={24} />
        </Link>
        <div className="cursor-pointer active:scale-95 transition-all">
          {[''].map((anchor) => (
            <React.Fragment key={anchor}>
              <RiShoppingBagLine
                onClick={toggleDrawer(anchor, true)}
                size={24}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="cursor-pointer active:scale-95 transition-all">
          <RiUserLine size={24} />
        </div>
      </div>
    </header>
  );
};
