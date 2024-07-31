import React from "react";
import {
  BackgroundImage,
  Image,
  Center,
  Text,
  Box,
  TextInput,
  PasswordInput,
  Button,
} from "@mantine/core";
import Link from "next/link";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import AuthService from "@/services/auth.service";

export default function Register() {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      access: ["G7Japtify-M"],
    },
  });

  //if user click the submit button: false -> true
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (values: {
    username: string;
    email: string;
    password: string;
  }) => {
    console.log("values", values);

    try {
      setLoading(true);
      const response = await AuthService.register(
        values.username,
        values.email,
        values.password
      );
      setMessage(response.data.message);
      setLoading(false);

      // Navigate to the home page after successful registration
      router.push("/");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={form.onSubmit((v) => handleSubmit(v))}>
      <title>Japship</title>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BackgroundImage
          src="images/Background.png"
          radius="sm"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Center className="flex flex-col bg-[#ffffff] w-full max-w-[330px] sm:max-w-[330px] md:max-w-[450px] lg:max-w-[450px] rounded-lg drop-shadow-lg px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] py-[30px] sm:py-[30px] md:py-[50px] lg:py-[50px]">
            <Link href="/">
              <Image
                className="w-full max-w-[230px] mb-9"
                src="images/Logo.png"
                alt="Logo"
              />
            </Link>
            <Box className="w-full flex flex-col items-center">
              <a className="text-xl font-bold">Register Your Account</a>
              <TextInput
                {...form.getInputProps("username")}
                className="w-full mt-5 mb-4 drop-shadow-lg"
                placeholder="Username"
                required
                radius="xl"
                size="lg"
              />
              <TextInput
                {...form.getInputProps("email")}
                className="w-full mb-4 drop-shadow-lg"
                placeholder="Email Address"
                type="email"
                radius="xl"
                required
                size="lg"
              />
              <PasswordInput
                {...form.getInputProps("password")}
                className="w-full mb-4 drop-shadow-lg"
                placeholder="Password"
                radius="xl"
                required
                size="lg"
              />
              <Button
                color="cyan"
                type="submit"
                w="100%"
                size="md"
                radius="xl"
                loading={loading}
              >
                Register
              </Button>
              <Box className="flex text-sm text-[#969696] mt-4">
                <Text>Already Have an Account ?</Text>
                <Link href="/login" className="font-bold">
                  &nbsp;Login
                </Link>
              </Box>
            </Box>
          </Center>
        </BackgroundImage>
      </div>
    </form>
  );
}
