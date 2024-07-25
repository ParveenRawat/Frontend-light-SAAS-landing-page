"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free forever, Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white/60",
                )}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60",
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="tex-sm inline-flex rounded-xl border border-white/20 px-4 py-1.5">
                      <motion.span
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDf,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDf)] bg-clip-text font-medium text-transparent [background-size:200%]"
                      >
                        Popular Choice
                      </motion.span>
                    </div>
                  )}
                </div>

                <div className="mt-[30px] flex items-baseline gap-1">
                  <span className="text-4xl font-bold leading-none tracking-tighter">
                    ${monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "p-1 font-bold tracking-tight text-black/50",
                      inverse === true && "text-[#999999]",
                    )}
                  >
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary mt-[3px] w-full",
                    inverse === true && "bg-white text-black",
                  )}
                >
                  {buttonText}
                </button>
                <ul className="mt-8 flex flex-col gap-5">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-4 text-sm"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
