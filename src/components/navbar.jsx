import { AppBar, Toolbar, Button, Box , Typography } from '@mui/material'
import {GitHub} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export default function Navbar() {

    const { token, logout } = useContext(AuthContext)
    


  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'flex' }}>
        <Typography variant="h6" fontWeight="800" fontSize={30}   component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
          Todomio
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="https://github.com/ArtinDoroudi/Todomio.React">
                <GitHub />
                <span style={{ marginLeft: '8px' }}>GitHub</span>
            </Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
          
            {token ? (
                <Button color="error" onClick={logout}>
                    Logout
                </Button>
            ) : (
                <Button color="inherit" component={Link} to="/login">Login</Button>
            )}

        </Box>
      </Toolbar>
    </AppBar>
  )
}
