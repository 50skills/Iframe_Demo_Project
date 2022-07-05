import IframeResizer from 'iframe-resizer-react';
import { useState } from 'react';

const Home = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        faucibus quis ex a faucibus. In sit amet aliquam velit. Sed maximus
        mattis erat, quis maximus ante hendrerit nec. Etiam at sem pretium,
        condimentum massa in, imperdiet mauris. Donec sit amet elit ligula.
        Morbi hendrerit purus urna, fringilla hendrerit nisl commodo id. Mauris
        sit amet maximus risus. Aenean eu ante in odio blandit tristique. In
        vitae mi efficitur, maximus diam id, efficitur nibh.
      </p>
      {!isSubmitted && (
        <IframeResizer
          inPageLinks
          frameBorder={0}
          src="http://localhost:3001/sampleco/en/1/apply?frame=1"
          style={{ width: '1px', minWidth: '100%' }}
          onMessage={(data) =>
            data.message == 'submitted' && setIsSubmitted(true)
          }
        />
      )}
    </>
  );
};

export default Home;
