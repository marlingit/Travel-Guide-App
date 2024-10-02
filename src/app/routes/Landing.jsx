import landingImg from "@/assets/landing-image.jpg";
import { LinkButton } from "@/components/ui/link-button";

export const LandingRoute = () => {
  return (
    <main role="main" className="space-y-16">
      <section className="pt-[96px]">
        <div className="mx-auto flex max-w-7xl flex-col space-y-4 px-[4vw] lg:items-center">
          <header className="flex flex-col items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${landingImg})`}}>
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
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl px-[4vw]"></div>
      </section>
    </main>
  );
};
