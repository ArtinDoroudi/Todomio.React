import { Box, Typography, Button, Stack , Tab, Tabs, TextField} from '@mui/material'
import { useState } from 'react'
import Login from '@mui/icons-material/Login'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
        <Stack spacing={3}>
          <Typography variant="h2" fontWeight="800">
            Login
          </Typography>
          <Typography variant="h6" color="grey.500">
            Step into your productivity.
          </Typography>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography variant="h6" color="grey.500" fontSize={16}>
            Forgot your password?
            <Button variant="text" size="small">
              Reset it
            </Button>
          </Typography>
          <Button variant="contained" size="medium" endIcon={<Login />}>
            Login
          </Button>
          <Typography variant="h6" color="grey.500">
            Don't have an account?
            <Button variant="text" size="small">
              Sign up
            </Button>
          </Typography>
      </Stack>
    </Box>
  )
}
