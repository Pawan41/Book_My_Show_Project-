import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.comnents";

// config
import TempPoster from "../config/TempPoster.config"

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-14">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />

      </div>
      <div className=" bg-bms-800 py-12">
        <div className="container mx-auto px-4 flex flex-col gap-4">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
              images={TempPoster}
              title="Premieres"
              subtitle="Brand new relases every friday"
              isDark
            />
        </div>
      </div>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={TempPoster}
          title="Online Streaming events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={TempPoster}
          title="Outdoor events"
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;