// components/SketchfabEmbed.js
import Head from 'next/head';

const SketchfabEmbed = () => {

  const divStyle = {
    marginTop: '15px',
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://sketchfab.com/api/sketchfab-viewer-1.0.0.js"></script>
      </Head>
      <div className="sketchfab-embed-wrapper" style={divStyle}>
        <iframe
          title="Little Cat"
          frameBorder="0"
          allowFullScreen
          mozAllowFullScreen="true"
          webkitAllowFullScreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          width="640"
          height="480"
          src="https://sketchfab.com/models/1e6f360989b04b53a393f398d5372205/embed"
        ></iframe>
        <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
          <a
            href="https://sketchfab.com/3d-models/little-cat-1e6f360989b04b53a393f398d5372205?utm_medium=embed&utm_campaign=share-popup&utm_content=1e6f360989b04b53a393f398d5372205"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            Little Cat
          </a>{' '}
          by{' '}
          <a
            href="https://sketchfab.com/cacaoin3d?utm_medium=embed&utm_campaign=share-popup&utm_content=1e6f360989b04b53a393f398d5372205"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            cacaoin3d
          </a>{' '}
          on{' '}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1e6f360989b04b53a393f398d5372205"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            Sketchfab
          </a>
        </p>
      </div>
    </>
  );
};

export default SketchfabEmbed;
