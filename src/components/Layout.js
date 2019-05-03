import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <Main>
      <GlobalStyles />
      {children}
    </Main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

const GlobalStyles = createGlobalStyle`
  ${reset}

  :focus {
    outline: 0;
  }

  body {
    background-color: #ed1c23;
  }

  p,
  h1,
  span {
    font-family: "Open Sans", "Trebuchet MS", Helvetica, Arial, sans-serif;
    line-height: 1.65rem;
    padding-bottom: 0.75rem;
    display: block;
  }
`;

const Main = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default Layout;
