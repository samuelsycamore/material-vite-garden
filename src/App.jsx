import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import List from "./List";

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
