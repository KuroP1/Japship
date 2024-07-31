import { Image, Box, Select } from "@mantine/core";
import { HeaderMegaMenu } from "@/components/Header";
import { FooterSocial } from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useState, useEffect } from "react";
import _ from "lodash";

type SortOrder = "asc" | "desc";
interface SortingState {
  column: string;
  sort: SortOrder;
}

export default function Home() {
  const products = [
    {
      produce_category: "Traditional Arts",
      produce_name: "Japan Kimono Doll",
      produce_path:
        "https://res.cloudinary.com/dy3mkzbam/image/upload/v1713020425/Japship/os9iw6ijws15uo40q59a.jpg",
      produce_price: 134,
    },
    {
      produce_category: "Traditional Arts",
      produce_name: "Doll's Festival Doll",
      produce_path:
        "https://res.cloudinary.com/dy3mkzbam/image/upload/v1713020760/Japship/afdaaqcmjyq2f9u3gggf.jpg",
      produce_price: 1033,
    },
    {
      produce_category: "Modern Crafts",
      produce_name: "RG 1/144 OO XN RAISER",
      produce_path:
        "https://res.cloudinary.com/dy3mkzbam/image/upload/v1713021045/Japship/it0uam6tq4yrhbs4eeyv.jpg",
      produce_price: 260,
    },
    {
      produce_category: "Fashion and Accessories",
      produce_name: "Boston Ukiyoe Archive T-shirt",
      produce_path:
        "https://res.cloudinary.com/dy3mkzbam/image/upload/v1713021175/Japship/odgqbqkj5b9vnxy6tnnk.avif",
      produce_price: 99,
    },
    {
      produce_category: "Food and Snacks",
      produce_name: "Kawaii Sweet",
      produce_path:
        "https://res.cloudinary.com/dy3mkzbam/image/upload/v1713021366/Japship/q79qfxjjivpntss1kpb4.jpg",
      produce_price: 352,
    },
    {
      produce_category: "Home and Lifestyle",
      produce_name: "Iwachu 12302 Teapot",
      produce_path:
        "https://res.cloudinary.com/dy3mkzbam/image/upload/v1713021461/Japship/xv4g1yjhmnretcniwgsj.jpg",
      produce_price: 488,
    },
  ];
  const [category, setCategory] = useState<string | null>(null);

  const [sorting, setSorting] = useState<SortingState>({
    column: "produce_price",
    sort: "asc",
  });
  const [sortedProducts, setSortedProducts] = useState(products);

  console.log("Hi");

  useEffect(() => {
    let filteredProducts = products;

    // Filter by category if a category is selected
    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.produce_category.replace(/\s+/g, "_").toLowerCase() ===
          category
      );
    }

    // Apply sorting by price or other fields
    const sorted = _.orderBy(
      filteredProducts,
      [sorting.column],
      [sorting.sort]
    );
    setSortedProducts(sorted);
  }, [sorting, category]);

  const handleSorting = (value: string) => {
    let sort: SortOrder = "asc";
    if (value === "highest_price") {
      sort = "desc";
    } else if (value === "lowest_price") {
      sort = "asc";
    }
    setSorting({ column: "produce_price", sort });
  };

  const handleCategoryChange = (value: string) => {
    if (value === "all") {
      setCategory(null); // Reset the category filter when "All" is selected
    } else {
      setCategory(value);
    }
  };

  return (
    <Box>
      <HeaderMegaMenu />
      <Box className="flex flex-col items-center justify-center overflow-x-hidden">
        <Image
          className="object-cover w-full"
          src="images/Banner.png"
          alt="Banner"
        />
        <Box className="relative flex flex-col items-center justify-center w-full">
          <Box className="bg-[#232323] w-full flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center py-14">
            <Select
              className="px-[5rem] my-4 sm:my-4 lg:my-0"
              label="Sorting"
              placeholder="Select Sorting"
              onChange={(value) => {
                handleSorting(value!);
              }}
              data={[
                { value: "lowest_price", label: "Lowest Price" },
                { value: "highest_price", label: "Highest Price" },
              ]}
              styles={{
                label: { color: "#fff", fontWeight: "bold", fontSize: "20px" },
                input: {
                  background: "transparent",
                  borderColor: "#fff",
                  height: "45px",
                  fontSize: "16px",
                  color: "#fff",
                  ":focus": { borderColor: "#fff" },
                  width: "350px",
                },
              }}
            />
            <Select
              className="px-[5rem] my-4 sm:my-4 lg:my-0"
              label="Category"
              placeholder="Select Category"
              onChange={(value) => handleCategoryChange(value!)}
              data={[
                { value: "all", label: "ALL" },
                { value: "traditional_arts", label: "Traditional Arts" },
                { value: "modern_crafts", label: "Modern Crafts" },
                {
                  value: "fashion_and_accessories",
                  label: "Fashion and Accessories",
                },
                { value: "food_and_snacks", label: "Food and Snacks" },
                { value: "home_and_lifestyle", label: "Home and Lifestyle" },
              ]}
              styles={{
                label: {
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "20px",
                },
                input: {
                  background: "transparent",
                  borderColor: "#fff",
                  height: "45px",
                  fontSize: "16px",
                  color: "#fff",
                  ":focus": {
                    borderColor: "#fff",
                  },
                  width: "350px",
                },
              }}
            />
          </Box>
        </Box>
        <Box className="my-[3rem] px-20 sm:my-[3rem] lg:my-[7rem] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[8rem] gap-y-[5rem]">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={index}
              produce_name={product.produce_name}
              produce_path={product.produce_path}
              produce_price={product.produce_price}
            />
          ))}
        </Box>
      </Box>
      <FooterSocial />
    </Box>
  );
}
