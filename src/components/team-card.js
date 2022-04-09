/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Text, Heading, Image, Box, Link } from 'theme-ui';
import { useState } from 'react';
import styles2 from 'components/waitlist.module.css'
import { FaCentercode } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"

export default function TeamCard({ src, altText, title, designation, social }) {
  
  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.memberThumb} />
      {/* <Box sx={styles.infoWrapper}>
        <Heading className="info__name" sx={styles.infoWrapper.name}>
          {title}
        </Heading>
        <Bio/>
      </Box> */}
      <Bio title={title} designation={designation}/>
      <Box sx={styles.socialShare} className="social__share">
        {social.map((item) => (
          <Link key={item.id} href={item.path} className={item.name} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

function Bio ({title, designation}) {
  const [bio, setBio] = useState(false);
  
  if (!bio) {
    return <Box sx={styles.infoWrapper}>
        <Heading className="info__name" sx={styles.infoWrapper.name}>
          {title}
        </Heading>
        <button className={["link", styles2.hideWaitlist].join(" ")} 
          sx={styles.hideForm}
          onClick={() => {
            setBio(true);
          }}> Click for bio <IoIosArrowForward className={styles2.icon}/> </button>
      </Box>
  } else {
    return <Box sx={styles.infoWrapper}>
            <Heading className="info__name" sx={styles.infoWrapper.name}>
              {title}
            </Heading>
            <button className={["link", styles2.hideWaitlist].join(" ")} 
              sx={styles.hideForm}
              onClick={() => {
                setBio(false);
              }}> Hide bio <IoIosArrowDown className={styles2.icon}/> </button>
              <Text className="info__designation" sx={styles.infoWrapper.designation}>
              {designation}
            </Text>
          </Box>
  }
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: 'ease-in-out 0.4s',
    borderRadius: '8px',
    position: 'relative',
    '&:hover': {
      boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
      '.info__name': {
        color: 'primary',
      },
      '.info__designation': {
        color: 'primary',
      },
      '.social__share': {
        opacity: 1,
        a: {
          my: 0,
          py: [0, null, 1],
        },
      },
    },
  },

  memberThumb: {
    width: ['70px', '80px', '100px', null, null, '130px'],
    height: ['70px', '80px', '100px', null, null, '130px'],
    flexShrink: 0,
    border: '2px solid',
    borderColor: 'primary',
    borderRadius: '50%',
  },
  infoWrapper: {
    width: '100%',
    textAlign: 'center',
    mt: [3, null, 4],
    name: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: 'bold',
      lineHeight: [1.25, 1.35],
      transition: 'color 0.25s',
      mb: 1,
    },
    designation: {
      fontSize: ['14px', null, null, 2],
      fontWeight: 'body',
      lineHeight: 'heading',
      color: 'text',
      transition: 'color 0.25s',
    },
  },
  socialShare: {
    position: ['relative', null, 'absolute'],
    right: [0, null, 6, null, 4, 6],
    bottom: [0, null, '18px', 5],
    width: ['100%', null, 'auto'],
    display: 'flex',
    flexDirection: ['row', null, 'column'],
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.25s',
    opacity: [1, null, 0],
    pt: 2,
    a: {
      fontSize: [0, 1, null, 2],
      color: ['text', null, 'primary'],
      lineHeight: '1em',
      my: [0, null, '-2px'],
      px: 1,
      transition: 'all 0.25s',
      '&:hover': {
        color: ['primary', null, 'text'],
      },
    },
  },
  hideForm: {
    width: '100%',
    mt: [3, null, 4],
    textAlign: 'center',
    fontSize: [1, '15px'],
    color: 'text',
    fontWeight: '400',
    mb: 2,
    fontFamily: 'body',
    cursor: 'pointer',
    transition: 'all 0.35s',
    display: 'block',
    textDecoration: 'none',
    transition: 'all 0.15s',
    lineHeight: [1.5, null, 1.8],
    px: [2, null, 4],
    ':hover': {
      color: 'primary',
    },
  },
};
