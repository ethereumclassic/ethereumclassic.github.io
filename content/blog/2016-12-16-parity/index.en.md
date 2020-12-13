---
title: "How To EASILY Set Up An AMAZING Ethereum Classic Node & Talk To It With Your OWN Code"
date: 2016-12-16
author: Christian Seberino
tags: ["guide", "development", "education"]
---

## Introduction

![ETC logo](./3315e07195.png)

You can easily get your own Ethereum Classic network node up and running with the phenomenal Parity implementation.  The Parity project is managed by Gavin Wood, the author of the Ethereum specification (yellow paper), and his company Ethcore.

## Setup

![Ethcore logo](./38720b3cb7.png)

The first step is to download and install the latest Parity package for your system after confirming its integrity by checking its hash.  After Parity is installed, the only remaining step to set up a node is to run the following command:

```
parity --chain classic
```

The set up should take a several hours to download a copy the Ethereum Classic blockchain.  It will use about seven gigabytes of storage.  Parity is able to survive interuptions such as power outtages.  Just restart Parity in the event of an interruption and all should be fine.  It is amazing that with these few steps one can easily add an Ethereum Classic node to the network and join the revolution!

## Communication

![comms](./30432cbb89.jpg)

Parity nodes have a local web interface one can access by default at http://127.0.0.1:8180.  There are other powerful user friendly tools it will be beneficial to investigate such as the Web3 library.  Parity nodes communicate using JavaScript Object Notation (JSON).  For educational purposes, I will show examples of sending and receiving JSON commands using only the following simple Python script:

```
#!/usr/bin/env python3

"""
Sends commands and receives output from Ethereum Classic Parity nodes.
Ethereum Classic Parity nodes listen for POST requests.

Usage: node_cmd <command> [<parameter>]...
"""

import urllib.request
import json
import sys

NODE_URL = "http://127.0.0.1:8545"

node_data = {"method"  : sys.argv[1],
             "params"  : sys.argv[2:],
             "jsonrpc" : "2.0",
             "id"      : 1}
node_data = json.dumps(node_data).encode()
node_post = urllib.request.Request(NODE_URL)
node_post.add_header("Content-Type", "application/json")
node_post = urllib.request.urlopen(node_post, node_data).read().decode()
print(json.loads(node_post)["result"])
```

Save the code above in a file called node_cmd and make it executable.  By running this program, and adding various command line parameters, one can get much information from a node.  For example, one can see if a node is syncing with the following command:

```
node_cmd eth_syncing
```

One can see the software version of a Parity node with the following command:

```
node_cmd web3_clientVersion
```

The following command will display how many other nodes a node is connected to:

```
node_cmd net_peerCount
```

This command will display the number of the latest block on the blockchain:

```
node_cmd eth_blockNumber
```

These commands will display information about any block by its number or hash:

```
node_cmd eth_getBlockByNumber                 <block number> true
node_cmd eth_getBlockByHash                   <block hash>   true
node_cmd eth_getBlockTransactionCountByNumber <block number>
node_cmd eth_getBlockTransactionCountByHash   <block hash>
node_cmd eth_getUncleCountByBlockNumber       <block number>
node_cmd eth_getUncleCountByBlockHash         <block hash>
```

These commands will display information about any transaction by its hash or index in a block:

```
node_cmd eth_getTransactionByHash                               <transaction hash>
node_cmd eth_getTransactionByBlockNumberAndIndex <block number> <transaction index>
node_cmd eth_getTransactionByBlockHashAndIndex   <block hash>   <transaction index>
node_cmd eth_getTransactionReceipt                              <transaction hash>
```

These commands will display information about any uncle by its index in a block:

```
node_cmd eth_getUncleByBlockNumberAndIndex <block number> <uncle index>
node_cmd eth_getUncleByBlockHashAndIndex   <block hash>   <uncle index>
```

This command will display the total number of transactions sent from any account by its address:

```
node_cmd eth_getTransactionCount <address>
```

This command will display the Ethereum Classic virtual machine code of any contract by its address:

```
node_cmd eth_getCode <address>
```

Here is a slightly edited actual session with an Ethereum Classic Parity node running on a Linux computer:

