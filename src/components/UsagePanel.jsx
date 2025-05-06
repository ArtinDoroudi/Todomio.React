import { Box, Typography, Stack, Divider, Paper, Button } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import LockIcon from '@mui/icons-material/Lock'

export default function Usage() {
  return (
    <Box sx={{ px: 4, py: 6, maxWidth: '800px', mx: 'auto' }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        How Todomio Works
      </Typography>

      <Typography variant="h6" color="text.secondary" mb={4}>
        A fast, minimal to-do app powered by Laravel + React.
      </Typography>

      <Stack spacing={4}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <CheckCircleIcon color="success" />
            <Box>
              <Typography variant="h6">1. Create Your Account</Typography>
              <Typography color="text.secondary">
                Register in seconds. No extra form, just your email and password.
              </Typography>
            </Box>
          </Stack>
        </Paper>

        <Paper elevation={2} sx={{ p: 3 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <RocketLaunchIcon color="primary" />
            <Box>
              <Typography variant="h6">2. Add & Manage Tasks</Typography>
              <Typography color="text.secondary">
                Easily create, tag, mark complete, and delete your tasks.
              </Typography>
            </Box>
          </Stack>
        </Paper>

        <Paper elevation={2} sx={{ p: 3 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <LockIcon color="action" />
            <Box>
              <Typography variant="h6">3. Everything is Secure</Typography>
              <Typography color="text.secondary">
                Your data is safe with Laravel Sanctum + protected APIs.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Stack>

      <Divider sx={{ my: 5 }} />

      <Box textAlign="center">
        <Button variant="contained" size="large" href="/register">
          Get Started Now
        </Button>
      </Box>
    </Box>
  )
}
