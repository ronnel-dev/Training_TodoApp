import React from 'react'
import { Flex, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useColorMode } from "@chakra-ui/color-mode";

export default function TopHeader() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <Flex w="100%">
            <Heading ml="8" size="md" fontWeight="semibold" bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' bgClip='text'>FullSpeed Technologies</Heading>
            <Spacer></Spacer>
            <IconButton icon={<FaLinkedin />} isRound='true'></IconButton>
            <IconButton ml={2} icon={<FaInstagram />} isRound='true'></IconButton>
            <IconButton ml={2} icon={<FaGithub />} isRound='true'></IconButton>
            <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>

        </Flex>
    )
}
