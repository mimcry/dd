import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Link,
  Button,
} from "@mui/material";

import Container from "@mui/material/Container";

function Home() {
  const [data] = useState([
    {
      image: "hotel.png",
      type: "Hotel Website",
      description:
        "Simple hotel website about booking a room and ordering a food.",
      link: "https://github.com/mimcry/Personal_website_using_Material_UI-and-React_Js.git",
      link2:
        "https://664b30e45b0c79a5a632697d--elaborate-medovik-94140a.netlify.app",
    },
    {
      image: "personal.png",
      type: "Personal portfolio",
      description:
        "Personal portfolio where you can show your skills, projects and the field you're working on.",
      link: "https://github.com/mimcry/Personal_website_using_Material_UI-and-React_Js.git",
      link2: "gautamsalon.com.np",
    },
    {
      image: "foodie.png",
      type: "Foodie",
      description:
        "Food ordering website where you can place order and browse menu.",
      link: "https://github.com/imnabid/Foodie-a-food-delivery-website.git",
      link2: "",
    },
    {
      image: "swarmnet.png",
      type: "Swarmnet",
      description:
        "Swarmnet is P2P file sharing system made with the help of Rust and React JS",
      link: "https://github.com/imnabid/SwarmNet-peer-to-peer-file-sharing.git",
    },
    {
      image: "bella.png",
      type: "Clothing Store",
      description:
        "Swarmnet is P2P file sharing system made with the help of Rust and React JS",
      link: "https://github.com/imnabid/SwarmNet-peer-to-peer-file-sharing.git",
      link2: "https://stunning-chebakia-26098d.netlify.app/",
    },
    {
      image: "crypto.png",
      type: "Coinlore API: Tables",
      description:
        "Filtering data by Rank, Price, Percentage and also filter data in each column. ",
      link: "https://github.com/mimcry/Data-Visualization-and-Table-Manipulation-using-Coinlore-API",
      link2: "https://sparkly-ganache-d68682.netlify.app/",
    },
    {
      image: "foodie.jpg",
      type: "Foodie mobile app",
      description:
        "A food delivery app with a food allergy alert system, built using React Native and Node.js. ",
      link: "https://github.com/mimcry/Foodie-App-React_Native",
      link2: "https://youtu.be/mJXJEGqvh1M",
    },
    {
      image: "agrinepal.png",
      type: "Agri Nepal",
      description:
        "Empowering Nepali farmers with market access, real-time prices, and expert advice for a sustainable future. ",
      link: "https://github.com/mimcry/",
    },
  ]);
  return (
    <div id="Projects">
      <Container>
        <Box sx={{ mt: 15 }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            What I have done
          </Typography>
          <Typography
            sx={{ textAlign: "center", fontSize: "1.9rem", color: "#00abf0" }}
          >
            My <span style={{ color: "white" }}>Projects 📟</span>
          </Typography>

          <Grid container spacing={4}>
            {" "}
            {data.map((data) => (
              <Grid item lg={3} xs={12} md={6} sm={6}>
                <Paper
                  elevation={24}
                  sx={{
                    bgcolor: "white",
                    borderRadius: "35px",
                    maxWidth: 345,
                    alignSelf: "center",
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: 345,
                      borderRadius: "15px",
                      mt: 6,
                      alignSelf: "center",
                      height: 400,
                      bgcolor: "#0d3959",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={data.image}
                        alt="hotel website"
                        sx={{
                          "&:hover": {
                            transform: "scale(0.9)",
                          },
                        }}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          color="white"
                        >
                          {data.type}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="gray"
                          sx={{ height: 80 }}
                        >
                          {data.description}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: "2%",
                          }}
                        >
                          <Link href={data.link}>
                            <Button
                              sx={{
                                backgroundColor: "#078ae8",
                                fontSize: "1rem",
                                borderRadius: "15px",
                                color: "white",
                                cursor: "pointer",

                                padding: "5px 15px 5px",

                                "&:hover": {
                                  backgroundColor: "white",
                                  color: "black",
                                },
                              }}
                            >
                              Github
                            </Button>
                          </Link>
                          {data.link2 ? (
                            <Link href={data.link2}>
                              <Button
                                sx={{
                                  backgroundColor: "white",
                                  fontSize: "1rem",
                                  borderRadius: "15px",

                                  color: "black",
                                  cursor: "pointer",
                                  marginLeft: "10px",
                                  padding: "6px 10px 5px",
                                  "&:hover": {
                                    color: "white",
                                    border: "1px solid white",
                                  },
                                }}
                              >
                                Live Demo
                              </Button>
                            </Link>
                          ) : null}
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Grid container></Grid>
      </Container>
    </div>
  );
}

export default Home;
