---
title: "Olympia Development Series — Implementing ECIP-1111 & ECIP-1112 (Part 1)"
date: 2025-12-01
author: Chris Mercer
contributors: ["chris-mercer"]
tags: ["announcement", "hardfork", "development", "education", "series"]
linkImage: ./olympia-development-series.png
excerpt: "A technical walkthrough of the two consensus components of the Olympia Upgrade — ECIP-1111 and ECIP-1112, and how they are being prepared for client implementation and testnet deployment."
---

![](./olympia-development-series.png)

Ethereum Classic Core Developers — Olympia Development Series (Part 1)

Implementing ECIP-1111 & ECIP-1112: BASEFEE Redirection & the Immutable Treasury

December 1, 2025

## I. Introduction — From Concepts to Code

Part 0 introduced Olympia at a high level: its purpose, its history, and how ECIPs 1111–1115 fit into a modular, multi-layer upgrade path. This installment steps into the engineering work underway for the **two ECIPs that define Olympia’s consensus boundary**:

- **ECIP-1111 — EVM & Protocol Upgrades**
- **ECIP-1112 — Immutable Treasury Contract**

These two proposals are the *only* components of Olympia that modify consensus behavior. Everything else in the framework — governance (ECIP-1113), funding proposals (ECIP-1114), and optional smoothing (ECIP-1115) — operates at the contract layer and does not affect block validity or fork choice.

On **11/11/2025**, Ethereum Classic core developers began the implementation phase, preparing the consensus logic and reference-client plumbing for potential Mordor testnet deployment.

- what ECIP-1111 introduces,
- how ECIP-1112 defines the Treasury destination,
- how these components fit together,
- and what is currently being prototyped within reference-client development efforts.

This article describes the proposed design and implementation work without implying future activation or acceptance under the ECIP-1000 process.

## II. ECIP-1111 — Modernized Fee Mechanics, Minimal Network Disruption

ECIP-1111 incorporates two widely used EVM improvements:

### **1. EIP-1559-style fee mechanics (BASEFEE + optional tip)**
This introduces:
- a dynamically adjusting **BASEFEE**,
- optional **priority fees (tips)** that continue going directly to miners,
- and a more predictable fee market used across modern tooling.

### **2. Type-2 (1559-style) transaction support**
This format is already standard across most wallets and infrastructure.

### **3. `BASEFEE` opcode (`0x48`)**
This exposes the current block’s BASEFEE to contract logic (e.g., for gas estimators, DEX routers, and other tooling).

### **What changes for ETC?**
Only one behavior differs from Ethereum Mainnet:

- On Ethereum: BASEFEE is **burned**.
- On Ethereum Classic: BASEFEE is **redirected to the Treasury** defined in ECIP-1112.

All other EIP-1559 semantics are implemented as originally specified.

### **What does *not* change?**
- Miner tips remain unchanged.
- Block rewards remain unchanged.
- Monetary policy (ECIP-1017) remains unchanged.
- Legacy transaction types (Type-0 and Type-1) remain fully valid.
- No contracts break; existing applications require no changes.
- No additional trust assumptions or permissioning are introduced beyond those inherent to EIP-1559 and EIP-3198.

ECIP-1111 is additive, minimal, and strictly scoped to modernizing fee mechanics and enabling BASEFEE redirection.

## III. ECIP-1112 — An Immutable, Deterministic Treasury

ECIP-1112 defines the **destination** for redirected BASEFEE amounts: a **minimal, immutable smart contract** deployed at a **deterministic address**.

### **Key properties:**

- **Immutable:**
  No upgrade keys, no administrators, no proxy patterns.

- **Deterministic address (e.g., via CREATE2 derivation parameters):**
  All clients agree on the same Treasury destination. The address is predetermined and published to ensure cross-client reproducibility.

- **Receive-only at activation:**
  The Treasury *can* accumulate value but *cannot* release it until governance is later activated.

- **No governance logic inside the contract:**
  It is strictly a custody layer, not a decision-making layer.

### **At activation (testnet or mainnet):**

- The Treasury can **only receive** funds.
- There is **no withdrawal mechanism enabled** until ECIP-1113 and ECIP-1114 are deployed, audited, and intentionally activated.

This separation keeps the consensus upgrade predictable and independent from any future governance rollout.

## IV. A Clear Consensus Boundary

Although Olympia includes five ECIPs, **only ECIP-1111 and ECIP-1112 alter consensus behavior**.

