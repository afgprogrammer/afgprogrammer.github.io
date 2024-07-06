import {
  Box,
  Button,
  Container,
  Divider,
  Group,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function SiteFooter() {
  return (
    <>
      <Box py={60} bg="gray.3" mt={80}>
        <Container size="lg">
          <Title order={2} fz={80} ta="center" fw={900} c="black" lh={1.2}>
            Want to create something{" "}
            <span style={{ color: "var(--mantine-color-gray-6)" }}>
              awesome?
            </span>
          </Title>
          <Group justify="center" mt={50}>
            <Button
              color="black"
              radius="xl"
              size="xl"
              rightSection={<IconArrowUpRight />}
              component="a"
              href="mailto:rto1680@gmail.com"
            >
              rto1680@gmail.com
            </Button>
          </Group>
        </Container>
      </Box>
      <footer
        style={{ background: "var(--mantine-color-dark-9)", padding: 40 }}
      >
        <Container size="xl">
          <Title order={3} fz={48} c="white">
            <span style={{ color: "var(--mantine-color-gray-6)" }}>afg</span>
            programmer.
          </Title>
          <Text c="white" fz={22}>
            A freelance software developer base in Kabul.
          </Text>
          <Space h={50} />
          <Group grow>
            <Button variant="outline" color="gray" radius="xl" c="white">
              Github
            </Button>
            <Button variant="outline" color="gray" radius="xl" c="white">
              Youtube
            </Button>
            <Button variant="outline" color="gray" radius="xl" c="white">
              Instagram
            </Button>
            <Button variant="outline" color="gray" radius="xl" c="white">
              Linked In
            </Button>
          </Group>
          <Space h={50} />
          <Text c="gray" ta="center">
            ©2024. Designed by afgprogrammer
          </Text>
        </Container>
      </footer>
    </>
  );
}
