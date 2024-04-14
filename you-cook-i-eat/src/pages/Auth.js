import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Box, Button, TextField, Typography, Alert, Paper, FormControlLabel, Switch } from '@mui/material';

function Auth() {
  const [flipped, setFlipped] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  // Spring config for flipping animation
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  // Pop-up animation for the form
  const popup = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 300
  });

  const handleFlip = () => {
    setError('');
    setFlipped(!flipped);
    setForm({ email: '', password: '', confirmPassword: '' });
    setAttempt(0); // Reset attempt on flip
  };

  const handleToggleAccountType = (event) => {
    setIsBusiness(event.target.checked);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (type) => {
    if (type === 'login') {
      if (attempt === 0) {
        setError('Email or password incorrect.');
        setAttempt(attempt + 1);
      } else {
        const redirectUrl = isBusiness ? '/business' : '/profile';
        window.location.href = redirectUrl;
      }
    } else if (type === 'signup') {
      if (form.password !== form.confirmPassword) {
        setError('Passwords do not match.');
      } else {
        const redirectUrl = isBusiness ? '/business' : '/profile';
        window.location.href = redirectUrl;
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
      <animated.div style={popup}>
        <Paper elevation={12} sx={{
          position: 'relative',
          width: 400,
          height: 500,
          margin: 'auto',
          borderRadius: 2,
          border: isBusiness ? '2px solid gold' : 'none',
          bgcolor: isBusiness ? 'rgba(0, 0, 0, 0.05)' : '#fff'
        }}>
        <animated.div style={{
          opacity: opacity.to(o => 1 - o), 
          transform, 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          pointerEvents: flipped ? 'none' : 'all',
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          padding: '0 32px'
        }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <FormControlLabel
            control={<Switch checked={isBusiness} onChange={handleToggleAccountType} />}
            label="Business Account"
          />
          <TextField margin="normal" required fullWidth label="Email Address" name="email" autoComplete="email" autoFocus onChange={handleChange} value={form.email} />
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" autoComplete="current-password" onChange={handleChange} value={form.password} />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={() => handleSubmit('login')}>
            Login
          </Button>
          <Button fullWidth onClick={handleFlip}>Don't have an account? Sign Up</Button>
        </animated.div>
        <animated.div style={{
          opacity,
          transform: transform.to(t => `${t} rotateY(180deg)`),
          position: 'absolute',
          width: '100%',
          height: '100%',
          pointerEvents: flipped ? 'all' : 'none',
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          padding: '0 32px'
        }}>
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <FormControlLabel
            control={<Switch checked={isBusiness} onChange={handleToggleAccountType} />}
            label="Business Account"
          />
          <TextField margin="normal" required fullWidth label="Email Address" name="email" autoComplete="email" autoFocus onChange={handleChange} value={form.email} />
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" autoComplete="new-password" onChange={handleChange} value={form.password} />
          <TextField margin="normal" required fullWidth name="confirmPassword" label="Confirm Password" type="password" autoComplete="new-password" onChange={handleChange} value={form.confirmPassword} />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={() => handleSubmit('signup')}>
            Sign Up
          </Button>
          <Button fullWidth onClick={handleFlip}>Already have an account? Login</Button>
        </animated.div>
        </Paper>
      </animated.div>
    </Box>
  );
}

export default Auth;