import React from "react";
import Link from "./link";

export default function AddNetworkButton() {
  return (
    <Link iconLeft="link" button to="https://chainlist.org/en/chain/61">
      Add ETC to MetaMask
    </Link>
  );
}
