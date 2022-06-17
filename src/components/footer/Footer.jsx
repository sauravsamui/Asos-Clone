import React from 'react'
import { Box, Image, Flex, Spacer, Heading} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <Box >
        <Flex justify={"center"} gap={"25px"} h={65} align="center">
          <Flex gap={"40px"} w="40%" justify={"end"}>
            <Box><Image w={30} h={30} src="data:image/png;base64,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"/></Box>
            <Box><Image h={31} w={31} src="data:image/jpeg;base64,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"/></Box>
            <Box><Image h={29} w={29} src="data:image/png;base64,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"/></Box>
          </Flex>
          <Box fontSize="25px" fontWeight="100"> | </Box>
          <Flex gap="35px" w="45%">
          <Box><Image w={35} h={22} src="https://images.asos-media.com/navigation/visa-png"></Image></Box>
          <Box><Image w={35} h={22} src="https://images.asos-media.com/navigation/mastercard-png"></Image></Box>
          <Box><Image w={35} h={22} src="https://images.asos-media.com/navigation/pay-pal-png"></Image></Box>
          <Box><Image w={35} h={22} src="https://images.asos-media.com/navigation/american-express-png"></Image></Box>
          <Box><Image w={35} h={22} src="https://images.asos-media.com/navigation/visa-electron-png"></Image></Box>
          </Flex>
        </Flex>
        <Flex bg={"whitesmoke"} p="30px 0px" h="250px">
          <Spacer/>
              <Flex direction="column" lineHeight="30px" fontSize="sm" align="start">
                <Heading mb="20px" size="xs" color="gray" letterSpacing="2px">HELP & INFORMATION</Heading>
                  <Link to="/" className={styles.link}>Help</Link>
                  <Link to="/" className={styles.link}>Track order</Link>
                  <Link to="/" className={styles.link}>Delivery & returns</Link>
              </Flex>
              <Spacer/>
              <Flex direction="column" lineHeight="30px" fontSize="sm" align="start">
              <Heading mb="20px" size="xs" color="gray" letterSpacing="2px">ABOUT ASOS</Heading>
                  <Link to="/" className={styles.link}>About</Link>
                  <Link to="/" className={styles.link}>Careers at ASOS</Link>
                  <Link to="/" className={styles.link}>Corporate responsibilty</Link>
                  <Link to="/" className={styles.link}>Inverstor's site</Link>
              </Flex>
              <Spacer/>
              <Flex direction="column" lineHeight="30px" fontSize="sm" align="start">
              <Heading mb="20px" size="xs" color="gray" letterSpacing="2px">MORE FROM ASOS</Heading>   
                  <Link to="/" className={styles.link}>Mobile & ASOS apps</Link>
                  <Link to="/" className={styles.link}>ASOS marketplace</Link>
                  <Link to="/" className={styles.link}>Gift vouchers</Link>
                  <Link to="/" className={styles.link}>Black friday</Link>   
                  <Link to="/" className={styles.link}>ASOS x Thrift+</Link>   
              </Flex>
              <Spacer/>
              <Flex direction="column" lineHeight="30px" fontSize="sm" align="start">
              <Heading mb="20px" size="xs" color="gray" letterSpacing="2px">SHOPPING FROM</Heading>
              <Link to="/" className={styles.link}>Your in India | CHANGE</Link>
              </Flex>
              <Spacer/>
        </Flex>
        <Flex p="10px 120px" h="55px" fontSize="xs" bg="#dddddd" align="center">
          <Box>© 2022 ASOS</Box>
          <Spacer/>
          <Box>{`Privacy & Cookies   |   Ts&Cs   |   Accessibility`}</Box>
        </Flex>
    </Box>
  )
}

export default Footer