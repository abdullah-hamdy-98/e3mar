// ** MUI Imports
import Grid from '@mui/material/Grid'

import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports

import CardMembership from 'src/views/cards/CardMembership'


const Dashboard = () => {
  return (

    <ApexChartWrapper>
      <Grid container spacing={3}>

        <Grid item xs={10} md={15}>
          <CardMembership />
        </Grid>

        <Grid item xs={10} md={6}>
          <CardMembership />
        </Grid>

        <Grid item xs={10} md={6}>
          <CardMembership />
        </Grid>

    

      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
