import React from "react";
import Link from "next/link";
import UserIcon from "./icon/UserIcon";
import CartIcon from "./icon/CartIcon";

const CustomLink = ({ href, title,}) => {
  return (
    <Link href={href} className={"${className} relative group"}>
      {title}
      <span className="h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">&nbsp;</span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav className="flex items-center">
        <div className="mr-12">Logo</div>
        <div className="flex items-centerS">
          <div className="mx-4 mt-1"><CustomLink href="#" title="Home" /></div>
          <div className="mx-4 mt-1"><CustomLink href="#" title="About"/></div>
          <button className="bg-black rounded-full text-white h-[36px] w-[150px] mx-12">Shop</button>
        </div>
      </nav>
      <nav className="flex">
        <span className="switch mt-0">
            <input type="checkbox" id="switcher" />
            <label for="switcher"></label>
        </span>
        <Link href="#"className="mx-1"><UserIcon/></Link>
        <Link href="#" className="mx-4"><CartIcon/></Link>
      </nav>
    </header>
  );
};

export default Navbar;