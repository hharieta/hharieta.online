/* eslint-disable react/no-unescaped-entities */
import {
    Container,
    Badge,
    Link,
    List,
    ListItem
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Dockerized">
      <Container>
        <Title>
          Dockerized <Badge>2022-</Badge>
        </Title>
        <P>
        Configuration for the local Archie development environment, 
        which consists of mounting the Docker socket inside a container 
        to isolate the build and Serverless deploy
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="">
             <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows / Linux / MacOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Docker, Bash, PowerShell</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/script.png" alt="docker" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  