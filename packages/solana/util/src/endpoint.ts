import type { SolanaChain } from '@wallet-standard/solana-chains';
import {
    SOLANA_DEVNET_CHAIN,
    SOLANA_LOCALNET_CHAIN,
    SOLANA_MAINNET_CHAIN,
    SOLANA_TESTNET_CHAIN,
} from '@wallet-standard/solana-chains';

// Copied from @solana/web3.js
export const DEVNET_ENDPOINT = 'https://api.devnet.solana.com';
export const TESTNET_ENDPOINT = 'https://api.testnet.solana.com';
export const MAINNET_ENDPOINT = 'https://api.mainnet-beta.solana.com';

export function getChainForEndpoint(endpoint: string): SolanaChain {
    if (/\bdevnet\b/i.test(endpoint)) {
        return SOLANA_DEVNET_CHAIN;
    } else if (/\btestnet\b/i.test(endpoint)) {
        return SOLANA_TESTNET_CHAIN;
    } else if (/\blocalhost\b/i.test(endpoint) || /\b127\.0\.0\.1\b/.test(endpoint)) {
        return SOLANA_LOCALNET_CHAIN;
    } else {
        return SOLANA_MAINNET_CHAIN;
    }
}

export function getEndpointForChain(chain: SolanaChain, endpoint?: string): string {
    if (!endpoint) {
        if (chain === SOLANA_MAINNET_CHAIN) {
            endpoint = MAINNET_ENDPOINT;
        } else if (chain === SOLANA_DEVNET_CHAIN) {
            endpoint = DEVNET_ENDPOINT;
        } else if (chain === SOLANA_TESTNET_CHAIN) {
            endpoint = TESTNET_ENDPOINT;
        } else if (chain === SOLANA_LOCALNET_CHAIN) {
            endpoint = 'http://localhost:8899';
        } else {
            endpoint = MAINNET_ENDPOINT;
        }
    }
    return endpoint;
}