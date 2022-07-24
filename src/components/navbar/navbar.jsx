import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import  logo from "./../../assests/images/simply-logo.png"


const ResponsiveAppBar = ((props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
<AppBar position="static" style={{ background: "#FFFFFF"}}>
      <Container maxWidth="xl" style={{ background: "#FFFFFF",}}>
        <Toolbar disableGutters>
          <img src={logo} alt='logo'/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Rajdhani',
              fontWeight: 700,
              color: '#000000',
              textDecoration: 'none',
              fontStyle: "normal",
               fontSize: "49.3387px",
               lineHeight: "63px",
            }}
          >
            Simply
          </Typography>
           
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           <Typography variant="body1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Poppins',
              color: '#000000',
              textDecoration: 'none',
              fontStyle: "normal",
               fontSize: "30px",
               lineHeight: "63px",
            }}>
           <a href="/">
            Home
            </a> 
            &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           <a href="/help">
            Help
            </a> 
            &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           <a href="/dashboard">
            Dashboard
            </a> 
            &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           <a href="/learn">
            Learn
            </a> 
            &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           <Button onClick={handleClickOpen} sx={{ display: "flex",
          flexDirection: "row",
           alignItems: "flex-start",
           padding: "9px 49px",
           gap: "10px",
          position: "absolute",
           left: "75.46%",
           right: "16.09%",
           top: "26.37%",
           bottom: "24.18%",
            background: "#7671FF",
            borderRadius: "6px"}}>
              <Typography sx={{ color: "white"}}>
              Login
              </Typography>
              </Button>
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           &nbsp;
           <Button onClick={handleClickOpen} sx={{ display: "flex",
          flexDirection: "row",
           alignItems: "flex-start",
           padding: "9px 49px",
           gap: "10px",
          position: "absolute",
           left: "85.46%",
           right: "10.09%",
           top: "26.37%",
           bottom: "24.18%",
            background: "#ffffff",
            borderRadius: "6px"}}>
              <Typography sx={{ color: "black"}}>
              Register
              </Typography>
              </Button>

           </Typography>
            </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
              });
export default ResponsiveAppBar;
