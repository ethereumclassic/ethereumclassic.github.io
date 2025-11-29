---
title: "Olympia Development Series — From Draft to Testnet (Part 0)"
date: 2025-11-11
author: Chris Mercer
contributors: ["chris-mercer"]
tags: ["announcement", "hardfork", "development", "Infrastructure", "series"]
linkImage: ./olympia-development-series.png
excerpt: "Ethereum Classic begins the development phase of the Olympia upgrade—its first on-chain, self-funding Proof-of-Work framework for sustainable development."
---

![](./olympia-development-series.png)

Ethereum Classic Core Developers — Olympia Development Series (Part 0)
From Draft to Testnet: The Road to the Olympia Upgrade
November 11, 2025

## Part 0: The Transition from Research to Reality

It’s fitting that this transition begins on 11/11 — a date that mirrors the number at the heart of Olympia’s foundation: ECIP-1111. On this day, often celebrated as a symbol of alignment and renewal, Ethereum Classic moves from years of research into the first phase of implementation.

After nearly a decade of debate and experimentation, Ethereum Classic enters a new phase of maturity. The Olympia upgrade suite (ECIPs 1111–1114) — discussed in various forms from 2016 through 2024 and formally proposed in 2025 — has evolved from a series of conceptual drafts into a coordinated, step-by-step implementation plan now preparing for testnet deployment.

This milestone marks the first time in Ethereum Classic’s history that the network is designed to integrate an opt-in, voluntary, protocol-native, non-inflationary funding system directly into its consensus logic. In November 2025, this suite expanded with ECIP-1115, an optional governance-layer L-curve smoothing mechanism designed to stabilize miner incentives without modifying consensus. Olympia represents the culmination of a long-standing goal: establishing a sustainable, decentralized mechanism to fund client development, public infrastructure, and ecosystem maintenance.

## Why Olympia Matters

Proof-of-Work networks face a fundamental long-term challenge: as long-term issuance schedules decrease block rewards over time, miner incentives must increasingly depend on transaction fees to maintain network security. Ethereum Classic’s fee market does not yet provide the stable, predictable incentives needed to align miners, developers, and users around lasting network security.

In the absence of such alignment, donation-based funding has remained the fallback — a model that has repeatedly proven fragile, with major development teams dissolving every few years throughout ETC’s history — often leaving community volunteers to maintain core infrastructure until new teams emerged.

Olympia introduces a framework that unites all participants — miners, developers, and ecosystem contributors — around a transparent, self-sustaining fee market, while giving the traditional donation model a clearer, more accountable path for continued support. Through the optional ECIP-1115, this fee market can also be supplemented with a governance-configurable smoothing mechanism that distributes a portion of BASEFEE-derived revenue to miners over time.

It establishes an on-chain system that reveals the baseline funding requirements necessary for Ethereum Classic to function reliably for:

- **Miners** — secure the network and rely on stable clients, predictable income streams, and liquid markets to convert rewards into operating capital.
- **Core developers** — maintain clients and tooling and rely on open, auditable funding and proposal systems to contribute effectively.
- **Donors and ecosystem sponsors** — support the network’s growth but seek a transparent, on-chain funding system that replaces costly, centralized grant models and prevents any single entity from becoming the network’s de facto maintainer.
- **Off-chain services** — provide institutional and financial infrastructure through exchanges, custodians, and TradFi integrations that depend on modern, well-maintained clients.
- **Application developers** — expand demand for blockspace and rely on a modern, actively maintained EVM that remains interoperable with upstream tooling and programmability, while depending on reliable public goods and infrastructure to deliver production-grade user experiences.
- **End users** — depend on stable, secure systems to transact efficiently, self-custody assets, and enjoy a first-class user experience.

## Beyond Funding — Aligning Incentives in Proof-of-Work

Yet Olympia goes beyond funding alone — it also addresses the economic alignment problem at the heart of Proof-of-Work itself: the long-term incentive structure that ensures miner participation and network security.

By introducing an opt-in transaction type that redirects BASEFEE revenue into a network treasury, Olympia ties the health of the fee market directly to the security of the chain.

