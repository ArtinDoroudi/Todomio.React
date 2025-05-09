import { Box, Typography, Button, Stack } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

export default function Hero() {
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
          Todomio
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Stay focused. Stay organized.
          <br />
          The simplest todo list for busy people.
        </Typography>
        <Button variant="contained" size="large" endIcon={<RocketLaunchIcon />}>
          Start Now
        </Button>
      </Stack>
    </Box>
  )
}
