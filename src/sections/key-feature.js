/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Easy to Use',
    title: 'Easy to Use',
    text:
      "Simply hold then swipe up on someone's profile card to request a connection with them. If they accept, schedule a meetup!",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Radar',
    title: 'Location-based Radar',
    text:
      'Profiles that appear are of people who are near you based on location, so it will be convenient to meet them in person.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Profiles',
    title: 'Intuitive Profiles',
    text:
      "At a glance, you can easily get to know someone's background, such as their college and interests.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Requests',
    title: 'Time-sensitive Requests',
    text:
      'You get 6 hours to respond to a request, so no more ghosting. Think carefully!',
  },
];

export default function KeyFeature() {
  return (
    <section id="feature" sx={{ variant:'section.KeyFeature' }}>
    <Container pt='100px' pb='100px'>
      <SectionHeader
        slogan="Your Digital Wingsperson"
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
