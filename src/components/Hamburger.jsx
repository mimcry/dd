import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,Box,
  IconButton,useMediaQuery,useTheme
} from "@mui/material";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
function Hamburger() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const list = ["Home", "About Me", "Contact Me", "Projects"];
  return (
    <React.Fragment  >
      <Box ><Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}  >
        <List >
         {list.map((page,index)=>(
           <Link to={page} spy={true} smooth={true}>
           <ListItemButton onClick={()=>setOpenDrawer(false)} key={index} >
           <ListItemIcon >
             <ListItemText  sx={{color:"#00abf0"}}>{page}</ListItemText>
           </ListItemIcon>
         </ListItemButton></Link>
         ))}
        </List>
      </Drawer></Box>
      <IconButton sx={{marginLeft:"auto",color:"#00abf0"}} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
      </IconButton>
    </React.Fragment>
  );
}

export default Hamburger;
