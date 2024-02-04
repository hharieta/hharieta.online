/* eslint-disable react/no-unescaped-entities */

import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'
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
            Emotion Analyzer is a final project for the IBM course implementing the IBM Watson Service AI.
          </WorkGridItem>
        </Section>
        <Section>
        <WorkGridItem
            id="aws-crud"
            title="AWS Crud"
            thumbnail={thumbAws}
          >
            AWS CRUD Operations using Nextjs
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="tucontrol" title="TuControl" thumbnail={thumbControl}>
            A Flutter Application to establish serial communication with arduino.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="docker"
            title="Dockerized Docker"
            thumbnail={thumbScript}
          >
            Docker socket inside a container
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
        <WorkGridItem
            id="jinicuil"
            title="Jinicuil"
            thumbnail={thumbJinicuil}
          >
            Maintenance of the website
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="ecd-play"
            title="ecd-play"
            thumbnail={thumbEcd}
          >
            Differential Equations Quiz
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
