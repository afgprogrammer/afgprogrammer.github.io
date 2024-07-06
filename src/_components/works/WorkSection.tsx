import { Box, Button, Divider, Group, Space, Stack, Text } from "@mantine/core";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";

export default function WorkSection() {
  return (
    <Box>
      <Group justify="space-between">
        <Text fz={40} fw={600}>
          Selected works
        </Text>
        <Button
          variant="default"
          // color="black"
          size="lg"
          radius="xl"
          rightSection={<IconArrowRight />}
          fz={16}
          autoContrast
        >
          View All Works
        </Button>
      </Group>
      <Divider my={32} />
      <Stack>
        <Group>
          <Box
            h={200}
            bg={"gray.2"}
            style={{ borderRadius: 10, overflow: "hidden" }}
          >
            <img
              alt="fff"
              src={"/banner/one.png"}
              style={{ width: "100%", objectFit: "cover", height: 200 }}
            />
          </Box>
          <Stack gap={8} justify="space-between">
            <Text fz={26} fw={600}>
              Flutter E-commerce App UI Kit
            </Text>
            <Text>Flutter e-commerce application ui kit</Text>
            <Space h={32} />
            <Button
              w={240}
              variant="default"
              size="lg"
              fz={16}
              radius="xl"
              rightSection={<IconDownload size={18} />}
            >
              Free Download
            </Button>
          </Stack>
        </Group>
      </Stack>
      {/* <Grid>
        <GridCol span={4}>
          <Card withBorder shadow="sm" radius="md">
            <CardSection>
              <Box h={300} bg={"gray.2"}>
                <img
                  alt="fff"
                  src={"/works/e-commerce-app.png"}
                  style={{ width: "100%", objectFit: "cover", height: 300 }}
                />
              </Box>
            </CardSection>
            <Group mt={16}>
              <Stack gap={5}>
                <Text fw={600} fz={16}>
                  E-commerce
                </Text>
                <Text fz={14} c={"gray"}>
                  a flutter e-commerce application{" "}
                </Text>
              </Stack>
              <Button variant="default"></Button>
            </Group>
          </Card>
        </GridCol>
      </Grid> */}
    </Box>
  );
}
