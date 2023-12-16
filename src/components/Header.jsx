import { Button, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
 // Replace with the path to your logo image

const Header = () => {
  return (
    <Flex p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} alignItems="center" justifyContent="space-between">
      {/* Logo on the left */}

      <img src={"https://cryptologos.cc/logos/ravencoin-rvn-logo.png?v=029"} alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
      
      {/* Navigation buttons in the center */}
      <HStack spacing={4}>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
    </Flex>
  );
};

export default Header;
