import { Button } from '@chakra-ui/button';
import { DeleteIcon } from '@chakra-ui/icons';
import { Stack, VStack, Heading, Container } from '@chakra-ui/layout';
import React from 'react'
import FormTodo from './FormTodo';
import TodoList from './TodoList';
import { useToast } from '@chakra-ui/react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from "@chakra-ui/react"

export default function ToDo() {
    const [todos, setTodos] = React.useState([
        {
            text: "This is a sampe todo",
            isDone: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const toast = useToast();

    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        toast({
            title: "Job well done! ",
            description: newTodos[index].text + " - has been completed.",
            status: "success",
            duration: 3000,
            isClosable: true,
        })
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()

    const clearList = () => {
        setTodos([]);
        onClose();
    }

    return (
        <Container>
            <Stack>
                <VStack>
                    <FormTodo addTodo={addTodo} />
                </VStack>
                {todos.length > 0 &&

                    (<VStack pt={5}>
                        <Heading as="h4" size="md">
                            Todo List
                        </Heading>
                    </VStack>)
                }

                {todos.map((todo, index) => (
                    <TodoList
                        key={index}
                        index={index}
                        todo={todo}
                        markTodo={markTodo}
                        removeTodo={removeTodo}
                    />
                ))}
                {todos.length > 1 && (
                    <Stack pt={10}>
                        <Button type="submit" leftIcon={<DeleteIcon />} colorScheme="red" variant="solid" onClick={() => setIsOpen(true)}>
                            Clear List
                        </Button>
                        <AlertDialog
                            isOpen={isOpen}
                            leastDestructiveRef={cancelRef}
                            onClose={onClose}
                        >
                            <AlertDialogOverlay>
                                <AlertDialogContent>
                                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                        Remove All Items in the List
                                    </AlertDialogHeader>

                                    <AlertDialogBody>
                                        Are you sure? You can't undo this action afterwards.
                                    </AlertDialogBody>

                                    <AlertDialogFooter>
                                        <Button ref={cancelRef} onClick={onClose}>
                                            Cancel
                                        </Button>
                                        <Button colorScheme="red" onClick={clearList} ml={3}>
                                            Clear List
                                        </Button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialogOverlay>
                        </AlertDialog>
                    </Stack>
                )}


            </Stack>
        </Container>

    );
}
