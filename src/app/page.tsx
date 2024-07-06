import Link from "next/link";
import styles from "./page.module.css";
import {
  Box,
  Button,
  Card,
  CardSection,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import classes from "./page.module.css";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import SiteFooter from "@/_components/footer/Footer";
import { BannerAnimation } from "@/_components/banner/BannerAnimation";
import WorkSection from "@/_components/works/WorkSection";

export default function Home() {
  const images = [
    "/banner/one.png",
    "/banner/two.png",
    "/banner/three.png",
    "/banner/four.png",
    "/banner/one.png",
    "/banner/two.png",
    "/banner/three.png",
    "/banner/four.png",
  ].map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));

  return (
    <>
      <Space h={30} />
      <Container size="xl" pos="relative">
        {/* <Box
          w={500}
          h={400}
          style={{
            right: 100,
            position: "absolute",
            background: "linear-gradient(45deg, red, #1a00ef)",
            filter: "blur(100px)",
          }}
        ></Box> */}
        <Box style={{ position: "relative" }}>
          <Title
            order={1}
            fz={20}
            c={"light-dark(var(--mantine-color-dark-9), white)"}
          >
            Hey 👋🏼 I'm{" "}
            <span
              style={{
                color:
                  "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-2))",
              }}
            >
              Mohammad.
            </span>{" "}
            <br />
            <span
              style={{
                fontSize: 85,
                fontWeight: 900,
                letterSpacing: 1,
              }}
            >
              Building the future with clean, efficient, and{" "}
              <Text
                variant="gradient"
                component="span"
                gradient={{ from: "green", to: "blue", deg: 90 }}
                fz={85}
                fw={900}
                style={
                  {
                    // background: "linear-gradient(45deg, red, blue)",
                    // backgroundClip: "text",
                    // color:
                    //   "light-dark(var(--mantine-color-bluegray-3), var(--mantine-color-dark-2))",
                  }
                }
              >
                scalable code.
              </Text>
            </span>
          </Title>
          <Space h={20} />
          <Text
            fz={30}
            c="light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-2))"
          >
            I care a lot about using design for positive impact and enjoy
            creating user-centric, delightful, and human experience.
          </Text>
        </Box>
        <Space h={50} />
        <Group justify="space-between">
          <Group>
            <Button color="black" radius="md" size="md">
              Talk with me
            </Button>
            <Button variant="default" radius="md" size="md">
              See my work
            </Button>
          </Group>
          <Group>
            <Link href={"#"} title="" className={classes.link}>
              Github
            </Link>
            <Link href={"#"} title="" className={classes.link}>
              Youtube
            </Link>
            <Link href={"#"} title="" className={classes.link}>
              Instagram
            </Link>
          </Group>
        </Group>
      </Container>
      <Space h={150} />
      <Box>{/* <BannerAnimation images={images} speed={100000} /> */}</Box>
      <Space h={150} />
      <Container size="xl" pos="relative">
        <Grid>
          <GridCol span={8}>
            <Title order={2} fz={65} fw={600}>
              Transforming ideas into elegant, functional digital solutions.
            </Title>
          </GridCol>
          <GridCol span={4}>
            <Space h={16} />
            <Text fz={18}>
              I'm a Full-Stack Software Developer living in Kabul 🇦🇫, and I
              focus on making digital experiences that are easy to use,
              enjoyable, and get the job done. I love tackling challenging
              problems and creating solutions that truly matter to people.
            </Text>
            <Space h={32} />
            <Button
              variant="default"
              // color="black"
              size="lg"
              radius="xl"
              rightSection={<IconArrowRight />}
              fz={16}
            >
              About Me
            </Button>
          </GridCol>
        </Grid>
        <Space h={150} />
        <WorkSection />
      </Container>
      <SiteFooter />
    </>
  );
}
