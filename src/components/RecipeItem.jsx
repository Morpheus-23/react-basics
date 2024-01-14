import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { WrapItem } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, clickFn }) => {
  return (
    <WrapItem>
      <Center gap={8} cursor={"pointer"} onClick={() => clickFn(recipe)}>
        <Image
          src={recipe.image}
          w={100}
          h={100}
          alt={recipe.label}
          borderRadius={"xl"}
        />
        <Text fontWeight={"450"}>{recipe.label}</Text>
      </Center>
    </WrapItem>
  );
};
