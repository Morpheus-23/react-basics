import { Image, Text, Box, Badge, Flex } from "@chakra-ui/react";

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

      <Text mt="5" fontWeight="semibold" align="center">
        {recipe.label}
      </Text>

      <Box mb="3">
        {recipe.healthLabels.includes("Vegetarian") && (
          <Badge
            borderRadius="full"
            pt={1}
            px="2"
            ml="1"
            mb="1"
            colorScheme="orange"
          >
            Vegetarian
          </Badge>
        )}
        {recipe.healthLabels.includes("Vegan") && (
          <Badge
            borderRadius="full"
            pt={1}
            px="2"
            ml="1"
            mb="1"
            colorScheme="green"
          >
            Vegan
          </Badge>
        )}
      </Box>

      <Flex direction="row" justify="center" flexWrap="wrap" mb={3}>
        {recipe.dietLabels.map((dietLabel) => (
          <Badge
            key={dietLabel}
            borderRadius="full"
            pt={1}
            px="2"
            ml="1"
            mb="1"
            colorScheme="blue"
          >
            {dietLabel}
          </Badge>
        ))}
      </Flex>

      <Flex direction="row" justify="center" flexWrap="wrap" mb={3}>
        <Text>Meal :</Text>
        {recipe.mealType.map((mealType) => (
          <Text
            key={mealType}
            ml={3}
            fontWeight="semibold"
            textTransform="capitalize"
          >
            {mealType}
          </Text>
        ))}
      </Flex>

      <Flex direction="row" justify="center" flexWrap="wrap" mb={3}>
        <Text>Dish :</Text>
        {recipe.dishType.map((dishType) => (
          <Text
            key={dishType}
            ml={3}
            fontWeight="semibold"
            textTransform="capitalize"
          >
            {dishType}
          </Text>
        ))}
      </Flex>

      {recipe.cautions.length > 0 && (
        <>
          <Text color="red.700">Cautions :</Text>
          <Flex direction="row" justify="center" flexWrap="wrap" mb={3}>
            {recipe.cautions.map((cautions) => (
              <Badge
                key={cautions}
                borderRadius="full"
                pt={1}
                px="2"
                ml="1"
                mb="1"
                colorScheme="red"
              >
                {cautions}
              </Badge>
            ))}
          </Flex>
        </>
      )}
    </Box>
  );
};
