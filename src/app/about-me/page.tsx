import {
  Anchor,
  Box,
  Button,
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
import Link from "next/link";

export default function AboutMe() {
  return (
    <>
      <Space h={100} />
      <Container size="xl" pos="relative">
        <Box style={{ position: "relative" }}>
          <Title
            order={1}
            fz={{ lg: 80, xs: 50 }}
            fw={900}
            ta="center"
            c={"light-dark(var(--mantine-color-dark-9), white)"}
          >
            <span
              style={{
                color:
                  "light-dark(var(--mantine-color-gray-5), var(--mantine-color-dark-2))",
              }}
            >
              About me
            </span>
            , a Software Developer living in Kabul 🇦🇫
          </Title>
        </Box>
        <Space h={100} />
        <Grid justify="space-between" align="center">
          <GridCol span={12}>
            <Image src={"/mohammad-rahmani.jpg"} radius={50} />
            {/* <Image src={"/me.png"} h={600} radius={50} /> */}
          </GridCol>
          <GridCol span={{ lg: 8 }} mx="auto" mt={50}>
            <Text fz={{ sm: 24, xs: 16 }} c="light-dark(black, white)">
              I'm <strong>Mohammad Rahmani</strong>, a seasoned programmer with
              over a decade of experience in the dynamic world of{" "}
              <strong>software development</strong>. My journey in programming
              has been both challenging and rewarding, allowing me to hone my
              skills across various programming languages and technologies.
            </Text>
            <Text fz={{ sm: 24, xs: 16 }} mt={32} c="light-dark(black, white)">
              Throughout my career, I have had the privilege to work on a
              diverse array of projects ranging from{" "}
              <strong>web applications</strong> to complex enterprise solutions.
              However, my true passion lies in{" "}
              <strong>mobile application development</strong>. Leveraging the
              power of <strong>Flutter</strong>, I have developed numerous
              applications that are not only robust and scalable but also
              provide seamless and engaging <strong>user experiences</strong>.
            </Text>
            <Text fz={{ sm: 24, xs: 16 }} mt={32} c="light-dark(black, white)">
              With a commitment to excellence and a passion for innovation, I am
              dedicated to turning <strong>ideas</strong> into reality through{" "}
              <strong>code</strong>. Whether you're looking to build a new{" "}
              <strong>application</strong> from scratch or enhance an existing
              one, I bring a wealth of knowledge and a proven track record to
              ensure your project’s <strong>success</strong>.
            </Text>
            <Text fz={{ sm: 20, xs: 16 }} mt={32} c="light-dark(black, white)">
              Thank you for visiting my page, and I look forward to the
              possibility of <strong>working together</strong>!
            </Text>
            <Space h={32} />
            <Button
              w={200}
              variant="default"
              component="a"
              size="lg"
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
          <GridCol span={{ lg: 6 }}>
            <Text fz={{ md: 62, xs: 32 }} fw={800}>
              My Past Work <br /> Experiences
            </Text>
          </GridCol>
          <GridCol span={{ lg: 6 }}>
            <Box>
              <Group justify="space-between">
                <Stack gap={5}>
                  <Text fz={18} fw={600} lts={0.8}>
                    Chief Technology Officer
                  </Text>
                  <Text
                    c="gray"
                    component={Link}
                    href="https://orhan.af"
                    target="_blank"
                  >
                    Orhan Technology
                  </Text>
                </Stack>
                <Text c="gray">2024 - Present</Text>
              </Group>
            </Box>
            <Divider my={20} />
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
