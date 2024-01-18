import {
  ListItem,
  ListItemButton,
  Typography,
  ListItemContent,
} from '@mui/joy';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import { FC, PropsWithChildren, ReactNode } from 'react';

type Props = {
  to: string;
  icon?: ReactNode;
};

export const SidebarLink: FC<PropsWithChildren<Props>> = ({
  to,
  icon,
  children,
}) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to}>
      <ListItem>
        <ListItemButton selected={!!match}>
          {icon || <DashboardRoundedIcon />}
          <ListItemContent>
            <Typography level="title-sm">{children}</Typography>
          </ListItemContent>
        </ListItemButton>
      </ListItem>
    </Link>
  );
};
