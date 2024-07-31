import React from "react";
import { HeaderMegaMenu } from "@/components/Header";
import { Image, Stack, Text, Rating, Title } from "@mantine/core";
import { FooterSocial } from "@/components/Footer";
import { useRouter } from "next/router";
import { Button, Paper } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

export default function Product() {
  const router = useRouter();

  const handleGoToPayment = () => {
    router.push("/payment2");
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
          <div className="flex flex-row">
            <div className="p-8">
              <Carousel
                withIndicators
                h={500}
                w={500}
                controlsOffset="xs"
                controlSize={40}
              >
                <Carousel.Slide>
                  <Image
                    src="https://res.cloudinary.com/dy3mkzbam/image/upload/v1713100730/Japship/2_hbcjoi.jpg"
                    alt="Image 1"
                    height={50}
                    width={50}
                    fit="contain"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <Image
                    src="https://res.cloudinary.com/dy3mkzbam/image/upload/v1713100730/Japship/1_cs7vac.jpg"
                    alt="Image 2"
                    height={50}
                    width={50}
                    fit="contain"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <Image
                    src="https://res.cloudinary.com/dy3mkzbam/image/upload/v1713021045/Japship/it0uam6tq4yrhbs4eeyv.jpg"
                    alt="Image 2"
                    height={50}
                    width={50}
                    fit="contain"
                  />
                </Carousel.Slide>
              </Carousel>
            </div>
            <div className="p-8">
              <Paper shadow="xl" radius="xl" p="xl" w={600}>
                <Text size="xl" lineClamp={10} fw={700}>
                  RG 1/144 OO XN RAISER
                </Text>
                <Text c="dimmed">- Bandai</Text>
                <Rating
                  defaultValue={4}
                  pt={20}
                  color="violet"
                  readOnly
                  size="xl"
                />
                <Title pt={70}>
                  <Text span fw={700} size="xl">
                    Price：
                  </Text>
                  <Text span size="xl">
                    $260 HKD
                  </Text>
                </Title>
                <Title pt={10} pb={30}>
                  <Text span fw={700} size="xl">
                    Stock：
                  </Text>
                  <Text span size="xl">
                    100 Left
                  </Text>
                </Title>
                <Button variant="filled" onClick={handleGoToPayment}>
                  Buy Now
                </Button>
              </Paper>
            </div>
          </div>
          <div className="p-8">
            <Paper shadow="xl" radius="xl" p="xl">
              <Text ta="center" fw={700} pb={20} size="xl">
                Description
              </Text>
              <Text>
                The movable display stand "ACTION BASE" is a separately released
                product. Set contents include: GN Buster Sword III, GN Sword II,
                GN Sword III, GN Beam Saber. Quantity: 3 pieces per person, 6
                pieces in total.
              </Text>
              <Text>
                The product image is a trial product under development. In
                addition, the finished product in the photo has been painted.
                There may be some changes between the photo and the actual
                product. Please note that air bubbles may be mixed in during the
                manufacturing process of transparent parts.
              </Text>
              <Text>
                ・This product is not available at plastic model specialty
                stores.
                <Text>
                  ・This product may be offered for sale at events or other
                  projects organized by our company.
                </Text>
                <Text>
                  ・This product is available in limited quantities at Japship.
                  We apologize if they are sold out.
                </Text>
                <Text>
                  ・Please note that the quantity of this product may be limited
                  to a certain number of units per customer depending on the
                  status of the application and the number of units to be
                  produced.{" "}
                </Text>
                <Text>
                  ・Please note that the shipment date of this product is
                  subject to change depending on the status of application and
                  production.
                </Text>
                <Text>
                  ・Photographs are of prototype products under development, and
                  actual products may vary slightly.
                </Text>
                <Text>
                  ・Please note that the product specifications are based on the
                  information at the time of pre-order and may be subject to
                  change in the future.
                </Text>
                <Text>
                  ・Please note that Hobby Shop boxes are for delivery only.
                </Text>
                <Text>
                  If the original box of the product has any folds, abrasions,
                  dents, or other similar conditions that do not affect the
                  quality of the product, we reserve the right to refuse to
                  exchange or refund the product to the customer.
                </Text>
              </Text>
            </Paper>
          </div>
        </div>
      </Stack>
      <FooterSocial />
    </div>
  );
}
