/** @jsx jsx */
import { jsx, Container, Flex, Button, Text } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
// import LogoFlutter from 'assets/FlutterLogoV3-copy.png';
import LogoFlutter from 'assets/FlutterLogoV4.png';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import Link2 from 'next/link';

export default function Header({ className }) {
  return (
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoFlutter}/>
          {/* <Text sx={styles.name} as="p">Flutter</Text> */}
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map((menuItem, i) => (
              /* link scrolls to a section */
              <Link
                activeClass="active" /* class applied when element is reached */
                to={menuItem.path} /* Target to scroll to */
                spy={true} /* Make link selected */
                smooth={true} /* Smooth animation */
                offset={-60} /* Make a bit above the thing we scroll to */
                duration={500} /* in Milliseconds */
                key={i} /* Need specific key */
              >
                {menuItem.label}
              </Link>
            ))}
          </Flex>
          <Button className="donate__btn" variant="secondary" aria-label="Get Started">
            <Link
              activeClass="active" /* class applied when element is reached */
              to='home' /* Target to scroll to */
              spy={true} /* Make link selected */
              smooth={true} /* Smooth animation */
              offset={-60} /* Make a bit above the thing we scroll to */
              duration={500} /* in Milliseconds */
              key={10} /* Need specific key */
              label='home'
              >
              
              <Link2 href="/signup"> Sign up </Link2>
              
            </Link>    
          </Button>
          <MobileDrawer />
        </Container>
      </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    // backgroundColor: '#67dfbf',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
  name: {
    color: 'primary',
    fontSize: 8,
    font: "'DM Sans', sans-serif",
  }
};
