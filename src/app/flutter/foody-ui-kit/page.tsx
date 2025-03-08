"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  GridCol,
  Group,
  Space,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";

export default function FlutterFoodyPage() {
  const theme = useMantineTheme();

  return (
    <Container size="xl" pos="relative">
      <Space h={100} />
      <Grid>
        <GridCol span={4} pos="relative">
          <Title fz={{ lg: 62, xs: 50 }} fw={700}>
            Flutter Online Food Delivery Application <br /> UI Kit
          </Title>
          <Space h={20} />
          <Text fz={{ base: 22 }} c="gray.7">
            A beautiful and modern online food delivery application UI Kit
            designed with Flutter.
          </Text>
          <Space h={16} />
          <Group>
            <IconCheck color={theme.colors.green[5]} />
            <Text fz={18}>30+ Screens</Text>
          </Group>
          <Group>
            <IconCheck color={theme.colors.green[5]} />
            <Text fz={18}>100+ Components</Text>
          </Group>
          <Group>
            <IconCheck color={theme.colors.green[5]} />
            <Text fz={18}>Clean Code</Text>
          </Group>
          <Group>
            <IconCheck color={theme.colors.green[5]} />
            <Text fz={18}>Easy to Use</Text>
          </Group>
          <Space h={32} />
          <Group>
            <Button
              component={Link}
              href="https://instagram.com/theflutterlover"
              color="orange"
              radius="xl"
              size="lg"
              px={32}
              target="_blank"
            >
              Buy Now ($80)
            </Button>
            <Button
              component={Link}
              href="https://foody-ui-kit.vercel.app/"
              color="orange"
              variant="outline"
              radius="xl"
              size="lg"
              target="_blank"
            >
              Online Demo
            </Button>
          </Group>
        </GridCol>
        <GridCol span={8} pos="relative" h={700} style={{ overflow: "hidden" }}>
          <Box
            w={200}
            h={200}
            style={{
              right: 300,
              top: 300,
              position: "absolute",
              background:
                "linear-gradient(45deg, rgb(239, 100, 0),rgba(239, 100, 0, 0.43))",
              filter: "blur(100px)",
            }}
          ></Box>
          {/* <Box w={900}> */}
          <img
            src="/images/foody-vertical.png"
            alt="Foody UI Kit"
            style={{
              position: "relative",
              width: "100%",
              left: 120,
              top: -220,
              transform: "rotate(-10deg)",
            }}
          />
          {/* </Box> */}
        </GridCol>
      </Grid>
    </Container>
  );
}
