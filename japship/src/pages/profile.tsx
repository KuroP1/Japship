import React from "react";
import { HeaderMegaMenu } from "@/components/Header";
import { Stack, Group, Text, Card, Avatar, Table } from "@mantine/core";
import { FooterSocial } from "@/components/Footer";
import classes from "@/styles/UserCardImage.module.css";
import authService from "@/services/auth.service";

const stats = [
  { value: "1", label: "Years" },
  { value: "Gold", label: "Member" },
  { value: "5", label: "purchase" },
];

const items = stats.map((stat) => (
  <div key={stat.label}>
    <Text ta="center" fz="lg" fw={500}>
      {stat.value}
    </Text>
    <Text ta="center" fz="sm" c="dimmed" lh={1}>
      {stat.label}
    </Text>
  </div>
));

const elements = [
  { ProductName: "Kawaii Sweet", Qty: 3, Price: "$1056", time: "2024-04-12" },
  {
    ProductName: "Boston Ukiyoe Archive T-shirt",
    Qty: 1,
    Price: "$99",
    time: "2024-04-13",
  },
  {
    ProductName: "Iwachu 12302 Teapot",
    Qty: 1,
    Price: "$488",
    time: "2024-04-14",
  },
  {
    ProductName: "Doll's Festival Doll",
    Qty: 1,
    Price: "$1033",
    time: "2024-04-15",
  },
  {
    ProductName: "RG 1/144 OO XN RAISER",
    Qty: 1,
    Price: "$260",
    time: "2024-04-19",
  },
  {
    ProductName: "RADIO EVA A028 EVANGELION Hand Stitch Turtleneck Knit/BLACK",
    Qty: 1,
    Price: "$2098",
    time: "2024-04-19",
  },
];

const rows = elements.map((element) => (
  <Table.Tr key={element.ProductName}>
    <Table.Td>{element.ProductName}</Table.Td>
    <Table.Td>{element.Qty}</Table.Td>
    <Table.Td>{element.Price}</Table.Td>
    <Table.Td>{element.time}</Table.Td>
  </Table.Tr>
));

export default function profile() {
  const user = authService.getCurrentUser();
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
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-row">
            <div className="p-8">
              <Card
                withBorder
                padding="xl"
                radius="md"
                className={classes.card}
              >
                <Avatar
                  src="https://res.cloudinary.com/dy3mkzbam/image/upload/v1713461056/Avatar_da2sni.png"
                  size={80}
                  radius={80}
                  mx="auto"
                  mt={20}
                  className={classes.avatar}
                />
                <Text ta="center" fz="lg" fw={500} mt="sm">
                  {user.username}
                </Text>
                <Text ta="center" fz="sm" c="dimmed">
                  JapUp User
                </Text>
                <Group mt="md" justify="center" gap={30}>
                  {items}
                </Group>
              </Card>
            </div>
            <div className="pt-9">
              <Table
                highlightOnHover
                verticalSpacing="sm"
                withTableBorder
                horizontalSpacing="xl"
              >
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Product name</Table.Th>
                    <Table.Th>Qty</Table.Th>
                    <Table.Th>Price</Table.Th>
                    <Table.Th>Date</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
              </Table>
            </div>
          </div>
        </div>
      </Stack>
      <FooterSocial />
    </div>
  );
}
