// ** MUI Imports
import Grid from '@mui/material/Grid'

import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports

import CardMembership from 'src/views/cards/CardMembership'


const data = [
  {
    id: 1507,
    title: 'الفيلا الفاخرة',
    location: 'القاهرة , محافظة القاهرة',
    notes: 'تصميم معماري فاخر وحديث',
    arrivetime: '11:00',
    term: 'AM'
    }
    ,
    {
    id: 917,
    title: 'المدرسة الابتدائية',
    location: 'الإسكندرية , محافظة الإسكندرية',
    notes: 'مشروع تعليمي متكامل',
    arrivetime: '02:45',
    term: 'PM'
    }
    ,
    {
    id: 1205,
    title: 'المستشفى الجديد',
    location: 'الإسماعيلية , محافظة الإسماعيلية',
    notes: 'مستشفى متطور بأحدث التقنيات الطبية',
    arrivetime: '10:30',
    term: 'AM'
    }
    ,
    {
    id: 616,
    title: 'المبنى السكني',
    location: 'الإسكندرية , محافظة الإسكندرية',
    notes: 'مجمع سكني متكامل الخدمات',
    arrivetime: '05:15',
    term: 'PM'
    },
    {
      id: 221,
      title: 'المبنى التجاري',
      location: 'الإسكندرية , محافظة الإسكندرية',
      notes: 'مركز تجاري حديث متكامل',
      arrivetime: '09:00',
      term: 'AM'
      }
      ,
      {
      id: 134,
      title: 'الشقة الفاخرة',
      location: 'القاهرة , محافظة القاهرة',
      notes: 'شقة فاخرة بإطلالة بانورامية',
      arrivetime: '12:15',
      term: 'PM'
      }
      ,
      {
      id: 789,
      title: 'المركز الثقافي',
      location: 'الإسكندرية , محافظة الإسكندرية',
      notes: 'مركز ثقافي وفني متخصص',
      arrivetime: '10:45',
      term: 'AM'
      }
      
      
];

data.sort((a, b) => {
  const timeA = new Date(`01/01/2000 ${a.arrivetime} ${a.term}`).getTime();
  const timeB = new Date(`01/01/2000 ${b.arrivetime} ${b.term}`).getTime();
  return timeA - timeB;
});


const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item key={item.id} xs={index === 0 ? 30 : 30} md={index === 0 ? 20 : 6}>
            <CardMembership
              id={item.id}
              title={item.title}
              location={item.location}
              notes={item.notes}
              arrivetime={item.arrivetime}
              term={item.term}
            />
          </Grid>
        ))}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
