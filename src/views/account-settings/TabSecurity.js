// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

const TabSecurity = () => {
  // ** States
  const [values, setValues] = useState({
    newPassword: '',
    currentPassword: '',
    confirmNewPassword: '',
  })

  // Handle Current Password
  const handleCurrentPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  // Handle New Password
  const handleNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  // Handle Confirm New Password
  const handleConfirmNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
    <form dir="rtl">
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={5}>
              <Grid item xs={12} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password' dir="rtl">كلمة المرور الحالية</InputLabel>
                  <OutlinedInput
                    label='كلمة المرور الحالية'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type='password'
                    onChange={handleCurrentPasswordChange('currentPassword')}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sx={{ marginTop: 6 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-new-password' dir="rtl">كلمة المرور الجديدة</InputLabel>
                  <OutlinedInput
                    label='كلمة المرور الجديدة'
                    value={values.newPassword}
                    id='account-settings-new-password'
                    type='password'
                    onChange={handleNewPasswordChange('newPassword')}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-confirm-new-password' dir="rtl">تأكيد كلمة المرور الجديدة</InputLabel>
                  <OutlinedInput
                    label='تأكيد كلمة المرور الجديدة'
                    value={values.confirmNewPassword}
                    id='account-settings-confirm-new-password'
                    type='password'
                    onChange={handleConfirmNewPasswordChange('confirmNewPassword')}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
          >
            <img width={220} alt='avatar' height={220} src='/images/pages/pose-m-1.png' />
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: 'left' }}>
          <Button variant='contained' sx={{ marginRight: 3.5 }}>
            حفظ
          </Button>
        </Grid>

      </CardContent>
    </form>
  )
}

export default TabSecurity
