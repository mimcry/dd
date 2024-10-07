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
import { GitHub,  } from '@mui/icons-material';
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
            sx={{ textAlign: "center", fontSize: "1.9rem", color: "#00abf0",mb:5 }}
          >
            My <span style={{ color: "white" }}>Projects 📟</span>
          </Typography>

          <Grid container spacing={4}>
            {" "}
            {data.map((item, index) => (
              <Grid item lg={3} xs={12} md={6} sm={6} key={index}>
                <Paper
                  elevation={6}
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '15px',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <Card
                    sx={{
                      borderRadius: '15px',
                      bgcolor: '#0d3959',
                      transition: 'transform 0.3s',
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={item.image}
                        alt={item.type}
                        sx={{
                          transition: 'transform 0.3s',
                          '&:hover': {
                            transform: 'scale(1.05)',
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
                          {item.type}
                        </Typography>
                        <Typography variant="body2" color="gray" sx={{ height: 80 }}>
                          {item.description}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: '2%',
                          }}
                        >
                          <Link href={item.link} target="_blank" rel="noopener noreferrer">
                            <Button
                              sx={{
                                backgroundColor: '#078ae8',
                                fontSize: '0.9rem',
                                borderRadius: '15px',
                                color: 'white',
                                cursor: 'pointer',
                                padding: '5px 10px',
                                '&:hover': {
                                  backgroundColor: 'white',
                                  color: 'black',
                                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                                },
                              }}
                            >
                              <GitHub sx={{ mr: 1 }} /> GitHub
                            </Button>
                          </Link>
                          {item.link2 && (
                            <Link href={item.link2} target="_blank" rel="noopener noreferrer">
                              <Button
                                sx={{
                                  backgroundColor: 'white',
                                  fontSize: '0.9rem',
                                  borderRadius: '15px',
                                  color: 'black',
                                  cursor: 'pointer',
                                  marginLeft: '10px',
                                  padding: '6px 9px',
                                  '&:hover': {
                                    color: 'white',
                                    backgroundColor: '#078ae8',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                                  },
                                }}
                              >
                                Live Demo
                              </Button>
                            </Link>
                          )}
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
