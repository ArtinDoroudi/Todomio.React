import { Box, Typography, Button, Stack , Tab, Tabs, TextField} from '@mui/material'
import { useState } from 'react'
import GroupAdd from '@mui/icons-material/GroupAdd'
import {Link} from 'react-router-dom'

export default function Form() {

    const handleRegister = () => {
        if (password !== confirmPassword) {
          alert('Passwords do not match!')
          return
        }
      
        console.log('Registering user:', email, password)
        // Later: send to backend here
      }
      
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
        <Stack spacing={3} sx={{ width: '100%', maxWidth: 400 }}>
          <Typography variant="h2" fontWeight="800">
            Register!
          </Typography>
          <Typography variant="h6" color="grey.500">
            Step into your productivity.
          </Typography>
          <TextField
            id="email-input"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="confirm-password-input"
            label="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Repeat Password"
            variant="standard"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button variant="contained" size="medium" endIcon={<GroupAdd />} onClick={handleRegister}>
            Register
          </Button>
        <Typography variant="body2" color="grey.600">
            Already have an account?{' '}
            <Button component={Link} to="/login" size="small" variant="text">
                Log in
            </Button>
        </Typography>
      </Stack>
    </Box>
  )
}
