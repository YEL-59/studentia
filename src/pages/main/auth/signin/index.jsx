import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logo from "../../../../assets/logo.png";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Schema
const formSchema = z
  .object({
    email: z.string().email("Email is required"),

    password: z.string().min(6, "Password must be at least 6 characters"),

    terms: z.boolean().refine((val) => val, {
      message: "You must agree to terms",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Signin() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",

      password: "",

      terms: false,
    },
  });

  const onSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="min-h-screen bg-[#1C202B] text-white">
      {/* Navbar */}
      <header
        className="w-full bg-[#1C202B] "
        style={{
          boxShadow: "6px 3px 40px 0px rgba(114, 75, 150, 0.25)",
        }}
      >
        <img src={logo} alt="" />
      </header>

      {/* Form Card */}
      <div className="flex justify-center px-4 mt-20">
        <Card
          className="w-full max-w-2xl border-none  bg-[#1C202B] text-white border-2 [border-color:rgba(210,74,201,0.4)]"
          style={{
            boxShadow: "6px 3px 40px 0px rgba(114, 75, 150, 0.25)",
          }}
        >
          <CardContent className="p-8">
            <h2 className="text-center text-white font-bold text-[40px] leading-[1.32] tracking-[-0.4px] font-['Space_Grotesk'] mb-10">
              Welcome back to
              <span className="text-[#7A43A4]">Studnet IA</span>
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col  gap-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-['Space_Grotesk'] text-[12px] font-normal leading-[1.64]">
                        Email Address <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Email Address"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-['Space_Grotesk'] text-[12px] font-normal leading-[1.64]">
                        Password <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="col-span-2 flex items-start space-x-2 mt-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Stay Connect</FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <p className="text-[#7A43A4] font-['Space_Grotesk'] text-[10px] font-normal leading-[1.64] capitalize">
                    {" "}
                    Forget Your Password?{" "}
                  </p>
                </div>

                {/* Submit */}
                <div className="w-full mt-4 mx-auto">
                  <Button
                    type="submit"
                    className="w-full   hover:bg-purple-700 text-white"
                  >
                    Login
                  </Button>
                  <p className="text-center text-sm mt-4">
                    New to Student IA?{" "}
                    <a href="/login" className="text-purple-400 underline">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
