import { Center, Heading, Text } from "@chakra-ui/react";
import { Button } from "../components/ui/Button";
import { Image } from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Center flexDir="column" gap={4}>
      <Heading size="2xl" mb={8} color="blue.500">
        {recipe.label}
      </Heading>
      <Image
        src={recipe.image}
        w={300}
        h={300}
        alt={recipe.label}
        borderRadius={"xl"}
        mb="5"
      />
      <Text fontWeight={"550"}>{recipe.label}</Text>
      <Button clickFn={() => clickFn()} colorScheme="teal" mr={4}>
        Back
      </Button>
    </Center>
  );
};
