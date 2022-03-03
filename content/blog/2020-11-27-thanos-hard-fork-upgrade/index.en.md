---
title: "Thanos Hard Fork Upgrade"
date: 2020-11-27
author: Luke Williams
contributors: ["iquidus"]
tags: ["announcement", "development", "education", "teams", "hardfork"]
---

# ECIP 1099: Calibrate Epoch Duration

[https://ecips.ethereumclassic.org/ECIPs/ecip-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099) by [Luke Williams](https://github.com/iquidus)

![Thanos Hard Fork Upgrade](./ethereum-classic-thanos.jpg)

## Abstract

The purpose of this ECIP is to calibrate the epoch length used in DAG calculations.

Inspiration: [ECIP 1043: Fixed DAG limit restriction](https://ecips.ethereumclassic.org/ECIPs/ecip-1043) by [Cody Burns](mailto:cody.w.burns@gmail.com), [Wolf Spraul](mailto:wolf@linzhi.io)

## Motivation

The original intent of the DAG was to provide ASIC resistance to the mining protocol in order to prevent centralization of mining distributions and thereby provide for an objectively fair distribution of tokens. As evident by ASICs being developed that are capable of matching current GPU miners while being more energy efficient, the DAG has succeeded in leveling the playing field between GPU incumbents and ASIC challengers, avoiding ASIC takeover and domination, and leading to a competitive and large mining ecosystem. However the original parameters are proving too aggressive, resulting in obsoleting support for GPUs still in wide use today by miners.

Calibrating these parameters to better reflect todays hardware markets and mining ecosystem will bring the DAG growth back in sync with commonly used GPUs. Allowing the DAG system to continue to serve it’s purpose far into the future.

## Rationale

At current epoch (372) the DAG size is 3.91 GB. 4GB GPUs are getting obsoleted while they still make up a significant amount of ethash hashrate. Activating this change at epoch 376 (for example), would reduce the DAG size from 3.94GB to 2.47GB. With the reduced growth rate, 4GB GPUs will remain supported for an additional 3+ years.

## Implementation

A Hard fork required for activation. Mining software and pool implementations required.

For the smoothest possible transition activation should occur on a block in which an epoch transition to an even epoch number is occurring.

* Epoch 388/2 = 194 (good) = block 11_640_000
* Epoch 389/2 = 194.5 (bad) -
* Epoch 390/2 = 195 (good) = block 11_700_000
