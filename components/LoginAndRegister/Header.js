import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-full h-[70px]  flex justify-center">
      <div className="w-full flex justify-center max-w-[1366px]">
        <div className="w-full flex justify-between items-center mr-[70px] ml-[150px]">
          <div className="flex items-center">
            <div>
              <Image
                src="/assets/JPG-01.png"
                alt="steady flights logo"
                className="mr-[120px]"
                width={120}
                height={39}
              />
            </div>
            <div className="none">
              <div className="w-full h-4 bg-black rounded-xl"></div>
              <div className="w-full h-4 bg-black rounded-xl mt-[5px] mb-[5px]"></div>
              <div className="w-4/6 h-4 bg-black rounded-xl float-right"></div>
            </div>
            <div className="flex">
              <p className="mr-[20px] text-[12px] tracking-[0.5px] text-[#909294]">
                Fly Away
              </p>
              <p className="mr-[20px] text-[12px] tracking-[0.5px] text-[#909294]">
                Steady Alerts
              </p>
              <p className="mr-[20px] text-[12px] tracking-[0.5px] text-[#909294]">
                Steady Rewards
              </p>
            </div>
          </div>
          <div className="flex">
            <button className="w-[130px] h-[36px] bg-[#1ABEC8] rounded-[15px] text-white text-[13px]">
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
