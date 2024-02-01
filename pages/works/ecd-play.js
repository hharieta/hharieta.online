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
    <Layout title="ECD-Play">
      <Container>
        <Title>
          ECD-Play <Badge>2022-</Badge>
        </Title>
        <P>
        Differential Equations Quiz developed as a Web Application and
        packaged with Electron to be used as a Desktop Application
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/hharieta/ecd-play">
            https://github.com/hharieta/ecd-play <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web / Desktop</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, Electron</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/ecd.png" alt="ecd-play" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  