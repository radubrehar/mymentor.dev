import React from "react";
import Constrained from "../components/Constrained";
import ExternalLink from "../components/ExternalLink";
import { Text, Box, Flex } from "rebass";

import styled from "@emotion/styled";
const ProfilePic = styled("img")({
  marginBottom: 0,
  boxShadow: "2px 2px 30px -4px ${props => props.theme.colors.primary",
});

const quoteIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </svg>
);

const Quote = styled((props) => {
  return (
    <li {...props}>
      {quoteIcon}
      {props.children}
    </li>
  );
})`
  position: relative;
  padding: 1rem 2rem;
  border-radius: 0.25rem;

  fill: ${(props) => ((props.theme as any) as any).colors.primary};

  background: ${(props) => ((props.theme as any).colors as any).primaryWhite};
  margin-bottom: 0.725rem;

  &:nth-child(2n + 1) {
    margin-left: 4rem;
    margin-right: 0px;
    color: white;
    fill: white;
    background: ${(props) => ((props.theme as any).colors as any).primaryLight};
  }
`;

export default function Home() {
  return (
    <>
      <Constrained>
        <Text fontSize={3} mb={4} mt={4}>
          Hi! I'm here to help you learn to code.
        </Text>
        <h2>
          <Text fontSize={2} fontWeight={400}>
            My name is Radu Brehar and I'm ready to{" "}
            <b>help you become a developer</b> by mentoring you along the way,
            while sharing my 1️⃣2️⃣+ years of experience.
          </Text>
        </h2>

        <Flex alignItems="center">
          <ProfilePic
            src="https://pbs.twimg.com/profile_images/984772279505735681/6Sdj_9zN_400x400.jpg"
            width={"auto"}
            height={150}
            style={{ borderRadius: "50%" }}
          />
          <Text fontSize={3} ml={3}>
            It's my passion seeing people grow as developers and helping them
            achieve more.
          </Text>
        </Flex>
      </Constrained>

      <Box style={{ background: "#f1f1f1" }} pt={3} pb={3}>
        <Constrained>
          <h2>
            <Text fontSize={2} fontWeight={400} mt={4}>
              I've had{" "}
              <ExternalLink
                to="https://www.codementor.io/radubrehar"
                style={{ textDecoration: "none" }}
              >
                4️⃣0️⃣0️⃣+ mentoring sessions
              </ExternalLink>{" "}
              (all of them ⭐️⭐️⭐️⭐️⭐️) with various people of different
              skill levels.
            </Text>
            <Text fontSize={2} fontWeight={400} mt={4}>
              Here's what some of them are saying:
            </Text>
            <Text
              mt={2}
              fontSize={2}
              fontWeight={300}
              style={{ fontStylex: "italic" }}
            >
              <ul style={{ listStyle: "none" }}>
                <Quote>
                  Radu is a great mentor, very knowledgable and knows how to
                  write good clean code and is a good teacher
                </Quote>

                <Quote>
                  Radu is a seasoned developer with tips and techniques that
                  could only be learned in the trenches. I learned a lot just
                  watching him work and think through various scenarios. I came
                  with him with a checklist and we got through many of the items
                  quickly and efficiently.
                </Quote>

                <Quote>
                  Radu was super helpful. He explained everything very clearly,
                  understood the problem in depth before even starting to code.
                  Offered lots of tips and tricks as well. I have no hesitation
                  in recommending Radu as a mentor.
                </Quote>

                <Quote>
                  Yet another great session with Radu about prototype
                  inheritance, functional programming and idiomatic JS patterns
                  for extending objects. We also debugged a tricky babel
                  compiling issue.
                </Quote>

                <Quote>
                  Radu is fantastic mentor. Very Knowledgeable. He is able to
                  explain what he is doing, in detail, and in an easy to
                  understand way. Highly Recommended!
                </Quote>

                <Quote>
                  Radu was amazing!! He was super quick solving issues I was
                  having with my project and was able to clearly explain
                  everything as he went along :)
                </Quote>

                <Quote>
                  Excellent communicator and understood my code immediately.
                  React HTML and CSS expert. Will definitely be using Radu for
                  help again.
                </Quote>

                <Quote>
                  Radu is bright, persistent, and a well-rounded developer. He
                  knows both the front and backend; moreover, he can definitely
                  find his way around a Unix machine with ease. Amazing! I
                  definitely recommend him.
                </Quote>

                <Quote>
                  Radu is a very good teacher and mentor. He has a lot of
                  patience, and can explain what he is doing, whilst he is doing
                  it. Highly recommended.
                </Quote>

                <Quote>
                  Radu is great, very helpful and friendly. Great mentor for
                  sure. I appreciate his help very much
                </Quote>

                <Quote>
                  Radu was friendly, efficient, and extremely knowledgeable.
                  Definitely recommend him!
                </Quote>

                <Quote>
                  Outstanding Mentor! Great instructor and communicator. Very
                  patient, with a high degree of technical knowledge as well.
                  Highly recommended.
                </Quote>

                <Quote>
                  Radu helped me understand React Native and React Navigation.
                  He is an excellent mentor, very patient and very capable.
                  Highly recommend.
                </Quote>
              </ul>
            </Text>
          </h2>

          <Text fontSize={2}>
            Read more at{" "}
            <ExternalLink to="https://www.codementor.io/radubrehar/reviews">
              codementor.io/radubrehar/reviews
            </ExternalLink>
          </Text>
        </Constrained>
      </Box>
    </>
  );
}
