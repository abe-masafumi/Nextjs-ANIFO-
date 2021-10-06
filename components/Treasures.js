import { Box, Badge, Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import Link from 'next/link'


import 'bootstrap/dist/css/bootstrap.min.css'
// type TodoType = {
//   data: string
// }

export const Treasures = (props) => {
  const { data } = props
  console.log(data);
  
  return (
    // <div>
    //     {
    //       data.map((item,index) => (
    //         <div key={index} style={{color:"white"}}>
    //           {/* <div>{item}</div> */}
    //           <img src={`http://localhost/myfile_lab05/%20NFTMetaData/image/${item.uniqueNumber}${item.image}`} style={{height:200, width:200}} />
    //           <div>{item.title}</div>
    //           <div>{item.discription}</div>
    //           <div>{item.plice}</div>
    //         </div>
   
    //       ))
    //     }
    // </div>
          <div className="container-fulid">
            <div className="row vw-100">
              {
                data.map((item,index) => (
                  <div key={index} className="mx-auto p-0 my-2" style={{width:250}}>
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
                        <Link href="/thisTreasue">
                          <a>
                            <Image
                              src={`http://localhost/myfile_lab05/%20NFTMetaData/image/${item.uniqueNumber}${item.image}`}
                              alt='Rear view of modern home with pool'
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
                ))
              }
            </div>
          </div>
  );
};