import { useEffect } from "react";

const FacebookShare = ({ url }) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div
      className="fb-share-button"
      data-href={url}
      data-layout="button_count"
    ></div>
  );
};

export default FacebookShare;
