/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Container, Grid, Heading, Image, Box } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import FlutterFeature from 'components/flutter-features';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
// import Heart from 'assets/key-feature/heart.jpg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    left: true,
    imgSrc: Subscription,
    video: "/video/Flutter-login.mp4",
    altText: 'Onboarding Page',
    title: 'College Email Verification',
    text:
      "Only people with college emails can join as users. This ensures that everyone is a verified student, and that people can connect is the safest way possible.",
    ntitle: 'Human Verification',
    ntext: 'Our team will conduct a human verification test with every user before they can start using Flutter. What you see is what you could have.'
  },
  {
    id: 2,
    left: true,
    imgSrc: Support,
    video: "/video/Flutter-carousel.mp4",
    altText: 'Home Page',
    title: 'Carousel',
    text:
      "Say goodbye to swipe-through profile stacks! With a feel almost IDENTICAL to Instagram, Flutter’s carousel allows you to browse and revisit profiles around you to your heart’s content. Carousels are automatically refreshed every 24 hours – take your time to find who you like most :)",
    ntitle: 'Limited Actions',
    ntext: 'No more trigger happy swiping! In fact, Flutter doesn’t even use swipes – you send notes of interest to people you like! Here’s the catch: You only have 1 note to send at any given time and receive up to 3 notes from other people, so take advantage of the carousel and choose carefully. You get your note back when the recipient makes a decision on you, and conversely you can receive new notes when you make a decision on other people and free up your inbox.'
  },
  {
    id: 3,
    left: true,
    imgSrc: Performance,
    video: "/video/Flutter-inbox.mp4",
    altText: 'Inbox Page',
    title: 'Unilateral Matching',
    text:
      'That’s right! No need to wait for people to swipe on you! When you send a note to someone, you can immediately start talking to them.',
    ntitle: 'Decision-driven, Time-restricted Chat Rooms',
    ntext: "Texting is a tricky thing when it comes to online dating - some people are just not good at texting, while others don’t like being led on or ghosted. Within 24 hours from the moment you send a note, the recipient will have to make a decision on whether to set up a date with you or reject you. When the recipient either sets up a date or declines your note, you will get your note back, and you can send it to someone else."
  },
  {
    id: 4,
    left: true,
    imgSrc: Partnership,
    video: "/video/Flutter-dating.mp4",
    altText: 'Calendar Page',
    title: 'Date Scheduling',
    text:
      "The app helps you schedule dates if you’re interested in learning more about the person who sent you a note of interest! When setting up a date, location choices are limited to public settings to ensure safety, and the date and time can be any day in the next two weeks from 11 am - 9 pm. If you choose to schedule a date (and not reject them), there will be an option to report flaking, and the chat room will stay open until the day of the date :)",
    ntitle: 'Discounts for dates',
    ntext: 'Dates scheduled through the app will be able to enjoy exclusive discounts at nearby shops, restaurants, and attractions. There may be only a finite number of discounts for certain places, so be sure to keep your eyes peeled for notifications, go on more dates and meet authentically in real life!'
  },
];

export default function KeyFeature() {
  return (
    <section id="feature" sx={{ variant:'section.KeyFeature' }}>
    <Container pt='50px' pb='100px'>
      <SectionHeader
        slogan="A date is worth a thousand texts"
        title="Key features of Flutter"
      />
      {/* <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn
            key={item.id}
            src={item.imgSrc}
            altText={item.altText}
            title={item.title}
            text={item.text}
            ntitle={item.ntitle}
            ntext={item.ntext}
          />
        ))}
      </Grid> */}
      {data.map((item) => (
          <Box key={item.id}>
            <Box key={item.id} sx={{ variant: 'sectionHeader' }}>
              <Image key={item.id} src={item.imgSrc} alt={item.altText} sx={styles.img}/>
              <Heading key={item.id} sx={styles.wrapper.header}>
                {item.altText}
              </Heading>
            </Box>
            <FlutterFeature
              key={item.id}
              icon={item.imgSrc}
              video={item.video}
              left={item.left}
              altText={item.altText}
              subtitle1={item.title}
              text1={item.text}
              subtitle2={item.ntitle}
              text2={item.ntext}
            />
          </Box>
          
        ))}
    </Container>
  </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
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
    textAlign: 'left',
    mt: '-30px',
    header: {
      fontSize: 5,
      color: 'primary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
  },
};
