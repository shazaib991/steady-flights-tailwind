import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full bg-[#212529] flex justify-center">
      <div className="w-full flex justify-center max-w-[1366px]">
        <div className="w-[74%] mt-[104px] mb-[80px] flex justify-between max-[1280px]:w-[95%] max-[1023px]:w-full max-[1023px]:flex-col max-[1023px]:items-center max-[768px]">
          <div className="mr-[140px] max-[1350px]:mr-[80px] max-[1023px]:mr-0 max-[1023px]:flex max-[1023px]:flex-col max-[1023px]:items-center max-[1023px]:mb-[50px]">
            <Image
              src="/assets/JPG-02.png"
              alt="steady flights logo"
              width={120}
              height={40}
              className="mb-[23px]"
            />
            <p className="text-[11px] text-white tracking-[0.2px] font-['customFontRegular']">
              Flights you need, at prices you&apos;ll love.
            </p>
          </div>
          <div className="flex max-[768px]:w-full max-[768px]:justify-center">
            <div className="flex max-[768px]:w-full max-[768px]:flex-col-reverse max-[768px]:items-center">
              <div className="flex max-[768px]:flex-wrap max-[768px]:ml-[30px] max-[768px]:justify-between">
                <div className="mr-[50px]">
                  <h1 className="text-[14px] text-white mb-[44px] tracking-[0.2px] font-['customFontRegular'] max-[768px]:mb-[24px]">
                    Company
                  </h1>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    About us
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Career
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Blog
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Tickets
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Pricing
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Demo
                  </p>
                </div>
                <div className="mr-[50px] max-[768px]:mr-[50px]">
                  <h1 className="text-[14px] text-white mb-[44px] tracking-[0.2px] font-['customFontRegular'] max-[768px]:mb-[24px]">
                    Support
                  </h1>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Help Center
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Contact us
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Terms & Condition
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Sitemap
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Feedback
                  </p>
                </div>
                <div className="mr-[50px] max-[768px]:mr-[30px] max-[390px]:mt-[25px]">
                  <h1 className="text-[14px] text-white mb-[44px] tracking-[0.2px] font-['customFontRegular'] max-[768px]:mb-[24px]">
                    Media
                  </h1>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Facebook
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Twitter
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Youtube
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular'] max-[768px]:mb-[12px]">
                    Instagram
                  </p>
                </div>
              </div>
              <div className="flex flex-col max-[768px]:w-full max-[768px]:items-center">
                <h1 className="text-[14px] text-white mb-[33px] font-['customFontRegular'] max-[768px]:text-center max-[768px]:mb-[15px]">
                  Subscribe Us
                </h1>
                <input
                  type="text"
                  name="subscribe"
                  id="subscribe"
                  placeholder="Your email here..."
                  className="w-[250px] h-[61px] text-white rounded-none rounded-[7px] text-[12px] font-['customFontRegular'] outline-none pl-[25px] pr-[25px] bg-[#373B3E] mb-[15px] placeholder:text-white max-[768px]:w-[95%]"
                />
                <button className="w-[250px] h-[61px] rounded-[7px] text-[14px] bg-white font-['customFontRegular'] max-[768px]:w-[95%] max-[768px]:mb-[50px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
