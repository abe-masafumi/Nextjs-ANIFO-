import { Box, Badge, Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { Header } from '../components/Header'
import AuthProvider from './AuthContext'

import 'bootstrap/dist/css/bootstrap.min.css'
export const getServerSideProps = async (context) => {
  const keyword = context.query.address
  console.log(`☀️☀️queryが取得できました--> ${keyword}`)
  // ローカルと本番用で切り替えてね🤗🤗🤗
  // const res = await fetch(`https://loving-kusu-4281.lolipop.io/mypage.php`,
  const res = await fetch(`http://localhost/myfile_lab05/%20NFTMetaData/mypage.php`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(keyword),
  })
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function mypage({ data }) {
  // console.log(data);
  // console.log(data[0]['title']);

  return (
    <AuthProvider>
      <div className="container-fulid" style={{ background: '#0b1118' }}>
        <Header />
        <div style={{ height: 20 }}></div>
        <div className="h1 text-center" style={{ color: '#eef0e6' }}>
          マイアイテム一覧
        </div>
        <div style={{ height: 20 }}></div>

        <div className="row vw-100">
          {data != [] &&
            data.map((item, index) => (
              <div key={index} className="mx-auto p-0 my-2" style={{ width: 250 }}>
                <div style={{ padding: 0 }}>
                  <Box
                    maxW="sm"
                    width={'auto'}
                    borderWidth="1px"
                    borderRadius="5px"
                    overflow="hidden"
                    background={'#273748'}
                    // margin="6px"
                    border="1px solid #1dbfee"
                    color="#c1d9f0"
                    boxShadow="0px 0px 7px #ccc"
                    // verflow-wrap="break-all"
                  >
                    <Link href={{ pathname: '/thisTreasue', query: { name: item.uniqid } }}>
                      <a>
                        <Image
                          // 🤗🤗デプロイ時変更🤗🤗
                          // src={`https://loving-kusu-4281.lolipop.io/image/${item.uniqueNumber}${item.image}`}
                          src={`http://localhost/myfile_lab05/%20NFTMetaData/image/${item.uniqid}${item.image}`}
                          alt="Rear view of modern home with pool"
                          width="100%"
                          height="190px"
                          margin="auto"
                          display="flex"
                          objectFit="container"
                        />
                      </a>
                    </Link>
                    <Box p="6" width={335}>
                      <Box d="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          New
                        </Badge>
                        <Box
                          color="gray.500"
                          fontWeight="semibold"
                          letterSpacing="wide"
                          fontSize="xs"
                          textTransform="uppercase"
                          ml="2"
                        >
                          2 beds &bull; 2 baths
                        </Box>
                      </Box>
                      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                        {item.title}
                      </Box>
                      <Box>
                        {item.plice}
                        <Box as="span" color="gray.600" fontSize="sm">
                          / wk
                        </Box>
                      </Box>
                      <Box d="flex" mt="2" alignItems="center">
                        {Array(5)
                          .fill('')
                          .map((_, i) => (
                            <StarIcon key={i} color={i < 4 ? 'teal.500' : 'gray.300'} />
                          ))}
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                          34 reviews
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </div>
              </div>
            ))}
        </div>
      </div>
    </AuthProvider>
  )
}
