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
import { BioSection, BioYear, BioTitle, BioSubtitle, BioContent, BioList, ListIcon } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridCourse } from '../components/grid-course'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
import thumbPyton from '../public/images/courses/python-essentials-1.1.png'
import thumbDocker from '../public/images/courses/docker-essentials.png'
import thumbPythonDataScience from '../public/images/courses/python-for-data-science.png'
import thumbPythonIbmAi from '../public/images/courses/python-ibm-ai.png'
import thumbP4E from '../public/images/courses/p4e.png'

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
          <p>Engineering Student ( Pythonist | Cloud Engineer )</p>
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
          <Box textAlign={'right'} marginTop={'-1.5em'} marginRight={'-1em'}>
          <BioYear>2022 to present</BioYear>
          </Box>
          <chakra.lu style={{textAlign: 'justify', textIndent: 0}}>
            <chakra.li display="inline-block" marginBottom="0.5em">
              <ListIcon />
              Developed and deployed cloud infrastructure modules on AWS using Pulumi SDK and Python, ensuring efficiency and scalability (VPC, EC2, EKS, ALB, IAM, S3).
            </chakra.li>
            <chakra.li display="inline-block" marginBottom="0.5em">
              <ListIcon />
              Utilized AWS services including API Gateway, Lambda, ECR, S3, DynamoDB, and CloudWatch for the deployment of the Archie platform with Serverless.
            </chakra.li>
            <chakra.li display="inline-block" marginBottom="0.5em">
              <ListIcon />
              Managed and configured local development environments with Bash and Docker, enhancing system development and testing processes.
            </chakra.li>
            <chakra.li display="inline-block" marginBottom="0.5em">
              <ListIcon />
              Conducted comprehensive testing of modules developed by team members, integrating them into the final codebase to ensure system consistency and functionality.
            </chakra.li>
            <chakra.li display="inline-block" marginBottom="0.5em">
              <ListIcon />
              Identified and implemented process improvements to enhance system performance and efficiency.
            </chakra.li>
            <chakra.li display="inline-block" marginBottom="0.5em">
              <ListIcon />
              Refactored code, documented processes, and maintained the project repository for streamlined project management.
            </chakra.li>
          </chakra.lu>
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
              <Box textAlign={'right'} marginTop={'-1.5em'} marginRight={'-1em'}>
              <BioYear>2020</BioYear>
              </Box>
            </Box>
            <Box>
            <BioSubtitle>
                Bachelor&apos;s Degree in Systems Engineering
              </BioSubtitle>
            </Box>
            <Box>
              <BioContent>Academic Achievements: </BioContent>
            </Box>
            <Box>
              <BioList>
                <chakra.li display="inline-block" marginBottom="0.5em">
                  <ListIcon />
                <Text as="span" fontWeight="600" >Competitive Programing - ITCancún 2023 – 1st place</Text> - Internal competitive programming contest at <Link as={NextLink} href="https://www.itcancun.edu.mx/" target="_blank" passHref scroll={false}>ITCancún</Link>, where exceptional team collaboration and problem solving were demonstrated.
                </chakra.li>
                <chakra.li display="inline-block" marginBottom="0.5em">
                  <ListIcon />
                <Text as="span" fontWeight="600" >Competitive Programing - TECNM 2022 - 68th place</Text> - Team competition on all TECNM campuses in Mexico.
                </chakra.li>
                <chakra.li display="inline-block" marginBottom="0.5em">
                  <ListIcon />
                <Text as="span" fontWeight="600" >Competitive Programing - ITCancún 2022 - 7th place</Text> - Participated in individual programming contest at <Link as={NextLink} href="https://www.itcancun.edu.mx/" target="_blank" passHref scroll={false}>ITCancún</Link>, where problem solving were demonstrated.
                </chakra.li>
              </BioList>
            </Box>
          </Stack>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Awards
        </Heading>
        <BioSection>
          <Stack>
            <Box>
              <BioTitle>
              <Link as={NextLink} href="https://app.genius-arena.com/track_info/69/SISA---Detecci%C3%B3n-de-anomal%C3%ADas-por-an%C3%A1lisis-de-trafico-en-la-navegaci%C3%B3n" target="_blank" passHref scroll={false}>
              Genius Arena – Jalisco Talent Land 2024 – 3rd place
              </Link>
              </BioTitle>
              <Box textAlign={'right'} marginTop={'-1.5em'} marginRight={'-1em'}>
              <BioYear>2024</BioYear>
              </Box>
            </Box>
            <Box textAlign={'justify'}>
              <BioContent>
                As part of the SISA track: Anomaly detection by traffic analysis in navigation, I led the Redeemed Guys team in the SiSaGuard project.
              </BioContent>
            </Box>
            <Box>
              <BioTitle>
              <Link as={NextLink} href="https://2024.talent-land.mx/speakers/gatovsky/" target="_blank" passHref scroll={false}>
              Speaker – Jalisco Talent Land 2024 – Developer Land
              </Link>
              </BioTitle>
              <Box textAlign={'right'} marginTop={'-1.5em'} marginRight={'-1em'}>
              <BioYear>2024</BioYear>
              </Box>
            </Box>
            <Box textAlign={'justify'}>
              <BioContent>
              Talk “Simplify and regulate your development processes in the cloud” as part of the promotion of the Archie by cloudbuddies platform.
              </BioContent>
            </Box>
          </Stack>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" style={{marginBottom: '2rem'}}>
          Training & Certifications
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
        <GridCourse
          href="https://coursera.org/share/4d49d52d398c0ce6deb480a45494e357"
          title="Python Specialization" 
          thumbnail={thumbP4E}>
          Issuer: Coursera
          Authorized: UMich
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
