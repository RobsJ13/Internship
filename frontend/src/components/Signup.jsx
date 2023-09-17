import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles({
  container: {
    width: '300px',
    margin: 'auto',
    marginTop: '100px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
});

const Signup = () => {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    // Implement signup logic here
    console.log('Signing up with:', username, password, email);
  };

  return (
    <Grid container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSignup}>
        Sign Up
      </Button>
    </Grid>
  );
};

export default Signup;
