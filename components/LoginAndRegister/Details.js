import Image from "next/image";

export const Details = ({ isRegisterPage }) => {
  return (
    <div className="">
      <div className="{styles.DetailsWrapper}">
        <div className="{styles.DetailsContainer}">
          <h1>
            {isRegisterPage
              ? "Register and don't miss out on Steady Flights features."
              : "Login to your account and get the most out of your travels!"}
          </h1>
          <p>
            {isRegisterPage
              ? "Once you register, you'll unlock access to all our features!"
              : "Traveling made easy."}
          </p>
          <div className="{styles.DetailsCardsContainer}">
            <div className="{styles.DetailsCard}">
              <Image
                src="/assets/Layer 1.svg"
                alt="Statistics chart"
                width={300}
                height={160}
              />
              <h1>
                {isRegisterPage
                  ? "Access to all our features"
                  : "Travel Features"}
              </h1>
              <p
                className={
                  isRegisterPage
                    ? "styles.DetailsCardRegisterPara1"
                    : "styles.DetailsCardLoginPara1"
                }
              >
                {isRegisterPage
                  ? "Steady Alerts, Steady Rewards & more with our full package."
                  : "Steady Alerts, Steady Rewards, and much more! Access depends on your package."}
              </p>
            </div>
            <div className="{styles.DetailsCard}">
              <Image
                src="/assets/Layer 2.svg"
                alt="Statistics chart"
                width={191}
                height={160}
              />
              <h1>Excellent Deals</h1>
              <p
                className={
                  isRegisterPage
                    ? "styles.DetailsCardRegisterPara2"
                    : "styles.DetailsCardLoginPara2"
                }
              >
                {isRegisterPage
                  ? "With our Search Engine you'll be able to find excellent deals to fly away."
                  : "Searching for the best deals has never been easier than it is now with Steady Flights."}
              </p>
            </div>
            <div className="{styles.DetailsCard}">
              <Image
                src="/assets/Layer 3.svg"
                alt="Statistics chart"
                width={257}
                height={160}
              />
              <h1>Traveler Profile</h1>
              <p
                className={
                  isRegisterPage
                    ? "styles.DetailsCardRegisterPara3"
                    : "styles.DetailsCardLoginPara3"
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
