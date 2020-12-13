---
title: "Serpent: Introduction To The BEST Ethereum Classic Smart Contract Language"
date: 2017-02-10
author: Christian Seberino
tags: ["application", "development", "education"]
---

![snake](./c57c602990.jpg)

Serpent is a [smart contract](https://steemit.com/etc/@cseberino/the-skinny-on-smart-contracts-an-introduction-and-why-you-should-care) language based on Python. Python is arguably the best language for beginning programmers, and, the most productive language for serious developers.  Serpent is *currently* being used for complex enterprise projects.    It was originally developed for Ethereum.    I will describe how to get started with it on the Ethereum Classic (ETC) system.

## Installing

![Python](./c402090113.jpg)

An easy way to install Serpent, on most platforms, is with the Pip package management system.  To install Serpent, first install Python 2 and Pip if necessary.  Then, run the following command:

```
pip install ethereum-serpent
```

To test Serpent programs, it will be useful to install an additional package with the following command:

```
pip install ethereum
```

## Programming

![programming](./c401779163.jpg)

To create smart contracts, simply create files containing Serpent functions.  Note that some Python features are modified or missing in Serpent.  For example, integers are 32 bytes, and, strings of 32 bytes or less are treated as integers.  See Python and Serpent documentation for further details.  Here are two examples of functions:

```
def get_confirmation():
        #
        # Returns a message confirming everything is working.
        #

        return "It works!"

def add_thousand(n):
        #
        # Accepts an integer and returns the result of adding 1000 to it.
        #

        return n + 1000
```

### Compiling

To compile Serpent functions in a file to ETC virtual machine code (bytecode), run the following command:

```
serpent compile <file>
```

The output will be the hexadecimal representation of the corresponding machine code.  Here is the output for a file containing get_confirmation and add_thousand:

```
607980600b6000396084567c010000000000000000000000000000000000000000000000000000000060003504637a6550fc8114156056577f497420776f726b7321000000000000000000000000000000000000000000000060405260206040f35b63337170af8114156077576004356060526103e86060510160805260206080f35b505b6000f3
```

### Testing

To test functions with respect to a mock blockchain, the following Python script can be used:

```
#!/usr/bin/env python

"""
Tests Serpent functions.

Serpent files     correspond to Ethereum Classic smart contracts.
Serpent functions correspond to Ethereum Classic smart contract   methods.

Serpent function invocation arguments must all be hexadecimal.

Testing is done on a mock blockchain.

1 aETC = 10^(-18) ETC

Usage: serpent_test <file> <function invocation> <aETC sending>
"""

import ethereum.tester
import ethereum.abi
import serpent
import binascii
import re
import sys

PRIVATE_KEY = ethereum.tester.k0
HEXADECIMAL = 16

program      = open(sys.argv[1]).read()
machine_code = serpent.compile(program)
blockchain   = ethereum.tester.state()
address      = blockchain.evm(machine_code)
method       = sys.argv[2][:sys.argv[2].find("(")]
args         = sys.argv[2][sys.argv[2].find("(") + 1:-1]
args         = [int(e, HEXADECIMAL) for e in args.split(",") if e]
call_data    = serpent.mk_full_signature(program)
call_data    = [e for e in call_data if e["name"].startswith(method + "(")]
call_data    = ethereum.abi.ContractTranslator(call_data).encode(method, args)
aetc_sending = int(sys.argv[3])
result       = blockchain.send(PRIVATE_KEY, address, aetc_sending, call_data)
print "call data : 0x" + binascii.hexlify(call_data)
print "result    : 0x" + binascii.hexlify(result)
```

Save this code in a file called serpent_test and make it executable.  Here is a slightly edited actual session, on a Linux computer, with the file two_functions.se containing the get_confirmation and add_thousand functions:

```
% serpent_test two_functions.se "get_confirmation()" 0
call data : 0x7a6550fc
result    : 0x497420776f726b73210000000000000000000000000000000000000000000000

% serpent_test two_functions.se "add_thousand(0xea)" 0
call data : 0x337170af00000000000000000000000000000000000000000000000000000000000000ea
result    : 0x00000000000000000000000000000000000000000000000000000000000004d2
```

The call data is an encoding of all the information needed to execute a smart contract method on the ETC blockchain.  Notice the output of get_confirmation is the 32 byte hexadecimal representation of the string "It works!".  Notice the output of add_thousand is the 32 byte hexadecimal representation of  1234 since 0xea equals 234.

## Deploying

![soldiers](./c3fe5490d9.jpg)

Deploying smart contracts requires a *funded* ETC account.  There are many ways to obtain some ETC currency.  For example, it can be purchased on the [Poloniex exchange](https://poloniex.com) and transferred to any account.  Deployment will also require access to an [ETC node](https://steemit.com/etc/@cseberino/how-to-easily-set-up-an-amazing-ethereum-classic-node-and-talk-to-it-with-your-own-code).  To set up a node, I recommend the [Parity](https://ethcore.io/parity.html) implementation.

ETC Parity nodes communicate using JavaScript Object Notation (JSON).  To be able to send all the requests to a properly secured ETC Parity node, start the node with the following command:

```
parity --chain classic --jsonrpc-apis eth,net,personal,web3
```

I will do deployment related tasks using the following Python script:

```
#!/usr/bin/env python3

"""
Sends commands and receives output from Ethereum Classic Parity nodes.

Ethereum Classic Parity nodes listen for POST requests.

Usage: node_cmd <command> [<argument>]...
"""

import urllib.request
import json
import sys

NODE_URL = "http://127.0.0.1:8545"

try:
        args = [json.loads(sys.argv[2].replace("'", '"'))] + sys.argv[3:]
except:
        args = sys.argv[2:]
node_data = {"method"  : sys.argv[1],
             "params"  : args,
             "jsonrpc" : "2.0",
             "id"      : 1}
node_data = json.dumps(node_data).encode()
node_post = urllib.request.Request(NODE_URL)
node_post.add_header("Content-Type", "application/json")
node_post = urllib.request.urlopen(node_post, node_data).read().decode()
try:
        print(json.loads(node_post)["result"])
except:
        print(json.loads(node_post))
```

Save the code above in a file called node_cmd and make it executable.  See the [Parity JSON RPC documentation](https://github.com/ethcore/parity/wiki/JSONRPC) for more information.

### Smart Contract Account Management With Parity

To create a new account managed by a node, run the following command supplying the desired password.  The account address will be returned:

```
node_cmd personal_newAccount <password>
```

To list accounts managed by a node, run the following command:

```
node_cmd personal_listAccounts
```

Run the following command to get the balance of any account.   You must supply the hexadecimal representation of an account address:

```
node_cmd eth_getBalance <address> latest
```

### Smart Contract Deployment With Parity

Run the following command to deploy a smart contract.  You must supply the hexadecimal representation of the funding account address, the machine code, and, the funding account password.  The corresponding transaction hash will be returned:

```
node_cmd personal_signAndSendTransaction "{'from' : '<address>', 'data' : '<machine code>'}" <password>
```

For the above command, there will be a sensible gas limit imposed as well as a gas price based on recent transactions.

### Smart Contract Execution With Parity

Run the following command to execute a smart contract on the ETC blockchain.  You must supply the smart contract address and call data:

```
node_cmd eth_call "{'to' : '<address>', 'data' : '<call data>'}"
```

The call data can be obtained from the aforementioned serpent_test script.

### Smart Contract Example With Parity

Here is a slightly edited actual session on a Linux computer running an ETC Parity node:

```
% PASSWORD="mysecretpassword"

% echo $PASSWORD
mysecretpassword

% ADDRESS=`node_cmd personal_newAccount $PASSWORD`

% echo $ADDRESS
0x853323f554263bb62af7080ef321f115ec623637

% node_cmd personal_listAccounts
['0x853323f554263bb62af7080ef321f115ec623637']

% node_cmd eth_getBalance $ADDRESS latest
0xb1a2bc2ec50000

% MACHINE_CODE="0x"`serpent compile two_functions.se`

% echo $MACHINE_CODE
0x607980600b6000396084567c010000000000000000000000000000000000000000000000000000000060003504637a6550fc8114156056577f497420776f726b7321000000000000000000000000000000000000000000000060405260206040f35b63337170af8114156077576004356060526103e86060510160805260206080f35b505b6000f3

% TRANS_HASH=`node_cmd personal_signAndSendTransaction "{'from' : '$ADDRESS', 'data' : '$MACHINE_CODE'}" $PASSWORD`

% echo $TRANS_HASH
0x97e1e5c1367403dad7b80cb06d3087a0c9ab2acb475fe2a7c0b8a236224379ff

% node_cmd eth_getTransactionByHash $TRANS_HASH
{'standardV': '0x1', 'raw': '0xf8db808504a817c800830e57e08080b888607980600b6000396084567c010000000000000000000000000000000000000000000000000000000060003504637a6550fc8114156056577f497420776f726b7321000000000000000000000000000000000000000000000060405260206040f35b63337170af8114156077576004356060526103e86060510160805260206080f35b505b6000f3819ea01287a87308a565ddde438aec61ac339061ed653324305a660403f983eefa047fa07e7c6e44921b8a4aa0314ac777cba878d6a7f986bc4db8f363a15988036f56c1', 'gas': '0xe57e0', 'v': '0x9e', 'to': None, 'networkId': 61, 'value': '0x0', 'creates': '0x20ab68d0bfba229a72128af8b4965102cb5517c2', 'input': '0x607980600b6000396084567c010000000000000000000000000000000000000000000000000000000060003504637a6550fc8114156056577f497420776f726b7321000000000000000000000000000000000000000000000060405260206040f35b63337170af8114156077576004356060526103e86060510160805260206080f35b505b6000f3', 'blockHash': '0x4c6d975908a8c9d560742556b5f0bf791a97eb0731befcd266ff0c58b38ca07e', 'hash': '0x97e1e5c1367403dad7b80cb06d3087a0c9ab2acb475fe2a7c0b8a236224379ff', 'from': '0x853323f554263bb62af7080ef321f115ec623637', 'blockNumber': '0x2e8f34', 'transactionIndex': '0x0', 'r': '0x1287a87308a565ddde438aec61ac339061ed653324305a660403f983eefa047f', 'gasPrice': '0x4a817c800', 'publicKey': '0xb1be15931dd263cda0c6be5aed9e475c93a2b1a1aac1c9b6a661c1be6f628536d0e07de4f60be6736896584beb7927247e06cd9fa3d2f79faff7fe145c9726c1', 'nonce': '0x0', 's': '0x7e7c6e44921b8a4aa0314ac777cba878d6a7f986bc4db8f363a15988036f56c1'}

% SMART_CONTRACT=0x20ab68d0bfba229a72128af8b4965102cb5517c2

% echo $SMART_CONTRACT
0x20ab68d0bfba229a72128af8b4965102cb5517c2

% serpent_test two_functions.se "get_confirmation()" 0
call data : 0x7a6550fc
result    : 0x497420776f726b73210000000000000000000000000000000000000000000000

% serpent_test two_functions.se "add_thousand(0xea)" 0
call data : 0x337170af00000000000000000000000000000000000000000000000000000000000000ea
result    : 0x00000000000000000000000000000000000000000000000000000000000004d2

% CALL_DATA=0x7a6550fc

% echo $CALL_DATA
0x7a6550fc

% RESULT=`node_cmd eth_call "{'to' : '$SMART_CONTRACT', 'data' : '$CALL_DATA'}"`

% echo $RESULT
0x497420776f726b73210000000000000000000000000000000000000000000000

% python3 -c "import binascii ; print(binascii.unhexlify('$RESULT'[2:]))"
b'It works!\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00'

% CALL_DATA=0x337170af00000000000000000000000000000000000000000000000000000000000000ea

% echo $CALL_DATA
0x337170af00000000000000000000000000000000000000000000000000000000000000ea

% RESULT=`node_cmd eth_call "{'to' : '$SMART_CONTRACT', 'data' : '$CALL_DATA'}"`

% echo $RESULT
0x00000000000000000000000000000000000000000000000000000000000004d2

% python3 -c "print($RESULT)"
1234
```

## Conclusion

![Steve Jobs](./d2ca2d17d2.jpg)

Serpent is an excellent way to get started developing ETC smart contracts.  Now go make a [dent in the universe](https://en.wikipedia.org/wiki/Steve_Jobs_(book)) with it!

## Feedback

You can contact me by clicking any of these icons:

[![twitter](./fcbc8685c1.png)](https://twitter.com/chris_seberino) [![facebook](./fcbc627df9.png)](https://www.facebook.com/cseberino) [![linkedin](./fcbcf09c9e.png)](https://www.linkedin.com/in/christian-seberino-776897110)

## Acknowledgements

I would like to thank Tomasz Drwięga for his help.  I would also like to thank IOHK (Input Output Hong Kong) for funding this effort.

## License

![license](./88x31.png)

This work is licensed under the Creative Commons Attribution ShareAlike 4.0 International License.
