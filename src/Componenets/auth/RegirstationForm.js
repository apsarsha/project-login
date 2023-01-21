import React from 'react'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import { TextField, Container, Button, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Grid } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'


export default function RegirstationForm() {
    const[value, setValues] = React.useState(null)
    return (
        <div>
            <Container maxWidth="md">


                <Typography >RegirstationForm</Typography>
                <Typography variant="h4" >Welcome back</Typography>
                <Typography variant="subtitle2" >Regirstation your gmail</Typography>
                <Stack spacing={3}>
                <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant="body2" >Enter First Name</Typography>
                                <TextField id="" label="First Name" required />
                            </Grid>
                            <Grid>
                                <Typography variant="body2" >Enter Middle Name</Typography>
                                <TextField id="" label="Middle Name" required />
                            </Grid>
                            <Grid>
                                <Typography variant="body2" >Enter Last Name</Typography>
                                <TextField id="" label="Last Name" required />
                            </Grid>
                     </Grid>       
                    <Stack spacing={2}>
                        <Typography variant="body2" >Enter gmail</Typography>
                        <TextField id="" label="gmail" required />
                    </Stack>
                    <Stack spacing={2}>

                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant="body2" >Enter Password</Typography>
                                <TextField id="" label="Enter Password" required />
                            </Grid>
                            <Grid>
                                <Typography variant="body2" >Coniform Password</Typography>
                                <TextField id="" label="Enter coniform Password" required />
                            </Grid>
                            <Grid>
                                <Typography variant="body2" >MobileNumber</Typography>
                                <TextField id="" label="Enter Mobile Number" required />
                            </Grid>
                        </Grid>
                    </Stack>
                
                            <FormControl >
                                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"

                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                                <Stack>
                                    <Typography variant="body2" color="initial">Enter your Date of Birth</Typography>
                                    <DatePicker
                                    value={value}
                                    onChange={(selectedDate)=>setValues(selectedDate)}
                                     id="" label="DOB"
                                     renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                            </FormControl>
                      
                    <Button variant="contained" color="primary" >Create Account</Button>
                </Stack>
            </Container >
        </div>
    )
}
