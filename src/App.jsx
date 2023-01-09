import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Copyright from './Copyright';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 900, textTransform: 'uppercase' }} gutterBottom>
          Sam Sycamore
        </Typography>
        <Typography gutterBottom>
          is an American writer and web developer. He is the creator of <Link href="https://www.thegoodliferevival.com/"><em>The Good Life Revival Podcast</em></Link> (2016-2019) and the author of two books: <Link href="https://shop.sycamore.garden/l/introduction-to-foraging"><em>Introduction to Foraging</em></Link> (2018) and <Link href="https://www.thegoodliferevival.com/shop/fna"><em>Foraging North America</em></Link> (2019).
          He currently works as a technical writer and developer relations engineer. View <Link href="https://work.sycamore.garden/">Sam's professional portfolio</Link>.
        </Typography>
        
        <Copyright />
      </Box>
    </Container>
  );
}
