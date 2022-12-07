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
            <p className="text-[11px] text-white tracking-[0.2px]">
              Flights you need, at prices you&apos;ll love.
            </p>
          </div>
          <div className="flex">
            <div className="flex">
              <div className="flex">
                <div className="mr-[50px]">
                  <h1 className="text-[14px] text-white mb-[44px] tracking-[0.2px]">
                    Company
                  </h1>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    About us
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Career
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Blog
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Tickets
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Pricing
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Demo
                  </p>
                </div>
                <div className="mr-[50px]">
                  <h1 className="text-[14px] text-white mb-[44px] tracking-[0.2px]">
                    Support
                  </h1>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Help Center
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Contact us
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Terms & Condition
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Sitemap
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Feedback
                  </p>
                </div>
                <div className="mr-[50px]">
                  <h1 className="text-[14px] text-white mb-[44px] tracking-[0.2px]">
                    Media
                  </h1>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Facebook
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Twitter
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Youtube
                  </p>
                  <p className="text-[12px] text-[#e3e4e4] mb-[20px] cursor-pointer">
                    Instagram
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[14px] text-white mb-[33px]">
                  Subscribe Us
                </h1>
                <input
                  type="text"
                  name="subscribe"
                  id="subscribe"
                  placeholder="Your email here..."
                  className="w-[250px] h-[61px] text-white rounded-none rounded-[7px] text-[12px] outline-none pl-[25px] pr-[25px] bg-[#373B3E] mb-[15px] placeholder:text-white"
                />
                <button className="w-[250px] h-[61px] rounded-[7px] text-[14px] bg-white">
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
