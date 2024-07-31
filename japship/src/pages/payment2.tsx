import {
  Container,
  Stack,
  Text,
  Table,
  Image,
  Button,
  Box,
  TextInput,
} from "@mantine/core";
import { HeaderMegaMenu } from "@/components/Header";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { FooterSocial } from "@/components/Footer";

export default function Payment2() {
  const [paymentMethod, setPaymentMethod] = useState("others");
  const form = useForm({
    initialValues: {
      street: "",
      building: "",
      block: "",
      floor: "",
      room: "",
    },
  });

  const handleCheckout = async () => {
    if (paymentMethod === "stripe") {
      window.open("https://buy.stripe.com/test_fZe5kC8XQd9L55CdQQ");
      window.location.href = "/";
    } else {
      // Handle other payment methods
    }
  };
  const elements = [
    {
      ProductName: "RG 1/144 OO XN RAISER",
      Qty: 1,
      Price: "260HKD",
    },
  ];
  const rows = elements.map((element) => (
    <Table.Tr key={element.ProductName}>
      <Table.Td>{element.ProductName}</Table.Td>
      <Table.Td>{element.Qty}</Table.Td>
      <Table.Td>{element.Price}</Table.Td>
    </Table.Tr>
  ));

  const [isFormVisible, setIsFormVisible] = useState(true);

  const payment = (value: string) => {
    if (value === "stripe") {
      setPaymentMethod("stripe");
      setIsFormVisible(false);
    } else {
      setPaymentMethod(value);
      setIsFormVisible(true);
    }
  };

  return (
    <>
      <form onSubmit={form.onSubmit((v) => handleCheckout())}>
        <Stack className="w-full bg-[#F6F5F8]">
          <HeaderMegaMenu />
          <Container
            className="flex w-full max-w-[1600px] min-h-screen flex-col"
            mb="lg"
          >
            <Text size="xl" fw={700} pb={20}>
              Shopping Cart
            </Text>
            <Container className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row max-w-[1600px]">
              <Box className="bg-white rounded-md p-10 mr-2 w-full lg:w-[60%] ">
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Product Name</Table.Th>
                      <Table.Th>Qty</Table.Th>
                      <Table.Th>Price</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
                </Table>
              </Box>

              <Box className="bg-white rounded-md mt-10 lg:mt-0 lg:ml-2 w-full lg:w-[40%] p-10 flex flex-col justify-start">
                <Text size="xl" fw={700} pb={20} className="text-center">
                  Payment Method
                </Text>
                <Text size="md" fw={500} className="text-center">
                  Please select a payment method
                </Text>
                <Box className="grid self-center grid-cols-1 gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                  <Button
                    onClick={() => payment("fps")}
                    variant="outline"
                    color={paymentMethod === "fps" ? "#2c7a7b" : "black"}
                    h={80}
                  >
                    <Image
                      src="../images/FPS.png"
                      alt="FPS"
                      width={90}
                      height={90}
                      fit="cover"
                    />
                  </Button>
                  <Button
                    onClick={() => payment("payme")}
                    variant="outline"
                    color={paymentMethod === "payme" ? "#2c7a7b" : "black"}
                    h={80}
                  >
                    <Image
                      src="../images/Payme.png"
                      alt="Payme"
                      width={90}
                      height={90}
                      fit="cover"
                    />
                  </Button>
                  <Button
                    onClick={() => payment("stripe")}
                    variant="outline"
                    color={paymentMethod === "stripe" ? "#2c7a7b" : "black"}
                    h={80}
                  >
                    <Image
                      src="../images/Stripe.jpg"
                      alt="Stripe"
                      width={90}
                      height={50}
                      fit="cover"
                    />
                  </Button>
                  <Button
                    onClick={() => payment("cash")}
                    variant="outline"
                    color={paymentMethod === "cash" ? "#2c7a7b" : "black"}
                    h={80}
                  >
                    <Image
                      src="../images/Alipay.png"
                      alt="Alipay"
                      width={90}
                      height={100}
                      fit="cover"
                    />
                  </Button>
                </Box>
                {isFormVisible && (
                  <Text
                    size="xl"
                    pt={20}
                    fw={700}
                    pb={20}
                    className="text-center"
                  >
                    Delivery Address
                  </Text>
                )}
                {isFormVisible && (
                  <Text size="md" fw={500} className="text-center">
                    Please input Delivery Address
                  </Text>
                )}
                {isFormVisible && (
                  <TextInput
                    className="my-2"
                    placeholder=""
                    label="Street Name"
                    radius="md"
                    size="md"
                    required
                    withAsterisk
                    disabled={paymentMethod === "stripe"}
                    {...form.getInputProps("street")}
                  />
                )}
                {isFormVisible && (
                  <TextInput
                    className="my-2"
                    placeholder=""
                    label="Building Name"
                    radius="md"
                    size="md"
                    required
                    withAsterisk
                    disabled={paymentMethod === "stripe"}
                    {...form.getInputProps("building")}
                  />
                )}
                {isFormVisible && (
                  <Box className="flex my-2">
                    <TextInput
                      className="mr-2"
                      placeholder=""
                      label="Block"
                      radius="md"
                      size="md"
                      disabled={paymentMethod === "stripe"}
                      {...form.getInputProps("block")}
                    />
                    <TextInput
                      className="ml-2"
                      placeholder=""
                      label="Floor"
                      radius="md"
                      size="md"
                      required
                      withAsterisk
                      disabled={paymentMethod === "stripe"}
                      {...form.getInputProps("floor")}
                    />
                    <TextInput
                      className="ml-2"
                      placeholder=""
                      label="Room"
                      radius="md"
                      size="md"
                      required
                      disabled={paymentMethod === "stripe"}
                      {...form.getInputProps("room")}
                    />
                  </Box>
                )}
                <Button
                  type="submit"
                  disabled={paymentMethod === "others"}
                  className="mt-10 duration-200"
                >
                  Checkout
                </Button>
              </Box>
            </Container>
          </Container>
        </Stack>
      </form>
      <FooterSocial />
    </>
  );
}
