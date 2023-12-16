import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { motion } from "framer-motion";

// URL for the avatar image
const avatarSrc = "https://avatars.githubusercontent.com/u/78140726?s=400&u=4a4e32c40eed40bccb54fba2a4f8be9c0790123e&v=4";

// Footer component
const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const scaleEffect = {
    scale: 1.1, // Adjust the scale factor as needed
  };

  const tiltEffect = {
    rotate: [0, 10, -10, 0],
  };


  return (
    <Box
      bgColor="blackAlpha.900"
      color="whiteAlpha.700"
      minH="48"
      px="16"
      py={["16", "8"]}
    >
      <Stack 
        direction={["column", "row"]} 
        h="full" 
        alignItems={["center", "center"]} // Centering the main Stack horizontally
        justifyContent={["center", "space-between"]} // Aligning items horizontally
        spacing={8}
      >
        {/* About Us Section */}
        <VStack 
          w="full" 
          alignItems={["center", "center"]}
          spacing={4}
        >
          <Text fontWeight="bold" textAlign="center">About Us</Text>
          <Text
            fontSize="sm"
            letterSpacing="widest"
            textAlign="justify"
          >
            We are a team of passionate individuals dedicated to making cryptocurrency trading accessible and affordable. Our mission is to provide reliable guidance at the best value.
          </Text>
        </VStack>

        {/* Founder Section */}
        <motion.div
          whileHover={tiltEffect}
          transition={{ duration: 0.3 }}
        >
        <VStack 
          spacing={4}
          mt={["4", "0"]}
        >
          <Avatar boxSize="28" src={avatarSrc} />
          <Text fontWeight="bold">Our Founder</Text>
          <Text>Aradhya Garg</Text>
        </VStack>
        </motion.div>

        {/* Contact Section */}
        <VStack 
          w="full" 
          alignItems={["center", "center"]} // Aligning to the right on larger screens
          textAlign={["center", "right"]} // Centering the text on smaller screens
          spacing={4}
        >
          <Text fontWeight="bold">Contact Us</Text>
          <Text >Email: info@cryptotrader.com</Text>
          <Text>Phone: +1 (123) 456-7890</Text>
        </VStack>

        <VStack spacing={4} alignItems="flex-end">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={scaleEffect}
            transition={{ duration: 0.3 }}
          >
            <Text fontWeight="bold">Follow Us</Text>
          </motion.div>
          <Stack direction="row" spacing={2}>
            <motion.div
              whileHover={scaleEffect}
              transition={{ duration: 0.3 }}
            >
              <FaTwitter size={24} color="#1DA1F2" />
            </motion.div>
            <motion.div
              whileHover={scaleEffect}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin size={24} color="#0077B5" />
            </motion.div>
            <motion.div
              whileHover={scaleEffect}
              transition={{ duration: 0.3 }}
            >
              <FaFacebook size={24} color="#4267B2" />
            </motion.div>
          </Stack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
