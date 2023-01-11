import * as React from "react";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";

export default function LinkList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Link href="https://work.sycamore.garden/">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Professional portfolio"
            secondary="Sam's career as a writer and web developer"
          />
        </ListItem>
      </Link>
      <Link href="https://tech.sycamore.garden/">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Tech blog"
            secondary="Web dev, freelancing, and careers in tech"
          />
        </ListItem>
      </Link>
      <Link href="https://foraging.sycamore.garden/">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Foraging blog"
            secondary="North American edible wild plant database"
          />
        </ListItem>
      </Link>
      <Link href="https://www.sycamore.garden/music">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Music" secondary="Demos and sketches" />
        </ListItem>
      </Link>
    </List>
  );
}
