import { ARBITRUM, MAINNET } from "./chains";

export const SUBGRAPH_URLS = {
  [ARBITRUM]: 
  // {
  //   stats: "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-stats",
  //   referrals: "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-arbitrum-referrals",
  //   nissohVault: "https://api.thegraph.com/subgraphs/name/nissoh/gmx-vault",
  // },
  {
    stats: "https://api.thegraph.com/subgraphs/name/glorydream413/polo-stats",
    referrals: "https://api.thegraph.com/subgraphs/name/glorydream413/polo-referrals",
    trades:"https://api.thegraph.com/subgraphs/name/glorydream413/polo-trades",
  },
  [MAINNET]: {
    stats: "https://api.thegraph.com/subgraphs/name/glorydream413/polo-stats",
    referrals: "https://api.thegraph.com/subgraphs/name/glorydream413/polo-referrals",
    trades:"https://api.thegraph.com/subgraphs/name/glorydream413/polo-trades",
  },

  common: {
    chainLink: "https://api.thegraph.com/subgraphs/name/deividask/chainlink",
  },
};
