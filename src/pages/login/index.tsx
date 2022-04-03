import { NextPage } from 'next';
import Head from 'next/head';
import {
  VStack, Button, Text, Input, FormControl, FormLabel
} from '@chakra-ui/react';
import { FC, useState } from 'react';

const Body: FC = () => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  return (
    <VStack h="100vh" justifyContent="center">
      <VStack p="20px" borderRadius="10px" w="360px" spacing="4" bg="whiteAlpha.100" shadow="0px 4px 4px rgba(0, 0, 0, 0.16), 0px 0px 4px rgba(0, 0, 0, 0.16)">
        <Text as='h2' pb="20px">ログイン</Text>
        <FormControl>
          <FormLabel htmlFor='email'>メールアドレス</FormLabel>
          <Input
            id='email'
            type='email'
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='password'>パスワード</FormLabel>
          <Input
            id='password'
            type='password'
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme='blue'>ログイン</Button>
      </VStack>
    </VStack>
  );
};

const Index: NextPage<void> = () => (
  <div>
    <Head>
      <title>ログイン</title>
    </Head>
    <Body />
  </div>
);

export default Index;
