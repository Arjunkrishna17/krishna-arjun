"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  Image,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { slideFromLeft } from "../utils/motions";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);

  const socialMedia = [
    { image: "LinkedIn.svg", link: "https://linkedin.com/in/krishnaarjuntech" },
    { image: "/GitHub.svg", link: "https://github.com/Arjunkrishna17" },
    { image: "/Twitter.svg", link: "https://twitter.com/KRISHNADAS9574" },
  ];

  const menuItems = ["Home", "Skills", "Projects", "Blog"];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-slate-900  bg-opacity-50 shadow-lg shadow-indigo-900 backdrop-blur-md "
      classNames={{
        item: [
          "px-5 py-2 rounded-full",

          "data-[active=true]:px-5",
          "data-[active=true]:bg-slate-400",
          "data-[active=true]:transition",
          "data-[active=true]:transform",
          "data-[active=true]:duration-200",
          "data-[active=true]:delay-100",
          "data-[active=true]:ease-in",
          "data-[active=true]:bg-opacity-40",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideFromLeft(0)}
          >
            <NavbarItem className="flex items-center space-x-5 opacity-100 z-50 ">
              {socialMedia.map((value) => (
                <a
                  key={value.image}
                  href={value.link}
                  target="_blank"
                  className="hover:scale-125 transition transform"
                >
                  <Image
                    src={value.image}
                    alt={value.image}
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </NavbarItem>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 text-lg" justify="center">
        {menuItems.map((item, i) => (
          <NavbarItem key={item + i} isActive={selectedMenu === i}>
            <Link
              onClick={() => setSelectedMenu(i)}
              className="text-white"
              href={"#" + item}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-slate-900  bg-opacity-50">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              href={"#" + item}
              className={
                "text-lg " +
                (index === selectedMenu ? " text-fuchsia-600" : " text-white")
              }
              onClick={() => {
                setSelectedMenu(index);
                setIsMenuOpen(false);
                console.log("hello");
              }}
            >
              {" "}
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
