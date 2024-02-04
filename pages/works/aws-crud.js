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
          AWS CRUD <Badge>2024-</Badge>
        </Title>
        <P>
        This project is a simple CRUD application that uses AWS services to store and retrieve data on DynamoDB.
        based on the public project&apos;s{' '}
            <Link href="https://github.com/sankharr/aws_crud" target="_blank" scroll={false}>
                Sankharr <ExternalLinkIcon mx="2px" />
            </Link>
            {' '}repository.
            <br />
            Modifications and Enhancements:
        </P>
        <ul style={{ textAlign: 'justify', listStyleType: 'square', textIndent: 0, marginLeft: '2em', marginTop: '1em'}}>
                <li>Allows you to choose the name of the table to be created.</li>
                <li>Allows you to select the name of the table to which data will be appended.</li>
                <li>When you finish entering data, you are correctly redirected to the table you worked on.</li>
                <li>Allows you to delete items correctly</li>
                <li>When editing an element of the table Now recover the data from it to avoid having to write all the fields again</li>
            </ul>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/hharieta/aws_crud_archie">
            https://github.com/hharieta/aws_crud_archie <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, Nextjs, AWS SDK</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/aws_crud2.png" alt="aws_crud" />
        <WorkImage src="/images/works/aws_crud.png" alt="aws_crud" />
        <WorkImage src="/images/works/aws_crud3.png" alt="aws_crud" />
        <WorkImage src="/images/works/aws_crud4.png" alt="aws_crud" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  