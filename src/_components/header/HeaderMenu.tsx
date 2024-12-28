"use client";

import {
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Avatar,
  Text,
  useMantineColorScheme,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconMoon, IconSun } from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import { useState } from "react";
import Link from "next/link";

const links = [
  // { link: "/explore", label: "Explore" },
  {
    link: "/flutter",
    label: "Flutter",
    // links: [
    //   { link: "/docs", label: "Documentation" },
    //   { link: "/resources", label: "Resources" },
    //   { link: "/community", label: "Community" },
    //   { link: "/blog", label: "Blog" },
    // ],
  },
  { link: "/about-me", label: "About me" },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const theme = useMantineTheme();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(
    colorScheme == "dark" ? true : false
  );

  const items = links.map((link) => {
    // const menuItems = link.links?.map((item) => (
    //   <Menu.Item key={item.link}>{item.label}</Menu.Item>
    // ));

    // if (menuItems) {
    //   return (
    //     <Menu
    //       key={link.label}
    //       trigger="hover"
    //       transitionProps={{ exitDuration: 0 }}
    //       withinPortal
    //     >
    //       <Menu.Target>
    //         <Link href={link.link} className={classes.link}>
    //           <Center>
    //             <span className={classes.linkLabel}>{link.label}</span>
    //             <IconChevronDown size="0.9rem" stroke={1.5} />
    //           </Center>
    //         </Link>
    //       </Menu.Target>
    //       <Menu.Dropdown>{menuItems}</Menu.Dropdown>
    //     </Menu>
    //   );
    // }

    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="xl">
        <div className={classes.inner}>
          <UnstyledButton component={Link} href="/" title="afgprogrammer">
            <Group gap={8}>
              <Avatar
                src={"/logo/afgprogrammer-logo.png"}
                name="Mohammad Rahmani - Afgprogrammer"
              />
              <Text fz={20} fw={600}>
                <span
                  style={{
                    color: "light-dark(var(--mantine-color-gray-6), white)",
                  }}
                >
                  afg
                </span>
                programmer
              </Text>
            </Group>
          </UnstyledButton>
          {/* <MantineLogo size={28} /> */}
          <Group>
            <Group gap={5} visibleFrom="sm">
              {items}
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="sm"
            />
            <UnstyledButton
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                toggleColorScheme();
              }}
            >
              {isDarkMode ? (
                <IconMoon strokeWidth={1.6} color={theme.colors.gray[8]} />
              ) : (
                <IconSun strokeWidth={1.6} color={theme.colors.gray[8]} />
              )}
            </UnstyledButton>
          </Group>
        </div>
      </Container>
    </header>
  );
}
