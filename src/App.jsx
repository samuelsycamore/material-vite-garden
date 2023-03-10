import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "./List";
import Description from "./Description";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Description />
        <List />
      </Box>
    </Container>
  );
}
