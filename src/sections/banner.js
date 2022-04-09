/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRef } from 'react'
import { Container, Box, Heading, Text, Image, Button, Input } from 'theme-ui';
// import BannerImg from 'assets/banner-thumb.png';
import BannerImg from 'assets/douglas_card.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import { Waitlist } from 'waitlistapi';
import { useState } from 'react';
import styles2 from 'components/waitlist.module.css';
import emailjs from '@emailjs/browser';

export default function Banner() {

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

          <Form/>
          
          <Text as="p" vairant="heroSecondary">
            By joining the waitlist, you will get notified early when our product launches! You must enter a university email ending with ".edu".
          </Text>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt='banner' sx={{height:'45%', width:'45%'}}/>
        </Box>
      </Container>
    </section>
  );
}

function Form() {
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [form, setForm] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const content = useRef();

  const submit = async (e) => {
      // We will submit the form ourselves
      e.preventDefault()

      // TODO: make a POST request to our backend
      let response = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({first: first, last: last, email: email})
      })
      if (response.ok) {
          setHasSubmitted(true);
          emailjs.sendForm('service_dra3bp7', 'template_44nfai4', content.current, 'lio_bDdc-iMJ7yqEg')
            .then((result) => {
                console.log('Sending email to ', result.text);
            }, (error) => {
                console.log(error.text);
            });
      } else {
          setError(await response.text())
      }
  }

  if (!form) {
    return <div className={styles2.formWrapper}>
        <Button className={[styles2.formShow, styles2.formShowButton].join(" ")}
          vairant="primary"
          onClick={() => {
            setForm(true);
          }}> Click to join waitlist!
        </Button>
      </div>
  }

  // If the user successfully submitted their email,
  //   display a thank you message
  if (hasSubmitted) {
      return <div className={styles2.formWrapper}>
          <span className={styles2.subtitle}>
              Thanks for signing up! We will be in touch soon.
          </span>
      </div>
  }

  // Otherwise, display the form
  return <form ref={content} className={styles2.formWrapper} onSubmit={submit}>
      <div className={styles2.label}>
        <label className={styles2.label} name="first">First Name</label>
      </div>
      <input type="text" required placeholder="First/Nickname"
            className={[styles2.formInput, styles2.formTextInput].join(" ")}
            value={first} onChange={e => setFirst(e.target.value)}
      />
      <label className={styles2.label} name="last">Last Name</label>
      <input type="text" required placeholder="Last Name"
            className={[styles2.formInput, styles2.formTextInput].join(" ")}
            value={last} onChange={e => setLast(e.target.value)}
      />
      <label className={styles2.label} name="mail">School email</label>
      <input type="email" required placeholder="Ending with '.edu'"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.edu"
            title="College '.edu' email"
            className={[styles2.formInput, styles2.formTextInput].join(" ")}
            value={email} onChange={e => setEmail(e.target.value)}
      />

      <button type="submit" className={[styles2.formInput, styles2.formSubmitButton].join(" ")}>
          Join Waitlist
      </button>
      <button className={["link", styles2.hideWaitlist].join(" ")} 
        sx={styles.hideForm}
        onClick={() => {
          setForm(false);
        }}> Click to hide form
      </button>
      {error ? <div className={styles2.error}>{error}</div> : null}
  </form>
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '150px', '150px'],
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
  hideForm: {
    fontSize: [1, '15px'],
    color: 'text',
    fontWeight: '400',
    mb: 2,
    fontFamily: 'body',
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
};
