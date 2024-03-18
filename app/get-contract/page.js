"use client"
import { useState } from "react";
import { InfoCard, Input, Button } from "../components";
import { useStore } from "../store/store"


const getContract = () => {
  const { contractAddress, fetchContractAddress} = useStore()
  const [walletAddress, setWalletAddress] = useState('');
const [address, setAddress] = useState(null)
 const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    await fetchContractAddress(walletAddress);
    setAddress(contractAddress)
 };
  return (
    <div className="flex-1 sm:px-4 p-12">
      <div className="md:w-full">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-bold ml-4 sm:ml-0">
          Fetch Contract Address
        </h1>
        <div className="mt-5 text-justify">
          <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl minlg:text-2xl font-semibold ml-4 sm:ml-0">
            Description
          </h3>
          <InfoCard
            content="Companies can fetch the address of the SMART-CONTRACTS that will serve as a registry of all the products of the company"
            warning="Fetch the Company specific Contract Address by providing the Company specific Metamask Wallet Address in the below area"
            classStyles="text-md"
          />
          <div className="ml-4 sm:ml-0">
            <Input
              title="Fetch Address"
              placeholder="Enter the company wallet address"
              handleClick={(e) => setWalletAddress(e.target.value)}
            />
            <div className="mt-8 sm:my-4 flex sm:justify-end">
              <Button
                btnName="Fetch Address"
                classStyles="rounded-xl"
                handleClick={handleSubmit}
              />
            </div>
            <div>
            {address && (
              <InfoCard content="Contract Address" warning={address} />
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default getContract;