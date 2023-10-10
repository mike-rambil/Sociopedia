import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Form from './Form';

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  return (
    <Box>
      <Box
        width='100%'
        backgroundColor={theme.palette.background.alt}
        p='1rem 6%'
        textAlign='center'
      >
        <Typography fontWeight='bold' fontSize='32px' color='primary'>
          Sociopedia
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        p='2rem'
        m='2rem auto'
        borderRadius='1.5rem'
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight='500' variant='h5' sx={{ mb: '1.5rem' }}>
          Welcome to Sociopedia, the Social Media for Sociopaths!
        </Typography>
        <Form />
        <fieldset>
          <legend>
            <h1>Sample User Name</h1>{' '}
          </legend>
          <p>
            Please note, login takes 15-45 seconds due to back-end server
            COLD-START!{' '}
          </p>
          <h2>Username: mike@kaamseva.com </h2>
          <h2>Password: password123 </h2>
        </fieldset>
      </Box>
    </Box>
  );
};

export default LoginPage;
