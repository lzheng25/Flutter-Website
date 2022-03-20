/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaLinkedin, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Douglas Yang',
    title: "Douglas Yang, school?",
    designation: 'Position',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/douglasyang1/',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/dougyster/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Immanuel Carmouche',
    title: 'Immanuel Carmouche',
    designation: 'Position',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: '#',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/i_mouche23/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Lucas Zheng',
    title: 'Lucas Zheng',
    designation: 'Position',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/lucas-zheng2003/',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/lyz2003/',
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section sx={styles.TeamSection} id="team">
      <Container pt='100px' pb='100px'>
        <SectionHeader
          slogan="OUR TEAM"
          title="Young and passsionate students"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>

    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
