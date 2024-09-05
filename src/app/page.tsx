"use client";
import { Center, Container, Space, Text, Title } from "@mantine/core";
import Footer from "@components/Footer";
import { MantineProvider } from '@mantine/core';
import { Textarea } from '@mantine/core';
import { Button,Pagination } from "@mantine/core";
import { Divider } from "@mantine/core";
import { Group } from "@mantine/core";

import { Rating } from "@mantine/core";

export default function Home() {
  return (
    
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Space h="sm"/>
      <Title  order={4}>Your rating</Title>
      <Rating  defaultValue={5} size="28"  />
      <Space h="sm"/>
      <Text  size="sm">Your review</Text>

      <Textarea
      size="lg"
      
      
      placeholder="Do you enjoy eating?"
    />
    <Space h="sm"/>
    <Button  variant="filled" color="orange" size="sm">Submit Review</Button>
    <Divider my="sm" />
    <Group  gap="xs" justify="center">
      <Title order={4}  >Elon Musk</Title>
      <Rating defaultValue={5.0}  readOnly />
      
    </Group>
    <Text ta="center">Best pizza in this world. I give you X score.</Text>
    <Divider my="sm" />
    <Group  gap="xs" justify="center">
      <Title order={4}  >Mark Zuck</Title>
      <Rating defaultValue={4.0}  readOnly />
      
    </Group>
    <Text ta="center">My favourite part is pepperoni</Text>
    <Space h="sm"/>
    <Group justify="center">
    <Pagination  total={20} color="orange" />
    
    </Group>
      <Text ta="center" my="sm">
      <Footer
            year="2024"
            fullName="Punnatat Ngirnngam"
            studentId="660610775"
          />
      </Text>
    </Container>
  );
}
