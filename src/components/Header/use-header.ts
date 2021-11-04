import { useState } from "react";

const menuItems = [
  {
    title: "Categories",
    href: "/categories",
  },
  {
    title: "Templates",
    href: "/records",
  },
];

function useHeader() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function openMenu() {
    setIsMenuOpened(true);
  }

  function closeMenu() {
    setIsMenuOpened(false);
  }

  return {
    menuItems,
    isMenuOpened,
    openMenu,
    closeMenu,
  };
}

export { useHeader };
