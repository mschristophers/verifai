import React, { createContext, useState, useEffect } from 'react';
import { LitContracts } from '@lit-protocol/contracts-sdk';
import { ethers } from 'ethers';

export const LitContext = createContext();

export const LitProvider = ({ children }) => {
  const [litContracts, setLitContracts] = useState(null);

  useEffect(() => {
    const initializeLitContracts = async () => {
      let litInstance;

      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
        const signer = provider.getSigner();
        litInstance = new LitContracts({ signer });
      } else {
        // handle case when no Ethereum provider is available
        litInstance = new LitContracts({
          randomPrivatekey: true,
          options: {
            storeOrUseStorageKey: true,
          },
        });
      }

      setLitContracts(litInstance);
    }

    initializeLitContracts();
  }, []);

  return (
    <LitContext.Provider value={{ litContracts }}>
      {children}
    </LitContext.Provider>
  );
}
