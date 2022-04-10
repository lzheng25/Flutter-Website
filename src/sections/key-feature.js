/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
// import Heart from 'assets/key-feature/heart.jpg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Subscription,
    altText: 'Intentionality',
    title: 'Proximity-based Vertical Carousel',
    text:
      "Flutter’s vertical carousel is designed where users can always return to profiles they have previously looked at while scrolling. Other dating apps charge users to look at previously viewed profiles. Users can now intentionally swipe on the person they are interested in. No more unintentional swipes and missed connections. The profiles are displayed based on a tiered radius from the user. The user will first be shown users within a 5mi radius, then a 15mi radius, then a 30mi radius.",
    ntitle: 'Limited Swipes',
    ntext: 'At any given time, Flutter’s users can send out two swipes, and receive up to three, so users can only have up to five chats at any given time. This pairs with the ability to return to previously viewed profiles via the carousel to ensure that every swipe and decision is intentional.'
  },
  {
    id: 2,
    imgSrc: Support,
    altText: 'Authenticity',
    title: 'Detailed Profiles',
    text:
      'Flutter’s profiles display the user’s hobbies, major, age, gender, height, and if they drink, smoke, and use weed. Users are required to fill out one college-specific prompt to share their personality. 4 pictures must be chosen to display on the profile.',
    ntitle: 'In-Person Facilitated Dates',
    ntext: 'Flutter brings authenticity back into dating. Current dating apps have no feature that facilitates in-person dates. Flutter works to provide its users with organic connections made in real life. To achieve this, Flutter encourages its users to meet in person after the chatting period is over, by providing a list of public locations near the two users where they can meet for a date. There will be limited-time discounts on location offerings, exclusive to Flutter. '
  },
  {
    id: 3,
    imgSrc: Performance,
    altText: 'Immediacy',
    title: '3hr timer',
    text:
      'After each swipe you make, the recipient of your swipe will have three hours to either accept or decline your swipe. Unlike other dating apps where you might have to wait days for a match or for people to respond to you, in Flutter you know within 3 hours if the person you swiped on is also interested.',
    ntitle: '24hr chatroom',
    ntext: "If the recipient of your swipe is interested in you and they accept your swipe, then a 24hr chatroom will open between the two. The two of you now have 24 hours to call, text, or video chat to get to know each other. At the end of the 24 hour period, the recipient will have to decide either to meet in person and set up a date or end the conversation and move on. This feature expedites the relationship process."
  },
  {
    id: 4,
    imgSrc: Partnership,
    altText: 'Security',
    title: 'Only for College Students',
    text:
      "Only verified college students can use Flutter. No more bots, no more catfishing. With Flutter, who you see is who you get.",
    ntitle: 'Public Locations',
    ntext: 'If the recipient chooses to meet up after the 24hr chatroom, then they are taken to the calendar tab where they can choose any day within the range of 2 weeks from the day the chatroom ended. They are shown the calendar of the sender and after choosing a day and time from 11AM to 9PM they are shown public locations between them and the sender. Whichever public location is chosen will be the location of the date.'
  },
];

export default function KeyFeature() {
  return (
    <section id="feature" sx={{ variant:'section.KeyFeature' }}>
    <Container pt='100px' pb='100px'>
      <SectionHeader
        slogan="Swipe With Intention"
        title="Key features of our product"
      />
      <Grid sx={styles.grid}>
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
      </Grid>
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
};
