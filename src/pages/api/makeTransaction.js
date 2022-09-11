import { createTransferCheckedInstruction, getAssociatedTokenAddress, getMint } from "@solana/spl-token"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { clusterApiUrl, Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"
//import { NextApiRequest, NextApiResponse } from "next"
// import { shopAddress, usdcAddress } from "../../lib/addresses"
import calculatePrice from "../../components/calculatePrice"

const shopAddress = new PublicKey('8AmRywfehcAqQWVxugxm8C8xvmXyrL9i2jZ5ht93eTdc') 
const usdcAddress = new PublicKey('Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr')


function get(res) {
    res.status(200).json({
      label: "Lamhi ⚡",
      icon: "https://freesvg.org/img/spite_lightning.png",
    })
}

async function post(
    req,
    res
  ) {
  try {
    // We pass the selected items in the query, calculate the expected cost
    const amount = calculatePrice(req.query)
    if (amount.toNumber() === 0) {
      res.status(400).json({ error: "Can't checkout with charge of 0" })
      return
    }

    // We pass the reference to use in the query
    const { reference } = req.query
    if (!reference) {
      res.status(400).json({ error: "No reference provided" })
      return
    }

    // We pass the buyer's public key in JSON body
    const { account } = req.body
    if (!account) {
      res.status(400).json({ error: "No account provided" })
      return
    }
    const buyerPublicKey = new PublicKey(account)
    const shopPublicKey = shopAddress

    const network = WalletAdapterNetwork.Devnet
    const endpoint = clusterApiUrl(network)
    const connection = new Connection(endpoint)

    // Get details about the USDC token
        const usdcMint = await getMint(connection, usdcAddress)
        // Get the buyer's USDC token account address
        const buyerUsdcAddress = await getAssociatedTokenAddress(usdcAddress, buyerPublicKey)
        // Get the shop's USDC token account address
        const shopUsdcAddress = await getAssociatedTokenAddress(usdcAddress, shopPublicKey)

    // Get a recent blockhash to include in the transaction
    const { blockhash } = await (connection.getLatestBlockhash('finalized'))

    const transaction = new Transaction({
      recentBlockhash: blockhash,
      // The buyer pays the transaction fee
      feePayer: buyerPublicKey,
    })

    // Create the instruction to send SOL from the buyer to the shop
    // const transferInstruction = SystemProgram.transfer({
    //   fromPubkey: buyerPublicKey,
    //   lamports: amount.multipliedBy(LAMPORTS_PER_SOL).toNumber(),
    //   toPubkey: shopPublicKey,
    // })

    // Create the instruction to send USDC from the buyer to the shop
    const transferInstruction = createTransferCheckedInstruction(
        buyerUsdcAddress, // source
        usdcAddress, // mint (token address)
        shopUsdcAddress, // destination
        buyerPublicKey, // owner of source address
        amount.toNumber() * (10 ** (await usdcMint).decimals), // amount to transfer (in units of the USDC token)
        usdcMint.decimals, // decimals of the USDC token
    )

    // Add the reference to the instruction as a key
    // This will mean this transaction is returned when we query for the reference
    transferInstruction.keys.push({
      pubkey: new PublicKey(reference),
      isSigner: false,
      isWritable: false,
    })

    // Add the instruction to the transaction
    transaction.add(transferInstruction)

    // Serialize the transaction and convert to base64 to return it
    const serializedTransaction = transaction.serialize({
      // We will need the buyer to sign this transaction after it's returned to them
      requireAllSignatures: false
    })
    const base64 = serializedTransaction.toString('base64')

    // Insert into database: reference, amount

    // Return the serialized transaction
    res.status(200).json({
      transaction: base64,
      message: "Thanks for using Lamhi! ⚡",
    })
  } catch (err) {
    console.error(err);

    res.status(500).json({ error: 'error creating transaction', })
    return
  }
}

export default async function handler(
    req,
    res
  ) {
    if (req.method === "GET") {
      return get(res)
    } else if (req.method === "POST") {
      return await post(req, res)
    } else {
      return res.status(405).json({ error: "Method not allowed" })
    }
}