import { Box, Typography, Button, Stack , Tab, Tabs, TextField} from '@mui/material'
import { useState } from 'react'
import Login from '@mui/icons-material/Login'
import {Link} from 'react-router-dom'
import {loginApi} from '../api/auth'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    loginApi({ email, password })
      .then(res => {
        const token = res.data.access_token
        login({ token })
        setMessage('Login successful!')
      })
      .catch(err => {
        console.error(err)
        setMessage('Login failed. Check your credentials.')
      })
  }

  
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
            Login
          </Typography>
          <Typography variant="h6" color="grey.500">
            Step into your productivity.
          </Typography>
          <TextField
            id="email-input-login"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password-input-login"
            label="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography variant="body2" color="grey.500">
            Forgot your password?
            <Button variant="text" size="small">
              Reset it
            </Button>
          </Typography>
          <Button
            variant="contained"
            size="medium"
            endIcon={<Login />}
            onClick={handleLogin}
            >
              Login
          </Button>
          {message !== '' ? (
            <Typography variant="body2" color="error">
              {message}
            </Typography>
            ) : null}
          <Typography variant="body2" color="grey.600">
            Don't have an account?
            <Button variant="text" size="small" component={Link} to="/register">
              Sign up
            </Button>
          </Typography>
      </Stack>
    </Box>
  )
}
