import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Dimas Neto</Text>
                    <Text color="gray.300" fontSize="small">
                        dimas_fcn@outlook.com
                    </Text>
                </Box>
            )}
            
            <Avatar size="md" name="Dimas Neto" src="https://github.com/dimasneto7.png"/>
        </Flex>
    );
}