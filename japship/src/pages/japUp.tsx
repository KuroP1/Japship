import React, { useState } from "react";
import { HeaderMegaMenu } from "@/components/Header";
import { Stack, Box, Text } from "@mantine/core";
import { FooterSocial } from "@/components/Footer";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import {
  Button,
  Grid,
  Flex,
  TextInput,
  Checkbox,
  Tooltip,
  NumberInput,
} from "@mantine/core";

export default function JapUp() {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      type: "",
      time_limit: ["date_start", "date_end"],
      item_info: ["url", "quantity", "price", "item_spec"],
      confirmUA: true,
    },
  });

  // const handleSubmit = async (values: {
  //   type: string;
  //   time_limit: object;
  //   item_info: object;
  //   confirmUA: boolean;
  // }) => {
  //   console.log("values", values);
  //   try {
  //     const response = await fetch("/baseurl/g7japtify/req_buy", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(values),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status}`);
  //     }

  //     // Handle the response from the server
  //     const result = await response.json();
  //     console.log("Form submitted successfully:", result);

  //     // Optionally redirect the user or perform other actions
  //     // router.push('/success-page');
  //   } catch (error) {
  //     console.error("Failed to submit form:", error);
  //   }
  // };

  const handleSubmit = () => {
    router.push("/payment");
  };

  // State to track the checked status of each checkbox
  const [isChecked, setIsChecked] = useState({
    yes: false,
    no: false,
  });

  // Handler for 'Yes' checkbox
  const handleYesChange = () => {
    setIsChecked({ yes: !isChecked.yes, no: false });
  };

  // Handler for 'No' checkbox
  const handleNoChange = () => {
    setIsChecked({ yes: false, no: !isChecked.no });
  };

  return (
    <div>
      <title>Japship</title>
      <Stack className="w-full bg-[#F6F5F8] overflow-x-hidden">
        <HeaderMegaMenu />
        <img
          src="images/AboutUs.png"
          alt="Logo"
          className="object-cover w-full h-80"
        />
        <div className="flex flex-col items-center justify-center">
          <Stack className="max-w-[1000px] bg-white rounded-lg p-8 m-8 mb-20 mt-0">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Box w="800">
                <Text size="auto" fw={500} fz={26} ta="center">
                  Jap Up Form
                </Text>
                <Grid grow gutter="lg" pt={25}>
                  <Grid.Col span={2}>
                    <Text size="auto" fw={500} fz={20} ta="center">
                      URL
                    </Text>
                  </Grid.Col>

                  <Grid.Col span={8}>
                    <TextInput
                      {...form.getInputProps("url")}
                      className="w-full drop-shadow-lg"
                      placeholder="The URL of the product page"
                      required
                      radius="xl"
                      size="md"
                    />
                  </Grid.Col>
                </Grid>
                <Grid grow gutter="lg" pt={25}>
                  <Grid.Col span={2}>
                    <Text size="auto" fw={500} fz={20} ta="center">
                      Product Name
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={8}>
                    <TextInput
                      {...form.getInputProps("product_name")}
                      className="w-full drop-shadow-lg"
                      placeholder="Product Name"
                      required
                      radius="xl"
                      size="md"
                    />
                  </Grid.Col>
                </Grid>
                <Grid grow gutter="lg" pt={25}>
                  <Grid.Col span={2}>
                    <Text size="auto" fw={500} fz={20} ta="center">
                      Product Price (Yen)
                    </Text>
                  </Grid.Col>

                  <Grid.Col span={8}>
                    <TextInput
                      {...form.getInputProps("product_price")}
                      className="w-full drop-shadow-lg"
                      placeholder="Product Price"
                      required
                      radius="xl"
                      size="md"
                    />
                  </Grid.Col>
                </Grid>
                <Grid grow gutter="lg" pt={10}>
                  <Grid.Col span={2}>
                    <Text size="auto" fw={500} fz={20} ta="center" pt={25}>
                      JapUp?
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={2}>
                    <Grid pl={20}>
                      <Grid.Col span={4}>
                        <Tooltip label="This product need to be jap up.">
                          <Checkbox
                            label="Yes"
                            pt={35}
                            checked={isChecked.yes}
                            onChange={handleYesChange}
                          />
                        </Tooltip>
                      </Grid.Col>
                      <Grid.Col span={4} pl={20}>
                        <Tooltip label="This product do not need to be jap up.">
                          <Checkbox
                            label="No"
                            pt={35}
                            checked={isChecked.no}
                            onChange={handleNoChange}
                          />
                        </Tooltip>
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                  <Grid.Col span={2}>
                    <Text size="auto" fw={500} fz={20} ta="center" pt={25}>
                      Quantity
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={2}>
                    <NumberInput
                      defaultValue={1}
                      min={1}
                      max={100}
                      size="sm"
                      radius="xs"
                      withAsterisk
                      pt={25}
                    />
                  </Grid.Col>
                </Grid>
                <Grid grow gutter="lg" pt={10}>
                  <Grid.Col span={2}></Grid.Col>
                  <Grid.Col span={8}></Grid.Col>
                </Grid>
                <Flex justify="center" pt={25} pb={25}>
                  <Button
                    color="cyan"
                    type="submit"
                    w="25%"
                    size="md"
                    radius="xl"
                  >
                    Submit
                  </Button>
                </Flex>
              </Box>
            </form>
          </Stack>
        </div>
      </Stack>
      <FooterSocial />
    </div>
  );
}
