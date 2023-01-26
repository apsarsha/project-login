import React from 'react';
import { Formik, Field, Form } from 'formik';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Link, Grid, Button } from '@mui/material';
import * as Yup from 'yup';

export function LoginForm() {
  const initialValues = { email: '', password: ''};
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
    // dob: Yup.date().required('DOB is required'),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Container maxWidth="sm">
            <Typography sx={{ textTransform: 'uppercase' }}>Login</Typography>
            <Typography variant="h4">welcome back</Typography>
            <Typography sx={{ marginBottom: '16px' }} variant="subtitle2">
              Login to manage your account.
            </Typography>
            <Stack spacing={3}>
              <Stack spacing={2}>
                <Typography variant="body1">Enter your email</Typography>
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  label="Email"
                  required
                />
              </Stack>
              <Stack spacing={2}>
                <Grid
                  container
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Grid item>
                    <Typography variant="body1">
                      Enter your password{' '}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Link href="/reset" underline="none">
                      Forgot your password
                    </Link>
                  </Grid>
                </Grid>
                <Field
                  name="password"
                  type="password"
                  as={TextField}
                  label="Password"
                  required
                />
              </Stack>
            </Stack>
            <Stack>
              <Grid
                style={{ marginTop: '16px' }}
                container
                alignItems="center"
                justifyContent="space-between"
                j
              >
                <Grid item>
                  <Typography variant="body1">
                    Don't have an account yet?{' '}
                    <Link underline="none" href="/register">
                      Sign up here.
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Container>
        </Form>
      )}
    </Formik>
  );
}
