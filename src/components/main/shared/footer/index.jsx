import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FacebookSVG from "@/assets/svg/FacebookSVG";
import TwitterSVG from "@/assets/svg/TwitterSVG";
import YoutubeSVG from "@/assets/svg/YoutubeSVG";

export default function Footer() {
  return (
    <div className="bg-[#070622]">
      <footer
        className="text-white rounded-t-4xl border-t-4 border-t-[#7A43A4] py-36 px-6 md:px-16"
        style={{
          background:
            "linear-gradient(180deg, rgba(122, 67, 164, 0.30) 0%, rgba(96, 73, 188, 0.17) 100%)",
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div className="mb-10 md:mb-0">
            <h3 className="text-[32px] font-semibold mb-2 max-w-xl">
              Start writing clearly and confidently with{" "}
              <span className="text-[#7b2cbf]">Student IA</span>
            </h3>
            <p className="text-xl my-6 max-w-xl text-[#BCBCBC]">
              By enhancing your communication and giving your writing greater
              impact. We can help you reach your personal and professional
              goals.
            </p>
            <div className="flex gap-5">
              <a href="#" aria-label="Facebook">
                <FacebookSVG />
              </a>
              <a href="#" aria-label="X">
                <TwitterSVG />
              </a>
              <a href="#" aria-label="YouTube">
                <YoutubeSVG />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-10 md:mb-0 space-y-3">
            <h4 className="text-2xl text-[#6049BC] font-medium">Links</h4>
            <a href="#" className="text-lg hover:underline text-[#D4D4D4]">
              About Us
            </a>
            <a
              href="#"
              className="text-lg hover:underline text-[#D4D4D4] max-w-[200px]"
            >
              Specified Commercial Transactions Law
            </a>
            <a href="#" className="text-lg hover:underline text-[#D4D4D4]">
              Privacy Policy
            </a>
            <a href="#" className="text-lg hover:underline text-[#D4D4D4]">
              Terms of Service
            </a>
            <a href="#" className="text-lg hover:underline text-[#D4D4D4]">
              Contact Us
            </a>
          </div>

          {/* Right: Logo and Subscribe */}
          <div className="flex flex-col gap-4 items-start md:items-end">
            <h1 className="text-5xl font-bold">Student-ia.</h1>
            <div className="relative w-full md:w-80 mt-[28px]">
              <Input
                placeholder="Your email here"
                className="!bg-[#070622] text-white placeholder:text-white/60 border-none pr-28 pl-8 py-7 placeholder:text-base"
              />
              <Button
                className="absolute right-1 top-1/2 -translate-y-1/2 px-6 bg-[#7b2cbf] hover:bg-[#9d4edd] text-white h-[85%] text-sm cursor-pointer rounded-[8px]"
                size="sm"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
