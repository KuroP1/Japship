import React from "react";
import { HeaderMegaMenu } from "@/components/Header";
import { Stack, Box } from "@mantine/core";
import { Mail, Phone } from "tabler-icons-react";
import { FooterSocial } from "@/components/Footer";

export default function aboutUs() {
  return (
    <div>
      <Stack className="w-full bg-[#F6F5F8] overflow-x-hidden">
        <HeaderMegaMenu />
        <img
          src="images/AboutUs.png"
          alt="Logo"
          className="object-cover w-full h-80"
        />
        <div className="flex flex-col items-center justify-center">
          <Stack className="max-w-[800px] bg-white rounded-lg p-8 m-8 mb-20 mt-0">
            <a className="text-5xl font-bold">Welcome to Japship</a>
            <p className="my-0">
              Japship is a purchasing agent company based in Hong Kong that
              focuses on purchasing Japanese products for Hong Kong people. Our
              team members are Japanese product enthusiasts. The purpose of our
              company is dedicated to providing high-quality Japanese products
              and services to our customers.
            </p>
            <p className="my-0">
              Japship will offer different types of Japanese products and a
              function to help users snap various products up. Also, Japtify
              will cooperate with different Japanese companies and some Japanese
              artisans to provide different types of products that may only be
              able to buy in Japan—for example, Japanese porcelain, Japanese
              lacquerware, Japanese traditional Ichimatsu doll, Japanese
              tie-dyeing, etc.
            </p>
            <p className="my-0">
              If you have any questions about our products or services, please
              don't hesitate to contact us and we'll get back to you as soon as
              possible.
            </p>
            <p className="my-0">
              Thank you for considering Japship for your daily needs. We look
              forward to helping you with your next Japanese purchasing agent!
            </p>
            <Box className="w-full text-md md-text-xl space-y-3 bg-[#315E52] rounded-lg p-4">
              <div className="flex flex-row items-center my-0 text-white">
                <Mail
                  size={28}
                  strokeWidth={2}
                  color={"white"}
                  className="mr-2"
                />
                Japship@gmail.com
              </div>
              <div className="flex items-center my-0 text-white">
                <Phone
                  size={28}
                  strokeWidth={2}
                  color={"white"}
                  className="mr-2"
                />
                +852 12345678
              </div>
            </Box>
          </Stack>
        </div>
      </Stack>
      <FooterSocial />
    </div>
  );
}
