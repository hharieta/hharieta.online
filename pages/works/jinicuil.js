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
    <Layout title="Jinicuil">
      <Container>
        <Title>
          Jinicuil Consultoría Digital <Badge>2024-</Badge>
        </Title>
        <P>
        Maintenance of the{' '}
            <Link href="https://jinicuil.com/" target="_blank" passHref scroll={false}>
                Jinicuil Consultoría Digital <ExternalLinkIcon mx="2px" />
            </Link>
            {' '}website. Focused on using Bootstrap for style sheets
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://jinicuil.com/">
            https://jinicuil.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, Bootstrap</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/jinicuil.png" alt="jinicuil" />
        <WorkImage src="/images/works/jinicuil2.png" alt="jinicuil" />
        <WorkImage src="/images/works/jinicuil3.png" alt="jinicuil" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  