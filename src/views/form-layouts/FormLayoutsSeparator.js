import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, TextField, box, Grid, Divider, Typography } from '@mui/material';
import { LocationOn, ListAlt } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}));

const FormLayoutsSeparator = () => {
  const router = useRouter();
  const { id, title, location, notes, arrivetime, term } = router.query;
  const [formData, setFormData] = useState({ title: '', location: '', notes: '', arrivetime: '', term: '' });

  useEffect(() => {
    if (id) {
      setFormData({ title, location, notes, arrivetime, term });
    }
  }, [id, title, location, notes, arrivetime, term]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };



  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h5" component="div" dir="rtl" sx={{ textAlign: 'center', fontWeight: 600 }}>
            {formData.title}

            <Typography variant="body2" dir="rtl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

              <ListAlt sx={{ color: 'primary.main', marginLeft: 1.5  }} fontSize="small" />
              {id}

              <div style={{ borderLeft: '1px solid #c2c2c2', height: '17px',  marginRight : 6}}></div>

              <LocationOn sx={{ color: 'primary.main', marginLeft: 1.5 , marginRight: 1}} fontSize="small" />
              {formData.location}
            </Typography>
          </Typography>
        }
      />

      <Divider sx={{ margin: 0 }} />
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={20} dir="rtl">
              <TextField
                fullWidth
                label="وقت الخروج من المحطة"

              />
            </Grid>
            <Grid item xs={12} sm={20} dir="rtl">
              <TextField fullWidth label="Slump قيمة" />
            </Grid>
            <Grid item xs={12} sm={20} dir="rtl">
              <TextField fullWidth label="عدد المكعبات في المحطة" />
            </Grid>
            <Grid item xs={12} sm={20} dir="rtl">
              <TextField
                fullWidth
                label="الكمية"

              />
            </Grid>
            <Grid item xs={12} sm={20} dir="rtl">
              <TextField fullWidth label="رقم السيارة" />
            </Grid>
            <Grid item xs={12} sm={20} dir="rtl">
              <TextField
                fullWidth
                label="ملاحظات"

              />
            </Grid>
            <Grid item xs={12} sm={20}>
              <ButtonStyled component="label" variant="contained" htmlFor="account-settings-upload-image">
                رفع صورة
                <input
                  hidden
                  type="file"
                  onChange={(e) => onChange(e)}
                  accept="image/png, image/jpeg"
                  id="account-settings-upload-image"
                />
              </ButtonStyled>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size="large" type="submit" sx={{ mr: 2 }} variant="contained">
            حفظ
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default FormLayoutsSeparator;
