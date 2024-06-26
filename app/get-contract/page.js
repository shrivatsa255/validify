"use client"
import { useState} from "react";
import { useStore } from "../store/store"
import dynamic from "next/dynamic";
import { toast } from "sonner";
const DynamicInfoCard = dynamic(() => import('../components/InfoCard'), { ssr: false });
const DynamicButton = dynamic(() => import('../components/Button'), { ssr: false });
const DynamicCopyCard = dynamic(() => import('../components/CopyCard'), { ssr: false });

const getContract = () => {
  const { contractAddress } = useStore()
  const [address, setAddress] = useState(null)

  
 const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    contractAddress ? setAddress(contractAddress) : toast.info("No Contract Found")
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
          <DynamicInfoCard
            content="Companies can fetch the address of the SMART-CONTRACTS that will serve as a registry of all the products of the company"
            warning="Fetch the Company specific Contract Address by providing the Company specific Metamask Wallet Address in the below area"
            classStyles="text-md"
          />
          <div className="ml-4 sm:ml-0">
          <h1 className=' tracking-tight font-poppins font-semibold  dark:text-white text-nft-black-1 text-xl minlg:text-xl sm:text-[1.3rem]' >
          Click the below button to fetch your contract address
        </h1>
            <div className="mt-8 sm:my-4 flex sm:justify-end">
              <DynamicButton
                btnName="Fetch Address"
                classStyles="rounded-xl"
                handleClick={handleSubmit}
              />
            </div>
            <div>
            {address && (
              <DynamicCopyCard lable='Contract' content={address} />
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default getContract;