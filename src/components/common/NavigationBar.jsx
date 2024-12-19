import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import "material-symbols";

const Logo = () => {
  return (
    <Link className="inline-flex flex-shrink-0 items-center space-x-1 py-3" to="/">
      <img className="h-8 w-auto" src={logo} alt="Plane" />
      <span className="text-text text-lg text-nowrap font-handwriting">Travel Guide</span>
    </Link>
  );
};

const Sidebar = ({ navigationList, onClick }) => {
  const location = useLocation();
  useEffect(() => {
    onClick();
  }, [location]);
  return (
    <aside
      id="sidebar"
      className="bg-primary is-close fixed inset-0 z-50 flex flex-col overflow-hidden overflow-y-auto lg:hidden"
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="m-0 flex h-14 items-center justify-between p-4">
        <Logo />
        <Button
          sr="Close Sidebar"
          symbol="close"
          onClick={onClick}
          size="3xl"
        />
      </div>
      <div className="size-full overflow-y-auto overflow-x-hidden px-4">
        <ul className="text-text m-0 w-full space-y-4 pt-4 text-lg font-semibold tracking-wide">
          {navigationList.map((item) => (
            <li key={item.to} className="hover:text-accent">
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export const NavigationBar = () => {

  const openSidebar = () => {
    document.getElementById("sidebar").classList.remove("is-close");
    document.getElementById("sidebar").classList.add("is-open");
  }

  const closeSidebar = () => {
    document.getElementById("sidebar").classList.remove("is-open");
    document.getElementById("sidebar").classList.add("is-close");
  }

  const navigation = [
    {
      name: "Places",
      to: "/places",
    },
    {
      name: "Attractions",
      to: "/attractions",
    },
    {
      name: "Countries",
      to: "/countries",
    },
    {
      name: "Activities",
      to: "/activities",
    },
    {
      name: "Beaches",
      to: "/beaches",
    },
  ];

  return (
    <>
    <header role="banner">
      <nav
        className="fixed z-50 h-14 w-screen md:h-20 bg-primary shadow-md"
        role="navigation"
        aria-label="Primary Navigation"
      >
        <div className="mx-auto flex h-full max-w-7xl justify-between px-[4vw]">
          {/* <div className="flex items-center flex-shrink-0"> */}
            <Logo />
          {/* </div> */}
          <nav className="hidden items-center lg:flex">
            <ul className="my-4 flex space-x-4">
              {navigation.map((item) => (
                <li key={item.to}>
                  <LinkButton to={item.to}>{item.name}</LinkButton>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex w-full items-center justify-end lg:hidden">
            <Button sr="Open Sidebar" symbol="menu" onClick={openSidebar} />
          </div>
        </div>
      </nav>
      <Sidebar navigationList={navigation} onClick={closeSidebar} />
    </header>
    <Outlet />
    </>
  );
};
