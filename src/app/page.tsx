import Link from "next/link";
import styles from "./page.module.css";
import {
  Box,
  Button,
  Card,
  CardSection,
  Container,
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
import { IconArrowUpRight } from "@tabler/icons-react";
import SiteFooter from "@/_components/footer/Footer";
import { BannerAnimation } from "@/_components/banner/BannerAnimation";

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
                fontSize: 90,
                fontWeight: 900,
                letterSpacing: 1,
              }}
            >
              Building digital product with emphasis on{" "}
              <span
                style={{
                  color:
                    "light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-2))",
                }}
              >
                visual design.
              </span>
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
      <Box>
        <BannerAnimation images={images} speed={100000} />
      </Box>
      <Space h={150} />
      <Container size="xl" pos="relative">
        <Box>
          <Text fz={40} fw={600}>
            Selected works
          </Text>
          <Space h={32} />
          <Grid>
            <GridCol span={6}>
              <Card withBorder shadow="sm" radius="md">
                <CardSection>
                  <Box h={400} bg={"gray.2"}></Box>
                  {/* <Image
                    src={"/product-one.png"}
                    alt="bbbbbb"
                    width={500}
                    height={300}
                  /> */}
                </CardSection>
                <Group mt={16}>
                  <Stack gap={5}>
                    <Text fw={600} fz={16}>
                      Bilify
                    </Text>
                    <Text fz={14} c={"gray"}>
                      A digital invoice template for designers{" "}
                    </Text>
                  </Stack>
                </Group>
              </Card>
            </GridCol>
          </Grid>
        </Box>
      </Container>
      <SiteFooter />
    </>
  );
}
