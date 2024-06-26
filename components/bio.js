/* eslint-disable react/no-unescaped-entities */

import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`
export const BioTitle = styled.span`
  font-weight: bold;
  margin-right: 1em;
`
export const BioSubtitle = styled.span`
  font-weight: 600;
`
export const BioContent = styled.span`
  font-weight: 400;
  margin-left: 3.4em;
  text-align: justify;
`

export const BioList = styled.ul`
  
  text-indent: 0;
  text-align: justify;
  line-style-type: square;
`

export const ListIcon = () => (
  <Box as="span" display="inline-block" marginRight="0.5em" width="1em" height="1em">
    <svg
      fill="currentColor"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path className="st0" d="M481.875,299.344L512,292.219l-4.656-19.641l-24.25,5.734c0-0.328,0.016-0.641,0.016-0.969
      c0-38.078-10.531-72.781-28.969-102.359c15.438-53.938-13.438-124.547-13.438-124.547S387.813,73,357.719,100.297
      C327.109,91.063,292.578,88.094,256,88.094c-36.766,0-71.484,2.563-102.203,11.781c-30.156-27.109-82.5-49.438-82.5-49.438
      S42.406,121.063,57.859,175c-18.422,29.578-28.984,64.281-28.984,102.344c0,0.328,0.031,0.641,0.031,0.969l-24.25-5.734L0,292.219
      l30.109,7.125c2.672,23.578,9.672,44.75,20.234,63.422L12.875,377.75l7.484,18.75l41.203-16.484
      c39.797,53.141,111.969,81.547,194.438,81.547c82.453,0,154.641-28.406,194.438-81.547l41.203,16.484l7.484-18.75l-37.469-14.984
      C472.219,344.094,479.219,322.922,481.875,299.344z"/>
      </g>
    </svg>
  </Box>

);
