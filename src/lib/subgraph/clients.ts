import { createClient } from "./utils";
import { SUBGRAPH_URLS } from "config/subgraph";
import { ARBITRUM, MAINNET } from "config/chains";

export const chainlinkClient = createClient(SUBGRAPH_URLS.common.chainLink);

export const arbitrumGraphClient = createClient(SUBGRAPH_URLS[ARBITRUM].stats);
export const arbitrumReferralsGraphClient = createClient(SUBGRAPH_URLS[ARBITRUM].referrals);
export const nissohGraphClient = createClient(SUBGRAPH_URLS[ARBITRUM].trades);

export const ethGraphClient = createClient(SUBGRAPH_URLS[ARBITRUM].stats);
export const ethReferralsGraphClient = createClient(SUBGRAPH_URLS[ARBITRUM].referrals);
export const ethGraphClientForTrades = createClient(SUBGRAPH_URLS[ARBITRUM].trades);


export function getGmxGraphClient(chainId: number) {
  if (chainId === ARBITRUM) {
    return arbitrumGraphClient;
  } else if (chainId === MAINNET) {
    return ethGraphClient;
  }

  throw new Error(`Unsupported chain ${chainId}`);
}
