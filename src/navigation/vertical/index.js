
import LogoutVariant from 'mdi-material-ui/LogoutVariant';
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

const navigation = () => {
  return [
    {
      title: 'الرئيسية',
      icon: HomeOutline,
      path: '/'
    },
    
   
    {
      title: 'الإعدادات',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
     {
      icon: LogoutVariant,
      title: 'الخروج',
      path: '/pages/login'
    },
  ]
}

export default navigation
