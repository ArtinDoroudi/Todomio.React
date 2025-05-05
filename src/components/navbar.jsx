import { AppBar, Toolbar, Button, Box } from '@mui/material'
import {GitHub} from '@mui/icons-material'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Box sx={{ display: 'flex', gap: 4 }}>
            <Button color="inherit">
                <GitHub />
                <span style={{ marginLeft: '8px' }}>GitHub</span>
            </Button>
          <Button color="inherit">Usage</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
