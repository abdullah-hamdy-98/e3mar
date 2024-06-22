// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import { Grid, Box, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'

import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { styled } from '@mui/material/styles'


const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const onChange = file => {
  const reader = new FileReader()
  const { files } = file.target
  if (files && files.length !== 0) {
    reader.onload = () => setImgSrc(reader.result)
    reader.readAsDataURL(files[0])
  }
}

const FormLayoutsSeparator = () => {


  return (
    <Card>
      <CardHeader title=<Typography
        variant="h5"
        component="div"
        dir="rtl"
        sx={{ textAlign: 'center', fontWeight: 600 }}>
        مشروع البيت الحديث
      </Typography> />

      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>

            <Grid item xs={12} sm={20} dir='rtl'>
              <TextField fullWidth label='وقت الخروج من المحطة' />
            </Grid>

            <Grid item xs={12} sm={20} dir='rtl' >
              <TextField fullWidth label='Slump قيمة' />
            </Grid>

            <Grid item xs={12} sm={20} dir='rtl'>
              <TextField fullWidth label='عدد المكعبات في المحطة ' />
            </Grid>
            <Grid item xs={12} sm={20} dir='rtl' >
              <TextField fullWidth label='الكمية' />
            </Grid>
            <Grid item xs={12} sm={20} dir='rtl'>
              <TextField fullWidth label='رقم السيارة' />
            </Grid>

            <Grid item xs={12} sm={20} dir='rtl'>
              <TextField fullWidth label='ملاحظات' />
            </Grid>

            <Grid item xs={12} sm={20} >
              <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image' >
                رفع صورة
                <input
                  hidden
                  type='file'
                  onChange={onChange}
                  accept='image/png, image/jpeg'
                  id='account-settings-upload-image'
                />
              </ButtonStyled>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            حفظ
          </Button>

        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
