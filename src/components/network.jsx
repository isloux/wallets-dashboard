import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Web3 from "web3";

const Network = (props) => {
  const [balance, setBalance] = useState(0);
  const [provider, setProvider] = useState(null);
  const [coin, setCoin] = useState(null);

  const getProvider = () => {
    const chains = new Map();
    chains.set(43113, "Avalanche C-Chain Fuji Testnet");
    chains.set(200101, "Milkomeda Cardano Testnet");
    const providers = new Map();
    providers.set(
      "Milkomeda Cardano Testnet",
      "https://rpc-devnet-cardano-evm.c1.milkomeda.com"
    );
    providers.set(
      "Avalanche C-Chain Fuji Testnet",
      "https://rpc.ankr.com/avalanche_fuji"
    );
    providers.set(
      "zkSync Alpha Testnet",
      "https://zksync2-testnet.zksync.dev"
    );
    providers.set(
      "Binance Smart Chain Testnet",
      "https://data-seed-prebsc-1-s1.binance.org:8545"
    ),
    providers.set(
      "Moonbase Alpha Testnet",
      "https://rpc.api.moonbase.moonbeam.network"
    );
    const coins = new Map();
    coins.set("Milkomeda Cardano Testnet", "MILKTADA");
    coins.set("Avalanche C-Chain Fuji Testnet", "AVAX");
    coins.set("zkSync Alpha Testnet", "ETH");
    coins.set("Binance Smart Chain Testnet", "BNB");
    coins.set("Moonbase Alpha Testnet", "GLMR");
    setProvider(providers.get(props.children));
    setCoin(coins.get(props.children));
  };

  useEffect(() => {
    getProvider();
  }, []);

  useEffect(() => {
    getBalance();
  }, [provider]);

  const getBalance = async () => {
    console.log(props.wallet);
    const web3 = new Web3(provider);
    const balance = await web3.eth.getBalance(props.wallet);
    setBalance(balance * 1e-18);
  };

  return (
    <Box>
      <Box
        as="h3"
        mt="1"
        ml="2"
        mr="2"
        mb="1"
        p={1}
        backgroundColor="#718C22"
        color="gray.100"
      >
        {props.children}
      </Box>
      <Box
        as="code"
        ml="2"
        mr="2"
        p={1}
        backgroundColor="#F2CD83"
        color="gray.800"
      >
        {balance}&nbsp;{coin}
      </Box>
    </Box>
  );
};

export default Network;