```
% ADDRESS_1="0x909d0ce98b57098f838cd44572923c03767bcb9d"

% ADDRESS_2="0xaa1a6e3e6ef20068f7f8d8c835d2d22fd5116444"

% BLOCK_HASH_1="0x8c05d36b8318c2b427463066f44aa7d5728d4add86199eca9932998300fafd4d"

% BLOCK_HASH_2="0x461336bad4949d91e253631a8f5df8412d258b59da9715ff638922f3c67353f8"

% TRANS_HASH="0x67230ea92ee04df0ae72e2afb1e028d0b5d85062a3b1686b41b2260702df2da6"

% node_cmd eth_syncing
False

% node_cmd web3_clientVersion
Parity//v1.4.6-beta-5feccf1-20161205/x86_64-linux-gnu/rustc1.13.0

% node_cmd net_peerCount
0x13

% node_cmd eth_blockNumber
0x2b22e2

% node_cmd eth_getBlockByNumber 2802861 true
{'transactions': [{'r': '0xded5f39c86c785eb07afdeb69d927a8f29f0fe38e375ab9be2628ce92bcc2670', 'gas': '0xea60', 'input': '0x0f2c9329000000000000000000000000303e33b483b5df3148cb2eaa1c17c486531ddf31000000000000000000000000e5e8eb396ad2b45b1382f25de57a5dd7717355bf', 'raw': '0xf8b38201e78504a817c80082ea6094aa1a6e3e6ef20068f7f8d8c835d2d22fd5116444880e07b6976371408cb8440f2c9329000000000000000000000000303e33b483b5df3148cb2eaa1c17c486531ddf31000000000000000000000000e5e8eb396ad2b45b1382f25de57a5dd7717355bf1ca0ded5f39c86c785eb07afdeb69d927a8f29f0fe38e375ab9be2628ce92bcc2670a06bfce026dd9e4e1c6cb8f387cb5a093c76113f12b4a4654a88db6a74ac0397dd', 's': '0x6bfce026dd9e4e1c6cb8f387cb5a093c76113f12b4a4654a88db6a74ac0397dd', 'to': '0xaa1a6e3e6ef20068f7f8d8c835d2d22fd5116444', 'gasPrice': '0x4a817c800', 'publicKey': '0xe1bee2bba2c1d043b97583d806b02dce272d5ffdcceb0bc30cb7ce786941577344f88df5ed1780bc8a0a70189c9752c2d5f5b9d675c532b6ecc523e45855eb3c', 'blockNumber': '0x2ac4ad', 'v': 1, 'transactionIndex': '0x0', 'hash': '0x261bb946d1b754647ef3cd7c1d716a1221c1ebc7b41d6d02c7351027a2adf578', 'value': '0xe07b6976371408c', 'blockHash': '0x8c05d36b8318c2b427463066f44aa7d5728d4add86199eca9932998300fafd4d', 'creates': None, 'nonce': '0x1e7', 'from': '0x316beea353fe6fc5577dc4e4bb1a17bd335fec7b'}, {'r': '0xb62126ba0bccb75d192f623c77942df3c92b219dc40dfc6fca03c0f72c1797c6', 'gas': '0x15f90', 'input': '0x', 'raw': '0xf86f82f7f38504a817c80083015f9094317d12b8196e4297ca6b9330a2d33eb780142ac1883563b68e88b96c00801ca0b62126ba0bccb75d192f623c77942df3c92b219dc40dfc6fca03c0f72c1797c6a07ea95de52e2e159a435c20cad5986265961d8f78888f32a11d6d3e3fab75a285', 's': '0x7ea95de52e2e159a435c20cad5986265961d8f78888f32a11d6d3e3fab75a285', 'to': '0x317d12b8196e4297ca6b9330a2d33eb780142ac1', 'gasPrice': '0x4a817c800', 'publicKey': '0x639fb5a901ad2760c274656da73db4b9d34577aa59d2dff8c41311b899ce1064ca5aca13eb2cc7a497d899e48baa5aec4d117ae0faeafd40eb26029e45027087', 'blockNumber': '0x2ac4ad', 'v': 1, 'transactionIndex': '0x1', 'hash': '0x34dc8779c575d583607095caa20086013c90afa892121c8a39fab7468c31a213', 'value': '0x3563b68e88b96c00', 'blockHash': '0x8c05d36b8318c2b427463066f44aa7d5728d4add86199eca9932998300fafd4d', 'creates': None, 'nonce': '0xf7f3', 'from': '0x026d9acb43f44b258ebcfae786f32ae8376f6f00'}, {'r': '0xd3182a517fdc6cd426f59ec0e154e75933ef18049ad0ebea426c508be4cb7fc4', 'gas': '0xe57e0', 'input': '0x', 'raw': '0xf86e81ff8504a817c800830e57e094c7c0715fe4e65a4fd57b69d664f2e9d2db65f2e2887b7bcea797ab6800801ba0d3182a517fdc6cd426f59ec0e154e75933ef18049ad0ebea426c508be4cb7fc4a0101e1182ab072e6811840142cc4df202e2af18d6eeb176347c22be3727a275ba', 's': '0x101e1182ab072e6811840142cc4df202e2af18d6eeb176347c22be3727a275ba', 'to': '0xc7c0715fe4e65a4fd57b69d664f2e9d2db65f2e2', 'gasPrice': '0x4a817c800', 'publicKey': '0xea33d0a5f1cafe239c7ee0a96c9539f610460aedb63c947af7c613430ddc5748376fa0a0f144ad01f06a96e093217d5cef9fe8aaa9aebf829ebaa1c8846222cb', 'blockNumber': '0x2ac4ad', 'v': 0, 'transactionIndex': '0x2', 'hash': '0x63f3795d498065f53e8977fa8f88b260fd32a04306b07a1da7f3f90b23cec527', 'value': '0x7b7bcea797ab6800', 'blockHash': '0x8c05d36b8318c2b427463066f44aa7d5728d4add86199eca9932998300fafd4d', 'creates': None, 'nonce': '0xff', 'from': '0x46d02991cbe38627cadefc38c4e7cdcef6f587e0'}, {'r': '0x4cbbe734b8f3e13ceecea4a971fe736993cd61f040edbf370518555d72c59902', 'gas': '0x2127b', 'input': '0x0f2c9329000000000000000000000000fbb1b73c4f0bda4f67dca266ce6ef42f520fbb98000000000000000000000000e592b0d8baa2cb677034389b76a71b0d1823e0d1', 'raw': '0xf8b2648504a817c8008302127b94e94b04a0fed112f3664e45adb2b8915693dd5ff3880deb51c9fd4c9c00b8440f2c9329000000000000000000000000fbb1b73c4f0bda4f67dca266ce6ef42f520fbb98000000000000000000000000e592b0d8baa2cb677034389b76a71b0d1823e0d11ca04cbbe734b8f3e13ceecea4a971fe736993cd61f040edbf370518555d72c59902a00d77f0320a19381d16add6315fcbaa7f5159d481dcaa31c27ca6a99f760162a3', 's': '0x0d77f0320a19381d16add6315fcbaa7f5159d481dcaa31c27ca6a99f760162a3', 'to': '0xe94b04a0fed112f3664e45adb2b8915693dd5ff3', 'gasPrice': '0x4a817c800', 'publicKey': '0xb1fa35f600c2a704d4165ae1b3732cb488929cd4255f4076adb67bf70d89ed850dcf6c42bbf9a324bb61fc4d1811433045e1d0f64be66c6e397ddb0c51d05e92', 'blockNumber': '0x2ac4ad', 'v': 1, 'transactionIndex': '0x3', 'hash': '0xbc5a6ddc7b1c860e46449d4b82448aa24c6d3875dec8d0c0592fde9a1c8b46aa', 'value': '0xdeb51c9fd4c9c00', 'blockHash': '0x8c05d36b8318c2b427463066f44aa7d5728d4add86199eca9932998300fafd4d', 'creates': None, 'nonce': '0x64', 'from': '0x909d0ce98b57098f838cd44572923c03767bcb9d'}], 'extraData': '0xd5830104048650617269747986312e31332e30826c69', 'parentHash': '0xa3528cfd890ab9d8c4e85958dd181a23d626bc76eb8e8fd163048bacb7b4e78e', 'timestamp': '0x584f6c98', 'gasLimit': '0x471732', 'logsBloom': '0x00000000040000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000', 'receiptsRoot': '0x0998b999638eb1498a988737fb0a45cc3b2b4f0eedb885334d7b14e20e8a088d', 'hash': '0x8c05d36b8318c2b427463066f44aa7d5728d4add86199eca9932998300fafd4d', 'number': '0x2ac4ad', 'nonce': '0x3bc26ce8002735b0', 'sealFields': ['0x49eb99ab6e75aa80f916e7e2ca543225034741de2ae07d91cbd98cd6ea000c5c', '0x3bc26ce8002735b0'], 'transactionsRoot': '0xc7c0706e40dbd13103f58f936fdeaac4036b32aee1e5157cad448246222a26b4', 'mixHash': '0x49eb99ab6e75aa80f916e7e2ca543225034741de2ae07d91cbd98cd6ea000c5c', 'size': '0x46a', 'uncles': [], 'totalDifficulty': '0x280d0b040fa7d2b5a', 'sha3Uncles': '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347', 'gasUsed': '0x1b785', 'stateRoot': '0xfdfe1a40ff1f2d9723469ca75b0fb0ba538e65f83615f185259449b655b743c9', 'author': '0xdf7d7e053933b5cc24372f878c90e62dadad5d42', 'difficulty': '0x8490056bbc1', 'miner': '0xdf7d7e053933b5cc24372f878c90e62dadad5d42'}

% node_cmd eth_getBlockByHash $BLOCK_HASH_1 true
{'timestamp': '0x584f6c98', 'receiptsRoot': '0x0998b999638eb1498a988737fb0a45cc3b2b4f0eedb885334d7b14e20e8a088d', 'mixHash': '0x49eb99ab6e75aa80f916e7e2ca543225034741de2ae07d91cbd98cd6ea000c5c', 'transactions': [{'gas': '0xea60', 's': '0x6bfce026dd9e4e1c6cb8f387cb5a093c76113f12b4a4654a88db6a74ac0397dd', 'to': '0xaa1a6e3e6ef20068f7f8d8c835d2d22fd5116444', 'value': '0xe07b6976371408c', 'gasPrice': '0x4a817c800', 'from': '0x316beea353fe6fc5577dc4e4bb1a17bd335fec7b', 'v': 1, 'r': '0xded5f39c86c785eb07afdeb69d927a8f29f0fe38e375ab9be2628ce92bcc2670', 'creates': None, 'hash': '0x261bb946d1b754647ef3cd7c1d716a1221c1ebc7b41d6d02c7351027a2adf578', 'blockHash': '0x8c05d36b8318c2b427463066f44aa7d5728d4add86199eca9932998300fafd4d', 'nonce': '0x1e7', 'publicKey': '0xe1bee2bba2c1d043b97583d806b02dce272d5ffdcceb0bc30cb7ce786941577344f88df5ed1780bc8a0a70189c9752c2d5f5b9d675c532b6ecc523e45855eb3c', 'transactionIndex': '0x0', 'raw': '0xf8b38201e78504a817c80082ea6094aa1a6e3e6ef20068f7f8d8c835d2d22fd5116444880e07b6976371408cb8440f2c9329000000000000000000000000303e33b483b5df3148cb2eaa1c17c486531ddf31000000000000000000000000e5e8eb396ad2b45b1382f25de57a5dd7717355bf1ca0ded5f39c86c785eb07afdeb69d927a8f29f0fe38e375ab9be2628ce92bcc2670a06bfce026dd9e4e1c6cb8f387cb5a093c76113f12b4a4654a88db6a74ac0397dd', 'blockNumber': '0x2ac4ad', 'input': '0x0f2c9329000000000000000000000000303e33b483b5df3148cb2eaa1c17c486531ddf31000000000000000000000000e5e8eb396ad2b45b1382f25de57a5dd7717355bf'}, {'gas': '0x15f90', 's': '0x7ea95de52e2e159a435c20cad5986265961d8f78888f32a11d6d3e3fab75a285', 'to': '0x317d12b8196e4297ca6b9330a2d33eb780142ac1', 'value': '0x3563b68e88b96c00', 'gasPrice': '0x4a817c800', 'from': '0x026d9acb43f44b258ebcfae786f32ae8376f6f00', 'v': 1, 'r': '0xb62126ba0bccb75d192f623c77942df3c92b219dc40dfc6fca03c0f72c1797c6', 'creates': None, 'hash': '0x34dc8779c575d583607095caa20086013c90afa892121c8a39fab7468c31a213', 'blockHash': '0x8c05d36b8318c2b427463066f44aa7d5728d4add86199eca9932998300fafd4d', 'nonce': '0xf7f3', 'publicKey': '0x639fb5a901ad2760c274656da73db4b9d34577aa59d2dff8c41311b899ce1064ca5aca13eb2cc7a497d899e48baa5aec4d117ae0faeafd40eb26029e45027087', 'transactionIndex': '0x1', 'raw': '0xf86f82f7f38504a817c80083015f9094317d12b8196e4297ca6b9330a2d33eb780142ac1883563b68e88b96c00801ca0b62126ba0bccb75d192f623c77942df3c92b219dc40dfc6fca03c0f72c1797c6a07ea95de52e2e159a435c20cad5986265961d8f78888f32a11d6d3e3fab75a285', 'blockNumber': '0x2ac4ad', 'input': '0x'}, {'gas': '0xe57e0', 's': '0x101e1182ab072e6811840142cc4df202e2af18d6eeb176347c22be3727a275ba', 'to': '0xc7c0715fe4e65a4fd57b69d664f2e9d2db65f2e2', 'value': '0x7b7bcea797ab6800', 'gasPrice': '0x4a817c800', 'from': '0x46d02991cbe38627cadefc38c4e7cdcef6f587e0', 'v': 0, 'r': '0xd3182a517fdc6cd426f59ec0e154e75933ef18049ad0ebea426c508be4cb7fc4', 'creates': None, 'hash': '0x63f3795d498065f53e8977fa8f88b260fd32a04306b07a1da7f3f90b23cec527', 'blockHash': '0x8c05d36b8318c2b427463066f44aa7d5728d4add86199eca9932998300fafd4d', 'nonce': '0xff', 'publicKey': '0xea33d0a5f1cafe239c7ee0a96c9539f610460aedb63c947af7c613430ddc5748376fa0a0f144ad01f06a96e093217d5cef9fe8aaa9aebf829ebaa1c8846222cb', 'transactionIndex': '0x2', 'raw': '0xf86e81ff8504a817c800830e57e094c7c0715fe4e65a4fd57b69d664f2e9d2db65f2e2887b7bcea797ab6800801ba0d3182a517fdc6cd426f59ec0e154e75933ef18049ad0ebea426c508be4cb7fc4a0101e1182ab072e6811840142cc4df202e2af18d6eeb176347c22be3727a275ba', 'blockNumber': '0x2ac4ad', 'input': '0x'}, {'gas': '0x2127b', 's': '0x0d77f0320a19381d16add6315fcbaa7f5159d481dcaa31c27ca6a99f760162a3', 'to': '0xe94b04a0fed112f3664e45adb2b8915693dd5ff3', 'value': '0xdeb51c9fd4c9c00', 'gasPrice': '0x4a817c800', 'from': '0x909d0ce98b57098f838cd44572923c03767bcb9d', 'v': 1, 'r': '0x4cbbe734b8f3e13ceecea4a971fe736993cd61f040edbf370518555d72c59902', 'creates': None, 'hash': '0xbc5a6ddc7b1c860e46449d4b82448aa24c6d3875dec8d0c0592fde9a1c8b46aa', 'blockHash': '0x8c05d36b8318c2b427463066f44aa7d5728d4add86199eca9932998300fafd4d', 'nonce': '0x64', 'publicKey': '0xb1fa35f600c2a704d4165ae1b3732cb488929cd4255f4076adb67bf70d89ed850dcf6c42bbf9a324bb61fc4d1811433045e1d0f64be66c6e397ddb0c51d05e92', 'transactionIndex': '0x3', 'raw': '0xf8b2648504a817c8008302127b94e94b04a0fed112f3664e45adb2b8915693dd5ff3880deb51c9fd4c9c00b8440f2c9329000000000000000000000000fbb1b73c4f0bda4f67dca266ce6ef42f520fbb98000000000000000000000000e592b0d8baa2cb677034389b76a71b0d1823e0d11ca04cbbe734b8f3e13ceecea4a971fe736993cd61f040edbf370518555d72c59902a00d77f0320a19381d16add6315fcbaa7f5159d481dcaa31c27ca6a99f760162a3', 'blockNumber': '0x2ac4ad', 'input': '0x0f2c9329000000000000000000000000fbb1b73c4f0bda4f67dca266ce6ef42f520fbb98000000000000000000000000e592b0d8baa2cb677034389b76a71b0d1823e0d1'}], 'size': '0x46a', 'gasUsed': '0x1b785', 'parentHash': '0xa3528cfd890ab9d8c4e85958dd181a23d626bc76eb8e8fd163048bacb7b4e78e', 'author': '0xdf7d7e053933b5cc24372f878c90e62dadad5d42', 'sealFields': ['0x49eb99ab6e75aa80f916e7e2ca543225034741de2ae07d91cbd98cd6ea000c5c', '0x3bc26ce8002735b0'], 'difficulty': '0x8490056bbc1', 'stateRoot': '0xfdfe1a40ff1f2d9723469ca75b0fb0ba538e65f83615f185259449b655b743c9', 'logsBloom': '0x00000000040000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000', 'extraData': '0xd5830104048650617269747986312e31332e30826c69', 'transactionsRoot': '0xc7c0706e40dbd13103f58f936fdeaac4036b32aee1e5157cad448246222a26b4', 'gasLimit': '0x471732', 'uncles': [], 'totalDifficulty': '0x280d0b040fa7d2b5a', 'hash': '0x8c05d36b8318c2b427463066f44aa7d5728d4add86199eca9932998300fafd4d', 'sha3Uncles': '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347', 'number': '0x2ac4ad', 'miner': '0xdf7d7e053933b5cc24372f878c90e62dadad5d42', 'nonce': '0x3bc26ce8002735b0'}

% node_cmd eth_getBlockTransactionCountByNumber 2802861
0x4

% node_cmd eth_getBlockTransactionCountByHash $BLOCK_HASH_1
0x4

% node_cmd eth_getUncleCountByBlockNumber 222
0x2

% node_cmd eth_getUncleCountByBlockHash $BLOCK_HASH_2
0x2

% node_cmd eth_getTransactionByHash $TRANS_HASH
{'hash': '0x67230ea92ee04df0ae72e2afb1e028d0b5d85062a3b1686b41b2260702df2da6', 'transactionIndex': '0x2', 'input': '0x', 'gasPrice': '0x4a817c800', 'blockNumber': '0x2aef1d', 'gas': '0x15f90', 'v': 0, 'raw': '0xf86e808504a817c80083015f9094c564214535b9e33e7e8eba8ab76f14adc0e52154890238f97eb5538dc000801ba0879c1f234f8dbd08e896f05bc54dd2d8aff181973b54230aa5a23fa02d177f87a076d1ac56dcf361ad22a58ae5409724525b1ccfd31a27ab53fcd1b01c8b72eed0', 's': '0x76d1ac56dcf361ad22a58ae5409724525b1ccfd31a27ab53fcd1b01c8b72eed0', 'value': '0x238f97eb5538dc000', 'from': '0xfeb3816ebeabeadbac70c6ef1b42b03442217609', 'publicKey': '0x4a05b3113fe7f60aa84304f4e7aa5ec470b92a93055c380bbdadd66bd1cb2755fc4ed6adf28b74cc4579d4705ad8264c737b2e0dd9dd92983514fd729a87511a', 'creates': None, 'to': '0xc564214535b9e33e7e8eba8ab76f14adc0e52154', 'nonce': '0x0', 'blockHash': '0x2f7256c6d1664ec8b8fc4f3736e89ae64434f0573d17928cc6a8bc222de842a7', 'r': '0x879c1f234f8dbd08e896f05bc54dd2d8aff181973b54230aa5a23fa02d177f87'}

% node_cmd eth_getTransactionByBlockNumberAndIndex 2802861 1
{'value': '0x3563b68e88b96c00', 'v': 1, 'input': '0x', 'nonce': '0xf7f3', 'gas': '0x15f90', 's': '0x7ea95de52e2e159a435c20cad5986265961d8f78888f32a11d6d3e3fab75a285', 'transactionIndex': '0x1', 'blockNumber': '0x2ac4ad', 'gasPrice': '0x4a817c800', 'blockHash': '0x8c05d36b8318c2b427463066f44aa7d5728d4add86199eca9932998300fafd4d', 'to': '0x317d12b8196e4297ca6b9330a2d33eb780142ac1', 'hash': '0x34dc8779c575d583607095caa20086013c90afa892121c8a39fab7468c31a213', 'r': '0xb62126ba0bccb75d192f623c77942df3c92b219dc40dfc6fca03c0f72c1797c6', 'creates': None, 'from': '0x026d9acb43f44b258ebcfae786f32ae8376f6f00', 'raw': '0xf86f82f7f38504a817c80083015f9094317d12b8196e4297ca6b9330a2d33eb780142ac1883563b68e88b96c00801ca0b62126ba0bccb75d192f623c77942df3c92b219dc40dfc6fca03c0f72c1797c6a07ea95de52e2e159a435c20cad5986265961d8f78888f32a11d6d3e3fab75a285', 'publicKey': '0x639fb5a901ad2760c274656da73db4b9d34577aa59d2dff8c41311b899ce1064ca5aca13eb2cc7a497d899e48baa5aec4d117ae0faeafd40eb26029e45027087'}

% node_cmd eth_getTransactionByBlockHashAndIndex $BLOCK_HASH_1 1
{'v': 1, 's': '0x7ea95de52e2e159a435c20cad5986265961d8f78888f32a11d6d3e3fab75a285', 'to': '0x317d12b8196e4297ca6b9330a2d33eb780142ac1', 'raw': '0xf86f82f7f38504a817c80083015f9094317d12b8196e4297ca6b9330a2d33eb780142ac1883563b68e88b96c00801ca0b62126ba0bccb75d192f623c77942df3c92b219dc40dfc6fca03c0f72c1797c6a07ea95de52e2e159a435c20cad5986265961d8f78888f32a11d6d3e3fab75a285', 'transactionIndex': '0x1', 'from': '0x026d9acb43f44b258ebcfae786f32ae8376f6f00', 'input': '0x', 'creates': None, 'value': '0x3563b68e88b96c00', 'blockNumber': '0x2ac4ad', 'blockHash': '0x8c05d36b8318c2b427463066f44aa7d5728d4add86199eca9932998300fafd4d', 'nonce': '0xf7f3', 'hash': '0x34dc8779c575d583607095caa20086013c90afa892121c8a39fab7468c31a213', 'gas': '0x15f90', 'r': '0xb62126ba0bccb75d192f623c77942df3c92b219dc40dfc6fca03c0f72c1797c6', 'publicKey': '0x639fb5a901ad2760c274656da73db4b9d34577aa59d2dff8c41311b899ce1064ca5aca13eb2cc7a497d899e48baa5aec4d117ae0faeafd40eb26029e45027087', 'gasPrice': '0x4a817c800'}

% node_cmd eth_getTransactionReceipt $TRANS_HASH
{'blockNumber': '0x2aef1d', 'logsBloom': '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000', 'logs': [], 'gasUsed': '0x5208', 'root': '0xe6af8ba47a54f542b94ae7de01be8fbe8410362a93550a9147a33a735b53c30a', 'transactionHash': '0x67230ea92ee04df0ae72e2afb1e028d0b5d85062a3b1686b41b2260702df2da6', 'contractAddress': None, 'blockHash': '0x2f7256c6d1664ec8b8fc4f3736e89ae64434f0573d17928cc6a8bc222de842a7', 'cumulativeGasUsed': '0xf618', 'transactionIndex': '0x2'}

% node_cmd eth_getUncleByBlockNumberAndIndex 222 1
{'receiptsRoot': '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421', 'timestamp': '0x55ba44dc', 'mixHash': '0xdc2328a56c5658a62fa529bb21450b52b405e3349943664b45d42c0f7ee2412c', 'miner': '0x9ab9f7a4b85412bfbe2f4f63b1c98808851c4f32', 'number': '0xdc', 'stateRoot': '0x79742a508b51a312538a8ef5a5b219e3ff4898d1eed8e659c71675dc0f6bbc9f', 'size': None, 'sealFields': ['0xdc2328a56c5658a62fa529bb21450b52b405e3349943664b45d42c0f7ee2412c', '0x8efc1ed28ee3a8ee'], 'gasUsed': '0x0', 'totalDifficulty': '0x39f035bc36e', 'author': '0x9ab9f7a4b85412bfbe2f4f63b1c98808851c4f32', 'difficulty': '0x46c54209e', 'transactions': [], 'transactionsRoot': '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421', 'extraData': '0x476574682f76312e302e302f6c696e75782f676f312e342e32', 'gasLimit': '0x1388', 'sha3Uncles': '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347', 'nonce': '0x8efc1ed28ee3a8ee', 'parentHash': '0x877dba7f7463056d51dc67cf3f3f856c8a19469e6476148b36a7cab52a4f6200', 'uncles': [], 'logsBloom': '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000', 'hash': '0x4cf24f3784d19179965ad4f8396fce0f2bf2466d1e25c197021c0969b686f236'}

% node_cmd eth_getUncleByBlockHashAndIndex $BLOCK_HASH_2 1
{'size': None, 'hash': '0x4cf24f3784d19179965ad4f8396fce0f2bf2466d1e25c197021c0969b686f236', 'timestamp': '0x55ba44dc', 'uncles': [], 'sealFields': ['0xdc2328a56c5658a62fa529bb21450b52b405e3349943664b45d42c0f7ee2412c', '0x8efc1ed28ee3a8ee'], 'nonce': '0x8efc1ed28ee3a8ee', 'author': '0x9ab9f7a4b85412bfbe2f4f63b1c98808851c4f32', 'totalDifficulty': '0x39f035bc36e', 'sha3Uncles': '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347', 'transactionsRoot': '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421', 'stateRoot': '0x79742a508b51a312538a8ef5a5b219e3ff4898d1eed8e659c71675dc0f6bbc9f', 'difficulty': '0x46c54209e', 'extraData': '0x476574682f76312e302e302f6c696e75782f676f312e342e32', 'miner': '0x9ab9f7a4b85412bfbe2f4f63b1c98808851c4f32', 'parentHash': '0x877dba7f7463056d51dc67cf3f3f856c8a19469e6476148b36a7cab52a4f6200', 'gasUsed': '0x0', 'gasLimit': '0x1388', 'mixHash': '0xdc2328a56c5658a62fa529bb21450b52b405e3349943664b45d42c0f7ee2412c', 'receiptsRoot': '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421', 'number': '0xdc', 'transactions': [], 'logsBloom': '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'}

% node_cmd eth_getTransactionCount $ADDRESS_1
0x95

% node_cmd eth_getCode $ADDRESS_2
0x6060604052361561001f5760e060020a60003504630f2c93298114610028575b6100005b610002565b6100c1600435602435600080547f16c72721000000000000000000000000000000000000000000000000000000006060908152600160a060020a03909116906316c727219060649060209060048187876161da5a03f11561000257505060405151905080156100b25750604051600160a060020a038416908290349082818181858883f193505050505b156100d3575060015b92915050565b60408051918252519081900360200190f35b600060009054906101000a9004600160a060020a0316600160a060020a03166316c727216040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750506040515115905080156101505750604051600160a060020a038316908290349082818181858883f193505050505b15610023575060016100bb56
```

## Conclusion

![future](./387c4eecc2.jpg)

Parity is an amazing solid Ethereum Classic network node implementation you can easily get operational.  The aforementioned code examples should be enlightening.  Feel free to extend my script and investigate further.  Welcome to the future!

## Feedback

You can contact me by clicking any of these icons:

[![twitter](./fcbc8685c1.png)](https://twitter.com/chris_seberino) [![facebook](./fcbc627df9.png)](https://www.facebook.com/cseberino) [![linkedin](./fcbcf09c9e.png)](https://www.linkedin.com/in/christian-seberino-776897110)

## Acknowledgements

I would like to thank IOHK (Input Output Hong Kong) for funding this effort.

## License

![license](./88x31.png)

This work is licensed under the Creative Commons Attribution ShareAlike 4.0 International License.
