"use client";

import React from "react";
import styled from "styled-components";

// Define the props type
interface HeadingProps {
  class?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <>
      <Container className={props.class}>{props.children}</Container>
    </>
  );
};
export default Heading;

// Styled component remains the same
const Container = styled.h2`
  font-weight: 500;
  text-align: center;
  font-size: calc(var(--length) * 2);
  margin-top: calc(var(--length) * 2);
  margin-bottom: calc(var(--length) * 1);
`;
