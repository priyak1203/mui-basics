import { Button, styled, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Add, Send } from '@mui/icons-material';

function App() {
  // buttons with same custom custom styles -
  const RedButton = styled(Button)({
    backgroundColor: 'lightcoral',
    color: 'cornsilk',
    margin: '10px',
    '&:hover': {
      backgroundColor: 'lightpink',
      color: 'red',
    },
    '&:disabled': {
      backgroundColor: 'grey',
      color: 'black',
    },
  });

  return (
    <main>
      <Typography variant="h6" m={3} mb={0}>
        Button Types
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <Typography variant="h6" m={3} mb={0}>
        Disabled Button
      </Typography>
      <Button variant="outlined" disabled>
        Outlined
      </Button>

      <Typography variant="h6" m={3} mb={0}>
        Secondary Color Button and small button
      </Typography>
      <Button variant="contained" color="secondary">
        Contained
      </Button>
      <Button variant="contained" size="small">
        Contained
      </Button>

      <Typography variant="h6" m={3} mb={0}>
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

      <Typography variant="h6" m={3} mb={0}>
        Buttons with custom styles
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'pink',
          color: '#f00',
          margin: 2,
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
          margin: 2,

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

      <Typography variant="h6" m={3} mb={0}>
        Multiple Buttons with same custom styles
      </Typography>
      <RedButton>Button 1</RedButton>
      <RedButton disabled>Button 2</RedButton>
    </main>
  );
}

export default App;
