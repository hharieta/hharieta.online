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
import { GridSkill } from '../components/grid-skills'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbBash from '../public/images/skills/bash-icon-svgrepo-com.svg'
import thumbPython from '../public/images/skills/python-svgrepo-com.svg'
import thumbDocker from '../public/images/skills/docker-svgrepo-com.svg'
import thumbLinux from '../public/images/skills/linux-svgrepo-com.svg'
import thumbPulumi from '../public/images/skills/pulumi.svg'
import thumbK8S from '../public/images/skills/kubernetes-svgrepo-com.svg'
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
          Expirience
        </Heading>
        <BioSection style={{marginBottom: '1rem'}}>
          <BioYear>2022 to present</BioYear>
          Working on remote at{' '} <Link as={NextLink} href="https://www.cloudbuddies.io/" target="_blank" passHref scroll={false}>
            Cloudbuddies
          </Link> {' '}as jr Cloud Engineer.
          <ul style={{textAlign: 'justify', listStyleType: 'square', textIndent: 0}}>
            <li>
            Module development with Python implementing Pulumi SDK for SaaS platforms
            </li>
            <li>
            Use of AWS services for cloud development (API Gateway, Lambda, ECR, EC2, S3, DynamoDB, RDS, CloudWatch)
            </li>
            <li >
            Process automation with Bash and Docker for local development environments on Linux, Windows and MacOS systems
            </li>
            <li >
            Refactor code and maintenance of Github Repositories
            </li>
          </ul>
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
        Academic Training
        </Heading>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Pursuing a degree in Systems Engineering at Instituto Tecnológico de Cancún.
          Currently starting the 4th year
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridSkill
            href=""
            title="Bash Scripting"
            thumbnail={thumbBash}
          >
            well-suited for automating tasks and interacting with the command line.
          </GridSkill>
          <GridSkill
            href=""
            title="Python"
            thumbnail={thumbPython}
          >
            My favorite language, I use it for everything.
          </GridSkill>
          <GridSkill
            href=""
            title="Docker"
            thumbnail={thumbDocker}
          >
            My favorite tool for create containers.
          </GridSkill>
          <GridSkill
            href=""
            title="Linux"
            thumbnail={thumbLinux}
          >
            I use it as my daily driver and for my servers.
          </GridSkill>
          <GridSkill
            href=""
            title="Pulumi SDK"
            thumbnail={thumbPulumi}
          >
            I use it to create infrastructure as code.
          </GridSkill>
          <GridSkill
            href=""
            title="Kubernetes"
            thumbnail={thumbK8S}
          >
            My favorite orchestrator of containers
          </GridSkill>
        </SimpleGrid>
      </Section>

      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Python, Linux, Docker, Bash, and Vim.
        </Paragraph>
      </Section> */}

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
