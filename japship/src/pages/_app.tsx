import "@/styles/index.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { Cloudinary } from "@cloudinary/url-gen";

const theme = createTheme({
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const cld = new Cloudinary({ cloud: { cloudName: "dy3mkzbam" } });
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
