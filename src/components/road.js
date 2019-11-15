import React from 'react';

const items = [
  {
    date: 'Q1 2019',
    title: 'ETH Compatibility ',
    text: 'The EVM and SputnikVM will be updated to support the Byz + Const hard fork.',
    type: 'evm'
  },
  {
    date: 'Q1 2019',
    title: 'Embedded SVM',
    text: 'Embedded SVM will allow EVM and SputnikVM for embedded applications.',
    type: 'evm'
  },
  {
    date: 'Q1 2019',
    title: 'Documentation website',
    text:
      'A new documentation website will be provided to help new and existing developers. Embedded documentation in ETC tooling will be explored.',
    type: 'education'
  },
  {
    date: 'Q1-Q2 2019',
    title: 'Classic Geth ',
    text: 'Support and maintenance for Classic Geth.',
    type: 'protocol'
  },

  {
    date: 'Q1-Q2 2019',
    title: 'JSON RPC Schema',
    text:
      'Create ECIP for automated JSON Schema generation from Classic-Geth and Multi-Geth. This will reduce operational costs related to libraries. This improvement would make the DApp development environment more efficient by removing the need for RPC APIs such as Web3 or Emerald JS.',
    type: 'tooling'
  },
  {
    date: 'Q1-Q2 2019',
    title: 'Service Runner ',
    text:
      'A Service Runner API would help make DApp framework dependencies and integrations easier manage.',
    type: 'tooling'
  },
  {
    date: 'Q2 2019',
    title: 'DApp Deployment Tool ',
    text: 'An easy to use GUI application for developers to deploy their DApps.',
    type: 'tooling'
  },
  {
    date: 'Q2 2019',
    title: 'UX / UI Research ',
    text: 'Research will be performed to investigate the DApp development environment.',
    type: 'design'
  },
  {
    date: 'Q2-Q3 2019',
    title: 'Multi-network Explorer ',
    text:
      'An easy to use block explorer for DApp development which can be used with any Ethereum based network.',
    type: 'tooling'
  },
  {
    date: 'Q1-Q3 2019',
    title: 'ETC JIT Compiler ',
    text:
      'The ETC JIT compiler will translate EVM byte-code to native machine code. The JIT compiler typically reduces program execution time by a factor of 3–4x.',
    type: 'evm'
  },

  {
    date: 'Q3 2019',
    title: 'Atlantis Hard Fork',
    text:
      'Enable the outstanding Ethereum Foundation Spurious Dragon and Byzantium network protocol upgrades on the Ethereum Classic network',
    type: 'fork'
  },

  {
    date: 'Q3-Q4 2019',
    title: 'Smart Contract IDE ',
    text: 'An easy to use smart contract IDE and runtime environment.',
    type: 'tooling'
  },

  {
    date: 'Q4 2019',
    title: 'Multi-Geth ',
    text: 'Continuous support and maintenance for Multi-Geth.',
    type: 'protocol'
  },
  {
    date: 'Q2-Q4 2019',
    title: 'EVM LLVM Backend',
    text:
      'With an EVM backend target for LLVM, developers can use a large scope of programming languages other than Solidity to target the Ethereum Virtual Machine. An EVM backend target opens opportunities for source level debugging and exposes EVM interest to the LLVM community.',
    type: 'evm'
  },

  {
    date: 'Q1—Q4 2019',
    title: 'Dev Tutorials and Guides ',
    text: 'Continuous support new and existing developers with tutorials and guides.',
    type: 'education'
  },
  {
    date: 'Q1 2020',
    title: 'Agharta Hard Fork',
    text:
      'Enable the outstanding Ethereum Foundation Constaninople and Petersburg network protocol upgrades on the Ethereum Classic network.',
    type: 'fork'
  },
  {
    date: 'TBD 2020',
    title: 'Aztlán Hard Fork',
    text:
      'Enable the outstanding Ethereum Foundation Istanbul network protocol upgrades on the Ethereum Classic network.',
    type: 'fork'
  }
];

const Road = () => {
  return (
    <div className="road">
      {items.map(({ title, text, date, type }) => (
        <div className={`${type} item`} key={title}>
          <h5 className="date">{date}</h5>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Road;
