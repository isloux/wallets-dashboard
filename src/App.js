import { Heading, HStack } from "@chakra-ui/react";
import Wallet from "./components/wallet";

export default function App() {
  return (
    <div>
      <Heading
        as="h1"
        m="2"
        p={3}
        align="center"
        fontSize="xxx-large"
        fontFamily="monospace"
        color="saddlebrown"
        backgroundColor="#14828C"
        borderRadius="5"
      >
        Wallets balances
      </Heading>
      <HStack align="stretch">
        <Wallet type={"Clean"}>
          0x914Cf4c90dBe84c17a845e4C689930599ca51437
        </Wallet>
        <Wallet type={"Dirty"}>
          0x76F730FC2DAFB3e219C11aa9407cD1F740008735
        </Wallet>
      </HStack>
    </div>
  );
}
