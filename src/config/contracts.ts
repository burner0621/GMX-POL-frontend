import { ARBITRUM, MAINNET } from "./chains";

export const XGMT_EXCLUDED_ACCOUNTS = [
  "0x330eef6b9b1ea6edd620c825c9919dc8b611d5d5",
  "0xd9b1c23411adbb984b1c4be515fafc47a12898b2",
  "0xa633158288520807f91ccc98aa58e0ea43acb400",
  "0xffd0a93b4362052a336a7b22494f1b77018dd34b",
];

const CONTRACTS = {
  [MAINNET]: {
    //Goerli Testnet
    Vault: "0x6415E771047A77287372331bf1698cc7FC9F4fBC", //replaced
    Router: "0x976fe94Cf73CeaFff397084545653d3E61D2CdB3", //replaced
    VaultReader: "0xd7b623A905c5538F7a600E2c06247b6586561Ee1", //replaced
    Reader: "0x6493c076d2577761367a4B24FA1CD5D5A82C5279", //replaced
    GlpManager: "0xA9A3355F66E535281aCf1Ee7E290C6c16DdDBeCd", //replaced
    RewardRouter: "0xaBBFa33556918fFe66cd997621173a9EBEac47b0", //replaced
    RewardReader: "0x3d7d51865a66eA28eA0705917E0b834C843B51af", //replaced
    NATIVE_TOKEN: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    GLP: "0x45b21C3DeB61D18042528AeA7b79cba083c9349f", //replaced
    GMX: "0x76AEed356436f18370285C14E4dEF8b4fEb70dEd", //replaced
    ES_GMX: "0xa2599F6E00440E6C86C5E2Da1790B2F74a987CE3", //replaced
    BN_GMX: "0x370aa02183D57885d9dfbE04DDDe53F862eDAe57", //replaced
    USDG: "0xd20D59D4538674F0b517244eDC12498726f84bD7", //replaced
    ES_GMX_IOU: "0x03598f8e5Bb7f8BF2de359b9767C57149974aD8C", // placeholder address

    StakedGmxTracker: "0xa3673801369D0d01e44C95fbeE6BC9B552623ED0", //replaced
    BonusGmxTracker: "0x239c4183807E89F0a521b14a98203Ac4524a8504", //replaced
    FeeGmxTracker: "0xcF560c86b6551Fc2348Bc4B4230bb7D761c63dC9", //replaced
    StakedGlpTracker: "0xBEDbE5A6B18504F3F17592008a2D5CdA7e266c5C", //replaced
    FeeGlpTracker: "0xF371cD2b33cB9dC3d859e5B55aA9b31fb0443C2a", //replaced

    StakedGmxDistributor: "0xabdE9c70fB2e1FC769A7cA519a1AEeaF4c385Cc9", //replaced
    StakedGlpDistributor: "0xfe33a2f0926169B401D649a5A8dB7e25Eb0eF2a4", //replaced

    GmxVester: "0x339Ff7dE5bCC7F1B8A554437aaAC570BE0e8BC49", //replaced
    GlpVester: "0xB227aa1C143d123E0240C0E736EBa5221D03E6b9", //replaced

    OrderBook: "0x32AE452dD34425c7B7EE1B107d819A83827141FA", //replaced
    OrderExecutor: "0x32AE452dD34425c7B7EE1B107d819A83827141FA", //replaced
    OrderBookReader: "0xB5424e22aC9BA580F1d00CA4615231ee2b93C212", //replaced

    PositionRouter: "0xCD4158e44680C0c5bEd3E495cA7B90bFBCC2CC8F", //replaced
    PositionManager: "0xAC4a99aBF00Ab100F870Ee0b6b4118C030DDA5F4", //replaced

    UniswapGmxEthPool: "0x80A9ae39310abf666A87C743d6ebBD0E8C42158E", //replaced
    ReferralStorage: "0x6e38A04522631266EBce6824D47085c51E8e46E6", //replaced
    ReferralReader: "0x3dd10C2ff1CC9513FA48E171fdaba59Ec42eFc91", //replaced
  },

  [ARBITRUM]: {
    // arbitrum mainnet
    Vault: "0x6415E771047A77287372331bf1698cc7FC9F4fBC", //replaced
    Router: "0x976fe94Cf73CeaFff397084545653d3E61D2CdB3", //replaced
    VaultReader: "0xd7b623A905c5538F7a600E2c06247b6586561Ee1", //replaced
    Reader: "0x6493c076d2577761367a4B24FA1CD5D5A82C5279", //replaced
    GlpManager: "0xA9A3355F66E535281aCf1Ee7E290C6c16DdDBeCd", //replaced
    RewardRouter: "0xaBBFa33556918fFe66cd997621173a9EBEac47b0", //replaced
    RewardReader: "0x3d7d51865a66eA28eA0705917E0b834C843B51af", //replaced
    NATIVE_TOKEN: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    GLP: "0x45b21C3DeB61D18042528AeA7b79cba083c9349f", //replaced
    GMX: "0x76AEed356436f18370285C14E4dEF8b4fEb70dEd", //replaced
    ES_GMX: "0xa2599F6E00440E6C86C5E2Da1790B2F74a987CE3", //replaced
    BN_GMX: "0x370aa02183D57885d9dfbE04DDDe53F862eDAe57", //replaced
    USDG: "0xd20D59D4538674F0b517244eDC12498726f84bD7", //replaced
    ES_GMX_IOU: "0x03598f8e5Bb7f8BF2de359b9767C57149974aD8C", // placeholder address
    StakedGmxTracker: "0xa3673801369D0d01e44C95fbeE6BC9B552623ED0", //replaced
    BonusGmxTracker: "0x239c4183807E89F0a521b14a98203Ac4524a8504", //replaced
    FeeGmxTracker: "0xcF560c86b6551Fc2348Bc4B4230bb7D761c63dC9", //replaced
    StakedGlpTracker: "0xBEDbE5A6B18504F3F17592008a2D5CdA7e266c5C", //replaced
    FeeGlpTracker: "0xF371cD2b33cB9dC3d859e5B55aA9b31fb0443C2a", //replaced

    StakedGmxDistributor: "0xabdE9c70fB2e1FC769A7cA519a1AEeaF4c385Cc9", //replaced
    StakedGlpDistributor: "0xfe33a2f0926169B401D649a5A8dB7e25Eb0eF2a4", //replaced

    GmxVester: "0x339Ff7dE5bCC7F1B8A554437aaAC570BE0e8BC49", //replaced
    GlpVester: "0xB227aa1C143d123E0240C0E736EBa5221D03E6b9", //replaced

    OrderBook: "0x32AE452dD34425c7B7EE1B107d819A83827141FA", //replaced
    OrderExecutor: "0x32AE452dD34425c7B7EE1B107d819A83827141FA", //replaced
    OrderBookReader: "0xB5424e22aC9BA580F1d00CA4615231ee2b93C212", //replaced

    PositionRouter: "0xCD4158e44680C0c5bEd3E495cA7B90bFBCC2CC8F", //replaced
    PositionManager: "0xAC4a99aBF00Ab100F870Ee0b6b4118C030DDA5F4", //replaced

    UniswapGmxEthPool: "0x80A9ae39310abf666A87C743d6ebBD0E8C42158E",
    ReferralStorage: "0x6e38A04522631266EBce6824D47085c51E8e46E6", //replaced
    ReferralReader: "0x3dd10C2ff1CC9513FA48E171fdaba59Ec42eFc91", //replaced
  },
};

export function getContract(chainId: number, name: string): string {
  if (!CONTRACTS[chainId]) {
    throw new Error(`Unknown chainId ${chainId}`);
  }

  if (!CONTRACTS[chainId][name]) {
    throw new Error(`Unknown contract "${name}" for chainId ${chainId}`);
  }

  return CONTRACTS[chainId][name];
}
