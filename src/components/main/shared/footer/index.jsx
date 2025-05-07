import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, X, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#070622]">
      <footer
        className="text-white rounded-t-4xl border-t-4 border-t-[#7A43A4] py-10 px-6 md:px-16"
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
            <p className="text-xl text-muted-foreground mb-4 max-w-xl">
              By enhancing your communication and giving your writing greater
              impact. We can help you reach your personal and professional
              goals.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="X">
                <X className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-10 md:mb-0">
            <h4 className="text-2xl text-[#c77dff] font-medium">Links</h4>
            <a href="#" className="text-lg hover:underline">
              About Us
            </a>
            <a href="#" className="text-lg hover:underline max-w-[200px]">
              Specified Commercial Transactions Law
            </a>
            <a href="#" className="text-lg hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-lg hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-lg hover:underline">
              Contact Us
            </a>
          </div>

          {/* Right: Logo and Subscribe */}
          <div className="flex flex-col gap-4 items-start md:items-end">
            <h1 className="text-5xl font-bold">Student-ia.</h1>
            <div className="relative w-full md:w-80">
              <Input
                placeholder="Your email here"
                className="bg-[#070622] text-white placeholder:text-white/60 border-none pr-28 py-7"
              />
              <Button
                className="absolute right-1 top-1/2 -translate-y-1/2 px-4 bg-[#7b2cbf] hover:bg-[#9d4edd] text-white h-8 text-sm"
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
