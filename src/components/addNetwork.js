import React, { useState } from "react";
import "twin.macro";

import Button from "./button";
import Link from "./link";
import InfoBox from "./infoBox";

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
  const [errorMessage, setErrorMessage] = useState();
  if (errorMessage === 1) {
    return (
      <Link
        secondary
        iconLeft="warning"
        button
        to="https://metamask.io/download/"
      >
        MetaMask not Installed
      </Link>
    );
  }
  if (errorMessage) {
    return <InfoBox type="inline" color="secondary" text={errorMessage} />;
  }
  return (
    <Button
      iconLeft={errorMessage ? "warning" : "plus"}
      secondary={!!errorMessage}
      onClick={(ev) => {
        ev.preventDefault();
        if (!window.ethereum) {
          setErrorMessage(1);
        } else {
          try {
            addNetwork();
          } catch (e) {
            setErrorMessage(e.message);
          }
        }
      }}
    >
      Add ETC to MetaMask
    </Button>
  );
}
