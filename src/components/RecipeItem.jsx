import { Image, Text, Box, Badge } from "@chakra-ui/react";


export const RecipeItem = ({ recipe, clickFn }) => {
  return (
    <Box
      onClick={() => clickFn(recipe)}
      align="center"
      bg={"gray.100"}
      borderRadius={"xl"}
      height="480px"
      overflow="hidden"
    >
      <Image src={recipe.image} w={"100%"} h={200} />
      <Text mt="5" fontWeight="semibold" align="center" >
        {recipe.label}
      </Text>
      <Box mb="5">
        <Badge borderRadius="full" px="2" colorScheme="orange">
          Vegetarian
        </Badge>
        <Badge borderRadius="full" px="2" colorScheme="green">
          vegan
        </Badge>
      </Box>
      <Text textTransform="uppercase">dietLabels dietLabels</Text>

      <Text textTransform="capitalize">Meal type: snack, lunch</Text>
      <Text textTransform="capitalize">dish: desserts</Text>

      <Text color="red.500" textTransform="uppercase">
        caution1 caution2 caution3 caution4 caution5
      </Text>
    </Box>
  );
};
