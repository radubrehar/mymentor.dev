import Link from "next/link";
import * as React from "react";

import { color } from "styled-system";
import { Text } from "rebass";

import styled from "@emotion/styled";
const Header = styled("header")(color);

import logo from "./logo1";
import { Flex } from "rebass";

export default ({ siteTitle }) => (
  <Header
    bg="primary"
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <Flex
      alignItems="center"
      style={{
        textAlign: "right",
        margin: `0 auto`,
        maxWidth: "60rem",
        padding: `1.45rem 1.0rem`,
      }}
    >
      <h1 style={{ margin: 0, flex: 1 }}>
        <Link href="/">
          <a
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <Text fontSize={3}>Your developer mentor</Text>
            <Text mt={2} fontSize={1}>
              mymentor.dev
            </Text>
          </a>
        </Link>
      </h1>
      {React.cloneElement(logo, {
        style: {
          width: 80,
          marginLeft: 10,
          fill: "white",
        },
      })}
    </Flex>
  </Header>
);
