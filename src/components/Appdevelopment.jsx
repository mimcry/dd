import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Link,
  Card,
  CardMedia,
  CardContent,
  Paper,
  CardActionArea,
} from "@mui/material";
import { Email, Phone, WhatsApp, GitHub } from "@mui/icons-material";

const WebDevelopment = () => {
  const [data] = useState([
    {
        image: "foodie.jpg",
        type: "Foodie mobile app",
        description:
          "A food delivery app with a food allergy alert system, built using React Native and Node.js. ",
        link: "https://github.com/mimcry/Foodie-App-React_Native",
        link2: "https://youtu.be/mJXJEGqvh1M",
      },
      {
        image: "healthcare.jpg",
        type: "Health Care App",
        description:
          "Users can book doctor appointments and access various medical services.",
        link: "https://github.com/iam8uman/doctor-hunt",
        
      },
  ]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('https://image.slidesdocs.com/responsive-images/background/3d-render-of-app-development-ui-ux-design-web-creation-and-application-layout-powerpoint-background_9ea15be6b7__960_540.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
          color: "#ffffff",
          textAlign: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(8, 27, 41, 0.8)",
        }}
      >
        <Typography variant="h3" gutterBottom>
          App Development Services
        </Typography>
        <Typography variant="h6" color="inherit">
        Transforming your ideas into reality with custom, user-friendly, and scalable mobile applications.
        </Typography>
      </Box>

      <Container
        maxWidth="lg"
        sx={{ backgroundColor: "#081b29", color: "#ffffff" }}
      >
        <Box
          my={5}
          sx={{
            backgroundColor: "#0d3959",
            padding: "30px",
            borderRadius: "15px",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "bold", color: "#fff" }}
          >
            What I Do
          </Typography>

          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            sx={{ color: "#e0e0e0" }}
          >
            I design and develop mobile applications that are both powerful and
            user-friendly. By leveraging the latest technologies, I create apps
            that provide seamless user experiences, optimized performance, and
            scalability. Whether it's iOS, Android, or cross-platform
            development, I focus on crafting solutions that enhance user
            engagement and streamline operations, helping businesses reach their
            mobile audience effectively
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
              mt: 3,
            }}
          >
            Technologies I Work With:
          </Typography>

          <Box display="flex" justifyContent="center" mt={2}>
            <Box mx={2}>
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png"
                alt="React"
                style={{ width: "50px" }}
              />
            </Box>
            <Box mx={2}>
              <img
                src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                alt="Node.js"
                style={{ width: "50px" }}
              />
            </Box>
            <Box mx={2}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                alt="PostgreSQL"
                style={{ width: "50px" }}
              />
            </Box>
            <Box mx={2}>
              <img
                src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                alt="Express.js"
                style={{ width: "50px" }}
              />
            </Box>
          </Box>
        </Box>

        <Box my={5}>
          <Typography variant="h4" gutterBottom sx={{ mb: 5 }}>
            Projects I've Worked On
          </Typography>
          <Grid container spacing={4}>
            {data.map((item, index) => (
              <Grid item lg={3} xs={12} md={6} sm={6} key={index}>
                <Paper
                  elevation={6}
                  sx={{
                    bgcolor: "white",
                    borderRadius: "15px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Card
                    sx={{
                      borderRadius: "15px",
                      bgcolor: "#0d3959",
                      transition: "transform 0.3s",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={item.image}
                        alt={item.type}
                        sx={{
                          transition: "transform 0.3s",
                          "&:hover": {
                            transform: "scale(1.05)",
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
                        <Typography
                          variant="body2"
                          color="gray"
                          sx={{ height: 80 }}
                        >
                          {item.description}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: "2%",
                          }}
                        >
                          <Link
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              sx={{
                                backgroundColor: "#078ae8",
                                fontSize: "0.9rem",
                                borderRadius: "15px",
                                color: "white",
                                cursor: "pointer",
                                padding: "5px 15px",
                                "&:hover": {
                                  backgroundColor: "white",
                                  color: "black",
                                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                                },
                              }}
                            >
                              <GitHub sx={{ mr: 1 }} /> GitHub
                            </Button>
                          </Link>
                          {item.link2 && (
                            <Link
                              href={item.link2}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                sx={{
                                  backgroundColor: "white",
                                  fontSize: "0.9rem",
                                  borderRadius: "15px",
                                  color: "black",
                                  cursor: "pointer",
                                  marginLeft: "10px",
                                  padding: "6px 10px",
                                  "&:hover": {
                                    color: "white",
                                    backgroundColor: "#078ae8",
                                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
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

        {/* Contact Section with Icons */}
        <Box
          textAlign="center"
          py={5}
          bgcolor="#102938"
          mt={5}
          sx={{ padding: 5, borderRadius: 5,  }}
        >
          <Typography variant="h4" gutterBottom>
            Contact Me for More Information
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            sx={{ color: "#b0c4de" }}
          >
            Feel free to reach out for more details or if you'd like to work
            together:
          </Typography>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item>
              <Button
                component={Link}
                href="tel:9860428022"
                startIcon={<Phone />}
                variant="contained"
                color="primary"
                sx={{ backgroundColor: "#3f72af", color: "#ffffff" }}
              >
                Call
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                href="whatsapp://send?phone=9860428022&text=Hello%20I%20would%20like%20to%20get%20in%20touch!"
                startIcon={<WhatsApp />}
                variant="contained"
                color="primary"
                sx={{ backgroundColor: "green", color: "#ffffff" }}
              >
                WhatsApp
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                href="mailto:salongautam4@gmail.com"
                startIcon={<Email />}
                variant="contained"
                color="primary"
                sx={{ backgroundColor: "red", color: "#ffffff" }}
              >
                Email
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default WebDevelopment;
