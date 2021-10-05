import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Text, VStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

export default function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const [isNotSmallerScreen] = useMediaQuery('(mid-width:600px)');

    return (
        <VStack pt={50}>
            <Text fontSize='6xl' fontWeight='bold' color={isDark ? 'cyan.400' : 'blue.500'} >TODO App
            </Text>
            <Text fontSize='1xl' fontWeight='bold' color={isDark ? 'gray.400' : 'gray.500'} >Powered by FullSpeed Technologies.
            </Text>
            <VStack pt={10}>
                <Button colorScheme='blue' onClick={() => window.open('https://www.fullspeedtechnologies.com/')}>Learn More</Button>
            </VStack>

        </VStack>
    )
}
