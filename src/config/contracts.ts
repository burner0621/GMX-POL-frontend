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
    Vault: "0xC730aE643CD99bC9BD84644167eae1863827E21F", //replaced
    Router: "0x846700cf3A975D96fB5D409312ff22E050b62F6c", //replaced
    VaultReader: "0x3dD4AE5f8D0c8eD7ea82Aa46cc54EEF20D7e51b5", //replaced
    Reader: "0xAaCa5086421324c24F54Eb49b08Bc055c0685E23", //replaced
    GlpManager: "0x89CB675f523a81847dC11209Bb07D56bC9A5841e", //replaced
    RewardRouter: "0x64762D1344bF52796cE86Ac20100DcC2bcC768bf", //replaced
    RewardReader: "0x8a21A9436b0B4a7c3EB3e3aC897eE7d6bc55852E", //replaced
    NATIVE_TOKEN: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    GLP: "0x20a9481E8Da12395F1c3971deAF2e2095AE1D233", //replaced
    GMX: "0x5D93C7449e9fb5A065007d0b18C6CeFa3CAa1664", //replaced
    ES_GMX: "0x92436217940268EA8AC07A5e42E3e3B0d20E874a", //replaced
    BN_GMX: "0x76D5A344A8016038E3164fBD3eE0747A20F99476", //replaced
    USDG: "0x3FbeeeceC851d9d4fB7dE3C519ef822fEaA15612", //replaced
    ES_GMX_IOU: "0x55D461b40Ec354B28E7df5e13360629DBFD7867d", // placeholder address

    StakedGmxTracker: "0xbbF5D09a19b4bbb21cF8B9c1843af38530eC514c", //replaced
    BonusGmxTracker: "0xfDF5b983bE7f0C3930937f5fC80DA20852E98FcF", //replaced
    FeeGmxTracker: "0x909733921725b7Fb630BEeB668b8D2b67531dd7e", //replaced
    StakedGlpTracker: "0x76BC367b06fD25C90Bad9C9C277F5644a2f0F4ea", //replaced
    FeeGlpTracker: "0xB0A06AEc194d2C1a8A189A6a292Af179F2e8F53B", //replaced

    StakedGmxDistributor: "0x1dD54D6661D799732537DB5a26858a87F71C4442", //replaced
    StakedGlpDistributor: "0x2Cc569E619104eF3e1E9c2baC4D12cB92e50CC1B", //replaced

    GmxVester: "0xB8b429FA526bDE27850680f359749556CF1A1F83", //replaced
    GlpVester: "0xA7bF6578A7232601D663a258C23C30Aac8263dEF", //replaced

    OrderBook: "0xeF1c0684F8415Cd8C8E114A854a30c1ecA46EC8C", //replaced
    OrderExecutor: "0xeF1c0684F8415Cd8C8E114A854a30c1ecA46EC8C", //replaced
    OrderBookReader: "0x26DB8e5e552BB848E079D8DABE33177936CB69B4", //replaced

    PositionRouter: "0x55846D1a9b4d627D5209852bB683cf54D9A602bC", //replaced
    PositionManager: "0xB75db3B6Ee10eDd0CE61856071f08cAd40910acC", //replaced

    TraderJoeGmxAvaxPool: "0x198Cb829FE2af472d6Da0F9070Dff51C67cb9F01", //replaced
    ReferralStorage: "0x2d757374f7640b054E573756d09D56231381c87b", //replaced
    ReferralReader: "0x2eA4F96f0832e92F2AE145Fa95c6fB58f3542EE3", //replaced
  },

  [ARBITRUM]: {
    // arbitrum mainnet
    Vault: "0x489ee077994B6658eAfA855C308275EAd8097C4A",
    Router: "0xaBBc5F99639c9B6bCb58544ddf04EFA6802F4064",
    VaultReader: "0xfebB9f4CAC4cD523598fE1C5771181440143F24A",
    Reader: "0x2b43c90D1B727cEe1Df34925bcd5Ace52Ec37694",
    GlpManager: "0x321F653eED006AD1C29D174e17d96351BDe22649",
    RewardRouter: "0xA906F338CB21815cBc4Bc87ace9e68c87eF8d8F1",
    RewardReader: "0x8BFb8e82Ee4569aee78D03235ff465Bd436D40E0",
    NATIVE_TOKEN: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    GLP: "0x4277f8F2c384827B5273592FF7CeBd9f2C1ac258",
    GMX: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    ES_GMX: "0xf42Ae1D54fd613C9bb14810b0588FaAa09a426cA",
    BN_GMX: "0x35247165119B69A40edD5304969560D0ef486921",
    USDG: "0x45096e7aA921f27590f8F19e457794EB09678141",
    ES_GMX_IOU: "0x6260101218eC4cCfFF1b778936C6f2400f95A954",
    StakedGmxTracker: "0x908C4D94D34924765f1eDc22A1DD098397c59dD4",
    BonusGmxTracker: "0x4d268a7d4C16ceB5a606c173Bd974984343fea13",
    FeeGmxTracker: "0xd2D1162512F927a7e282Ef43a362659E4F2a728F",
    StakedGlpTracker: "0x1aDDD80E6039594eE970E5872D247bf0414C8903",
    FeeGlpTracker: "0x4e971a87900b931fF39d1Aad67697F49835400b6",

    StakedGmxDistributor: "0x23208B91A98c7C1CD9FE63085BFf68311494F193",
    StakedGlpDistributor: "0x60519b48ec4183a61ca2B8e37869E675FD203b34",

    GmxVester: "0x199070DDfd1CFb69173aa2F7e20906F26B363004",
    GlpVester: "0xA75287d2f8b217273E7FCD7E86eF07D33972042E",

    OrderBook: "0x09f77E8A13De9a35a7231028187e9fD5DB8a2ACB",
    OrderExecutor: "0x7257ac5D0a0aaC04AA7bA2AC0A6Eb742E332c3fB",
    OrderBookReader: "0xa27C20A7CF0e1C68C0460706bB674f98F362Bc21",

    PositionRouter: "0xb87a436B93fFE9D75c5cFA7bAcFff96430b09868",
    PositionManager: "0x75E42e6f01baf1D6022bEa862A28774a9f8a4A0C",

    UniswapGmxEthPool: "0x80A9ae39310abf666A87C743d6ebBD0E8C42158E",
    ReferralStorage: "0xe6fab3f0c7199b0d34d7fbe83394fc0e0d06e99d",
    ReferralReader: "0x8Aa382760BCdCe8644C33e6C2D52f6304A76F5c8",
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
