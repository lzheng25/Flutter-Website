/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRef } from 'react'
import { Container, Box, Heading, Text, Image, Button, Input } from 'theme-ui';
import BannerImg from 'assets/banner-thumb.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import { Waitlist } from 'waitlistapi';

export default function Banner() {
  const email = useRef();
  function handleWaitlist(e) {
    e.preventDefault()
    const temp = email.current.value;
    if (!temp.includes("edu")) {
      alert("Invalid school email! Must end with .edu")
    } else {
      if (temp.indexOf(".edu") == temp.length-4) {
        alert(temp + " is valid email");
        console.log(temp);
      } else {
        alert("Invalid school email! Must end with .edu")
      }
    }
    email.current.value = null;
  }
  const instructions1 = "Get Early Access!"
  const instructions2 = "Enter your university '.edu. email."
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            The next social app that will revolutionize the college social scene
          </Heading>
          <Text as="p" variant="heroSecondary">
            Connecting people directly in real life as opposed to texting - whether that is networking, making new friends, or dating!
          </Text>
          {/* <Box>
            <input type="text"/>
            <Button variant="primary"> 
              Join the waitlist! 
            </Button>
          </Box> */}
          <Box as="form" sx={{display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',}}>
            {/* <Box as="label" htmlFor="subscribe" variant="styles.srOnly">
              subscribe
            </Box>
            <Input
              name="subscribe"
              id="subscribe"
              placeholder="Enter school email"
              sx={styles.form.input}
              ref={email}
            />
            <Button type="submit" sx={styles.form.button} onClick={handleWaitlist}>
              Join the waitlist!
            </Button> */}
            {/* <Waitlist 
              api_key="RF6X3O" 
              waitlist_link="https://flutter-website-7t9fhqyet-lzheng25.vercel.app/://example.com"
              joinWaitlistHeading="Get early access for Flutter!"
              switchToCheckStatusLabel="Already on the waitlist?"
            /> */}
            
            
          </Box>
          
          <Text as="p" vairant="heroSecondary">
            By joining the waitlist, you will get notified early when our product launches! You must enter a university email ending with ".edu"!
          </Text>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt='banner'/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
  form: {
    mb: ['30px', null, null, null, null, '60px'],
    // pl: '60px',
    justifyContent: "center",
    display: ['flex', '1000px'],
    input: {
      borderRadius: ['4px'],
      backgroundColor: '#fff',
      width: ['240px', null, null, null, '315px', null, '375px'],
      height: ['45px', null, null, '55px', null, null, '65px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
    },
    button: {
      // fontSize: [1, null, null, null, 2, '20px'],
      borderRadius: ['4px'],
      padding: ['0 15px'],
      ml: ['10px'],
      width: ['auto', null, null, null, '180px'],
    },
  },
};
