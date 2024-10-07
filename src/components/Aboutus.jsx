import React from 'react';
import { Box, Paper, Typography, Grid, Container } from "@mui/material";

function Aboutus() {
  return (
    <div id="About">
      <Container>
        <Paper  sx={{borderRadius:"20px",mt:10}}>
          <Box
            sx={{
              borderRadius: "20px",
              bgcolor: "#0d3959",
              p: { xs: 2, md: 5 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" }, // Responsive font size
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
                mb: 4,
              }}
            >
              About <span style={{ color: "#00abf0" }}>Me</span>
            </Typography>

            <Grid container spacing={4} alignItems="center">
              {/* Image Section */}
              <Grid item xs={12} md={5}>
                <Box
                  component="img"
                  src="salon.png" // Update with your image path
                  sx={{
                    borderRadius: "25px",
                    width: "100%",
                    height: { xs: "auto", md: "420px" }, // Responsive height
                    objectFit: "cover",
                    boxShadow: 3,
                  }}
                />
              </Grid>

              {/* Text Section */}
              <Grid item xs={12} md={7}>
                <Typography
                  sx={{
                    color: "gray",
                    textAlign: { xs: "center", md: "left" }, // Center text on small screens
                    mb: 4,
                    p: { xs: 2, md: 0 }, // Padding adjustment for smaller screens
                  }}
                >
                  I'm a passionate student exploring Web development. With a love for creating intuitive user experiences, I merge creativity with code. Eager to learn, I embrace challenges and strive to craft visually appealing websites that engage users and leave a lasting impression. Let's innovate together!
                </Typography>

                {/* Education Section */}
                <Box>
                  <Typography variant="h5" sx={{ color: "white", mb: 2 }}>
                    Education
                  </Typography>

                  <Typography sx={{ color: "orange", mb: 1 }}>
                    <strong>SLC</strong> <br /> - Dhulikhel High School
                  </Typography>
                  <Typography sx={{ color: "orange", mb: 1 }}>
                    <strong>Secondary Education</strong> <br /> - National Institute of Science and Technology
                  </Typography>
                  <Typography sx={{ color: "orange", mb: 1 }}>
                    <strong>Bachelor in Computer Science</strong> <br />- Kathmandu University
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default Aboutus;
