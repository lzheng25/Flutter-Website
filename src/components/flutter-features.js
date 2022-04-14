import React, { useState } from 'react';
/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, Container, Box, Grid, Text, Heading, Button, Image } from 'theme-ui';
import { keyframes } from '@emotion/core';
import TextFeature from 'components/text-feature';
import ModalVideo from 'react-modal-video';
import { IoIosPlay } from 'react-icons/io';
import styles2 from 'components/waitlist.module.css';

import ServiceThumb from 'assets/service-thumb.png';
import shapePattern from 'assets/shape-pattern1.png';
// import Fluttervid from 'assets/video/Flutter-animation.mp4';

import Smart from 'assets/services/smart.svg';
import Secure from 'assets/services/secure.svg';
import SectionHeader from 'components/section-header';
import Head from 'next/head';

export default function Flutterfeature({
  id,
  icon,
  video,
  left,
  altText,
  subtitle1,
  text1,
  subtitle2,
  text2
}) {
  // video on left side
  if (left) {
    return (
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <video autoPlay muted loop src={video} style={{ width: "70%", height:"70%" }} />
        </Box>
        <Box styles={styles.thumbnail}>
          {/* <TextFeature subTitle={data.subTitle} title={data.title}/> */}
          <Grid sx={styles.grid}>
            <Image src={icon} alt={altText} sx={styles.img}/>
            <Box sx={styles.card} key={id}>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.header}>
                  {altText}
                </Heading>
                <Heading sx={styles.wrapper.title}>
                  {subtitle1}
                </Heading>
                <Text sx={styles.wrapper.subTitle}>
                  {text1}
                </Text>
                <Heading sx={styles.wrapper.title}>
                  {subtitle2}
                </Heading>
                <Text sx={styles.wrapper.subTitle}>
                  {text2}
                </Text>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>
    );
  } else { // video on right side
    return (
      <Container sx={styles.containerBox}>
        <Box styles={styles.thumbnail2}>
          {/* <TextFeature subTitle={data.subTitle} title={data.title}/> */}
          <Grid sx={styles.grid}>
            <Image src={icon} alt={altText} sx={styles.img}/>
            <Box sx={styles.card} key={id}>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.header}>
                  {altText}
                </Heading>
                <Heading sx={styles.wrapper.title}>
                  {subtitle1}
                </Heading>
                <Text sx={styles.wrapper.subTitle}>
                  {text1}
                </Text>
                <Heading sx={styles.wrapper.title}>
                  {subtitle2}
                </Heading>
                <Text sx={styles.wrapper.subTitle}>
                  {text2}
                </Text>
              </Box>
            </Box>
          </Grid>
        </Box>
        <Box sx={styles.contentBox2}>
          <video autoPlay muted loop src={video} style={{ width: "70%", height:"70%" }} />
        </Box>
      </Container>
    );
  }
  
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [10, null, null, null, null, 3],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  thumbnail2: {
    mr: ['auto', null, null, 6, 60, 85],

    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    flexShrink: 0.5,
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  contentBox2: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    order: [2, null, null, 0],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'right'],
  },
  // thumbnail2: {
  //   mr: ['auto', null, null, 6, 60, 85],
  //   order: [2, null, null, 0],
  //   ml: ['auto', null, null, 0],
  //   display: 'inline-flex',
  //   position: 'relative',
  //   '> img': {
  //     position: 'relative',
  //     zIndex: 1,
  //     height: [310, 'auto'],
  //   },
  // },
  // contentBox2: {
  //   width: ['100%', null, null, 315, 390, 450, null, 500],
  //   flexShrink: 0,
  //   mb: [7, null, 60, 0],
  //   textAlign: ['center', null, null, 'left'],
  // },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)']
    // gridTemplateColumns: [
    //   'repeat(1,1fr)',
    //   null,
    //   'repeat(2,1fr)',
    //   null,
    //   'repeat(4,1fr)',
    // ],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },
  img: {
    mx: ['auto', null, 0],
    ml: ['auto', null, '-13px'],
    mb: -2,
    width: ['80px', null, null, '90px', null, 'auto'],
  },
  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-30px',
    // title: {
    //   fontSize: 3,
    //   color: 'heading_secondary',
    //   lineHeight: 1.4,
    //   fontWeight: 700,
    //   mb: [2, null, 3, 2, 3],
    // },
    // header: {
    //   fontSize: 5,
    //   color: 'primary',
    //   lineHeight: 1.4,
    //   fontWeight: 700,
    //   mb: [2, null, 3],
    // },
    // subTitle: {
    //   fontSize: [1, null, null, '14px', 1],
    //   fontWeight: 400,
    //   lineHeight: 1.9,
    // },
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
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
};
