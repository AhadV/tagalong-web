import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const MicrosoftClarity = () => {
  const clarityId = import.meta.env.VITE_CLARITY_ID || 'tedg4m0flc';

  useEffect(() => {
    // Initialize Clarity
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", clarityId);

    // Log initialization in development
    if (import.meta.env.DEV) {
      console.log('Microsoft Clarity initialized with ID:', clarityId);
    }
  }, []);

  return (
    <Helmet>
      <script type="text/javascript">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `}
      </script>
    </Helmet>
  );
};

export default MicrosoftClarity;