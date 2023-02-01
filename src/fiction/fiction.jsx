import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Fiction() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography
        variant="h2"
        component="h1"
        sx={{ fontWeight: 900, textTransform: "uppercase" }}
        gutterBottom
      >
        Sam Sycamore
        </Typography>
        <List sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper"  }}>
      <Link href="/fiction/voicechat" sx={{ textDecoration: "none" }}>
        <ListItem>
          <ListItemText
            primary="<< VoiceChat >>"
            secondary="A death in the family, as experienced by generative AI."
          />
        </ListItem>
      </Link>
    </List>
      </Box>
    </Container>
  );
}
