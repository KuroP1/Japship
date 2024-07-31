import { Card, Image, Text, Button, Group, Skeleton } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import Link from "next/link";

interface ProductCardProps {
  produce_name: string;
  produce_path: string;
  produce_price: number;
}

export default function ProductCard({
  produce_name,
  produce_path,
  produce_price,
}: ProductCardProps) {
  const { hovered, ref } = useHover<HTMLButtonElement>();

  return (
    <Link href={`/product`} passHref>
      <Card
        className="w-[20rem] flex flex-col justify-center items-center"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
      >
        <Card.Section className="py-5">
          <Image
            src={`${produce_path}`}
            alt="product-image"
            fit="contain"
            h={200}
            px={20}
          />
        </Card.Section>

        <Group
          className="flex flex-col items-center justify-center"
          mt="md"
          mb="md"
        >
          <Text size="xl" fw={700} ta="center" w={500}>
            {produce_name}
          </Text>
        </Group>

        <Text className="font-bold" size="md" color="dimmed">
          HKD ${produce_price}
        </Text>
        <Button
          bg={hovered ? "#16999B" : "#2c7a7b"}
          color="yellow"
          fullWidth
          mt="md"
          radius="md"
          ref={ref}
        >
          Buy Now
        </Button>
      </Card>
    </Link>
  );
}

const SkeletonCard = ({ loading }: { loading: boolean }) => (
  <Skeleton w="100%" h={270} radius="lg" visible={loading} />
);
ProductCard.Skeleton = SkeletonCard;
