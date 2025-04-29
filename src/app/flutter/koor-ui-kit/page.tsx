import {
  Button,
  Container,
  Grid,
  GridCol,
  Group,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import ImageView from "./components/ImageView";

export const metadata = {
  title: "Flutter Real Estate Application UI Kit",
  description:
    "A beautiful and modern real estate application UI Kit designed with Flutter. It includes 40+ screens and 100+ components, all built with clean code and easy to use.",
  openGraph: {
    images: [
      {
        url: "/kits/flutter-koor-ui-kit.png",
        width: 1200,
        height: 630,
        alt: "Flutter Real Estate Application UI Kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/kits/flutter-koor-ui-kit.png"],
  },
};

export default function FlutterKoorPage() {
  return (
    <Container size="xl" pos="relative">
      <Space h={{ md: 100, base: 42 }} />
      <Grid>
        <GridCol span={{ lg: 4 }} pos="relative">
          <Title
            fz={{ xs: 52 }}
            fw={700}
            style={{
              wordSpacing: -1,
            }}
            c={"light-dark(var(--mantine-color-dark-9), white)"}
          >
            Flutter Real Estate Application UI Kit
          </Title>
          <Space h={20} />
          <Text
            fz={{ base: 22 }}
            c="light-dark(var(--mantine-color-gray-7), white)"
          >
            A beautiful and modern real estate application UI Kit designed with
            Flutter.
          </Text>
          <Space h={16} />
          <Group>
            <IconCheck color={"var(--mantine-color-green-5)"} />
            <Text fz={18}>40+ Screens</Text>
          </Group>
          <Space h={8} />
          <Group>
            <IconCheck color={"var(--mantine-color-green-5)"} />
            <Text fz={18}>100+ Components</Text>
          </Group>
          <Space h={8} />
          <Group>
            <IconCheck color={"var(--mantine-color-green-5)"} />
            <Text fz={18}>Clean Code</Text>
          </Group>
          <Space h={8} />
          <Group>
            <IconCheck color={"var(--mantine-color-green-5)"} />
            <Text fz={18}>Easy to Use</Text>
          </Group>
          <Space h={32} />
          <Group>
            <Button
              component={Link}
              href="https://instagram.com/theflutterlover"
              color="pink"
              radius="xl"
              size="lg"
              px={32}
              target="_blank"
            >
              Buy Now ($128)
            </Button>
            <Button
              component={Link}
              href="https://koor-ui-kit.vercel.app/"
              color="pink"
              variant="outline"
              radius="xl"
              size="lg"
              target="_blank"
            >
              Live Demo
            </Button>
          </Group>
        </GridCol>
        <ImageView />
      </Grid>
    </Container>
  );
}
