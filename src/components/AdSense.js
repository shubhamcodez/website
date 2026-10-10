import { useEffect } from 'react';

const AdSense = ({ adSlot, adFormat = 'auto', fullWidthResponsive = true, style = {} }) => {
  useEffect(() => {
    try {
      // Push ad to AdSense
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', ...style }}
      data-ad-client="ca-pub-7363584520988232"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
    />
  );
};

export default AdSense;

