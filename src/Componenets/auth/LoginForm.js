import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Link, Grid, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

 function LoginForm() {
  
  return (
    <div>
      <Container maxWidth="sm">
        <Typography sx={{ textTransform: 'uppercase' }}>Login</Typography>
        <Typography variant="h4">welcome back</Typography>
        <Typography sx={{ marginBottom: '16px' }} variant="subtitle2">
          Login to manage your account.
        </Typography>
        <Stack spacing={3}>
        <EmailField/>
        <PasswordField/>
        <DOBField/>
          
        </Stack>
        <Stack>
          <Grid sx={{marginTop: '16px'}}container alignItems="center" justifyContent="space-between" j>
          <Grid item>
            <Typography variant='body1'>
              Don't have an account yet? <Link underline='none' href= "/register">Sign up here.</Link>
            </Typography>

          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Login
            </Button>

          </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}

function DOBField(){
  const [value, setValue] = React.useState(null);
  return <Stack spacing={2}>
  <Typography variant="body1">Enter your Date of Birth</Typography>
  <DatePicker 
  value={value}
  inputFormat="DD/MM/YYYY"
  onChange={(selectedDate)=> setValue(selectedDate)}
  label="DOB"
  renderInput={(params)=> <TextField {...params}/> }  />
</Stack>

}

function EmailField(){
  return  <Stack spacing={2}>
  <Typography variant="body1">Enter your email</Typography>
  <TextField id="" label="Email" required />
</Stack>
}
function PasswordField(){
  return  <Stack spacing={2}>
  <Grid
    container
    justifyContent={'space-between'}
    alignItems={'center'}
  >
    <Grid item>
      <Typography variant="body1">Enter your password </Typography>
    </Grid>
    <Grid item>
      <Link href="/reset" underline="none">
        Forgot your password
      </Link>
    </Grid>
  </Grid>

  <TextField id="" label="Password" type="password" required />
</Stack>
}
export default LoginForm;