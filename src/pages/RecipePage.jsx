import { Center, Heading } from "@chakra-ui/react";
import { Button } from "../components/ui/Button";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Center h="100vh" flexDir="column">
      <Heading size="2xl" mb={8} color="blue.500">{recipe.label}</Heading>
      <Button text="Back" clickFn={() => clickFn()} />
    </Center>
  );
};