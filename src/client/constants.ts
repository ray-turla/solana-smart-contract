import {LAMPORTS_PER_SOL} from '@solana/web3.js';

export const SOL = (lamport: number): number =>
  parseInt(String(lamport)) / LAMPORTS_PER_SOL; // READ SOL
export const LAMPORT = (amount: number): number => amount * LAMPORTS_PER_SOL; // SEND SOL
// Connect to devnet
