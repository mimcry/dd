// import React, { useState } from "react";
// import Container from "@mui/material/Container";
// import { Box, Typography, Grid, Card, Button } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import { useSnackbar } from "notistack";
import axios from "axios";
// const Contact = () => {

//   const { enqueueSnackbar } = useSnackbar();

//   // Define the initial state for the form fields
//   const initialState = {
//     name: "",
//     mail: "",
//     message: "",
//     number: "",
//     subject: ""
//   };

//   const [user, setuser] = useState(initialState);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//         const response = await fetch('http://localhost:8000/message', { // Ensure the correct URL
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 mail: user.mail,
//                 name: user.name,
//                 message: user.message,
//                 number: user.number,
//                 subject: user.subject,
//             }),
//         });

//         if (response.ok) {
//             enqueueSnackbar("Your message was sent", { variant: "success" });
//             setuser(initialState); // Clear the form
//         } else {
//             enqueueSnackbar("Error sending message. Please try again", { variant: "error" });
//         }
//     } catch (error) {
//         enqueueSnackbar("Server error. Please try again later", { variant: "error" });
//     }
// };

//   const handeleChange = (e) => {
//     const { name, value } = e.target;
//     setuser({
//       ...user,
//       [name]: value
//     });
//   };

//   const message1 = async () => {
//     try {
//       await axios.post("http://localhost:8000/message", user);
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <Container>
//       <div id="Contact Me">
//         <React.Fragment>
//           <Typography
//             sx={{
//               color: "white",
//               textAlign: "center",
//               fontSize: "1.9rem",
//               mt:15,mb:6

//             }}
//           >
//             Contact📲  <span style={{color:"#00abf0"}}>Me</span>
//           </Typography>

//           <Box
//             sx={{
//               width: {lg:"600px",xs:"335px",md:"600px",sm:"600px"},
//               height: {lg:"450px",sx:"600px"},
//              justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center",
//               bgcolor: "white",
//               borderRadius: "35px",
//               margin:"auto",
//             }}
//           >
//             {" "}
//             <Box sx={{ padding: "50px 60px 20px" }}>
//               {" "}
//               <Grid container spacing={2}>
//                 <Grid item lg={6} xs={12} md={6} >
//                   <TextField onChange={handeleChange}
//                     id="outlined-basic"
//                     label="Full Name"
//                     variant="outlined"
//                     name="name"
//                     value={user.name}
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item lg={6} xs={12} md={6}>
//                   <TextField onChange={handeleChange}
//                     id="outlined-basic"
//                     label="Email Adress"
//                     variant="outlined"
//                     name="mail"
//                     value={user.mail}
//                     fullWidth
//                   />
//                 </Grid>
//               </Grid>
//               <Grid container spacing={2} sx={{ mt:{lg:2,xs:0}}}>
//                 <Grid item lg={6} xs={12} md={6}>
//                   <TextField onChange={handeleChange}
//                     id="outlined-basic"
//                     label="Mobile Number"
//                     variant="outlined"
//                     name="number"
//                     value={user.number}
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item lg={6} xs={12} md={6}>
//                   <TextField onChange={handeleChange}
//                     sx={{ color: "white" }}
//                     id="outlined-basic"
//                     label="Email Subject"
//                     variant="outlined"
//                     name="subject"
//                     value={user.subject}
//                     fullWidth
//                   />
//                 </Grid>
//               </Grid>
//               <Grid>
//                 <Grid item lg={12}>
//                   <TextField onChange={handeleChange}
//                     sx={{ mt:{lg:3,xs:2} }}
//                     label="Your Message"
//                     multiline
//                     rows={4}
//                     variant="outlined"
//                     name="message"
//                     value={user.message}
//                     fullWidth
//                   />
//                 </Grid>
//               </Grid>
//             </Box>
//             <Button onClick={handleSubmit }
//               sx={{
//                 mt: {lg:"20px"},
//                 backgroundColor: "#078ae8",
//                 fontSize: "1.2rem",
//                 borderRadius: "15px",
//                 border: "2px solid gray",
//                 color: "white",
//                 cursor: "pointer",
//                 marginLeft: "10px",
//                 padding: "5px 15px 5px",maxWidth:200,
//                 "&:hover": {
//                   backgroundColor: "white",
//                   color: "black",
//                   opacity: [0.9, 0.8, 1.7],
//                   transform: "scale(1.05)",
//                   transition: "0.3s",
//                 },

//                 mb: 4,
//               }}
//             >
//               Send Message
//             </Button>
//           </Box>
//         </React.Fragment>
//       </div>
//     </Container>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import { Box, Typography, Grid, Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
// import axios from "axios";
const Contact = () => {
  const initialdata = {
    name: "",
    email: "",
    message: "",
  };
  const [data, setData] = useState(initialdata);
  const handelchange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  console.log("data",data)

  const send =(e)=>{
e.preventDefault()
message()
  }
  const message =async()=>{
    try{
      console.log("Sending data:", data); // Log the data being sent
       await axios.post("http://localhost:8000/message", data);
      console.log("Message sent successfully:");}
catch (error) {
      console.error('Error sending message:', error);
}
  }
  return (
    <div>
      <Box sx={{padding:20}}>
        <TextField
          sx={{ bgcolor:"white" ,padding:5}}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={data.name}
          onChange={handelchange}
          fullWidth
        />
         <TextField
          sx={{ bgcolor:"white" ,padding:5}}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          value={data.email}
          onChange={handelchange}
          fullWidth
        />
         <TextField
          sx={{ bgcolor:"white" ,padding:5}}
          id="outlined-basic"
          label="Message"
          variant="outlined"
          name="message"
          value={data.message}
          onChange={handelchange}
          fullWidth
        />
        <Button onClick={send}>send</Button>
      </Box>
    </div>
  );
};

export default Contact;
