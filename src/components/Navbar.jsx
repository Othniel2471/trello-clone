import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilter, faUserPlus, faBolt, faEllipsis, faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const styles = {
  btn: {
    border: 'none',
    alignItems: 'center',
    opacity: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    marginLeft: '10px',
    color: '#fff',
    borderRadius: '3px',
    padding: '6px 12px',
    margin: '3px 0',
    cursor: 'pointer',
  },
  btn2: {
    border: 'none',
    alignItems: 'center',
    opacity: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    marginLeft: '10px',
    color: '#fff',
    borderRadius: '3px',
    padding: '6px 12px',
    margin: '0 11px',
    cursor: 'pointer',
    fontSize: '12px',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
  },
};

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        marginTop: '-10px',
        marginBottom: '20px',
        opacity: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FE ASSIGNMENT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                }}
                style={styles.btn2}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings" style={styles.flex}>
              <button type="button" style={styles.btn}>
                <FontAwesomeIcon icon={faWandMagicSparkles} />
                Power-Ups
              </button>
              <button type="button" style={styles.btn}>
                <FontAwesomeIcon icon={faBolt} />
                Automation
              </button>
              <button type="button" style={styles.btn}>
                <FontAwesomeIcon icon={faFilter} />
                Filter
              </button>
              <IconButton sx={{ p: 0, marginLeft: '10px' }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              <button type="button" style={styles.btn}>
                <FontAwesomeIcon icon={faUserPlus} />
                share
              </button>
              <button type="button" style={styles.btn}>
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
