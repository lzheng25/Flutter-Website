/** @jsx jsx */
import { jsx, Box, Container, Image, Text, Flex } from 'theme-ui';
import { Link } from 'components/link';
// import { Link } from 'react-scroll';
// import data from '../header/header.data';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';
import LogoFlutter from 'assets/FlutterLogoV3.png';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image src={LogoFlutter} sx={{width:'30%', height:'30%'}} alt="logo"/>
            <Box sx={styles.footer.menus}>
              <nav>
                {data.menuItem.map((item, i) => (
                  // <Link
                  //   activeClass="active" /* class applied when element is reached */
                  //   to={item.path} /* Target to scroll to */
                  //   spy={true} /* Make link selected */
                  //   smooth={true} /* Smooth animation */
                  //   offset={-60} /* Make a bit above the thing we scroll to */
                  //   duration={500} /* in Milliseconds */
                  //   key={i} /* Need specific key */
                  //   label={item.label}
                  //   sx={styles.footer.link}
                  // >
                  //   {item.label}
                  // </Link>
                  <Link
                    path={item.path}
                    key={i}
                    label={item.label}
                    sx={styles.footer.link}
                  />
                ))}
              </nav>
            </Box>
            <Text sx={styles.footer.copyright}>
              Copyright by {new Date().getFullYear()} Flutter
            </Text>
          </Link>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, 8],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
};
