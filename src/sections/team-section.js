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
    title: "Douglas Yang, Co-founder and CEO",
    designation: 'Douglas Yang is a first year at Harvard majoring in Computer Science and Applied Math. On campus, he is a case team lead in the Harvard Product Lab, and serves as the Director of Finance in the Harvard Computer Society. Outside of school, he has rich venture capital experience, having worked in Sequoia Capital and Cue Ball Capital as an analyst, and serves as the co-founder and executive director of Peer2Peer – a leading NGO based in Hong Kong. He is also an avid beatboxer, magician, crypto investor, and boyfriend.',
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
    title: 'Immanuel Carmouche, Co-founder',
    designation: 'Immanuel Carmouche is a first year student at Harvard planning to major in Social Studies with a focus on Foreign Policy. On campus he serves as a policy researcher for both the Institute of Politics and the Harvard Undergraduate Foreign Policy Initiative. As Cofounder of Flutter he hopes to help you find the love of your life.',
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
    title: 'Lucas Zheng, Chief Technology Officer',
    designation: "Lucas Zheng is a freshman majoring in Computer Science in Carnegie Mellon's School of Computer Science. At school, he is part of the CMU Blockchain club and Scottylabs, where he is helping to create a new CMU course website. Some of his hobbies include watching NBA, skiing, and crypto trading. He also previously worked with Douglas for Peer2Peer.",
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
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Coco Lam',
    title: 'Coco Lam, Head of Public Relations',
    designation: 'Coco Lam is a student at Cardiff Sixth Form College soon to be majoring in Psychology and Behavioural Sciences at University of Cambridge. As a model, influencer and KOL, she has rich media and marketing experiences, she is also the founder of Orange Org- an art-for-charity NPO. Coco is a TEDx speaker, ‘Top 10 Outstanding Young Artists Hong Kong’, photographer and social activist. Also, she is he only girl on the team!',
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
        path: '#',
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
