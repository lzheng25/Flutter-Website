/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';
import { useState } from 'react';
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import styles2 from 'components/waitlist.module.css'

export default function FeatureCardColumn({
  src,
  // altText = 'default alt text',
  altText,
  title,
  text,
  ntitle,
  ntext,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} altText={altText} sx={styles.img}/>
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.header}>
          {altText}
        </Heading>
        <Heading sx={styles.wrapper.title}>
          {title}
        </Heading>
        <Text sx={styles.wrapper.subTitle}>
          {text}
        </Text>
        <Heading sx={styles.wrapper.title}>
          {ntitle}
        </Heading>
        <Text sx={styles.wrapper.subTitle}>
          {ntext}
        </Text>
      </Box>
      {/* <Feature altText={altText} title={title} text={text} ntitle={ntitle} ntext={ntext} /> */}
    </Box>
  );
}

function Feature ({altText, title, text, ntitle, ntext}) {
  const [feature1, setFeature1] = useState(false);
  
  if (!feature1) {
    return <Box sx={styles.wrapper}>
            <Heading sx={styles.wrapper.header}>
              {altText}
            </Heading>
            <Heading sx={styles.wrapper.title}>
              {title} <AiFillCaretRight/>
            </Heading>
            <Heading sx={styles.wrapper.title}>
              {ntitle} <AiFillCaretRight/>
            </Heading>1
          </Box>
  }
}

const styles = {
  card: {
    display: 'flex',
    alignItems: ['center', 'flex-start'],
    flexDirection: 'column',
    mb: -1,
    textAlign: ['center', null, 'left'],
    px: [4, null, 0],
  },
  img: {
    mx: ['auto', null, 0],
    ml: ['auto', null, '-13px'],
    mb: -2,
    width: ['80px', null, null, '90px', null, 'auto'],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    header: {
      fontSize: 5,
      color: 'primary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9',
      mb: [2, null, 3],
    },
  },
};
