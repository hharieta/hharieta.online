import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

const CredlyBadge = ({id, host}) => {
  return (
    <span>
      <span
        data-iframe-width="180"
        data-iframe-height="270"
        data-share-badge-id={id}
        data-share-badge-host={host}
        data-iframe-margin="2rem"
      ></span>
      <script
        type="text/javascript"
        async
        src="//cdn.credly.com/assets/utilities/embed.js"
      ></script>
    </span>
  );
};

export default CredlyBadge;
