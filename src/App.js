import { Button, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Add, Send } from '@mui/icons-material';

function App() {
  return (
    <main>
      <Typography variant="h6" m={3}>
        Button Types
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h6" m={3}>
        Disabled Button
      </Typography>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h6" m={3}>
        Secondary Color Button and small button
      </Typography>
      <Button variant="contained" color="secondary">
        Contained
      </Button>
      <Button variant="contained" size="small">
        Contained
      </Button>
      <Typography variant="h6" m={3}>
        Buttons with Icons
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<SettingsIcon />}
      >
        Settings
      </Button>
      <Button variant="contained" color="success" startIcon={<Add />}>
        Add Post
      </Button>
      <Button variant="contained" color="warning" endIcon={<Send />}>
        Send Mail
      </Button>
      <Typography variant="h1" component="p">
        it uses h1 style but it is a p tag
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'pink',
          color: '#f00',
          margin: 5,
          '&:hover': {
            backgroundColor: 'peachpuff',
            color: '#0f0',
          },
        }}
      >
        My Unique Button
      </Button>
      <Button
        variant="contained"
        disabled
        sx={{
          backgroundColor: 'pink',
          color: '#f00',
          margin: 5,
          '&:hover': {
            backgroundColor: 'peachpuff',
            color: '#0f0',
          },
          '&:disabled': {
            backgroundColor: 'darkgray',
            color: 'white',
          },
        }}
      >
        My Unique Button - Disabled
      </Button>
    </main>
  );
}

export default App;
