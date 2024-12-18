import { Link, Outlet } from "react-router-dom";

import logo from "@/assets/logo.svg";

export const SurveyLayout = () => {
  return (
    <>
      <header role="banner">
        <nav className="fixed z-50 h-14 w-full md:h-20 bg-primary shadow-md" role="navigation" aria-label="Primary Navigation">
          <div className="mx-auto flex h-full max-w-7xl justify-center px-[4vw]">
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="logo" className="h-8 md:h-10 w-auto" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  )
}
