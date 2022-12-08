import Image from "next/image";

export const Details = ({ isRegisterPage }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex justify-center max-w-[1366px]">
        <div className="w-[73%] max-[1280px]:w-[90%] max-[768px]:w-full">
          <h1 className="text-[24px] mb-[15px] font-['customFontSemiBold'] max-[768px]:mx-[15px] max-[768px]:mb-[18px] max-[768px]:mt-[40px]">
            {isRegisterPage
              ? "Register and don't miss out on Steady Flights features."
              : "Login to your account and get the most out of your travels!"}
          </h1>
          <p className="text-[14px] text-[#A6A8A9] font-['customFontRegular'] max-[768px]:ml-[15px]">
            {isRegisterPage
              ? "Once you register, you'll unlock access to all our features!"
              : "Traveling made easy."}
          </p>
          <div className="w-full flex flex-wrap justify-between mt-[80px] mb-[60px] max-[1280px]:justify-evenly max-[768px]:flex-col max-[768px]:items-center max-[768px]:mt-[40px]">
            <div className="w-[300px] flex flex-col items-center max-[1280px]:mx-[20px] max-[1280px]:mt-[20px] max-[768px]:mt-0 max-[768px]:mx-[0] max-[768px]:mb-[50px]">
              <Image
                src="/assets/Layer 1.svg"
                alt="Statistics chart"
                width={300}
                height={160}
              />
              <h1 className="text-[20px] mt-[28px] mb-[14px] font-['customFontBold']">
                {isRegisterPage
                  ? "Access to all our features"
                  : "Travel Features"}
              </h1>
              <p
                className={
                  isRegisterPage
                    ? "w-[84%] text-center text-[15px] text-[#A6A8A9] leading-[28px] font-['customFontMedium']"
                    : "w-[91%] text-center text-[15px] text-[#A6A8A9] leading-[28px] font-['customFontMedium']"
                }
              >
                {isRegisterPage
                  ? "Steady Alerts, Steady Rewards & more with our full package."
                  : "Steady Alerts, Steady Rewards, and much more! Access depends on your package."}
              </p>
            </div>
            <div className="w-[300px] flex flex-col items-center max-[1280px]:mx-[20px] max-[1280px]:mt-[20px] max-[768px]:mt-0 max-[768px]:mx-[0] max-[768px]:mb-[50px]">
              <Image
                src="/assets/Layer 2.svg"
                alt="Statistics chart"
                width={191}
                height={160}
              />
              <h1 className="text-[20px] mt-[28px] mb-[14px] font-['customFontBold']">
                Excellent Deals
              </h1>
              <p
                className={
                  isRegisterPage
                    ? "w-[94%] text-center text-[15px] text-[#A6A8A9] leading-[28px] font-['customFontMedium']"
                    : "w-[94%] text-center text-[15px] text-[#A6A8A9] leading-[28px] font-['customFontMedium']"
                }
              >
                {isRegisterPage
                  ? "With our Search Engine you'll be able to find excellent deals to fly away."
                  : "Searching for the best deals has never been easier than it is now with Steady Flights."}
              </p>
            </div>
            <div className="w-[300px] flex flex-col items-center max-[1280px]:mx-[20px] max-[1280px]:mt-[20px] max-[768px]:mt-0 max-[768px]:mx-[0] max-[768px]:mb-[50px]">
              <Image
                src="/assets/Layer 3.svg"
                alt="Statistics chart"
                width={257}
                height={160}
              />
              <h1 className="text-[20px] mt-[28px] mb-[14px] font-['customFontBold']">
                Traveler Profile
              </h1>
              <p
                className={
                  isRegisterPage
                    ? "w-full text-center text-[15px] text-[#A6A8A9] leading-[28px] font-['customFontMedium']"
                    : "w-full text-center text-[15px] text-[#A6A8A9] leading-[28px] font-['customFontMedium']"
                }
              >
                {isRegisterPage
                  ? "In our profile section, you can setup your traveler profile with many features like Countries Visited section."
                  : "Fill out your Traveler Profile and get access to Auto-Buy,personal deals & more."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
