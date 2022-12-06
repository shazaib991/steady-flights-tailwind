import Image from "next/image";
import { useRouter } from "next/router";

export const FormSection = ({ isRegisterPage }) => {
  const router = useRouter();

  return (
    <div
      className={
        isRegisterPage
          ? "styles.formSectionRegisterCover"
          : "styles.formSectionLoginCover"
      }
    >
      <div className="{styles.formSectionWrapper}">
        <div className="{styles.formSectionContainer}">
          <div
            className={
              isRegisterPage
                ? "styles.formSectionRegisterForm"
                : "styles.formSectionLoginForm"
            }
          >
            <h1>
              <span className="{styles.formSectionContainerSpan1}">
                {isRegisterPage ? "Register" : "Login"}
              </span>{" "}
              {isRegisterPage
                ? "to fly away with us!"
                : "and let's explore world!"}
            </h1>
            <p className="{styles.formSectionFormTitlePara}">
              {isRegisterPage
                ? "Flights you need, at prices you'll love."
                : "At prices you'll love."}
            </p>
            <form>
              <div className="{styles.formSectionFormInputContainerEmail}">
                <p>Email{isRegisterPage && "*"}</p>
                <input type="text" name="Email" id="Email" />
              </div>
              <div className="{styles.formSectionFormInputContainerPassword}">
                <div>
                  <p>Password{isRegisterPage && "*"}</p>
                  <input type="text" name="Password" id="Password" />
                </div>
                <Image
                  src="/assets/eye 1.svg"
                  alt="hide password"
                  width={20}
                  height={21}
                />
              </div>
            </form>
            {isRegisterPage ? (
              <div className="{styles.formSectionRegisterSpan}">
                Password must be at least 8 characters.
              </div>
            ) : (
              <div className="{styles.formSectionContainerSpan2}">
                Reset Password
              </div>
            )}
            {isRegisterPage && (
              <div>
                <div
                  className="{styles.formSectionNewletterContainer}"
                  onClick={(e) =>
                    e.currentTarget.classList.toggle(styles.active)
                  }
                >
                  <div className="{styles.formSectionNewletterCheckboxUnactive}"></div>
                  <div className="{styles.formSectionNewletterCheckbox}">
                    <div className="{styles.formSectionNewletterCheckmark1}"></div>
                    <div className="{styles.formSectionNewletterCheckmark2}"></div>
                  </div>
                  <p>Subscribe to Newsletter</p>
                </div>
              </div>
            )}
            <div className="{styles.formSectionFormButtonsContainer}">
              <button className="{styles.formSectionFormButtonLogin}">
                {isRegisterPage ? "Register" : "Login"} with Steady Flights
              </button>
              <button className="{styles.formSectionFormButtonGoogle}">
                <Image
                  src="/assets/logo googleg 48dp.png"
                  alt="google authorization"
                  width={24}
                  height={24}
                />
                {isRegisterPage ? "Register" : "Login"} with Google
              </button>
            </div>
            <p className="{styles.formSectionFormRegister}">
              Don&apos;t have an account?{" "}
              <span
                className="{styles.formSectionFormSpan3}"
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
