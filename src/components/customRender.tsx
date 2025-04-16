import {
    GambaPlatformContext,
    GambaUi,
  } from "gamba-react-ui-v2";
  import React, { FC, useContext, useMemo } from "react";
  import { decodeGame, getGameAddress } from "gamba-core-v2";
  import {
    useAccount,
    useTransactionStore,
    useWalletAddress,
  } from "gamba-react-v2";
   
  import { PublicKey } from "@solana/web3.js";
  import { TOKENLIST } from "@/constants";
   
  interface TransactionStepperProps {
    currentStep: number;
  }
   
  const TransactionStepper: FC<TransactionStepperProps> = ({ currentStep }) => {
    const steps = ["Signing", "Sending", "Settling"];
   
    return (
      <div className="flex justify-center">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`w-full h-2 rounded-md mx-1 flex items-center justify-center transition-all duration-300
            ${index < currentStep ? "bg-green-600" : ""}
            ${index === currentStep ? "bg-yellow-600 animate-pulse" : ""}
            ${index > currentStep ? "bg-gray-500" : ""}
            `}
          />
        ))}
      </div>
    );
  };
   
  function useLoadingState() {
    const userAddress = useWalletAddress();
    const game = useAccount(getGameAddress(userAddress), decodeGame);
    const txStore = useTransactionStore();
   
    return useMemo(() => {
      if (txStore.label !== "play") {
        return -1;
      }
      if (game?.status.resultRequested) {
        return 2;
      }
      if (txStore.state === "processing" || txStore.state === "sending") {
        return 1;
      }
      if (txStore.state === "simulating" || txStore.state === "signing") {
        return 0;
      }
      return -1;
    }, [txStore, game]);
  }
   
  export const CustomError = () => {
      return (
        <>
          <GambaUi.Portal target="error">
            <GambaUi.Responsive>
              <h1>😭 Oh no!</h1>
              <p>Something went wrong</p>
            </GambaUi.Responsive>
          </GambaUi.Portal>
        </>
      );
    };
   
  export default function CustomRenderer() {
    const currentStep = useLoadingState();
    const context = useContext(GambaPlatformContext);
    const tokensArray = Object.values(TOKENLIST);
   
    const setToken = (token: PublicKey) => {
      context.setToken(token);
    };
   
    return (
      <>
        <div className="w-full relative grid gap-1">
          <div className="relative flex-grow bg-gray-800 rounded-lg overflow-hidden transition-height duration-200 md:min-h-[600px] min-h-[600px]">
            <GambaUi.PortalTarget target="error" />
            <GambaUi.PortalTarget target="screen" />
          </div>
          <TransactionStepper currentStep={currentStep} />
          <div className="w-full bg-gray-800 p-2 sm:p-5 text-white rounded-lg flex flex-wrap gap-2 sm:flex-row">
            <div className="flex gap-2">
              <select
                onChange={(e) => setToken(e.target.value as any)}
                className="w-full bg-[#0e0e16] text-white px-2.5 py-2 rounded-lg cursor-pointer"
              >
                {tokensArray.map((token, index) => (
                  <option key={index} value={token.mint as any}>
                    {token.symbol}
                  </option>
                ))}
              </select>
              <GambaUi.PortalTarget target="controls" />
              <GambaUi.PortalTarget target="play" />
            </div>
          </div>
        </div>
      </>
    );
  }