As part of the broader Olympia framework, the optional ECIP-1115 introduces a governance-layer L-curve smoothing model that spreads a configurable portion of Treasury-held BASEFEE across a defined window of future blocks.

This model creates steadier income for miners by spreading fee rewards over several blocks and providing predictable revenue, while also channeling a portion of the BASEFEE into sustainable core development funding.

In essence, Olympia introduces a single, elegant mechanism to solve two of Proof-of-Work’s oldest challenges:

1. Securing miners’ long-term incentives
2. Ensuring continuous, decentralized development

**Shared principle:**
When on-chain activity grows, so do the incentives that sustain miners, fund development, and strengthen the network as a whole.

With the optional smoothing model, miners enjoy steady fee flows even as block rewards decline — reinforcing network security — while the same BASEFEE revenue supports client maintenance, infrastructure, and ecosystem growth. Because smoothing operates entirely at the governance layer, it can be activated, tuned, or disabled without additional protocol changes, giving ETC flexibility as fee-market dynamics evolve.

In addition, Olympia’s new transaction type preserves compatibility with modern wallet and exchange standards, ensuring Ethereum Classic remains fully integrated within the broader cryptocurrency ecosystem — from centralized exchanges to open-source browser wallets.

## The Significance of 11 / 11

Olympia Day — 11 / 11 / 2025 marks the moment Ethereum Classic core developers have begun implementation work on a reference client for the Olympia upgrade suite. Just as ECIP-1111 anchors the technical foundation of Olympia, 11/11 now anchors its timeline — signifying the transition from theory to practice, from drafts to deployment.

On this date, Ethereum Classic reaffirms its role as the programmable Proof-of-Work network built to last, aligning security, sustainability, and self-sovereignty within a single, immutable system.

## The Four Pillars of Olympia

The Olympia upgrade suite is built on four coordinated ECIPs, each addressing a specific layer of Ethereum Classic’s sustainability and governance model:

### 🔹 ECIP-1111 — BASEFEE Redirection & Modernized Fee Mechanics

The foundation of Olympia. ECIP-1111 introduces the EIP-1559 fee mechanism into Ethereum Classic while redirecting the burned BASEFEE to a protocol-level treasury. The new transaction type is opt-in, voluntary, and fully additive, with legacy transaction types (Type-0 and Type-1) continuing to function unchanged. This adaptation maintains full EVM compatibility while ensuring every transaction strengthens ETC’s sustainability instead of removing value from circulation. Additional miner-alignment mechanisms — including the optional L-curve smoothing model defined in ECIP-1115 — may build on this foundation but are not part of ECIP-1111’s consensus-layer scope.

### 🔹 ECIP-1112 — The Immutable Treasury Contract

Defines a minimal, immutable, protocol-level smart contract that receives all redirected BASEFEE revenue. This contract functions as Ethereum Classic’s first on-chain funding vault, with transparent accounting and no administrative keys. Every coin received is auditable, visible, and governed by protocol logic alone.

### 🔹 ECIP-1113 — The Olympia DAO Governance Framework

Establishes the Olympia DAO, a modular governance framework to manage treasury disbursements through on-chain voting, quorum thresholds, and time-locked execution. It introduces the Olympia Improvement Proposal (OIP) process — a structured way to evolve governance, deploy new child-DAO pipelines, or modify parameters without new hard forks.

### 🔹 ECIP-1114 — The Funding Proposal and Disbursement System

Defines the Ethereum Classic Funding Proposal (ECFP) standard — the interface between contributors and the treasury. Any developer, researcher, or organization can submit a proposal with milestones, budgets, and on-chain progress tracking. Approved proposals are executed automatically through the DAO, ensuring transparent, auditable, and milestone-based disbursements that remove the friction and opacity of manual grant programs.

### 🔹 ECIP-1115 — Optional L-Curve Smoothing (Governance-Layer Miner Incentives)

Defines a governance-layer mechanism that allocates a configurable share of Treasury-held BASEFEE to miners as a long-term security budget. ECIP-1115 introduces no consensus changes and complements ECIP-1111 by smoothing Treasury-based miner rewards across a predictable window. Activation and parameter tuning occur entirely through the Olympia DAO via the OIP process.

