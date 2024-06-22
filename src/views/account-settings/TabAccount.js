// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabAccount = () => {
  // ** State
  const [openAlert, setOpenAlert] = useState(true)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }

  return (
    <CardContent sx={{ direction: 'rtl' }}>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ textAlign: 'center', marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box sx={{ marginTop: 3, marginRight: 6 }}>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image' >
                  رفع صورة ..
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField fullWidth label='الإسم' defaultValue='Abdullah Hamdy' InputProps={{ readOnly: true }} sx={{ direction: 'rtl' }} />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField fullWidth label='الوظيفة' defaultValue='Developer' InputProps={{ readOnly: true }} sx={{ direction: 'rtl' }} />
          </Grid>

          <Grid item xs={12} sx={{ textAlign: 'left' }}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              حفظ
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>

  )
}

export default TabAccount