| ECIP | Layer | Consensus Change? |
|------|--------|---------------------|
| **1111** | Protocol | **Yes** — BASEFEE, Type-2, opcode |
| **1112** | Protocol/Contract | **Yes** — Treasury destination for BASEFEE |
| **1113** | Contract/App | No |
| **1114** | Contract/App | No |
| **1115** | Contract/App | No |

This modular structure ensures that:

- consensus-critical logic remains small and auditable,
- governance and funding mechanisms can evolve independently at the contract layer,
- and improvements to ECIP-1113–1115 do not require additional consensus changes.

If these ECIPs were to be adopted, clients that implement ECIP-1111 and ECIP-1112 would remain consensus-compatible whether or not governance contracts are later deployed.

## V. Why Governance Activation Occurs Later

If ECIP-1111 and ECIP-1112 were activated, BASEFEE would begin flowing into the Treasury — **but Treasury spending would remain disabled**.

This two-stage rollout allows:

- independent testing of BASEFEE accounting,
- full audits of ECIP-1113 (governance) and ECIP-1114 (funding process),
- careful coordination among client implementers and infrastructure providers,
- predictable behavior for node operators.

If governance contracts defined in ECIP-1113 and ECIP-1114 were later deployed and explicitly activated, the Treasury would be connected to its authorized executor (as defined in ECIP-1113). This connection occurs entirely at the **contract layer** — not the consensus layer.

## VI. Type-2 Transactions and Long-Term EVM Interoperability

Type-2 support is essential for ETC to remain compatible with:

- modern wallets,
- exchanges and custodians,
- RPC infrastructure,
- tooling frameworks (Hardhat, Foundry, etc.),
- block explorers,
- and cross-chain interoperability.

Type-2 transactions do **not** alter user requirements or introduce permissioning. Legacy transaction use (Type-0 and Type-1) remains fully supported and unchanged. Type-2 is an additive option for users and tooling that prefer EIP-1559-style semantics. With ECIP-1111, Ethereum Classic stays aligned with the dominant transaction formats used throughout the EVM ecosystem.

## VII. Broader Context — Maintaining a Programmable PoW Base Layer

Taken together, ECIP-1111 and ECIP-1112 provide a foundational step toward enabling Ethereum Classic to explore sustainably funded, programmable Proof-of-Work operation, should the network choose to adopt them.

They do so without:

- modifying miner incentives,
- introducing inflation,
- altering monetary policy,
- adding governance to consensus,
- or changing the security assumptions of the chain.

Their purpose is strictly to:

- modernize the fee market, and
- establish a transparent protocol-level value destination.

If adopted, these changes would provide the compatibility and infrastructure required for the contract-layer governance and funding systems proposed in later parts of Olympia, without requiring additional consensus rules.

## VIII. Conclusion — Minimal, Safe, and Forward-Compatible

ECIP-1111 and ECIP-1112 define the consensus-layer elements proposed within the Olympia framework. They:

- add Type-2 and BASEFEE mechanics,
- redirect BASEFEE to a deterministic Treasury,
- keep all existing user and miner behaviors unchanged,
- and prepare ETC for potential future contract-layer components.

They do not introduce governance-layer logic into consensus and introduce no new trust assumptions beyond those inherent to EIP-1559 and EIP-3198 as originally specified. The intent is to keep the core protocol simple, conservative, and compatible with the broader EVM ecosystem, while allowing ETC to explore new sustainability mechanisms at the contract layer.

## ECIP Procedural Clarity

The Olympia ECIPs (1111–1115) are currently in Draft status in the ECIP process and remain under active discussion. Early implementation work on ECIP-1111 and ECIP-1112 within a reference client has begun, which is permissible at the Draft stage under ECIP-1000, though not required for acceptance. In keeping with established development practices for Ethereum Classic, reference implementations will undergo testing on the Mordor Testnet prior to any consideration of mainnet activation. Upon successful reference-client testing on Mordor, the ECIP authors may propose updates to the specifications based on the results. Any consideration of moving the ECIPs toward Accepted status, or of scheduling mainnet activation parameters, would occur only after community review and ECIP-1000 evaluation. This article summarizes the proposed design and describes the implementation work underway during the Draft phase.

## Next in the Series

👉 **Olympia Development Series (Part 2): Exploring ECIP-1112 — The Immutable Treasury Contract**

💚⚒️
*Olympia ECIP Authors & Ethereum Classic Core Contributors*
