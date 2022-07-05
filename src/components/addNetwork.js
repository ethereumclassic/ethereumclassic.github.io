import React from "react";
import "twin.macro";

import Button from "./button";

function addNetwork() {
  if (!window.ethereum) {
    alert("MetaMask not detected");
  } else {
    try {
      window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x3d",
            chainName: "Ethereum Classic",
            nativeCurrency: {
              name: "ETC",
              symbol: "ETC",
              decimals: 18,
            },
            rpcUrls: ["https://www.ethercluster.com/etc"],
            blockExplorerUrls: ["https://blockscout.com/etc/mainnet/"],
          },
        ],
      });
    } catch (e) {
      alert(e.message);
    }
  }
}

export default function AddNetworkButton() {
  return (
    <Button
      iconLeft="plus"
      onClick={(e) => {
        e.preventDefault();
        addNetwork();
      }}
    >
      Add ETC to MetaMask
    </Button>
  );
}
