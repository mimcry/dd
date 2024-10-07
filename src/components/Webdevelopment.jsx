import React, { useState } from 'react';
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
} from '@mui/material';
import {Email, Phone, WhatsApp,GitHub } from '@mui/icons-material';


const WebDevelopment = () => {
  const [data] = useState([
    {
      image: 'hotel.png',
      type: 'Hotel Website',
      description:
        'Simple hotel website about booking a room and ordering food.',
      link: 'https://github.com/mimcry/Personal_website_using_Material_UI-and-React_Js.git',
      link2:
        'https://664b30e45b0c79a5a632697d--elaborate-medovik-94140a.netlify.app',
    },
    {
      image: 'personal.png',
      type: 'Personal Portfolio',
      description:
        'Personal portfolio to showcase skills, projects, and expertise.',
      link: 'https://github.com/mimcry/Personal_website_using_Material_UI-and-React_Js.git',
      link2: 'gautamsalon.com.np',
    },
    {
      image: 'foodie.png',
      type: 'Foodie',
      description:
        'Food ordering website to place orders and browse the menu.',
      link: 'https://github.com/imnabid/Foodie-a-food-delivery-website.git',
      link2: '',
    },
    {
      image: 'bella.png',
      type: 'Clothing Store',
      description:
        'Swarmnet is a P2P file-sharing system made with Rust and React JS.',
      link: 'https://github.com/imnabid/SwarmNet-peer-to-peer-file-sharing.git',
      link2: 'https://stunning-chebakia-26098d.netlify.app/',
    },
    {
      image: 'crypto.png',
      type: 'Coinlore API: Tables',
      description:
        'Filtering data by Rank, Price, and Percentage with dynamic tables.',
      link: 'https://github.com/mimcry/Data-Visualization-and-Table-Manipulation-using-Coinlore-API',
      link2: 'https://sparkly-ganache-d68682.netlify.app/',
    },
    {
      image: 'agrinepal.png',
      type: 'Agri Nepal',
      description:
        'Empowering Nepali farmers with market access and expert advice.',
      link: 'https://github.com/mimcry/',
    },
  ]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('https://faraitltd.com/wp-content/uploads/2023/02/Screenshot_7.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          color: '#ffffff',
          textAlign: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(8, 27, 41, 0.8)',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Web Development Services
        </Typography>
        <Typography variant="h6" color="inherit">
          Bringing your vision to life with custom, responsive, and scalable websites.
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ backgroundColor: '#081b29', color: '#ffffff' }}>
      <Box my={5} sx={{ backgroundColor: '#0d3959', padding: '30px', borderRadius: '15px' }}>
  <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>
    What I Do
  </Typography>
  
  <Typography variant="body1" color="textSecondary" paragraph sx={{ color: '#e0e0e0' }}>
    I create efficient and scalable web solutions that are tailored to your business needs. My goal is to design and build modern, intuitive, and responsive web applications that enhance user experience and streamline business processes.
  </Typography>

  <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', mt: 3 }}>
    Technologies I Work With:
  </Typography>

  <Box display="flex" justifyContent="center" mt={2}>
    <Box mx={2}>
      <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png" alt="React" style={{ width: '50px' }} />
    </Box>
    <Box mx={2} >
      <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Node.js" style={{ width: '50px' }} />
    </Box>
    <Box mx={2}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" style={{ width: '50px' }} />
    </Box>
    <Box mx={2}>
      <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="Express.js" style={{ width: '50px' }} />
    </Box>
  </Box>
</Box>
      
        <Box my={5}>
          <Typography variant="h4" gutterBottom sx={{mb:5}}>
            Projects I've Worked On
          </Typography>
          <Grid container spacing={4}>
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
                                padding: '5px 15px',
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
                                  padding: '6px 10px',
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

       {/* Contact Section with Icons */}
<Box textAlign="center" py={5} bgcolor="#102938" mt={5} sx={{padding:5 ,borderRadius:5,}}>
  <Typography variant="h4" gutterBottom>
    Contact Me for More Information
  </Typography>
  <Typography variant="body1" color="textSecondary" paragraph sx={{ color: '#b0c4de' }}>
    Feel free to reach out for more details or if you'd like to work together:
  </Typography>
  <Grid container justifyContent="center" spacing={3}>
    <Grid item>
      <Button
        component={Link}
        href="tel:9860428022" 
        startIcon={<Phone />} 
        variant="contained"
        color="primary"
        sx={{ backgroundColor: '#3f72af', color: '#ffffff' }}
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
  sx={{ backgroundColor: 'green', color: '#ffffff' }}
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
        sx={{ backgroundColor: 'red', color: '#ffffff' }}
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
