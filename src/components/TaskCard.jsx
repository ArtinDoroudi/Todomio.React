import {
    Card,
    Box,
    Typography,
    Stack,
    Chip,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
  } from "@mui/material"
  import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
  import EditIcon from '@mui/icons-material/Edit'
  import DeleteIcon from '@mui/icons-material/Delete'
  import { useState } from "react"
  
  export default function TaskCard({ task }) {
    const { title, description, completed, tags = [] } = task
    const [open, setOpen] = useState(false)
    const [completedState, setCompletedState] = useState(completed)

    const handleDelete = () => {
      console.log("Task deleted")
      setOpen(false)
    }
  
    const handleComplete = () => {
        // Logic to mark the task as completed
        setCompletedState(!completedState)
      console.log("Marking as completed")
    }
  
    return (
      <Card
        variant="outlined"
        sx={{
          maxWidth: 480,
          m: 2,
          borderRadius: 2,
          backgroundColor: '#fdfdfd'
        }}
      >
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight={600}>
              {title}
            </Typography>
            <IconButton
              onClick={handleComplete}
              color="default"
              size="small"
              sx={{
                border: '1px solid #ccc',
                borderRadius: '50%',
                p: 0.5,
              }}
            >
              <CheckCircleOutlineIcon
                sx={{ color: completedState ? 'green' : 'gray' }}
              />
            </IconButton>
          </Stack>
  
          <Typography
            variant="body2"
            sx={{
              textAlign: 'left',
              mt: 1,
              color: '#555',
              whiteSpace: 'pre-line'
            }}
          >
            {description}
          </Typography>
  
          {tags.length > 0 && (
            <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
              {tags.map((tag, i) => (
                <Chip
                  key={i}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: '#eee',
                    color: '#444',
                    fontWeight: 500
                  }}
                />
              ))}
            </Stack>
          )}
        </Box>
  
        <Box sx={{ px: 2, pb: 2 }}>
          <Stack direction="row" spacing={1}>
            <Button
              startIcon={<EditIcon />}
              variant="outlined"
              size="small"
              sx={{ textTransform: 'none' }}
            >
              Edit
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              variant="outlined"
              size="small"
              color="error"
              onClick={() => setOpen(true)}
              sx={{ textTransform: 'none' }}
            >
              Delete
            </Button>
          </Stack>
        </Box>
  
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Delete Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this task?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleDelete} color="error" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    )
  }
  