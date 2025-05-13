"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const pricingPlans = {
  monthly: [
    {
      id: 1,
      title: "Essential Plan",
      price: 29,
      tokens1: "100,000 mots",
      tokens2: "5,000 mots",
      features: [
        "AI Writer Feature",
        "AI Article Assistant Feature",
        "Smart Editor Feature",
        "AI ReWriter Feature",
        "AI Chat Feature",
        "AI Image Feature",
        "AI Code Feature",
      ],
    },
    {
      id: 2,
      title: "Pro Plan",
      price: 49,
      tokens1: "200,000 mots",
      tokens2: "15,000 mots",
      features: [
        "All Essential Features",
        "Priority Support",
        "Extended Image Generation",
      ],
    },
    // {
    //   id: 3,
    //   title: "Team Plan",
    //   price: 99,
    //   tokens1: "500,000 mots",
    //   tokens2: "50,000 mots",
    //   features: [
    //     "Collaboration Tools",
    //     "Dedicated Workspace",
    //     "Advanced Permissions",
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "Enterprise Plan",
    //   price: 199,
    //   tokens1: "1,000,000 mots",
    //   tokens2: "100,000 mots",
    //   features: [
    //     "White-label Features",
    //     "Custom Integrations",
    //     "Dedicated Support",
    //   ],
    // },
  ],
  yearly: [
    {
      id: 1,
      title: "Essential Plan",
      price: 29,
      tokens1: "300,000 mots",
      tokens2: "30,000 mots",
      images: 50,
      features: [
        "AI Writer Feature",
        "AI Article Assistant Feature",
        "Smart Editor Feature",
        "AI ReWriter Feature",
        "AI Chat Feature",
        "AI Image Feature",
        "AI Code Feature",
      ],
    },
    {
      id: 2,
      title: "Pro Yearly",
      price: 99,
      tokens1: "1,000,000 mots",
      tokens2: "150,000 mots",
      images: 200,
      features: [
        "All Monthly Features",
        "Yearly Discounts",
        "Enhanced API Limits",
      ],
    },
  ],
};

const PlanCard = ({ title, price, tokens1, tokens2, images, features }) => (
  <div className="border border-[#7A43A4] rounded-2xl bg-transparent dark:hover:bg-[linear-gradient(180deg,rgba(122,67,164,0.3),rgba(96,73,188,0.17))] [box-shadow:0px_6px_15px_-2px_rgba(16,24,40,0.08)] p-6 shadow-lg w-full sm:w-[340px] md:w-[400px] lg:w-[460px] xl:w-[500px] min-h-[660px] flex flex-col justify-between">
    <div>
      <div className="text-sm dark:text-white/60 text-[#070622] rounded-full border dark:border-white/60 border-[#070622] w-fit mx-auto px-3 py-1 mb-2">
        {title}
      </div>
      <div className="text-3xl font-bold dark:text-white text-[#070622] text-start">
        ${price}{' '}
        <span className="text-base font-medium dark:text-white/50 text-[#070622]">
          /Month
        </span>
      </div>
      <p className="dark:text-white text-[#070622] font-['Manrope'] text-base font-normal leading-[150%] tracking-[-0.32px] mt-2 mb-4 text-start">
        Provides for contact management and task tracking. Ideal for small
        teams.
      </p>
      <hr className="border-white/10 mb-4" />
      <div>
        <p className="mb-1 dark:text-white text-[#070622] font-['Space_Grotesk'] text-base font-medium leading-[132%] tracking-[-0.32px] text-start">
          Functionalities includes
        </p>
        <ul className="space-y-2 mt-2 dark:text-white text-[#070622]">
          <li className="flex items-center gap-2">
            <Check size={16} className="dark:text-white text-[#070622]" /> GPT
            4: {tokens1}
          </li>
          <li className="flex items-center gap-2">
            <Check size={16} className="dark:text-white text-[#070622]" /> GPT
            3.5: {tokens2}
          </li>
          {images && (
            <li className="flex items-center gap-2">
              <Check size={16} className="dark:text-white text-[#070622]" />{' '}
              {images} Images
            </li>
          )}
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check size={16} className="dark:text-white text-[#070622]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-6">
      <Button className="w-full text-white hover:opacity-90 rounded-[16px] dark:bg-[linear-gradient(180deg,_#7A43A4_0%,_#6049BC_100%)] bg-[linear-gradient(180deg,_#7A43A4_0%,_#6049BC_100%)]">
        Get Started
      </Button>
    </div>
  </div>
);

export default function PricingTabs() {
  return (
    <section className="dark:bg-[#070622] bg-[#F9F9F9] py-10 px-4 text-center">
      <h2 className="dark:text-white text-[#070622] text-center font-bold text-3xl md:text-[48px] leading-[63.36px] tracking-[-0.48px] font-['Space_Grotesk']">
        Our Pricing
      </h2>
      <p className="dark:text-[#F9F9F9] text-[#070622] text-center font-bold text-[20px] leading-[26.4px] tracking-[-0.2px] font-['Space_Grotesk'] mt-4">
        Simple Pricing, Unbeatable Value
      </p>

      <Tabs defaultValue="monthly" className="w-full container mx-auto py-10">
        <div className="flex justify-center mb-4">
          <TabsList className="dark:bg-[#10122e] bg-[#F9F9F9] px-4 py-7 border border-[#D24AC966] rounded-full flex gap-2 mb-5">
            <TabsTrigger
              value="monthly"
              className="cursor-pointer dark:data-[state=active]:bg-[linear-gradient(180deg,_#7A43A4_0%,_#6049BC_100%)] data-[state=active]:text-white text-[#070622] px-6 py-4 dark:text-primary border border-[#D24AC966] rounded-[12px] "
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="cursor-pointer dark:data-[state=active]:bg-gradient-to-b from-primary to-secondary data-[state=active]:text-white text-[#070622] px-6 py-4 dark:text-primary border border-[#D24AC966] rounded-[12px] "
            >
              Yearly
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="monthly">
          <div className="flex flex-wrap justify-center gap-10 p-3 md:p-0">
            {pricingPlans.monthly.map((plan) => (
              <PlanCard key={plan.id} {...plan} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="yearly">
          <div className="flex flex-wrap justify-center gap-10 p-3 md:p-0">
            {pricingPlans.yearly.map((plan) => (
              <PlanCard key={plan.id} {...plan} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
