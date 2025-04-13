// src\constants.ts
import { PublicKey } from "@solana/web3.js";

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          PLATFORM FEES               │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

// Creator fee (in %)
export const PLATFORM_CREATOR_FEE = 1.0; // 5% !!max 5%!!

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.05; // 0.1%

// Referral fee (in %)
export const PLATFORM_REFERRAL_FEE = 0.0025; // 0.25%

// Toggle live toast events - (true = on, false = off)
export const LIVE_EVENT_TOAST = true;

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          FOOTER LINKS                │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const FOOTER_LINKS = [
  {
    href: "https://github.com/BankkRoll/Gamba-V2-Next.js",
    title: "👨‍💻 Build your own",
  },
  {
    href: "https://explorer.gamba.so/create",
    title: "🚀 Create Pool",
  },
  {
    href: "https://gamba.so/docs",
    title: "📖 Gamba Docs",
  },
  {
    href: "https://discord.com/invite/HSTtFFwR",
    title: "💬 Join Discord",
  },
];

export const FOOTER_TWITTER_LINK = {
  href: "https://twitter.com/bankkroll_eth",
  title: "© 2024 Template made with ❤️ by Bankk",
};

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          METATAGS (SEO)              │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const BASE_SEO_CONFIG = {
  defaultTitle: "CryptoCasinoClub",
  description:
    "The First and Best Decentralized Casino",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://play-gamba.vercel.app/",
    title: "Crypto Casino Club",
    description:
      "Decentralized & Transparent – No middlemen, no hidden odds. Every bet is verifiable on the blockchain.",
    images: [
      {
        url: "https://play-gamba.vercel.app/seo.png",
        alt: "Crypto Casino Club",
      },
    ],
    site_name: "Crypto Casino Club",
  },
  twitter: {
    cardType: "summary_large_image",
    site: "https://twitter.com/gambalabs",
    handle: "@gambalabs",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "casino, gaming, rewards, gambling, entertainment",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
  ],
};

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │      SUPPORTED PLATFORM TOKENS       │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const TOKENLIST = [
  // SOL
  {
    mint: new PublicKey("So11111111111111111111111111111111111111112"),
    name: "Solana",
    symbol: "SOL",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // USDC
  {
    mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    name: "USD Coin",
    symbol: "USDC",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // GUAC
  /*{
    mint: new PublicKey("AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR"),
    name: "Guacamole",
    symbol: "GUAC",
    image:
      "https://bafkreiccbqs4jty2yjvuxp5x7gzgepquvv657ttauaqgxfhxghuz5us54u.ipfs.nftstorage.link/",
    decimals: 5,
    baseWager: 2000000e5,
  },*/

  // Add New Public pool
  // {
  //   mint: new PublicKey(""),
  //   name: "",
  //   symbol: "",
  //   image: "",
  //   decimals: 0,
  //   baseWager: 0,
  // },

  // Add New Private pool
  // {
  //   mint: new PublicKey(""),
  //   poolAuthority: new PublicKey(""), // REQUIRED FOR PRIVATE POOLS ONLY
  //   name: "",
  //   symbol: "",
  //   image: "",
  //   decimals: 0,
  //   baseWager: 0,
  // },
];
