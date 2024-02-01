import Head from 'next/head';

const CredlyBadge = ({id, host}) => {
  return (
    <>
    <Head>
        <script
          type="text/javascript"
          async
          src="//cdn.credly.com/assets/utilities/embed.js"
        />
      </Head>
      <div
        data-iframe-width="180"
        data-iframe-height="270"
        data-share-badge-id={id}
        data-share-badge-host={host}
        data-iframe-margin="2rem"
      />
      </>
  );
};

export default CredlyBadge;
