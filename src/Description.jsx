import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Description() {
  return (
    <>
      <Typography
        variant="h2"
        component="h1"
        sx={{ fontWeight: 900, textTransform: "uppercase" }}
        gutterBottom
      >
        Sam Sycamore
      </Typography>
      <Typography gutterBottom>
        is an American writer and web developer. He is the creator of{" "}
        <Link href="https://www.thegoodliferevival.com/">
          <em>The Good Life Revival Podcast</em>
        </Link>{" "}
        (2016-2019) and the author of two books:{" "}
        <Link href="https://shop.sycamore.garden/l/introduction-to-foraging">
          <em>Introduction to Foraging</em>
        </Link>{" "}
        (2018) and{" "}
        <Link href="https://www.thegoodliferevival.com/shop/fna">
          <em>Foraging North America</em>
        </Link>{" "}
        (2019). He currently works as a technical writer and developer relations
        engineer in the tech industry.
      </Typography>
    </>
  );
}
