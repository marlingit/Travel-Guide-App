import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import "material-symbols";

const Logo = () => {
  return (
    <Link className="flex w-[144px] items-center space-x-1 py-3" to="/">
      <img className="h-8 w-auto" src={logo} alt="Plane" />
      <span className="text-text text-lg font-bold">Travel Guide</span>
    </Link>
  );
};

const Sidebar = ({ navigationList, onClick }) => {
  return (
    <aside
      id="sidebar"
      className="bg-background is-close fixed inset-0 z-50 flex flex-col overflow-hidden overflow-y-auto lg:hidden"
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
            <li key={item.to} className="hover:text-primary">
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export const NavigationBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
    if (isSidebarOpen) {
      document.getElementById("sidebar").classList.remove("is-open");
      document.getElementById("sidebar").classList.add("is-close");
    } else {
      document.getElementById("sidebar").classList.remove("is-close");
      document.getElementById("sidebar").classList.add("is-open");
    }
  };
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
  ];

  return (
    <header role="banner">
      <nav
        className="sticky z-50 h-14 md:h-20 w-full"
        role="navigation"
        aria-label="Primary Navigation"
      >
        <div className="mx-auto flex h-full justify-between px-[4vw] max-w-7xl">
          <div className="flex items-center">
            <Logo />
          </div>
          <nav className="hidden items-center lg:flex">
            <ul className="my-4 flex space-x-4">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="bg-primary border-primary hover:shadow-primary/50 rounded-full border px-4 py-2 font-semibold text-white hover:shadow-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex w-full items-center justify-end lg:hidden">
            <Button sr="Open Sidebar" symbol="menu" onClick={toggleSidebar} />
          </div>
        </div>
      </nav>
      <Sidebar navigationList={navigation} onClick={toggleSidebar} />
    </header>
  );
};
