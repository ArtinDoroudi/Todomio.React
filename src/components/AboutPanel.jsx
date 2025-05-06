import { Box, Typography, Stack, Divider, Paper, Button } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import LockIcon from '@mui/icons-material/Lock'

function FutureFeature({ title, description }) {
  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="subtitle1" fontWeight={600}>
        {title}
      </Typography>
      <Typography color="text.secondary">{description}</Typography>
    </Paper>
  )
}

function Feature({ icon, title, description }) {
  return (
    <>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h6">{icon}</Typography>
          <Box>
            <Typography variant="h6">{title}</Typography>
            <Typography color="text.secondary">{description}</Typography>
          </Box>
        </Stack>
      </Paper>
    </>
  )
}

export default function About() {
  return (
    <Box sx={{ px: 4, py: 6, maxWidth: '800px', mx: 'auto' }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        How Todomio Works
      </Typography>

      <Typography variant="h6" color="text.secondary" mb={4}>
        A fast, minimal to-do app powered by Laravel + React.
      </Typography>

      <Stack spacing={4}>
        <Feature
          icon="✅"
          title="1. Create Your Account"
          description="Register in seconds. No extra form, just your email and password."
        />
        <Feature
          icon="🚀"
          title="2. Add & Manage Tasks"
          description="Easily create, tag, mark complete, and delete your tasks."
        />
        <Feature
          icon="🔒"
          title="3. Everything is Secure"
          description="Your data is safe with Laravel Sanctum + protected APIs."
        />
      </Stack>

      <Divider sx={{ my: 6 }} />

        <Typography variant="h5" fontWeight="bold" gutterBottom>
        🗺️ What’s Next for Todomio
        </Typography>

        <Stack spacing={2}>
          <FutureFeature
            title="🌙 Dark Mode"
            description="Switch between light and dark themes for a better experience."
          />
          <FutureFeature
            title="📊 User Dashboard"
            description="See your task stats, recent activity, and personal productivity trends in one place."
          />
          <FutureFeature
            title="🎨 UI Improvements"
            description="Expect a cleaner, smoother, and more beautiful interface."
          />
          <FutureFeature
            title="⏪ Task History & Undo"
            description="Mistakes happen — restore deleted tasks and track changes over time."
          />
          <FutureFeature
            title="🖥️ CLI Version"
            description="Manage your to-dos directly from your terminal for quick, offline productivity."
          />
        </Stack>

    </Box>
  )
}
