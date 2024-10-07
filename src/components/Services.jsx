import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Card,
} from "@mui/material";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [data] = useState([
    { services: "Web Development", image: "web.avif", path: "/web" },
    { services: "App Development", image: "app.avif", path: "/app" },
    { services: "UI/UX Design", image: "uiux.avif", path: "/uiux" },
  ]);

  return (
    <div id="Services">
      <Container>
        <Grid>
          <Box sx={{ mt: 15 }}>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              What I Offer
            </Typography>
            <Typography
              sx={{ textAlign: "center", fontSize: "1.9rem", color: "#00abf0" }}
            >
              Services
            </Typography>
          </Box>

          <Grid
            container
            spacing={2}
            sx={{
              gap: 10,
              display: "flex",
              mt: 5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.map((item, index) => (
              <Grid item xs={12} lg={3} md={4} sm={6} key={index}>
                <Card
                  sx={{
                    background: `linear-gradient(#212245b2,#212245b1),url(${item.image})`,
                    backgroundSize: "cover",
                    position: "relative",
                    borderRadius: "25px",
                    bgcolor: "#2f285f",
                    height: { lg: "190px", xs: "230px" },
                    padding: "1rem",
                    cursor: "pointer",
                    "&:hover": {
                      transition: "0.3s",
                      transform: "scale(1.02)",
                    },
                    border: "1px solid black",
                  }}
                  onClick={() => navigate(item.path)} 
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "1.5rem",
                      color: "white",
                    }}
                  >
                    {item.services}
                  </Typography>
                  <Typography sx={{ display: "flex", mt: 3 }}>
                    <Typography
                      sx={{
                        mt: { lg: 14, xs: 22 },
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "white",
                        ml:"auto"
                      }}
                    >
                      Learn more...
                    </Typography>
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
