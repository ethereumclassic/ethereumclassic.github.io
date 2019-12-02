import React from 'react';

const items = [
  {
    key: 'ethCompatibility',
    type: 'evm'
  },
  {
    key: 'embeddedSvm',
    type: 'evm'
  },
  {
    key: 'documentationWebsite',
    type: 'education'
  },
  {
    key: 'classicGeth',
    type: 'protocol'
  },
  {
    key: 'jsonRpcSchema',
    type: 'tooling'
  },
  {
    key: 'serviceRunner',
    type: 'tooling'
  },
  {
    key: 'dappDeploymentTool',
    type: 'tooling'
  },
  {
    key: 'uxUiResearch',
    type: 'design'
  },
  {
    key: 'multiNetworkExplorer',
    type: 'tooling'
  },
  {
    key: 'etcJitCompiler',
    type: 'evm'
  },

  {
    key: 'atlantisHardFork',
    type: 'fork'
  },

  {
    key: 'smartContractIde',
    type: 'tooling'
  },

  {
    key: 'multiGeth',
    type: 'protocol'
  },
  {
    key: 'evmLlvmBackend',
    type: 'evm'
  },

  {
    key: 'devTutorialsAndGuides',
    type: 'education'
  },
  {
    key: 'aghartaHardFork',
    type: 'fork'
  },
  {
    key: 'aztlNHardFork',
    type: 'fork'
  }
];

const Road = ({ i18n }) => {
  return (
    <div className="road">
      {items.map(({ key, type }) => {
        const title = i18n[`${key}`];
        const text = i18n[`${key}Text`];
        const date = i18n[`${key}Date`];
        return (
          <div className={`${type} item`} key={title}>
            <h5 className="date">{date}</h5>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Road;
