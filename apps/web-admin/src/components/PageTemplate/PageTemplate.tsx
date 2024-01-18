import { FC, PropsWithChildren } from 'react';

import { Typography, Box, Breadcrumbs, Link } from '@mui/joy';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

type Props = {
  header?: string;
};

export const PageTemplate: FC<PropsWithChildren<Props>> = ({
  children,
  header,
}) => {
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="medium" />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            href="#some-link"
            fontSize={12}
            fontWeight={500}
          >
            Dashboard
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            {header}
          </Typography>
        </Breadcrumbs>
      </Box>

      {header && (
        <Typography level="h2" component="h1" sx={{ mb: 1 }}>
          {header}
        </Typography>
      )}
      {children}
    </div>
  );
};