🔁 **Together, these four ECIPs form a closed-loop system:**

- Revenue generation through network activity
- Secure custody of funds
- Decentralized governance via Olympia DAO
- Transparent funding of public goods

Once adopted and implemented, this architecture transforms Ethereum Classic from a donor-dependent network into a self-funding, self-governing public utility — powered by on-chain activity and aligned incentives. Of these ECIPs, only ECIP-1111 and ECIP-1112 modify consensus rules. ECIP-1113, ECIP-1114, and ECIP-1115 operate entirely at the contract layer and require no hard fork.  

*(ECIP-1115 extends this loop by optionally smoothing miner incentives at the governance layer, without altering the consensus-level foundation.)*

## Pioneering PoW: A First Among Proof-of-Work Networks

While most PoW chains rely on centralized foundations or off-chain grants, Ethereum Classic can now finance its own evolution through protocol logic. Olympia demonstrates what only a smart-contract-capable Proof-of-Work network can achieve — a sustainable economic loop that rewards security, development, and utility, without inflation or trusted intermediaries.

It preserves the values that defined ETC in 2016 — immutability, Proof-of-Work, and credible neutrality — while finally addressing the long-standing challenges of decentralized, durable funding and long-term network security.

With ECIP-1115, ETC can optionally extend this sustainability loop into miner incentives themselves, providing a mechanism for predictable, non-inflationary security budgeting.

## The Road Ahead

This series, **Olympia Development Series**, will chronicle the transition from concept to code.

Over the coming months, we’ll explore:

- The engineering of the ECIP-1111 BASEFEE redirection logic
- The design and audit of the ECIP-1112 Treasury Contract
- The structure and deployment of the ECIP-1113 DAO Framework
- The workflow and transparency of the ECIP-1114 Funding Process
- The optional ECIP-1115 smoothing mechanism and how governance can configure long-term miner-reward curves without modifying consensus.

Together, these explorations document how Olympia moves from draft to deployed code — outlining the technical path that could lead to acceptance and eventual mainnet activation, reflecting growing community engagement and ongoing review.

Each installment will take readers deeper into the contracts, logic, and governance systems now moving toward Ethereum Classic’s Mordor testnet — showing how Olympia is being prototyped and tested in preparation for potential adoption, with an emphasis on auditability, adaptability, and long-term decentralization.

### ECIP Procedural Clarity

The Olympia ECIPs (1111–1115) are currently in Draft status in the ECIP process and remain under active discussion. Early implementation work on ECIP-1111 and ECIP-1112 within a reference client has begun, which is permissible at the Draft stage under ECIP-1000, though not required for acceptance. In keeping with established development practices for Ethereum Classic, reference implementations will undergo testing on the Mordor Testnet prior to any consideration of mainnet activation. Upon successful reference-client testing on Mordor, the ECIP authors may propose updates to the specifications based on the results. Any consideration of moving the ECIPs toward Accepted status, or of scheduling mainnet activation parameters, would occur only after community review and ECIP-1000 evaluation. This article describes the Olympia ECIP proposed design and the potential impact these changes could have should the network eventually adopt and activate the Olympia Upgrade.

## A Bright Future: The Olympia Implementation Era Begins

Olympia Day — 11 / 11 / 2025 marks the moment Ethereum Classic core developers began implementation work on a reference client for the Olympia upgrade suite. Olympia is not a single hard fork; it’s the start of a living framework where on-chain activity directly powers network longevity.

For miners, developers, ecosystem sponsors, and long-time community members alike, this marks a return to Ethereum Classic’s founding ethos:

> *"A credibly neutral, self-sustaining Proof-of-Work network built to last — secured by miners, maintained by builders, supported by institutions, and enforced by code."*

## Next in the Series

The next installment begins with the implementation of ECIP-1111 and ECIP-1112, the only consensus changes in the Olympia Upgrade.

👉 **Olympia Development Series (Part 1): Implementing ECIP-1111 & ECIP-1112 — BASEFEE Redirection & the Immutable Treasury**

💚⚒️  
*Olympia ECIP Authors & Ethereum Classic Core Contributors*