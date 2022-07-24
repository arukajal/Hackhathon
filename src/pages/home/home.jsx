import React from 'react'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import autodesk from "../../assests/images/autoDesk.png"
import simulationHub from "../../assests/images/simulationHub.png"
import cctech from "../../assests/images/cctech.png"
import "./home.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function HomePage() {
  return (
    <div>
      <Grid>
        <Container className='box-1'>
        Let's find you the Best Service Quotation
        </Container>
        <Container className='box-2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </Container>
        <Container className='box-3'>
          <Typography className='typo'>
          In Parteners With
            </Typography>
           <img src={autodesk} alt='auto-desk' className='auto'/>
           <img src={cctech} alt='cctech' className='cctech'/>
           <img src={simulationHub} alt='simulation-hub' className='simulationHub'/>
        </Container>
        <br />
        <br />
        <br />
        <Card className='card-1'>
          <CardActionArea>
            <Grid container className='dataListGrid' xs={6}>
              <Typography className='typo-card'>
              Let's find you the Best Service Quotation
              </Typography>
              <Typography className='typo-card-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
          </CardActionArea>
        </Card>
        <Card className='card-2'>
          <CardActionArea>
            <Grid container className='dataListGrid' xs={6}>
              <Typography className='typo-card'>
              Let's find you the Best Service Quotation
              </Typography>
              <Typography className='typo-card-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
          </CardActionArea>
        </Card>
        <Card className='card-3'>
          <CardActionArea>
            <Grid container className='dataListGrid' xs={6}>
              <Typography className='typo-card'>
              Let's find you the Best Service Quotation
              </Typography>
              <Typography className='typo-card-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  )
}