import React, { useEffect, useMemo, useRef, useState } from "react";
import { createQR, encodeURL, TransferRequestURLFields, findReference, validateTransfer, FindReferenceError, ValidateTransferError } from "@solana/pay";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";
import { useRouter } from "next/router";
import calculatePrice from "../components/calculatePrice";


const usdcAddress = new PublicKey('Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr')

export default function Checkout() {
  // const [recieverPKey, setRecieverPKey] = useState()
  const router = useRouter()

  // ref to a div where we'll show the QR code
  const qrRef = useRef(null)

  const recieverAddress = new PublicKey(router.query.address)

  const amount = useMemo(() => calculatePrice(router.query), [router.query])

  
  // Unique address that we can listen for payments to
  const reference = useMemo(() => Keypair.generate().publicKey, [])

  // Get a connection to Solana devnet
  const network = WalletAdapterNetwork.Devnet
  const endpoint = clusterApiUrl(network)
  const connection = new Connection(endpoint)

  // Solana Pay transfer params
  const urlParams = {
    recipient: recieverAddress,
    splToken: usdcAddress,
    amount,
    reference,
    label: `Send money to ${router.query.address}`,
    message: "Thanks for using Lamhi! 💖",
  }

  // Encode the params into the format shown
  const url = encodeURL(urlParams)
  // console.log({ url })

  // Show the QR code
  useEffect(() => {
    const qr = createQR(url, 512, 'transparent')
    if (qrRef.current && amount.isGreaterThan(0)) {
      qrRef.current.innerHTML = ''
      qr.append(qrRef.current)
    }
  })


  // Check every 0.5s if the transaction is completed
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        // Check if there is any transaction for the reference
        const signatureInfo = await findReference(connection, reference, { finality: 'confirmed' })
        // Validate that the transaction has the expected recipient, amount and SPL token
        await validateTransfer(
          connection,
          signatureInfo.signature,
          {
            recipient: recieverAddress,
            amount,
            splToken: usdcAddress,
            reference,
          },
          { commitment: 'confirmed' }
        )
        router.push('/thank-you')
      } catch (e) {
        if (e instanceof FindReferenceError) {
          // No transaction found yet, ignore this error
          return;
        }
        if (e instanceof ValidateTransferError) {
          // Transaction is invalid
          console.error('Transaction is invalid', e)
          return;
        }
        console.error('Unknown error', e)
      }
    }, 500)
    return () => {
      clearInterval(interval)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount])

  return (
    <div className="flex flex-col items-center gap-8 h-screen">
     <button type="button" onClick={() => router.push('/dashboard')} className="items-start px-20 rounded-md py-2 max-w-fit bg-gray-900 text-white hover:scale-105 mt-3">
				⬅️&nbsp;&nbsp; Go back to your dashboard
			</button>

      <div className="justify-center border-2 border-dashed border-gray-300 rounded-xl justify-center items-center h-[80vh] p-6">
         
      <h1>Please scan the QR code below with your Solana wallet if you want to send <span className="font-bold">${amount.toString()}</span> to 
      <span className="font-bold pl-1">{router.query.address}</span></h1>
      <p className="py-2 text-red-600">Please note that the transaction upon completion is irreversible</p>

      {/* div added to display the QR code */}
      <div ref={qrRef} />
      </div>
    </div>
  )
}