import React from 'react';
import { Fragment } from 'react';
import { Card, Grid, Button, Divider, Typography, Box, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LocationOn,  ListAlt , Note } from '@mui/icons-material';
import { useRouter } from 'next/router';

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const CardMembership = ({ id, title, location, notes, arrivetime, term }) => {
  const router = useRouter();

  const handleEditClick = () => {
    router.push({
      pathname: '/form-layouts',
      query: { id, title, location, notes, arrivetime, term }
    });
  };

  return (
    <Fragment>
      <Card>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={7}>
            <CardContent sx={{ padding: (theme) => `${theme.spacing(7.25, 10.75, 12.25)} !important` }}>
              <Typography variant="h5" sx={{ marginBottom: 4, fontWeight: 600 }} dir="rtl">
                {title}
              </Typography>
              <Divider sx={{ marginTop: 6.5, marginBottom: 6.75 }} />
              <Grid container spacing={2} sx={{ marginTop: 6.5, marginBottom: 6.75 }}>
                <Grid item xs={12} sm={12}>
                  <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
                    <ListAlt  sx={{ color: 'primary.main', marginLeft: 2.75 }} fontSize="small" />
                    <Typography variant="body2" dir="rtl">
                      {id}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
                    <LocationOn sx={{ color: 'primary.main', marginLeft: 2.75 }} fontSize="small" />
                    <Typography variant="body2" dir="rtl">
                      {location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
                    <Note sx={{ color: 'primary.main', marginLeft: 2.75 }} fontSize="small" />
                    <Typography variant="body2" dir="rtl">
                      {notes}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
          <Grid item sm={5} xs={12} sx={{ paddingTop: ['0 !important', '1.5rem !important'], paddingLeft: ['1.5rem !important', '0 !important'] }}>
            <CardContent
              sx={{
                height: '100%',
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'action.hover',
                padding: (theme) => `${theme.spacing(18, 5, 16)} !important`,
              }}
            >
              <Box>
                <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                  <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 600, fontSize: '3.75rem !important' }}>
                    {arrivetime}
                  </Typography>
                  <Typography variant="h6">{term}</Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 3.75, display: 'flex', flexDirection: 'column', fontSize: '1rem' }}>
                  <span>وقت البدء</span>
                </Typography>
                <Button variant="contained" onClick={handleEditClick}>تعديل</Button>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  );
};

export default CardMembership;
