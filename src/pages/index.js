import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Removed the Projects import since the “Other Noteworthy Projects” section is temporarily hidden
import { Layout, Hero, About, Jobs, Featured, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Featured />
      {/* The Projects section has been intentionally hidden. Remove this comment and re-add <Projects /> when ready to show it again. */}
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
