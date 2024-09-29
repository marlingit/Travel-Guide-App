import landingImg from '@/assets/landing image.jpg';

export const LandingRoute = () => {
  return (
    <main role="main">
      <section>
        <div className="max-w-7xl px-[4vw]">
          <header className="flex flex-col justify-center">
            <h1 className='text-5xl font-semibold text-center'>Find your next vacation spot!</h1>
            <p>The perfect app to explore new places, all from the comfort of your home.</p>
            <img src={landingImg} alt="A beautiful beach" />
          </header>
        </div>
      </section>
    </main>
  );
};
