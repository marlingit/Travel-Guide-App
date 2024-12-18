<<<<<<< HEAD
import countryData from "@/data/countries-data.json";
import { useState } from "react";

export const CountriesRoute = () => {
  const [country, setCountry] = useState(null);

  const handleClick = (e, object) => {
    if (country) {
      country.element.classList.remove("bg-secondary-border");
    }
    console.log(e.currentTarget);
    e.currentTarget.classList.add("bg-secondary-border");
    setCountry({object: object, element: e.currentTarget});
  }

  return (
    <main role="main">
      <section className="pt-[96px]">
        <div className="mx-auto max-w-7xl px-[4vw]">
          <header className="flex flex-col items-center justify-center">
            <h1 className="mb-2 text-center text-clamp-4xl-6xl font-bold">
              Countries
            </h1>
            <p className="mb-16 text-center text-clamp-lg-3xl font-semibold text-text-light">
              History and Culture from Around the World!
            </p>
          </header>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl px-[4vw]">
          <div className="grid grid-rows-7">
            <div className="flex flex-row gap-4 overflow-x-scroll px-4 bg-secondary pb-2">
              {countryData.map((data) => (
                <div key={data.name} onClick={(e) => handleClick(e, data)} className="hover:shadow-lg my-auto rounded-md border border-secondary-border  hover:border-accent hover:shadow-[#01b3e4]/50 overflow-clip p-2 transition-all cursor-pointer">
                  <img
                    src={`https://flagcdn.com/h120/${data.code}.png`}
                    alt={data.name}
                    className="max-h-[80px] max-w-none mx-auto"
                  />
                  <h2 className="text-center text-nowrap">{data.name}</h2>
                </div>
              ))}
            </div>
            <div className="row-span-6 bg-secondary-border">
              {country ? (
                <iframe src={`https://countryreports.org/country/${country.object.filename}`} title="Country Report" className="size-full"></iframe>
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <h2 className="text-3xl font-semibold text-center">
                    Select a Country to Learn More
                  </h2>
                  <p className="text-lg text-center text-text-light">
                    Click on a flag to get started!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
};
=======
import countryData from "@/data/countries-data.json";
import { useState } from "react";

export const CountriesRoute = () => {
  const [country, setCountry] = useState(null);

  const handleClick = (e, object) => {
    if (country) {
      country.element.classList.remove("bg-gradient-to-br", "via-primary", "to-secondary", "from-blue-200", "via-70%");
    }
    console.log(e.currentTarget);
    e.currentTarget.classList.add("bg-gradient-to-br", "via-primary", "to-secondary", "from-blue-200", "via-70%");
    setCountry({object: object, element: e.currentTarget});
  }

  return (
    <main role="main">
      <section className="pt-[96px]">
        <div className="mx-auto max-w-7xl px-[4vw]">
          <header className="flex flex-col items-center justify-center">
            <h1 className="mb-2 text-center text-clamp-4xl-6xl font-bold">
              Countries
            </h1>
            <p className="mb-16 text-center text-clamp-lg-3xl font-semibold text-text-light">
              History and Culture from Around the World!
            </p>
          </header>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl px-[4vw]">
          <div className="grid grid-rows-7">
            <div className="flex flex-row gap-4 overflow-x-scroll px-4">
              {countryData.map((data) => (
                <div key={data.name} onClick={(e) => handleClick(e, data)} className="hover:shadow-lg hover:shadow-primary/50 my-auto rounded-md overflow-clip p-2">
                  <img
                    src={`https://flagcdn.com/h120/${data.code}.png`}
                    alt={data.name}
                    className="max-h-[80px] max-w-none"
                  />
                  <h2 className="text-center">{data.name}</h2>
                </div>
              ))}
            </div>
            <div className="row-span-6 bg-gray-300">
              {country ? (
                <iframe src={`https://countryreports.org/country/${country.object.filename}`} title="Country Report" className="size-full"></iframe>
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <h2 className="text-3xl font-semibold text-center">
                    Select a Country to Learn More
                  </h2>
                  <p className="text-lg text-center text-text-light">
                    Click on a flag to get started!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
};
>>>>>>> fb15a028584f57b31e25dc36d9527045f7a2cd21
