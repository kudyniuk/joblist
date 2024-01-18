import { Box, Avatar, Typography, IconButton } from '@mui/joy';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
  const { user, logout } = useAuth0();

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Avatar variant="outlined" size="sm" src={user?.profile} />
      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Typography level="title-sm">{user?.name}</Typography>
        <Typography level="body-xs">{user?.email}</Typography>
      </Box>
      <IconButton
        size="sm"
        variant="plain"
        color="neutral"
        onClick={() => logout()}
      >
        <LogoutRoundedIcon />
      </IconButton>
    </Box>
  );
};
