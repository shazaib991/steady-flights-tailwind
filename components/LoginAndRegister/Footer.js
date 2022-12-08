import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full bg-[#212529] flex justify-center">
      <div className="w-full flex justify-center max-w-[1366px]">
        <div className="w-[74%] mt-[104px] mb-[80px] flex justify-between">
          <div className="mr-[140px]">
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
          <div className="flex">
            <div className="flex">
              <div className="flex">
                <div className="mr-[50px]">
                  <h1 className="text-[14px] text-white mb-[44px] tracking-[0.2px] font-['customFontRegular']">
                    Company
                  </h1>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    About us
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Career
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Blog
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Tickets
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Pricing
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Demo
                  </p>
                </div>
                <div className="mr-[50px]">
                  <h1 className="text-[14px] text-white mb-[44px] tracking-[0.2px] font-['customFontRegular']">
                    Support
                  </h1>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Help Center
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Contact us
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Terms & Condition
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Sitemap
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Feedback
                  </p>
                </div>
                <div className="mr-[50px]">
                  <h1 className="text-[14px] text-white mb-[44px] tracking-[0.2px] font-['customFontRegular']">
                    Media
                  </h1>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Facebook
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Twitter
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Youtube
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[18px] cursor-pointer font-['customFontRegular']">
                    Instagram
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[14px] text-white mb-[33px] font-['customFontRegular']">
                  Subscribe Us
                </h1>
                <input
                  type="text"
                  name="subscribe"
                  id="subscribe"
                  placeholder="Your email here..."
                  className="w-[250px] h-[61px] text-white rounded-none rounded-[7px] text-[12px] font-['customFontRegular'] outline-none pl-[25px] pr-[25px] bg-[#373B3E] mb-[15px] placeholder:text-white"
                />
                <button className="w-[250px] h-[61px] rounded-[7px] text-[14px] bg-white font-['customFontRegular']">
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
