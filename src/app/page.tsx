"use client";

import Link from "next/link";
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Space,
  Text,
  Title,
} from "@mantine/core";
import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import SiteFooter from "@/_components/footer/Footer";
import { BannerAnimation } from "@/_components/banner/BannerAnimation";

export default function Home() {
  const images = [
    "/banner/one.png",
    "/banner/two.png",
    "/banner/three.png",
    "/banner/five.png",
    "/banner/six.png",
    "/banner/one.png",
    "/banner/two.png",
    "/banner/three.png",
    "/banner/five.png",
    "/banner/six.png",
  ].map((image) => ({
    // id: crypto.randomUUID(),
    image,
  }));

  return (
    <>
      <Space h={150} />
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
            fz={32}
            c={"light-dark(var(--mantine-color-dark-9), white)"}
          >
            Hey 👋🏼 I&apos;m{" "}
            <span
              style={{
                color:
                  "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-2))",
              }}
            >
              Mohammad.
            </span>{" "}
            <Space h={16} />
            <Text
              fz={{ lg: 85, sm: 65, xs: 45, base: 45 }}
              fw={900}
              style={{
                lineHeight: "1.1",
              }}
            >
              Building the future with clean, efficient, and{" "}
              <span
                style={{
                  color:
                    "light-dark(var(--mantine-color-pink-9), var(--mantine-color-dark-2))",
                }}
              >
                scalable code.
              </span>
            </Text>
          </Title>
          <Space h={20} />
          <Text
            fz={{ lg: 30, xs: 26, base: 26 }}
            c="light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-2))"
          >
            I care a lot about using design for positive impact and enjoy
            creating user-centric, delightful, and human experience.
          </Text>
        </Box>
        <Space h={50} />
        <Group justify="space-between">
          <Group>
            <Button
              variant="default"
              component={Link}
              href="https://github.com/afgprogrammer"
              radius="xl"
              target="_blank"
              leftSection={<IconBrandGithub size={18} />}
            >
              Github
            </Button>
            <Button
              variant="default"
              component={Link}
              href="https://youtube.com/afgprogrammer"
              radius="xl"
              target="_blank"
              leftSection={<IconBrandYoutube size={18} />}
            >
              Youtube
            </Button>
            <Button
              variant="default"
              component={Link}
              href="https://instagram.com/afgprogrammer"
              radius="xl"
              target="_blank"
              leftSection={<IconBrandInstagram size={18} />}
            >
              Instagram
            </Button>
          </Group>
        </Group>
      </Container>
      <Space h={100} />
      <Container size="xl" pos="relative">
        <Group>
          <Title order={3} fz={{ lg: 36 }} fw={600}>
            Featured UI Kits 🔥
          </Title>
        </Group>
        <Divider my={32} />
        <Grid gutter={{ lg: 62, base: 16 }}>
          <GridCol span={{ lg: 6 }}>
            <Box
              style={{
                background: "#eee",
                // height: 500,
                borderRadius: 24,
                overflow: "hidden",
              }}
            >
              <Image
                src={"/kits/flutter-homy-ui-kit.png"}
                alt="Flutter fry ui kit"
              />
            </Box>
            <Text fz={18} mt={16} fw={600}>
              Home Service Application UI Kit
            </Text>
            <Text
              c={
                "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))"
              }
              mt={4}
            >
              A Flutter UI Kit for Home Service Application, and it is a
              complete solution for your next project.
            </Text>
            <Space h={24} />
            <Button
              radius="xl"
              color="light-dark(black, #fff)"
              variant="outline"
              size="md"
              disabled
              // component={Link}
              // href="/flutter/fry-ui-kit"
              rightSection={<IconArrowRight />}
            >
              Coming Soon
            </Button>
          </GridCol>
          <GridCol span={{ lg: 6 }}>
            <Box
              style={{
                background: "#eee",
                // height: 500,
                borderRadius: 24,
                overflow: "hidden",
              }}
            >
              <Image
                src={"/kits/flutter-furnix-ui-kit.png"}
                alt="Flutter furnix ui kit"
              />
            </Box>
            <Text fz={18} mt={16} fw={600}>
              Furniture Store Application UI Kit
            </Text>
            <Text
              c={
                "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))"
              }
              mt={4}
            >
              A Flutter UI Kit for Furniture Store Application, and it is a
              complete solution for your next project.
            </Text>
            <Space h={24} />
            <Button
              radius="xl"
              color="light-dark(black, #fff)"
              variant="outline"
              size="md"
              component={Link}
              href="/flutter/furnix-ui-kit"
              rightSection={<IconArrowRight />}
            >
              Buy Now
            </Button>
          </GridCol>
          <GridCol span={{ lg: 6 }}>
            <Box
              style={{
                background: "#eee",
                // height: 500,
                borderRadius: 24,
                overflow: "hidden",
              }}
            >
              <Image
                src={"/kits/flutter-fry-ui-kit.png"}
                alt="Flutter fry ui kit"
              />
            </Box>
            <Text fz={18} mt={16} fw={600}>
              Beauty Appointment Application UI Kit
            </Text>
            <Text
              c={
                "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))"
              }
              mt={4}
            >
              A Flutter UI Kit for Beauty Appointment Application, and it is a
              complete solution for your next project.
            </Text>
            <Space h={24} />
            <Button
              radius="xl"
              color="light-dark(black, #fff)"
              variant="outline"
              size="md"
              component={Link}
              href="/flutter/fry-ui-kit"
              rightSection={<IconArrowRight />}
            >
              Buy Now
            </Button>
          </GridCol>
          <GridCol span={{ lg: 6 }}>
            <Box
              style={{
                background: "#eee",
                borderRadius: 24,
                overflow: "hidden",
              }}
            >
              <Image
                src={"/kits/flutter-koor-ui-kit.png"}
                alt="Flutter koor ui kit"
              />
            </Box>
            <Text fz={18} mt={16} fw={600}>
              Real Estate Application UI Kit
            </Text>
            <Text
              c={
                "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))"
              }
              mt={4}
            >
              A Flutter UI Kit for Real Estate Application, and it is a complete
              solution for your next project.
            </Text>
            <Space h={24} />
            <Button
              radius="xl"
              color="light-dark(black, #fff)"
              variant="outline"
              size="md"
              component={Link}
              href="/flutter/koor-ui-kit"
              rightSection={<IconArrowRight />}
            >
              Buy Now
            </Button>
          </GridCol>
          <GridCol span={{ lg: 6 }}>
            <Box
              style={{
                background: "#eee",
                // height: 500,
                borderRadius: 24,
                overflow: "hidden",
              }}
            >
              <Image
                src={"/kits/flutter-docy-ui-kit.png"}
                alt="Flutter docy ui kit"
              />
            </Box>
            <Text fz={18} mt={16} fw={600}>
              Doctor Appointment Booking with AI
            </Text>
            <Text
              c={
                "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))"
              }
              mt={4}
            >
              A Flutter UI Kit for Doctor Appointment Booking with AI, and it is
              a complete solution for your next project.
            </Text>
            <Space h={24} />
            <Button
              radius="xl"
              color="light-dark(black, #fff)"
              variant="outline"
              size="md"
              component={Link}
              href="/flutter/docy-ui-kit"
              rightSection={<IconArrowRight />}
            >
              Buy Now
            </Button>
          </GridCol>
          <GridCol span={{ lg: 6 }}>
            <Box
              style={{
                background: "#eee",
                // height: 500,
                borderRadius: 24,
                overflow: "hidden",
              }}
            >
              <Image
                src={"/kits/flutter-foody-ui-kit.png"}
                alt="Flutter foody ui kit"
              />
            </Box>
            <Text fz={18} mt={16} fw={600}>
              Food Delivery App UI Kit
            </Text>
            <Text
              c={
                "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))"
              }
              mt={4}
            >
              A Flutter UI Kit for Food Delivery App, and it is a complete
              solution for your next project.
            </Text>
            <Space h={24} />
            <Button
              radius="xl"
              color="light-dark(black, #fff)"
              variant="outline"
              size="md"
              component={Link}
              href="/flutter/foody-ui-kit"
              rightSection={<IconArrowRight />}
            >
              Buy Now
            </Button>
          </GridCol>
        </Grid>
        <Space h={150} />
      </Container>
      <Box>
        <BannerAnimation images={images} speed={100000} />
      </Box>
      <Space h={150} />
      <Container size="xl" pos="relative">
        <Grid>
          <GridCol span={{ lg: 8 }}>
            <Title order={2} fz={{ lg: 65 }} fw={600}>
              Transforming ideas into elegant, functional digital solutions.
            </Title>
          </GridCol>
          <GridCol span={{ lg: 4 }}>
            <Space h={16} />
            <Text fz={18}>
              I&apos;m a Full-Stack Software Developer living in Kabul 🇦🇫, and I
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
              component={Link}
              href="/about-me"
            >
              About Me
            </Button>
          </GridCol>
        </Grid>
        <Space h={150} />
      </Container>
      <SiteFooter />
    </>
  );
}
