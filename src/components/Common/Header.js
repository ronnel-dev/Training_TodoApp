import { useColorMode } from '@chakra-ui/color-mode'
import { Text, VStack } from '@chakra-ui/layout';
import React from 'react';

export default function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const path = window.location.pathname;

    return (
        <VStack pt={50}>
            <Text fontSize='3xl' fontWeight='bold' color={isDark ? 'cyan.400' : 'blue.500'} >{(path === '/todo-app' && 'Todo') || 'Tictactoe'}
            </Text>

        </VStack>
    )
}
