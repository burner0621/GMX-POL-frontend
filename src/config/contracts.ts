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
    Vault: "0x6E611D52E79cC748b0c62e8b298ae8043b50bcf8", //replaced
    Router: "0x2ef906d2B6CECeb75D9899BC4AAdAaB151cfb491", //replaced
    VaultReader: "0xB958E25184c959a8Df9528D15c149679f1E31F5C", //replaced
    Reader: "0xFfFc8E808F1a94147d0E4d75a93fd2aE068Ff8C8", //replaced
    GlpManager: "0x074C5cF0628b0eE89b3904d6190a9702EcA7614A", //replaced
    RewardRouter: "0xa2d0cD3D7cF5F15612cD606d4e5fCD606EA31018", //replaced
    RewardReader: "0xCE74Bad8d0FF9850dF450062863f90A5EFf2768A", //replaced
    NATIVE_TOKEN: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    GLP: "0xc072Eb592aCf5FA31D470e64999a160c1A8b48C1", //replaced
    GMX: "0x50F6319f9a47b59c74384436e26904554Aa4cc0b", //replaced
    ES_GMX: "0x837EffA46B89AB4Df0DFBEF4cF296eBa9325DFA8", //replaced
    BN_GMX: "0x654a8653112a06C79C8028210EF4A4163A5CB6cc", //replaced
    USDG: "0xd44e9B799AcEC054c4A7f0f466012Ff45bAf5475", //replaced
    ES_GMX_IOU: "0x2d7F40b9119f65da6516419C6ded1e977A6F1182", // placeholder address

    StakedGmxTracker: "0xA390731dB79e346D4D6478Fe2d3b5C8883DBdf1C", //replaced
    BonusGmxTracker: "0xdA7C1A61d12D7f306C68d51A28ff6a37121A7Be7", //replaced
    FeeGmxTracker: "0x0b9b38f845fa37318659312BEAE8Ee692421A6F8", //replaced
    StakedGlpTracker: "0x1dCf6aF8B28C1dd45fF88F9c765873DAa42Fb493", //replaced
    FeeGlpTracker: "0x13dbB2D1Cb4be1dfd65aD7809ca4F85d18FbA20f", //replaced

    StakedGmxDistributor: "0x6A007371C89deb02fFFb3b9535DfBC7f2433184b", //replaced
    StakedGlpDistributor: "0xc3cCfd993BB037Ae6470Ca283f65bc031FA58aE4", //replaced

    GmxVester: "0x6029f552A80f8ffbA5915fD6652Aa0a02dafb86d", //replaced
    GlpVester: "0x04c30b0cB6DbF932cd536d985BF1DDcE5497FA8a", //replaced

    OrderBook: "0x1C966d38466519318e7D0a4BD5ABB7801Fb80B35", //replaced
    OrderExecutor: "0x1C966d38466519318e7D0a4BD5ABB7801Fb80B35", //replaced
    OrderBookReader: "0x1F8A60152E01CBd7CC810c4FB29950fA989BffF1", //replaced

    PositionRouter: "0x4f2209863A43585cc9D2f3624D6caB31b26D27d6", //replaced
    PositionManager: "0xb6c2f3A2a16CBaC75dd17990ba0E929f2fB4C4fd", //replaced

    TraderJoeGmxAvaxPool: "0x198Cb829FE2af472d6Da0F9070Dff51C67cb9F01", //replaced
    ReferralStorage: "0xac2E42Ec5B5B3FEB6D8DC264fb1352E78542212e", //replaced
    ReferralReader: "0x940edAb081ce763FCb161F8EAd616c412053c579", //replaced
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
