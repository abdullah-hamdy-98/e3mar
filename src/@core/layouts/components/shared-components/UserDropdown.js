import { useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CogOutline from 'mdi-material-ui/CogOutline';
import LogoutVariant from 'mdi-material-ui/LogoutVariant';
import { Directions } from 'mdi-material-ui';

const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}));

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const handleDropdownOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = url => {
    if (url) {
      router.push(url);
    }
    setAnchorEl(null);
  };

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      fontSize: '1.375rem',
      color: 'text.secondary',
      direction: 'rtl', // Added direction: 'rtl' for icons
    },
  };

  return (
    <Fragment>
      <Badge
        overlap='circular'
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: 'pointer'  }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Avatar
          alt='Abdullah Hamdy'
          onClick={handleDropdownOpen}
          sx={{ width: 40, height: 40 }}
          src='/images/avatars/1.png'
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4 } }}
       
      >
        <Box sx={{ pt: 2, pb: 3, px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap='circular'
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // Changed left to right
            >
              <Avatar alt='Abdullah Hamdy' src='/images/avatars/1.png' sx={{ width: '2.5rem', height: '2.5rem' }} />
            </Badge>

            <Box sx={{ display: 'flex', marginLeft: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 600 }}>Abdullah Hamdy</Typography>
              <Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
                Developer
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ mt: 0, mb: 1 }} />

        
        <MenuItem sx={{ p: 0 ,direction: 'rtl'}} onClick={() => handleDropdownClose('/account-settings')} >
          <Box sx={styles}>
            <CogOutline sx={{ marginLeft: 2 }} />
            الإعدادات
          </Box>
        </MenuItem>

        <MenuItem sx={{ py: 0,direction: 'rtl' }} onClick={() => handleDropdownClose('/pages/login') }>
          <LogoutVariant sx={{ marginLeft: 2}} />
          الخروج
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default UserDropdown;
