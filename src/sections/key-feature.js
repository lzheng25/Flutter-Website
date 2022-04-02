/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
// import Heart from 'assets/key-feature/heart.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Easy to Use',
    title: 'Easy to Use',
    text:
      "On the home page, simply hold then swipe up on someone's profile card to request a connection with them. You can starting texting as simple as that!",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Radar',
    title: 'Tiered Radar',
    text:
      'Users near you are sorted into tiers based on distance in 5 kilometer increments and their profiles appear on your carousel in a randomzied order. This makes sure that you will not always get people who are right next to you.',
  },
  {
    id: 3,
    imgSrc: Support,
    altText: 'Requests',
    title: 'Swipe Limits',
    text:
      'Every day, you get 10 swipes and receive 10 swipes at maximum. 24 hours after receiving a request, you decide whether to pass or schedule a date. The limits ensures that every interaction is thoughtful and authentic, which prevents mindless swiping.',
  },
  {
    id: 4,
    imgSrc: Subscription,
    altText: 'Profiles',
    title: 'Dating',
    text:
      "After receiving a swipe, you get 24 hours to decide whether you want to pass, or schedule a date within 2 weeks from now using the calendar tab. Get ready to say goodbye to ghosting!",
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
            alt={item.altText}
            title={item.title}
            text={item.text}
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
