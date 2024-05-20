/* eslint-disable react/no-unescaped-entities */

import NextLink from 'next/link'
import {
  Link,
  Stack,
  Text,
  Container,
  chakra,
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
import { BioSection, BioYear, BioTitle, BioSubtitle, BioList, ListIcon } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridCourse } from '../components/grid-course'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
import thumbPyton from '../public/images/courses/python-essentials-1.1.png'
import thumbDocker from '../public/images/courses/docker-essentials.png'
import thumbPythonDataScience from '../public/images/courses/python-for-data-science.png'
import thumbPythonIbmAi from '../public/images/courses/python-ibm-ai.png'

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
        Hello, I&apos;m a computer systems engineering student from Mexico!
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
          About
        </Heading>
        <Paragraph>
          Gatovsky is a dedicated student pursuing a degree in Systems Engineering.
          Python is his favorite language and which he masters best, 
          he performs optimally in the use of technologies such as Docker, 
          Pulumi SDK, Bash and K8S integrated with AWS cloud services.
          Currently, he&apos;s actively contributing to a project named{' '}
          <Link as={NextLink} href="https://www.cloudbuddies.io/" target="_blank" passHref scroll={false}>
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
          Expirience
        </Heading>
        <BioSection style={{marginBottom: '1rem'}}>
          <BioTitle> <Link as={NextLink} href="https://www.cloudbuddies.io/" target="_blank" passHref scroll={false}>
            Cloudbuddies
          </Link> {' '}- Jr Cloud Engineer (Remote)
          </BioTitle>
          <BioYear>2022 to present</BioYear>
          <chakra.lu style={{textAlign: 'justify', textIndent: 0}}>
            <chakra.li display="inline-block" marginBottom="0.5em">
              <ListIcon />
            Developed modules with Python using the Pulumi SDK for SaaS platforms.
            </chakra.li>
            <chakra.li display="inline-block" marginBottom="0.5em">
              <ListIcon />
            Utilized AWS services for cloud development, including API Gateway, Lambda, ECR, EC2, S3, DynamoDB, RDS, and CloudWatch.
            </chakra.li>
            <chakra.li display="inline-block" marginBottom="0.5em">
              <ListIcon />
            Automated processes with Bash and Docker for local development environments on Linux, Windows, and macOS systems.
            </chakra.li>
            <chakra.li display="inline-block" marginBottom="0.5em">
              <ListIcon />
            Refactored code and maintained GitHub repositories.
            </chakra.li>
          </chakra.lu>
        </BioSection>
        <BioSection style={{marginBottom: '2rem'}}>
          <BioTitle>
          <Link as={NextLink} href="https://jinicuil.com/" target="_blank" passHref scroll={false}>
            Jinicuil
          </Link> {' '}- Trainee in Networking Security (Remote)
          </BioTitle>
          <BioYear>2024 to present</BioYear>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Education
        </Heading>
        <BioSection>
          <Stack>
            <Box>
              <BioTitle>
              <Link as={NextLink} href="https://www.itcancun.edu.mx/" target="_blank" passHref scroll={false}>
                Instituto Tecnológico de Cancún
              </Link>
              </BioTitle>
              <BioYear>2020</BioYear>
            </Box>
            <Box>
            <BioSubtitle>
                Bachelor&apos;s Degree in Systems Engineering
              </BioSubtitle>
            </Box>
            <Box>
              <BioSubtitle>Academic Achievements: </BioSubtitle>
            </Box>
            <Box>
              <BioList>
                <chakra.li display="inline-block" marginBottom="1em">
                  <ListIcon />
                <Text as="span" fontWeight="600" >CODING ITCANCUN 2023</Text> - Awarded first place in an internal programming competition at <Link as={NextLink} href="https://www.itcancun.edu.mx/" target="_blank" passHref scroll={false}>ITCancún</Link>, demonstrating exceptional team collaboration.
                </chakra.li>
                <chakra.li display="inline-block" marginBottom="1em">
                  <ListIcon />
                <Text as="span" fontWeight="600" >INNOVATEC 2023</Text> - Developed a static website to promote the <Link as={NextLink} href="https://www.lasalsona.com/"  target='_blank' passHref scroll={false}>La Salsona</Link> project, which participated in the annual tecnology competition <Link as={NextLink} href="https://innova.tecnm.mx/" target="_blank" passHref scroll={false} > InnovaTecNM </Link> and won a place at the regional level.
                </chakra.li>
                <chakra.li display="inline-block" marginBottom="1em">
                  <ListIcon />
                <Text as="span" fontWeight="600" >CODING CUP TECNM 2022</Text> - Competed in a national team competition among all technological institutes in Mexico, achieving 68th place.
                </chakra.li>
                <chakra.li display="inline-block" marginBottom="1em">
                  <ListIcon />
                <Text as="span" fontWeight="600" >CODING ITCANCUN 2022</Text> - Participated in individual competitive programming at <Link as={NextLink} href="https://www.itcancun.edu.mx/" target="_blank" passHref scroll={false}>ITCancún</Link>, achieving 7th place.
                </chakra.li>
              </BioList>
            </Box>
          </Stack>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" style={{marginBottom: '2rem'}}>
          Courses
        </Heading>
        <SimpleGrid columns={[2, 2, 2]} gap={6}>
        <GridCourse 
          href="https://www.credly.com/badges/f5516c6a-baac-488f-901a-a1e6c3d463f9/public_url"
          title="Python Project for AI & App. Dev." 
          thumbnail={thumbPythonIbmAi}>
          Issuer: Coursera |
          Authorized: IBM
        </GridCourse>
        <GridCourse 
          href="https://www.credly.com/badges/ba7f4454-da0c-4b63-90a1-6c2c7280c2c6/public_url"
          title="Python Essentials 1" 
          thumbnail={thumbPyton}>
          Issuer: Cisco
        </GridCourse>
        <GridCourse 
          href="https://www.credly.com/badges/3a032413-10ff-430e-863f-72341a35e177/public_url"
          title="Docker Essentials: A Developer Introduction" 
          thumbnail={thumbDocker}>
          Issuer: IBM
        </GridCourse>
        <GridCourse 
          href="https://www.credly.com/badges/dc817c2c-502f-4b26-bd26-8d402d9b48f9/public_url"
          title="Python for Data Science" 
          thumbnail={thumbPythonDataScience}>
          Issuer: IBM
        </GridCourse>
        </SimpleGrid>
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
