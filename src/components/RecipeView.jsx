import { Image, Text, Box, Badge, Flex, SimpleGrid } from "@chakra-ui/react";

export const RecipeView = ({ recipe }) => {
  return (
    <Box align="center" bg={"gray.100"} borderRadius={"xl"} overflow="hidden">
      <Image src={recipe.image} w={"100%"} h={400} mb="5" />

      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }} spacing="40px">
        <Flex direction="column">
          <Box align="left">
            {recipe.mealType.map((mealType) => (
              <Text key={mealType} ml={3} textTransform="uppercase">
                {mealType}
              </Text>
            ))}
          </Box>
          <Box align="left" mb={3}>
            <Text fontSize="2xl" ml="3" fontWeight="semibold">
              {recipe.label}
            </Text>
          </Box>

          <Flex ml="3" direction="row" flexWrap="wrap" mb={3}>
            <Text pr="1">Total cooking time : {recipe.totalTime} minutes</Text>
          </Flex>

          <Flex ml="3" direction="row" flexWrap="wrap" mb={3}>
            <Text pr="1">Servings : {recipe.yield}</Text>
          </Flex>

          <Box align="left" mb={3}>
            <Text fontWeight="semibold" ml={3} pr="1">
              Ingredients :
            </Text>
            {recipe.ingredientLines.map((ingredient) => (
              <Text
                key={ingredient}
                borderRadius="full"
                pt={1}
                px="2"
                ml="1"
                mb="1"
              >
                {ingredient}
              </Text>
            ))}
          </Box>
        </Flex>

        <Flex direction="column">
          {recipe.healthLabels.length > 0 && (
            <Box align="left">
              <Text color="blue.700">Health labels :</Text>
              <Flex direction="row" flexWrap="wrap" mb={3}>
                {recipe.healthLabels.map((healthLabel) => (
                  <Badge
                    key={healthLabel}
                    borderRadius="full"
                    pt={1}
                    px="2"
                    ml="1"
                    mb="1"
                    colorScheme="blue"
                  >
                    {healthLabel}
                  </Badge>
                ))}
              </Flex>
            </Box>
          )}
          {recipe.dietLabels.length > 0 && (
            <Box align="left">
              <Text color="green.700">Diet :</Text>
              <Flex direction="row" flexWrap="wrap" mb={3}>
                {recipe.dietLabels.map((dietLabel) => (
                  <Badge
                    key={dietLabel}
                    borderRadius="full"
                    pt={1}
                    px="2"
                    ml="1"
                    mb="1"
                    colorScheme="green"
                  >
                    {dietLabel}
                  </Badge>
                ))}
              </Flex>
            </Box>
          )}
          {recipe.cautions.length > 0 && (
            <Box align="left">
              <Text color="red.700">Cautions :</Text>
              <Flex direction="row" flexWrap="wrap" mb={3}>
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
            </Box>
          )}

          <Box align="left">
            <Text mt="3" fontWeight="semibold">
              Total nutrients :
            </Text>
            <Flex direction="row" flexWrap="wrap" mb={7}>
              <Flex direction="column" pr="5" mb="3">
                <Flex direction="row" flexWrap="wrap">
                  <Text pr="1">
                    {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
                  </Text>
                  <Text>{recipe.totalNutrients.ENERC_KCAL.unit}</Text>
                </Flex>
                <Text>{recipe.totalNutrients.ENERC_KCAL.label}</Text>
              </Flex>

              <Flex direction="column" pr="5" mb="3">
                <Flex direction="row" flexWrap="wrap">
                  <Text pr="1">
                    {Math.round(recipe.totalNutrients.PROCNT.quantity)}
                  </Text>
                  <Text>{recipe.totalNutrients.PROCNT.unit}</Text>
                </Flex>
                <Text>{recipe.totalNutrients.PROCNT.label}</Text>
              </Flex>

              <Flex direction="column" pr="5" mb="3">
                <Flex direction="row" flexWrap="wrap">
                  <Text pr="1">
                    {Math.round(recipe.totalNutrients.FAT.quantity)}
                  </Text>
                  <Text>{recipe.totalNutrients.FAT.unit}</Text>
                </Flex>
                <Text>{recipe.totalNutrients.FAT.label}</Text>
              </Flex>

              <Flex direction="column" pr="5" mb="3">
                <Flex direction="row" flexWrap="wrap">
                  <Text pr="1">
                    {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
                  </Text>
                  <Text>{recipe.totalNutrients.CHOCDF.unit}</Text>
                </Flex>
                <Text>{recipe.totalNutrients.CHOCDF.label}</Text>
              </Flex>

              <Flex direction="column" pr="5" mb="3">
                <Flex direction="row" flexWrap="wrap">
                  <Text pr="1">
                    {Math.round(recipe.totalNutrients.CHOLE.quantity)}
                  </Text>
                  <Text>{recipe.totalNutrients.CHOLE.unit}</Text>
                </Flex>
                <Text>{recipe.totalNutrients.CHOLE.label}</Text>
              </Flex>

              <Flex direction="column" pr="5" mb="3">
                <Flex direction="row" flexWrap="wrap">
                  <Text pr="1">
                    {Math.round(recipe.totalNutrients.NA.quantity)}
                  </Text>
                  <Text>{recipe.totalNutrients.NA.unit}</Text>
                </Flex>
                <Text>{recipe.totalNutrients.NA.label}</Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};
