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
    <Layout title="AWS CRUD">
      <Container>
        <Title>
          Emotion Analyzer <Badge>2024-</Badge>
        </Title>
        <P>
        Emotion Analyzer is a final project for the IBM course{' '}
        <Link href="https://www.coursera.org/account/accomplishments/verify/2EYDLKBHUAK6?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" target="_blank" scroll={false} >
        Developing AI Applications with Python and Flask <ExternalLinkIcon mx="2px" />
        </Link>{' '}which one explore the emotions analysis powered by IBM Watson Service AI.
        this project aims to decipher and analyze the emotional tone within input text.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/hharieta/EmotionDetection">
            https://github.com/hharieta/EmotionDetection <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
           <ListItem>
                <Meta>Web</Meta>
                <Link href="https://emotionanalyzer-244923b90060.herokuapp.com/">
                emotionanalyzer-244923b90060.herokuapp.com <ExternalLinkIcon mx="2px" />
                </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, Python, Flask, IBM Watson Service, Heroku</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/watson1.png" alt="watson" />
        <WorkImage src="/images/works/watson2.png" alt="watson" />
        <WorkImage src="/images/works/watson3.png" alt="watson" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  