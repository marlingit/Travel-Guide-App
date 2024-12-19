import landingImg from "@/assets/landing-image.jpg";
import { LinkButton } from "@/components/ui/link-button";

import logo from "@/assets/logo.svg";

export const LandingRoute = () => {
  return (
    <main role="main" className="space-y-16">
      <section className="pt-[96px]">
        <div className="flex flex-col min-h-[80vh] p-4 sm:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="max-w-96 flex flex-col sm:block">
            <h1 className="text-clamp-4xl-6xl text-center sm:text-left mb-4"><strong className="bg-clip-text text-transparent bg-gradient-to-br from-accent to-accent-dark from-60%">Explore</strong> to your hearts content.</h1>
            <h2 className="text-lg text-center md:text-xl sm:text-left text-text-light mt-6">Find all the information you can ask for about popular vacation spots.</h2>
            <LinkButton to="/places" className="px-12 py-5 m-auto text-nowrap mt-8 ">
              Start Exploring
            </LinkButton>
          </div>
          <div className="relative w-full sm:w-[65vw] max-w-[700px] aspect-square flex-shrink-0 sm:-mr-24">
            <img src={logo} alt="logo" className="absolute z-10 translate-y-4 -rotate-45 move-plane" />
            <Circle />
          </div>
        </div>
        {/* <div className="mx-auto flex max-w-7xl flex-col space-y-4 px-[4vw] lg:items-center">
          <header className="flex flex-col items-center justify-center bg-cover bg-center bg-[" style={{backgroundImage: `url(${landingImg})`}}>
            <div className="grid grid-cols-1 lg:grid-cols-3 px-[3vw] text-white backdrop-blur backdrop-brightness-75 mx-8 lg:mx-36 my-16 py-6">
              <section className="lg:col-span-2">
                <h1 className="text-clamp-4xl-6xl text-center font-semibold mb-4">
                  Find your next vacation spot!
                </h1>
                <p className="text-clamp-lg-3xl text-center font-medium mb-16">
                  The perfect app to explore new places, all from the comfort of
                  your home.
                </p>
              </section>
              <LinkButton to="/places" className="px-12 py-5 m-auto text-nowrap">
                Start Exploring
              </LinkButton>
            </div>
          </header>
        </div> */}
      </section>
      <section>
        <div className="mx-auto max-w-7xl px-[4vw]"></div>
      </section>
    </main>
  );
};

function Circle() {
  return (
    <div className="inline-block relative w-full overflow-x-clip">
    <svg className="inline-block absolute top-0 left-0 spin" version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
      <circle cx="250" cy="250" r="200" id="circle" className="fill-accent-dark" />
      <text className="text-4xl">
        <textPath href="#circle">
          Find your next vacation spot!
        </textPath>
        <textPath href="#circle" startOffset={525}>
          The perfect app to explore new places.
        </textPath>
      </text>
    </svg>
    </div>
  );
}
