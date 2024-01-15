import { Image, Heading, Text, Flex, Box } from "@chakra-ui/react";
import { Button } from "../components/ui/Button";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Box maxW="2xl" m="0 auto">
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
      </Box>
    </Flex>
  );
};
