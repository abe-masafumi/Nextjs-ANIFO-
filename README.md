This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# 使った環境構築

https://github.com/abe-masafumi/NEXT.JS-Environment2-

# コミットメッセージの頭文字

- fix：バグ修正
- hotfix：クリティカルなバグ修正
- add：新規（ファイル）機能追加
- update：機能修正（バグではない）
- change：仕様変更
- clean：整理（リファクタリング等）
- disable：無効化（コメントアウト等）
- remove：削除（ファイル）
- upgrade：バージョンアップ
- revert：変更取り消し

# chacra-ui のインストール

> ターミナルで実行  
> `yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4` > `import { Box } from "@chakra-ui/react"`

# hacra-ui icon のインストール

```bash
yarn add @chakra-ui/icons
import { StarIcon } from '@chakra-ui/icons'
```

# 使用カラー

- メインカラー #0b1118
- サブメインカラー #152032
- テキストカラー #eef0e6
- シャドウカラー #ccc
- 透明のカラーコード #0000ffff

# material-ui のインストール

```bash
yarn add @material-ui/core
```

# ethers のインストール

```bash
yarn add ethers
```

# web3 のインストール

```bash
npm i --save-dev @types/web3
```

# デプロイ時の変更箇所
```
index.tsx X1
thisTreasue.js X2
mintOnlyPage.js X3
createSingleTreasure.js X1
Treasures.js X1
mypage.js X2
```

# コンパイル
```
hh compile
npx hardhat run scripts/deploy.js --network ropsten
```

# interface
> https://qiita.com/t_t238/items/5bbb71d817404b49961c

# setApprovalForAll
> https://github.com/OpenZeppelin/openzeppelin-contracts-docs/blob/master/demo-docs/api/token/ERC721.md#ERC721.setApprovalForAll(address,bool)

# market
> https://www.youtube.com/watch?v=4Pm1Furz5HM

> https://www.youtube.com/watch?v=GKJBEEXUha0

> https://v5.myetherwallet.com/interface/dashboard
