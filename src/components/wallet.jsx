import { Heading, Stack } from "@chakra-ui/react";
import Network from "./network";

const Wallet = (props) => {
  return (
    <>
      <Heading
        as="h2"
        m="2"
        p={2}
        fontSize="x-large"
        fontFamily="monospace"
        color="#401D04"
        backgroundColor="#76818C"
        borderRadius="5"
      >
        {props.type} coins
      </Heading>
      <Stack spacing="12px">
        <Network wallet={props.children}>Milkomeda Cardano Testnet</Network>
        <Network wallet={props.children}>Avalanche C-Chain Fuji Testnet</Network>
        <Network wallet={props.children}>zkSync Alpha Testnet</Network>
        <Network wallet={props.children}>Binance Smart Chain Testnet</Network>
        <Network wallet={props.children}>Moonbase Alpha Testnet</Network>
      </Stack>
    </>
  );
};

export default Wallet;
