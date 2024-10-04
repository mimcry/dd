import React, { useState } from "react";
import Hamburger from "./Hamburger";
import {
  AppBar,Box,
 
  Toolbar,
  Tab,
  Tabs,
  
  useTheme,
  useMediaQuery,
  
} from "@mui/material";

import { Link } from "react-scroll";

const Navbar = () => {
  const [value, setvalue] = useState();
  const theme = useTheme();
  const ismatch = useMediaQuery(theme.breakpoints.down("md"));
  const list = ["Home", "About Me", "Contact Me", "Projects"];
 

  return (
    <div>
      <React.Fragment >
        <AppBar sx={{ backgroundColor:{lg: "#081b29", xs:"#081b29", }, position: "relative"}}>
          <Toolbar>
        <Box component="img"
                src="https://images.assetsdelivery.com/compings_v2/wikagraphic/wikagraphic2102/wikagraphic210207138.jpg"
                alt="delivery"
                sx={{width: "70px",
                height: "60px",
                borderRadius:"25px",
                cursor:"pointer",
                ml:{lg:20}
          }}
              />
            {ismatch ? (
              <>
                <Hamburger ></Hamburger>
              </>
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: "auto", color: "white",mr:"100px",}}
                  textColor="black"
                  value={value}
                  onChange={(e, value) => setvalue(value)}
                  indicatorColor="secondary"
                >  {list.map((page, index) => (
                    <Link to={page} spy={true} smooth={true}>
                
                  <Tab OnClick={index}
               sx={{ fontSize: "1.05rem", "&:hover":{transition:"0.3s",transform:"scale(1.2)",color:"#00abf0"}}}
               key={index}
               label={page}
             />
               </Link>   ))}
                </Tabs>
               
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
};

export default Navbar;
