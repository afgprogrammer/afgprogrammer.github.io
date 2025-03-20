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
  title: "Flutter Online Food Delivery Application UI Kit",
  description:
    "A beautiful and modern online food delivery application UI Kit designed with Flutter. Featuring 40+ screens, 100+ components, clean code, and ease of use.",
};

export default function FlutterFoodyPage() {
  return (
    <Container size="xl" pos="relative">
      <Space h={{ md: 100, base: 42 }} />
      <Grid>
        <GridCol span={{ lg: 4 }} pos="relative">
          <Title
            fz={{ lg: 62, xs: 50 }}
            fw={700}
            c={"light-dark(var(--mantine-color-dark-9), white)"}
          >
            Flutter Online Food Delivery Application <br /> UI Kit
          </Title>
          <Space h={20} />
          <Text
            fz={{ base: 22 }}
            c="light-dark(var(--mantine-color-gray-7), white)"
          >
            A beautiful and modern online food delivery application UI Kit
            designed with Flutter.
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
              Live Demo
            </Button>
          </Group>
        </GridCol>
        <ImageView />
      </Grid>
    </Container>
  );
}
