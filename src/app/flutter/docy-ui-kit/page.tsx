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
  title: "Flutter Online Doctor Appointment Booking Application UI Kit",
  description:
    "A beautiful and modern online doctor appointment booking application UI Kit designed with Flutter. ",
  openGraph: {
    images: [
      {
        url: "/kits/flutter-docy-ui-kit.png",
        width: 1200,
        height: 630,
        alt: "Flutter Online Doctor Appointment Booking Application UI Kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/kits/flutter-docy-ui-kit.png"],
  },
};

export default function FlutterDocyPage() {
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
            Flutter Online Doctor Appointment Booking UI Kit
          </Title>
          <Space h={20} />
          <Text
            fz={{ base: 22 }}
            c="light-dark(var(--mantine-color-gray-7), white)"
          >
            A beautiful and modern online doctor appointment booking application
            UI Kit designed with Flutter.
          </Text>
          <Space h={16} />
          <Group>
            <IconCheck color={"var(--mantine-color-green-5)"} />
            <Text fz={18}>60+ Screens</Text>
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
              Buy Now ($146)
            </Button>
            <Button
              component={Link}
              href="https://docy-ui-kit.vercel.app/"
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
