import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-full h-[70px]  flex justify-center">
      <div className="w-full flex justify-center max-w-[1366px]">
        <div className="w-full flex justify-between items-center mr-[70px] ml-[150px] max-[1280px]:ml-[30px] max-[768px]:mx-[20px]">
          <div className="flex items-center max-[768px]:w-full max-[768px]:justify-between">
            <div>
              <Image
                src="/assets/JPG-01.png"
                alt="steady flights logo"
                className="mr-[120px] max-[1280px]:mr-[50px]"
                width={120}
                height={39}
              />
            </div>
            <div className="w-[25px] hidden cursor-pointer max-[768px]:block">
              <div className="w-full h-[4px] bg-black rounded-[12px]"></div>
              <div className="w-full h-[4px] bg-black rounded-[12px] mt-[5px] mb-[5px]"></div>
              <div className="w-[67%] h-[4px] bg-black rounded-[12px] float-right"></div>
            </div>
            <div className="flex max-[768px]:hidden">
              <p className="mr-[20px] text-[10px] tracking-[0.5px] text-[#909294] font-['customFontBold']">
                Fly Away
              </p>
              <p className="mr-[20px] text-[10px] tracking-[0.5px] text-[#909294] font-['customFontBold']">
                Steady Alerts
              </p>
              <p className="mr-[20px] text-[10px] tracking-[0.5px] text-[#909294] font-['customFontBold']">
                Steady Rewards
              </p>
            </div>
          </div>
          <div className="flex max-[768px]:hidden">
            <button className="w-[130px] h-[36px] bg-[#1ABEC8] rounded-[15px] text-white text-[14px] font-['customFontRegular']">
              Contact
            </button>
            <Image
              src="/assets/Ellipse 5.png"
              alt="profile picture"
              width={36}
              height={36}
              className="ml-[26px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
