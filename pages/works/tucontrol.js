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
    <Layout title="TuControl">
      <Container>
        <Title>
          TuControl <Badge>2022-</Badge>
        </Title>
        <P>
          A Flutter Application to establish serial communication with arduino via bluetooth 2.0.
          Developed as an extra tool for a school project
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/hharieta/crane_control">
            https://github.com/hharieta/crane_control <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flutter, Dart</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/tu-control.png" alt="TuControl" />
        <WorkImage src="/images/works/arduino.jpeg" alt="TuControl" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  