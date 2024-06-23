/* eslint-disable react/no-unescaped-entities */

import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbControl from '../public/images/works/tu-control.png'
import thumbEcd from '../public/images/works/ecd.png'
import thumbScript from '../public/images/works/script.png'
import thumbAws from '../public/images/works/aws_crud.png'
import thumbJinicuil from '../public/images/works/jinicuil.png'
import thumbEmotion from '../public/images/works/watson1.png'

const Works = () => (
  <Layout title="Works">
    <Container style={{marginBottom: '2rem'}}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid style={{marginTop: '2rem'}} columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem
            id="emotion"
            title="emotion-analyzer"
            thumbnail={thumbEmotion}
          >
            Final project for the IBM course Dev... <span style={{fontWeight:600}}>[read more]</span>
          </WorkGridItem>
        </Section>
        <Section>
        <WorkGridItem
            id="aws-crud"
            title="AWS Crud"
            thumbnail={thumbAws}
          >
            AWS CRUD Operations using Nextjs... <span style={{fontWeight:600}}>[read more]</span>
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="tucontrol" title="TuControl" thumbnail={thumbControl}>
            A Flutter App for serial communication... <span style={{fontWeight:600}}>[read more]</span>
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="docker"
            title="Dockerized Docker"
            thumbnail={thumbScript}
          >
            Docker environment for Archie project... <span style={{fontWeight:600}}>[read more]</span>
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
        <WorkGridItem
            id="jinicuil"
            title="Jinicuil"
            thumbnail={thumbJinicuil}
          >
            Maintenance of the website... <span style={{fontWeight:600}}>[read more]</span>
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="ecd-play"
            title="ecd-play"
            thumbnail={thumbEcd}
          >
            Differential Equations Quiz... <span style={{fontWeight:600}}>[read more]</span>
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
