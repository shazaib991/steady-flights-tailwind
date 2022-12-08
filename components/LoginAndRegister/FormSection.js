import Image from "next/image";
import { useRouter } from "next/router";

export const FormSection = ({ isRegisterPage }) => {
  const router = useRouter();

  const handleClickCheckbox = (e) => {
    e.currentTarget.children[0].classList.toggle("block");
    e.currentTarget.children[0].classList.toggle("hidden");
    e.currentTarget.children[1].classList.toggle("hidden");
    e.currentTarget.children[1].classList.toggle("block");
  };

  return (
    <div
      className={
        isRegisterPage
          ? "w-full h-[665px] min-w-[1280px] max-w-[1366px] relative flex justify-center overflow-x-hidden bg-background-loginSignupForm-image bg-no-repeat bg-center bg-cover"
          : "w-full h-[665px] min-w-[1280px] max-w-[1366px] relative flex justify-center overflow-x-hidden bg-background-loginSignupForm-image bg-no-repeat bg-center bg-cover"
      }
    >
      <div className="w-full max-w-[1366px] flex justify-center">
        <div className="w-[73.5%]">
          <div
            className={
              isRegisterPage
                ? "w-[464px] bg-white rounded-[10px] border-t-[4px] border-solid border-t-[#1ABEC8] pt-[30px] px-[35px] pb-[10px] mt-[60px]"
                : "w-[464px] bg-white rounded-[10px] border-t-[4px] border-solid border-t-[#1ABEC8] pt-[30px] px-[35px] pb-[12px] mt-[80px]"
            }
          >
            <h1
              className={
                isRegisterPage
                  ? "text-[20px] mb-[6px] text-[#212529] font-['customFontExtraBold']"
                  : "text-[20px] mb-[10px] text-[#212529] font-['customFontExtraBold']"
              }
            >
              <span className="text-[#1ABEC8]">
                {isRegisterPage ? "Register" : "Login"}
              </span>{" "}
              {isRegisterPage
                ? "to fly away with us!"
                : "and let's explore world!"}
            </h1>
            <p className="text-[12px] mb-[27px] font-['customFontMedium']">
              {isRegisterPage
                ? "Flights you need, at prices you'll love."
                : "At prices you'll love."}
            </p>
            <form>
              <div className="w-full h-[61px] border border-solid border-[#D3D3D3] rounded-[15px] px-[15px]">
                <p className="text-[#A6A8A9] text-[12px] mt-[8px] font-['customFontMedium']">
                  Email{isRegisterPage && "*"}
                </p>
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  autoComplete="off"
                  className="w-full text-[13px] text-[#212529] border-none outline-none mt-[5px] font-['customFontBold']"
                />
              </div>
              <div className="w-full h-[61px] border border-solid border-[#D3D3D3] rounded-[15px] px-[15px] flex justify-between items-center mt-[17px]">
                <div className="w-full h-full">
                  <p className="text-[#A6A8A9] text-[12px] mt-[8px] font-['customFontMedium']">
                    Password{isRegisterPage && "*"}
                  </p>
                  <input
                    type="text"
                    name="Password"
                    id="Password"
                    autoComplete="off"
                    className="w-full text-[13px] text-[#212529] border-none outline-none mt-[5px] font-['customFontBold']"
                  />
                </div>
                <Image
                  src="/assets/eye 1.svg"
                  alt="hide password"
                  width={20}
                  height={21}
                  className="cursor-pointer"
                />
              </div>
            </form>
            {isRegisterPage ? (
              <div className="text-[12px] text-[#7A7C7F] inline-block mt-[11px] mb-[17px] font-['customFontMedium']">
                Password must be at least 8 characters.
              </div>
            ) : (
              <div className="text-[12px] inline-block cursor-pointer my-[12px] tracking-[0.2px] font-['customFontBold']">
                Reset Password
              </div>
            )}
            {isRegisterPage && (
              <div>
                <div
                  className="inline-flex items-center mb-[13px]"
                  onClick={handleClickCheckbox}
                >
                  <div className="w-[14px] h-[14px] rounded-[3px] bg-[#ebebeb] block"></div>
                  <div className="w-[14px] h-[14px] bg-[#1ABEC8] rounded-[3px] relative hidden">
                    <div className="w-[4.3px] h-[10px] absolute top-px left-[5px] none border-b border-solid border-b-white border-r border-r-white rotate-[45deg]"></div>
                    <div className="w-[4.3px] h-[10px] absolute top-[1.4px] left-[5.4px] none border-b border-solid border-b-white border-r border-r-white rotate-[45deg]"></div>
                  </div>
                  <p className="text-[14px] cursor-default ml-[5px] font-['customFontMedium']">
                    Subscribe to Newsletter
                  </p>
                </div>
              </div>
            )}
            <div className="flex flex-col">
              <button className="w-full h-[44px] bg-[#1ABEC8] text-white text-[14px] border-none rounded-[11px] mb-[10px] tracking-[0.2px] font-['customFontMedium']">
                {isRegisterPage ? "Register" : "Login"} with Steady Flights
              </button>
              <button className="w-full h-[44px] bg-white text-[14px] border-none rounded-[11px] flex justify-center items-center text-[#0000008A] shadow-[0px_2px_3px_0px_#0000002B] mb-[20px] font-['customFontBold']">
                <Image
                  src="/assets/logo googleg 48dp.png"
                  alt="google authorization"
                  width={24}
                  height={24}
                  className="mr-[12px]"
                />
                {isRegisterPage ? "Register" : "Login"} with Google
              </button>
            </div>
            <p className="text-[12px] tracking-[0.2px] font-['customFontBold']">
              Don&apos;t have an account?{" "}
              <span
                className="text-[#1ABEC8] cursor-pointer"
                onClick={
                  isRegisterPage
                    ? () => router.replace("/login")
                    : () => router.replace("/register")
                }
              >
                {isRegisterPage ? "Log in" : "Register"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
