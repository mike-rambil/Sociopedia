import { Box } from '@mui/material';

const UserImage = ({ image, size = '60px' }) => {
  const environment = process.env.NODE_ENV;
  const uri =
    environment === 'production'
      ? process.env.REACT_APP_API_URL
      : 'http://localhost:3000';
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        width={size}
        height={size}
        alt='user'
        src={`${uri}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
