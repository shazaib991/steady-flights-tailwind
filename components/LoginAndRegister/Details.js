import Image from "next/image";

export const Details = ({ isRegisterPage }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex justify-center max-w-[1366px]">
        <div className="w-[73%]">
          <h1
            className="text-[24px] mb-[20px]"
            style={{ fontFamily: "customFontMedium" }}
          >
            {isRegisterPage
              ? "Register and don't miss out on Steady Flights features."
              : "Login to your account and get the most out of your travels!"}
          </h1>
          <p className="text-[14px] text-[#A6A8A9]">
            {isRegisterPage
              ? "Once you register, you'll unlock access to all our features!"
              : "Traveling made easy."}
          </p>
          <div className="w-full flex flex-wrap justify-between mt-[80px] mb-[60px]">
            <div className="w-[300px] flex flex-col items-center">
              <Image
                src="/assets/Layer 1.svg"
                alt="Statistics chart"
                width={300}
                height={160}
              />
              <h1
                className="text-[20px] mt-[28px] mb-[14px]"
                style={{ fontFamily: "customFontbold" }}
              >
                {isRegisterPage
                  ? "Access to all our features"
                  : "Travel Features"}
              </h1>
              <p
                className={
                  isRegisterPage
                    ? "w-[84%] text-center text-[15px] text-[#A6A8A9] leading-[28px]"
                    : "w-[91%] text-center text-[15px] text-[#A6A8A9] leading-[28px]"
                }
              >
                {isRegisterPage
                  ? "Steady Alerts, Steady Rewards & more with our full package."
                  : "Steady Alerts, Steady Rewards, and much more! Access depends on your package."}
              </p>
            </div>
            <div className="w-[300px] flex flex-col items-center">
              <Image
                src="/assets/Layer 2.svg"
                alt="Statistics chart"
                width={191}
                height={160}
              />
              <h1 className="text-[20px] mt-[28px] mb-[14px]">
                Excellent Deals
              </h1>
              <p
                className={
                  isRegisterPage
                    ? "w-[94%] text-center text-[15px] text-[#A6A8A9] leading-[28px]"
                    : "w-[94%] text-center text-[15px] text-[#A6A8A9] leading-[28px]"
                }
              >
                {isRegisterPage
                  ? "With our Search Engine you'll be able to find excellent deals to fly away."
                  : "Searching for the best deals has never been easier than it is now with Steady Flights."}
              </p>
            </div>
            <div className="w-[300px] flex flex-col items-center">
              <Image
                src="/assets/Layer 3.svg"
                alt="Statistics chart"
                width={257}
                height={160}
              />
              <h1 className="text-[20px] mt-[28px] mb-[14px]">
                Traveler Profile
              </h1>
              <p
                className={
                  isRegisterPage
                    ? "w-full text-center text-[15px] text-[#A6A8A9] leading-[28px]"
                    : "w-full text-center text-[15px] text-[#A6A8A9] leading-[28px]"
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
