import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout2 from 'components/layout2';
import Account from '../signupsections/account';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
// import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';

export default function SignUpPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout2>
          <SEO title="Flutter Landing Page" />
          <Account />
          <KeyFeature />
          {/* <ServiceSection /> */}
          {/* <Feature /> */}
          {/* <CoreFeature /> */}
          <WorkFlow />
          {/* <Package /> */}
          <TeamSection />
          {/* <TestimonialCard /> */}
        </Layout2>
    </ThemeProvider>
  );
}
