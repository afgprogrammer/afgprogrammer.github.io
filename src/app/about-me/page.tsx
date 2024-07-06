import Link from "next/link";
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
import SiteFooter from "@/_components/footer/Footer";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function AboutMe() {
  return (
    <>
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
            fz={90}
            fw={900}
            c={"light-dark(var(--mantine-color-dark-9), white)"}
          >
            <span
              style={{
                color:
                  "light-dark(var(--mantine-color-gray-5), var(--mantine-color-dark-2))",
              }}
            >
              About me,{" "}
            </span>
            my story and my experience
          </Title>
        </Box>
        <Space h={200} />
        <Grid justify="space-between" align="center">
          <GridCol span={6}>
            <Image src={"/mohammad-rahmani.jpg"} radius={50} />
          </GridCol>
          <GridCol span={5}>
            <Text fz={20}>
              As a Senior Software Developer with over 10 years of experience, I
              specialize in creating intuitive and user-centered interfaces for
              a wide range of digital products and experiences.
            </Text>
            <Space h={50} />
            <Button
              variant="default"
              component="a"
              size="xl"
              fz={16}
              radius="xl"
              href="mailto:rto1680@gmail.com"
              rightSection={<IconArrowUpRight size={22} />}
            >
              Let's Talk
            </Button>
          </GridCol>
        </Grid>
        <Space h={200} />
        <Grid>
          <GridCol span={6}>
            <Text fz={50} fw={600}>
              My past work experience
            </Text>
          </GridCol>
          <GridCol span={6}>
            <Box>
              <Group justify="space-between">
                <Stack gap={5}>
                  <Text fz={18} fw={600} lts={0.8}>
                    Software Developer
                  </Text>
                  <Text c="gray">Netlinks Ltd</Text>
                </Stack>
                <Text c="gray">2018 - 2020</Text>
              </Group>
            </Box>
            <Divider my={20} />
            <Box>
              <Group justify="space-between">
                <Stack gap={5}>
                  <Text fz={18} fw={600} lts={0.8}>
                    Senior Full-stack Software Developer
                  </Text>
                  <Text c="gray">Netlinks Ltd</Text>
                </Stack>
                <Text c="gray">2020 - 2022</Text>
              </Group>
            </Box>
            <Divider my={20} />
            <Box>
              <Group justify="space-between">
                <Stack gap={5}>
                  <Text fz={18} fw={600} lts={0.8}>
                    Content Creator
                  </Text>
                  <Text c="gray">Youtube</Text>
                </Stack>
                <Text c="gray">2019 - present</Text>
              </Group>
            </Box>
            <Divider my={20} />
            <Box>
              <Group justify="space-between">
                <Stack gap={5}>
                  <Text fz={18} fw={600} lts={0.8}>
                    Freelance Software Developer
                  </Text>
                  <Text c="gray">Afgprogrammer</Text>
                </Stack>
                <Text c="gray">2019 - present</Text>
              </Group>
            </Box>
            <Divider my={20} />
          </GridCol>
        </Grid>
      </Container>
      <Space h={150} />
      <SiteFooter />
    </>
  );
}
