import { VStack } from '@chakra-ui/layout'
import React from 'react'
import Header from './Header'
import ToDo from './ToDo'

export default function TodoApp() {
    return (
        <VStack p={5}>
            <Header />
            <ToDo />
        </VStack>
    )
}
