"use client";

import {
  Box,
  Button,
  Card,
  CardSection,
  Container,
  Grid,
  GridCol,
  Group,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import SiteFooter from "@/_components/footer/Footer";
import { IconArrowUpRight, IconLink } from "@tabler/icons-react";
import Days from "@/data/100days.json";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "@mantine/hooks";

interface exampleType {
  name: string;
  summery: string;
  repository: string;
  video: string;
  tags: string[];
}

export default function FlutterPage() {
  const [originalData, setOriginalData] = useState<exampleType[]>(
    Days.data.reverse()
  );
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(0);
  const [perPage, setPerPage] = useState(9);
  const [examples, setExamples] = useState<exampleType[]>([]);

  useEffect(() => {
    setExamples(originalData.slice(visibleCount, perPage));
    setVisibleCount(perPage);
  }, []);

  const handleSearch = useDebouncedCallback(async (query: string) => {
    if (query.length) {
      let data = originalData.filter((day) => {
        return day.name.toLowerCase().includes(query.toLowerCase());
      });

      setExamples(data);
    } else {
      setExamples(originalData.slice(0, perPage));
    }
  }, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
    handleSearch(event.currentTarget.value);
  };

  const loadMore = () => {
    setExamples((prev) => [
      ...prev,
      ...originalData.slice(visibleCount, visibleCount + perPage),
    ]);
    setVisibleCount(visibleCount + perPage);
  };

  return (
    <>
      <Container size="xl" pos="relative">
        <Box
          px={32}
          py={58}
          mt={40}
          style={{
            overflow: "hidden",
            position: "relative",
            borderRadius: 16,
            background:
              "light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-6))",
          }}
        >
          <Title
            order={1}
            fz={36}
            fw={600}
            ta="center"
            c={"light-dark(var(--mantine-color-dark-9), white)"}
          >
            Discover the Most Trending Flutter UI Designs
          </Title>
          <Text ta="center" mt={16} c="gray">
            Search in 100+ flutter UI design examples
          </Text>
          <Space h={40} />
          <Container size="sm">
            <TextInput
              radius="xl"
              size="lg"
              fz={14}
              placeholder="Search e.g e-commerce, login, state management, day 28"
              value={search}
              onChange={handleChange}
            />
          </Container>
        </Box>
        <Space h={40} />
        <Grid>
          {examples.map((day, i) => {
            return (
              <GridCol key={`id-${i}`} span={{ lg: 4, sm: 6, xs: 12 }}>
                <Card radius="md" withBorder style={{ overflow: "hidden" }}>
                  <CardSection>
                    <Box>
                      <iframe
                        width="100%"
                        height="300"
                        src={day.video.replace("youtu.be", "youtube.com/embed")}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Box>
                  </CardSection>
                  <Text fw={600} mt={16} fz={14} c="light-dark(black, white)">
                    {day.name}
                  </Text>
                  <Text mt={8} c="gray" fz={13} truncate>
                    {day.summery}
                  </Text>

                  <Button
                    variant="light"
                    radius="xl"
                    mt={32}
                    leftSection={<IconLink size={18} />}
                    component="a"
                    href={day.repository}
                    target="_blank"
                  >
                    source code
                  </Button>
                </Card>
              </GridCol>
            );
          })}
        </Grid>
        <Space h={80} />
        {examples.length && !search.length ? (
          <Group justify="center">
            <Button
              w={200}
              size="lg"
              fz={14}
              variant="default"
              radius="xl"
              onClick={() => loadMore()}
            >
              Load More
            </Button>
          </Group>
        ) : null}
      </Container>
      <Space h={150} />
      <SiteFooter />
    </>
  );
}
