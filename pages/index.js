/* eslint-disable react/no-unescaped-entities */

import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const email = () => {
  return process.env.EMAIL_ADDRESS;
}

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m acomputer systems engineering student from Mexico!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Héctor H. Arieta
          </Heading>
          <p>Engineering Student ( Linux lover / Pythonist / Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/gatovsky.png"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Gatovsky is a dedicated student pursuing a degree in Systems Engineering.
          Python is his favorite language and which he masters best, 
          he performs optimally in the use of technologies such as Docker, 
          Pulumi SDK, Bash and K8S integrated with AWS and GCP cloud services.
          Currently, he&apos;s actively contributing to a project named{' '}
          <Link as={NextLink} href="https://archie-sandbox.cloudbuddies.online/" target="_blank" passHref scroll={false}>
          Archie
          </Link>
          {' '}where leverage his skills in infrastructure as code.
        </Paragraph>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection style={{marginBottom: '1rem'}}>
          <BioYear>1991</BioYear>
          Born in Cancún (🏖️), Mexico.
        </BioSection>
        <BioSection style={{marginBottom: '1rem'}}>
          <BioYear>2020 to present</BioYear>
          Pursuing a degree in Systems Engineering at 
          Instituto Tecnológico de Cancún
        </BioSection>
        <BioSection style={{marginBottom: '1rem'}}>
          <BioYear>2022 to present</BioYear>
          Working part-time at{' '} <Link as={NextLink} href="https://www.cloudbuddies.io/" target="_blank" passHref scroll={false}>
            Cloudbuddies
          </Link> {' '}as a jr Cloud Engineer
        </BioSection>
        <BioSection style={{marginBottom: '1rem'}}>
          <BioYear>2023 to present</BioYear>
          Working part-time at{' '} 
          <Link as={NextLink} href="https://jinicuil.com/" target="_blank" passHref scroll={false}>
            Jinicuil
          </Link> {' '}as trainee in Networking
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Python, Linux, Docker, Bash, and Vim.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/hharieta" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @hharieta
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/SectaPythonica" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @SectaPythonica
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/inge.gatovsky/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @inge.gatovsky
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/hector-h-arieta-7b3b3b1b7/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @hharieta
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <p>
        Feel free to reach out. I welcome any inquiries or opportunities for collaboration.
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href={`mailto:${email()}`}
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Contact me
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
