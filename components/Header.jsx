import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setshowCatMenu] = useState(false);
  const [show, setshow] = useState("translate-y-0");
  const [lastScrollY, setlastScrollY] = useState(0);

  return (
    <header>
      {/* <Wrapper className=""> */}
      <Link href="/"></Link>
      <Menu />
      {/* </Wrapper> */}
    </header>
  );
};

export default Header;
