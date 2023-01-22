import React from 'react'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import { TextField, Container, Button, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Grid,  } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useState } from 'react'


export default function RegirstationForm() {
    const [value, setValues] = React.useState(null);
    const [data, setData] = useState({
        FirstName: "",
        MiddileName: "",
        LastName: "",
        gmail: "",
        EnterPassword: "",
        EnterConiformPassword: "",
        EnterMobileNumber: "",
        Gender: '',



    })
    const { FirstName, MiddileName, LastName, gmail, EnterPassword, EnterConiformPassword, EnterMobileNumber, Gender } = data;
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.name] })
    }
    const submitHandler = e => {
        e.preventDefault();
        if (EnterPassword === EnterConiformPassword) {
            console.log(data);
        }
        else {
            console.log("password are not matching")
        }
        return (
            <div>
                <Container maxWidth="md"  >


                    <Typography >RegirstationForm</Typography>
                    <Typography variant="h4" >Welcome back</Typography>
                    <Typography variant="subtitle2" >Regirstation your gmail</Typography>
                    <Stack spacing={3}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant="body2"  >Enter First Name</Typography>
                                <TextField id="" label="FirstName" required value={FirstName} onChange={changeHandler} />
                            </Grid>
                            <Grid>
                                <Typography variant="body2" >Enter Middle Name</Typography>
                                <TextField id="" label="MiddileName" required value={MiddileName} onChange={changeHandler} />
                            </Grid>
                            <Grid>
                                <Typography variant="body2" >Enter Last Name</Typography>
                                <TextField id="" label="LastName" required value={LastName} onChange={changeHandler} />
                            </Grid>
                        </Grid>
                        <Stack spacing={2}>
                            <Typography variant="body2" >Enter gmail</Typography>
                            <TextField id="" label="gmail" required value={gmail} onChange={changeHandler} />
                        </Stack>
                        <Stack spacing={2}>

                            <Grid container justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <Typography variant="body2" >Enter Password</Typography>
                                    <TextField id="" label="EnterPassword " required value={EnterPassword} onChange={changeHandler} />
                                </Grid>
                                <Grid>
                                    <Typography variant="body2" >Coniform Password</Typography>
                                    <TextField id="" label="EnterConiformPassword" required value={EnterConiformPassword} onChange={changeHandler} />
                                </Grid>
                                <Grid>
                                    <Typography variant="body2" >MobileNumber</Typography>
                                    <TextField id="" label="EnterMobileNumber" required value={EnterMobileNumber} onChange={changeHandler} />
                                </Grid>
                            </Grid>
                        </Stack>

                        <FormControl >
                            <FormLabel id="demo-controlled-radio-buttons-group" value={Gender} onChange={changeHandler}>Gender</FormLabel>
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
                                    onChange={(selectedDate) => setValues(selectedDate)}
                                    id="" label="DOB"
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </FormControl>

                        <Button variant="contained" color="primary" onSubmit={submitHandler} >Submit</Button>
                    </Stack>
                </Container >
            </div>
        )
    }
}