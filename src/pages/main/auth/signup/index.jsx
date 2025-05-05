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
    firstName: z.string().min(1, "First Name is required"),
    surname: z.string().min(1, "Surname is required"),
    email: z.string().email("Email is required"),
    country: z.string().min(1, "Country is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    terms: z.boolean().refine((val) => val, {
      message: "You must agree to terms",
    }),
    newsletter: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Signup() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      surname: "",
      email: "",
      country: "",
      password: "",
      confirmPassword: "",
      terms: false,
      newsletter: true,
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
          className="w-full max-w-4xl border-none  bg-[#1C202B] text-white border-2 [border-color:rgba(210,74,201,0.4)]"
          style={{
            boxShadow: "6px 3px 40px 0px rgba(114, 75, 150, 0.25)",
          }}
        >
          <CardContent className="p-8">
            <h2 className="text-center text-white font-bold text-[40px] leading-[1.32] tracking-[-0.4px] font-['Space_Grotesk'] mb-1">
              Create your account With{" "}
              <span className="text-purple-400">Studnet IA</span>
            </h2>
            <p className="text-center text-white font-['Space_Grotesk'] text-[24px] font-medium leading-[1.32] tracking-[-0.48px] mb-6">
              provide your Information to and click Continue
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-['Space_Grotesk'] text-[12px] font-normal leading-[1.64]">
                        First Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="surname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-['Space_Grotesk'] text-[12px] font-normal leading-[1.64]">
                        Surname <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-['Space_Grotesk'] text-[12px] font-normal leading-[1.64]">
                        Country <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="w-full"
                        >
                          <SelectTrigger className={"w-full"}>
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USA">USA</SelectItem>
                            <SelectItem value="UK">UK</SelectItem>
                            <SelectItem value="Bangladesh">
                              Bangladesh
                            </SelectItem>
                          </SelectContent>
                        </Select>
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

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-['Space_Grotesk'] text-[12px] font-normal leading-[1.64]">
                        Confirm Password <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Terms */}
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
                        <FormLabel>
                          I have read and agree to the Terms and Conditions.
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Newsletter */}
                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="col-span-2 flex items-start space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to receive Newsletter by Email
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <div className="col-span-2 mt-4 mx-auto">
                  <Button
                    type="submit"
                    className="w-full max-w-xs   hover:bg-purple-700 text-white"
                  >
                    Continue
                  </Button>
                  <p className="text-center text-sm mt-4">
                    Already Have An Account?{" "}
                    <a href="/login" className="text-purple-400 underline">
                      Log in
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
