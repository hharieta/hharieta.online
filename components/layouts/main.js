/* eslint-disable react/no-unescaped-entities */

import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gatovsky's homepage" />
        <meta name="author" content="Takuya Matsuyama" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Secta de Python-kun" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SectaPythonica" />
        <meta name="twitter:creator" content="@SectaPythonica" />
        <meta name="twitter:image" content="https://cdn.glitch.global/d2f60e58-9efe-4a05-bb88-fd4999848107/IMG_4537.JPG?v=1706724595512" />
        <meta property="og:site_name" content="Inge Gatovsky" />
        <meta name="og:title" content="Inge Gatovsky" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cdn.glitch.global/d2f60e58-9efe-4a05-bb88-fd4999848107/IMG_4537.JPG?v=1706724595512" />
        <title>Inge Gatovsky</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
