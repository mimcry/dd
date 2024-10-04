import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  Paper,
  Link,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";

import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <Container>
      <Paper
        elevation={24}
        sx={{
          bgcolor: "#0d3959",
          borderRadius: "20px",
          p: { xs: 4, md: 10 },
          pt: 12,
          pb: 12,
          fontSize: { xs: "12px", md: "14px" },
          mb:5,
          mt: 10,
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item md={6} lg={4}>
            <Typography>
              <Box
                component="img"
                src="https://images.assetsdelivery.com/compings_v2/wikagraphic/wikagraphic2102/wikagraphic210207138.jpg"
                alt="delivery"
                sx={{ width: "70px", height: "50px", borderRadius: "25px" }}
              />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "#00abf0",
                mt: 2,
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="caption2"
              sx={{ color: "rgba(255,255,255,0.6)" }}
            >
              Hiring me brings a passionate Web developer with a blend of
              design and coding skills. I'm committed to crafting engaging
              websites that elevate your online presence and user experience.
              Let's create something exceptional.
            </Typography>
          </Grid>

          <Grid item md={6} lg={2}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", fontWeight: "600", color: "#00abf0" }}
            >
              Contact
            </Typography>
            <List>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  variant="caption2"
                  sx={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Location: Dhulikhel, Bhattidanda
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  variant="caption2"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  Phone: 9860428022
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  variant="caption2"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  Email: salongautam4@gmail.com
                </Typography>
              </ListItemText>
            </List>
          </Grid>
          <Grid item md={6} lg={2}>
            <Box
              sx={{
                mt: 4,
                flexDirection: "row",
                ml: { lg: 20 },
              }}
            >
              <Link href="https://www.facebook.com/saalon.gautam/">
                {" "}
                <FacebookIcon
                  sx={{ mr: 1, color: "#00abf0", cursor: "pointer" }}
                />
              </Link>
              <Link href="https://www.twitter.com">
                <TwitterIcon
                  sx={{ mr: 1, color: "#00abf0", cursor: "pointer" }}
                />
              </Link>
              <Link href="https://www.instagram.com/salongautam/">
                {" "}
                <InstagramIcon
                  sx={{ mr: 1, color: "#00abf0", cursor: "pointer" }}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/salon-gautam-3633b1248/">
                <LinkedInIcon
                  sx={{ mr: 1, color: "#00abf0", cursor: "pointer" }}
                />
              </Link>
              
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
