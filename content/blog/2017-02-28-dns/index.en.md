---
title: "How To Create A Censorship Resistant Domain Name System On Ethereum Classic"
date: 2017-02-28
author: Christian Seberino
---

## Introduction

![Internet](./375fe24deb.gif)

The Domain Name System (DNS) maps domains to Internet Protocol (IP) addresses.  Governments, corporations and other entities have attempted to censor this system for various reasons.  Therefore, it is desirable to create a censorship resistant alternative.  Furthermore, DNS like systems are useful for other purposes such as cryptocurrencies, inventory tracking and voting.

The Ethereum Classic (ETC) system *automatically* provides censorship resistance!  It is only necessary to write a [smart contract](https://steemit.com/etc/@cseberino/the-skinny-on-smart-contracts-an-introduction-and-why-you-should-care) to store and retrieve information on the [blockchain](https://steemit.com/etc/@cseberino/let-s-admit-blockchains-are-weird-an-introduction-to-the-strangeness).

## Code

Here is [Serpent](https://steemit.com/etc/@cseberino/serpent-introduction-to-the-best-ethereum-classic-smart-contract-language) code that implements a DNS type system on the ETC platform:

```
#
## Implements a domain name system.
#
## The data keyword declares global objects for the smart contract storage space.
#
## The msg global object contains information about the calling account such as
## the ETC address and the amount of aETC (10^(-18) ETC) it sent to the smart
## contract.
#

SET_UP_FEE = 1

data storage[](address, owner)

def set(domain, address, owner):
        #
        # Sets up the information for a domain and returns a status message.
        # Can be used to set up new domains as well as modify the information of
        # existing domains.  The address argument should be an IP address and
        # the owner argument should be an ETC address.  Setting up new domains
        # requires a set up fee to discourage cybersquatting and other attacks.
        # There is no charge for modifying existing records.  The address of a
        # domain cannot be blank.
        #

        if   self.storage[domain].address:
                if self.storage[domain].owner == msg.sender:
                        self.storage[domain].address = address
                        self.storage[domain].owner   = owner
                        status = "Success: Changed."
                else:
                        status = "Error: Cannot change."
        elif ((msg.value >= SET_UP_FEE) and address):
                self.storage[domain].address = address
                self.storage[domain].owner   = owner
                status = "Success: Set up."
        else:
                status = "Error: Cannot set up."

        return status

def get(domain):
        #
        # Returns the information for a domain including a status message.
        #

        if self.storage[domain].address:
                address = self.storage[domain].address
                owner   = self.storage[domain].owner
                status  = "Success: Retrieved."
        else:
                address = ""
                owner   = ""
                status  = "Error: Cannot retrieve."

        return ([status, address, owner], items = 3)
```

This smart contract has methods to create, modify and retrieve domain records.  All methods supply status messages.  Notice it is necessary to send a small payment to set up new domain records.  This discourages cybersquatting and other attacks.

## Testing & Deployment

### Testing Script

For testing I will use the following serpent_test script:

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

### Deployment Script

For deployment, I will use the following node_cmd script with an [ETC Parity node](https://steemit.com/etc/@cseberino/how-to-easily-set-up-an-amazing-ethereum-classic-node-and-talk-to-it-with-your-own-code):

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

### Pretty Printing Script

For pretty printing lists, from hexadecimal encodings, I will use the following serpent_list script:

```
#!/usr/bin/env python3
#
## Extracts and pretty prints lists from hexadecimal encodings.
#
## Usage: serpent_list <list>

import binascii
import textwrap
import sys

HEADER_LEN  = 64
ELEMENT_LEN = 32

elements = sys.argv[1][len("0x") + 2 * HEADER_LEN:]
for i, e in enumerate(textwrap.wrap(elements, 2 * ELEMENT_LEN)):
        print("Element #{}".format(i))
        print("\t0x" + e)
        print("\t"   + str(binascii.unhexlify(e))[1:])
```

### Example

Here is a slightly edited actual session on a Linux computer running an ETC Parity node.  The domain name system code is in a file called dns.se:

```
% ETC_ADDRESS="0x853323f554263bb62af7080ef321f115ec623637"

% echo $ETC_ADDRESS
0x853323f554263bb62af7080ef321f115ec623637

% node_cmd eth_getBalance $ETC_ADDRESS latest
0xde2b995bce40ffe

% PASSWORD="mysecretpassword"

% echo $PASSWORD
mysecretpassword

% MACHINE_CODE="0x"`serpent compile dns.se`

% echo $MACHINE_CODE
0x6103338061000e60003961034156600061025f537c01000000000000000000000000000000000000000000000000000000006000350460016020526304f66c8781141561020a5760043560605260243560805260443560a05260606060599059016000905260008152606051816020015260008160400152809050205415610141573360606060599059016000905260008152606051816020015260018160400152809050205414156101165760805160606060599059016000905260008152606051816020015260008160400152809050205560a0516060606059905901600090526000815260605181602001526001816040015280905020557f537563636573733a204368616e6765642e0000000000000000000000000000006101405261013c565b7f4572726f723a2043616e6e6f74206368616e67652e0000000000000000000000610140525b6101fb565b6020513412151561015457608051610157565b60005b156101d45760805160606060599059016000905260008152606051816020015260008160400152809050205560a0516060606059905901600090526000815260605181602001526001816040015280905020557f537563636573733a205365742075702e00000000000000000000000000000000610140526101fa565b7f4572726f723a2043616e6e6f74207365742075702e0000000000000000000000610140525b5b610140516101a05260206101a0f35b63846719e081141561033157600435606052606060605990590160009052600081526060518160200152600081604001528090502054156102bd5760606060599059016000905260008152606051816020015260008160400152809050205460805260606060599059016000905260008152606051816020015260018160400152809050205460a0527f537563636573733a205265747269657665642e00000000000000000000000000610140526102ed565b6000608052600060a0527f4572726f723a2043616e6e6f742072657472696576652e000000000000000000610140525b6080599059016000905260038152610140516020820152608051604082015260a0516060820152602081019050602060408203526003602082035260a060408203f3505b505b6000f3

% TRANS_HASH=`node_cmd personal_signAndSendTransaction "{'from' : '$ETC_ADDRESS', 'data' : '$MACHINE_CODE'}" $PASSWORD`

% echo $TRANS_HASH
0xe9dfcf382d6f713a662abd000df1a410bda0774d2c927cd7502be51cb3b77c85

% node_cmd eth_getTransactionByHash $TRANS_HASH
{'gasPrice': '0x4a817c800', 'transactionIndex': '0x1', 'r': '0x140838401aeb859aa61503110178c9c1a5f31f776a1318b1293ef996277e76d7', 'from': '0x853323f554263bb62af7080ef321f115ec623637', 'blockNumber': '0x3107d5', 'raw': '0xf903990b8504a817c800830e57e08080b903456103338061000e60003961034156600061025f537c01000000000000000000000000000000000000000000000000000000006000350460016020526304f66c8781141561020a5760043560605260243560805260443560a05260606060599059016000905260008152606051816020015260008160400152809050205415610141573360606060599059016000905260008152606051816020015260018160400152809050205414156101165760805160606060599059016000905260008152606051816020015260008160400152809050205560a0516060606059905901600090526000815260605181602001526001816040015280905020557f537563636573733a204368616e6765642e0000000000000000000000000000006101405261013c565b7f4572726f723a2043616e6e6f74206368616e67652e0000000000000000000000610140525b6101fb565b6020513412151561015457608051610157565b60005b156101d45760805160606060599059016000905260008152606051816020015260008160400152809050205560a0516060606059905901600090526000815260605181602001526001816040015280905020557f537563636573733a205365742075702e00000000000000000000000000000000610140526101fa565b7f4572726f723a2043616e6e6f74207365742075702e0000000000000000000000610140525b5b610140516101a05260206101a0f35b63846719e081141561033157600435606052606060605990590160009052600081526060518160200152600081604001528090502054156102bd5760606060599059016000905260008152606051816020015260008160400152809050205460805260606060599059016000905260008152606051816020015260018160400152809050205460a0527f537563636573733a205265747269657665642e00000000000000000000000000610140526102ed565b6000608052600060a0527f4572726f723a2043616e6e6f742072657472696576652e000000000000000000610140525b6080599059016000905260038152610140516020820152608051604082015260a0516060820152602081019050602060408203526003602082035260a060408203f3505b505b6000f3819da0140838401aeb859aa61503110178c9c1a5f31f776a1318b1293ef996277e76d7a05181901f83bbf82d5c1c31ef499f6303b44ebfb5a6099a389d55e1047627acb3', 'publicKey': '0xb1be15931dd263cda0c6be5aed9e475c93a2b1a1aac1c9b6a661c1be6f628536d0e07de4f60be6736896584beb7927247e06cd9fa3d2f79faff7fe145c9726c1', 'creates': '0xa00ad648305be098d97612d413e8368c3a048c72', 'to': None, 'value': '0x0', 's': '0x5181901f83bbf82d5c1c31ef499f6303b44ebfb5a6099a389d55e1047627acb3', 'nonce': '0xb', 'networkId': 61, 'hash': '0xe9dfcf382d6f713a662abd000df1a410bda0774d2c927cd7502be51cb3b77c85', 'input': '0x6103338061000e60003961034156600061025f537c01000000000000000000000000000000000000000000000000000000006000350460016020526304f66c8781141561020a5760043560605260243560805260443560a05260606060599059016000905260008152606051816020015260008160400152809050205415610141573360606060599059016000905260008152606051816020015260018160400152809050205414156101165760805160606060599059016000905260008152606051816020015260008160400152809050205560a0516060606059905901600090526000815260605181602001526001816040015280905020557f537563636573733a204368616e6765642e0000000000000000000000000000006101405261013c565b7f4572726f723a2043616e6e6f74206368616e67652e0000000000000000000000610140525b6101fb565b6020513412151561015457608051610157565b60005b156101d45760805160606060599059016000905260008152606051816020015260008160400152809050205560a0516060606059905901600090526000815260605181602001526001816040015280905020557f537563636573733a205365742075702e00000000000000000000000000000000610140526101fa565b7f4572726f723a2043616e6e6f74207365742075702e0000000000000000000000610140525b5b610140516101a05260206101a0f35b63846719e081141561033157600435606052606060605990590160009052600081526060518160200152600081604001528090502054156102bd5760606060599059016000905260008152606051816020015260008160400152809050205460805260606060599059016000905260008152606051816020015260018160400152809050205460a0527f537563636573733a205265747269657665642e00000000000000000000000000610140526102ed565b6000608052600060a0527f4572726f723a2043616e6e6f742072657472696576652e000000000000000000610140525b6080599059016000905260038152610140516020820152608051604082015260a0516060820152602081019050602060408203526003602082035260a060408203f3505b505b6000f3', 'v': '0x9d', 'gas': '0xe57e0', 'standardV': '0x0', 'blockHash': '0x96a680068fe23c202a7d7ecd01665237de7358de2cb6644585b326f2ead1fec7'}

% SMART_CONTRACT=0xa00ad648305be098d97612d413e8368c3a048c72

% echo $SMART_CONTRACT
0xa00ad648305be098d97612d413e8368c3a048c72

% DOMAIN=`python3 -c "import binascii ; print(binascii.hexlify(b'mydomain.com'))"`
% DOMAIN=0x${DOMAIN:2:-1}

% echo $DOMAIN
0x6d79646f6d61696e2e636f6d

% IP_ADDRESS=`python3 -c "import binascii ; print(binascii.hexlify(b'192.168.1.100'))"`
% IP_ADDRESS=0x${IP_ADDRESS:2:-1}

% echo $IP_ADDRESS
0x3139322e3136382e312e313030

% serpent_test dns.se "set($DOMAIN, $IP_ADDRESS, $ETC_ADDRESS)" 1
call data : 0x04f66c8700000000000000000000000000000000000000006d79646f6d61696e2e636f6d000000000000000000000000000000000000003139322e3136382e312e313030000000000000000000000000853323f554263bb62af7080ef321f115ec623637
result    : 0x537563636573733a205365742075702e00000000000000000000000000000000

% CALL_DATA=0x04f66c8700000000000000000000000000000000000000006d79646f6d61696e2e636f6d000000000000000000000000000000000000003139322e3136382e312e313030000000000000000000000000853323f554263bb62af7080ef321f115ec623637

% echo $CALL_DATA
0x04f66c8700000000000000000000000000000000000000006d79646f6d61696e2e636f6d000000000000000000000000000000000000003139322e3136382e312e313030000000000000000000000000853323f554263bb62af7080ef321f115ec623637

% node_cmd personal_signAndSendTransaction "{'from' : '$ETC_ADDRESS', 'to' : '$SMART_CONTRACT', 'value' : '0x1', 'data' : '$CALL_DATA'}" $PASSWORD
0xbd30e457932d7f34862652511f292dc8f005d85acde415e1408c356fbacda8e8

% serpent_test dns.se "get($DOMAIN)" 0
call data : 0x846719e000000000000000000000000000000000000000006d79646f6d61696e2e636f6d
result    : 0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000034572726f723a2043616e6e6f742072657472696576652e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

% CALL_DATA=0x846719e000000000000000000000000000000000000000006d79646f6d61696e2e636f6d

% echo $CALL_DATA
0x846719e000000000000000000000000000000000000000006d79646f6d61696e2e636f6d

% RESULT=`node_cmd eth_call "{'to' : '$SMART_CONTRACT', 'data' : '$CALL_DATA'}"`

% echo $RESULT
0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003537563636573733a205265747269657665642e00000000000000000000000000000000000000000000000000000000000000003139322e3136382e312e313030000000000000000000000000853323f554263bb62af7080ef321f115ec623637

% serpent_list $RESULT
Element #0
	0x537563636573733a205265747269657665642e00000000000000000000000000
	'Success: Retrieved.\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00'
Element #1
	0x000000000000000000000000000000000000003139322e3136382e312e313030
	'\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00192.168.1.100'
Element #2
	0x000000000000000000000000853323f554263bb62af7080ef321f115ec623637
	'\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x853#\xf5T&;\xb6*\xf7\x08\x0e\xf3!\xf1\x15\xecb67'

% python3 -c "print($ETC_ADDRESS == `echo \`serpent_list $RESULT\` | cut -c 238-303`)"
True
```

## Conclusion

![light bulb](./375f678bf4.jpg)

A censorship resistant DNS replacement is just one of many potentially useful [ETC applications](https://steemit.com/etc/@cseberino/why-would-i-choose-to-run-my-application-on-ethereum-classic-instead-of-the-world-wide-web).  Hopefully this example will encourage you to come up with your own ideas.

## Feedback

You can contact me by clicking any of these icons:

[![twitter](./fcbc8685c1.png)](https://twitter.com/chris_seberino) [![facebook](./fcbc627df9.png)](https://www.facebook.com/cseberino) [![linkedin](./fcbcf09c9e.png)](https://www.linkedin.com/in/christian-seberino-776897110)

## Acknowledgements

I would like to thank IOHK (Input Output Hong Kong) for funding this effort.

## License

![license](./88x31.png)

This work is licensed under the Creative Commons Attribution ShareAlike 4.0 International License.
