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
  <div className="border border-[#7A43A4] rounded-2xl bg-[#0c0d24] p-6 shadow-lg max-w-sm w-full">
    <div className="text-sm text-white/60 mb-2">{title}</div>
    <div className="text-3xl font-bold text-white">
      ${price}{" "}
      <span className="text-base font-medium text-white/50">/Month</span>
    </div>
    <p className="text-sm text-white/60 mt-2 mb-4">
      Provides for contact management and task tracking. Ideal for small teams.
    </p>
    <hr className="border-white/10 mb-4" />
    <div className="text-sm text-white mb-4">
      <p className="mb-1">Functionalities includes</p>
      <ul className="space-y-2 mt-2">
        <li className="flex items-center gap-2">
          <Check size={16} className="text-green-400" /> GPT 4: {tokens1}
        </li>
        <li className="flex items-center gap-2">
          <Check size={16} className="text-green-400" /> GPT 3.5: {tokens2}
        </li>
        {images && (
          <li className="flex items-center gap-2">
            <Check size={16} className="text-green-400" /> {images} Images
          </li>
        )}
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check size={16} className="text-green-400" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <Button className="w-full  text-white mt-4 hover:opacity-90">
      Get Started
    </Button>
  </div>
);

export default function PricingTabs() {
  return (
    <section className="bg-[#090a1a] py-16 px-4 text-center">
      <h2 className="text-white text-center font-bold text-[48px] leading-[63.36px] tracking-[-0.48px] font-['Space_Grotesk']">
        Our Pricing
      </h2>
      <p className="text-[#F9F9F9] text-center font-bold text-[20px] leading-[26.4px] tracking-[-0.2px] font-['Space_Grotesk'] mt-4">
        Simple Pricing, Unbeatable Value
      </p>

      <Tabs defaultValue="monthly" className="w-full container mx-auto py-10">
        <div className="flex justify-center mb-4">
          <TabsList className="bg-[#10122e] p-3 py-6 border rounded-full flex gap-2 justify-center mb-10">
            <TabsTrigger
              value="monthly"
              className="data-[state=active]:bg-gradient-to-b from-primary to-secondary data-[state=active]:text-white px-6 py-4 rounded-full text-primary border border-primary "
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="data-[state=active]:bg-gradient-to-b from-primary to-secondary data-[state=active]:text-white px-6 py-4 rounded-full text-primary border border-primary  "
            >
              Yearly
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="monthly">
          <div className="flex flex-wrap justify-center gap-10">
            {pricingPlans.monthly.map((plan) => (
              <PlanCard key={plan.id} {...plan} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="yearly">
          <div className="flex flex-wrap justify-center gap-10">
            {pricingPlans.yearly.map((plan) => (
              <PlanCard key={plan.id} {...plan} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
