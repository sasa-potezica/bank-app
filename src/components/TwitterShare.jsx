import { useEffect } from "react";

const TwitterShare = ({ url, text, hashtags, via }) => {
  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <a
      href={`https://twitter.com/share?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(text)}&hashtags=${encodeURIComponent(
        hashtags
      )}&via=${via}`}
      className="twitter-share-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      Tweet
    </a>
  );
};

export default TwitterShare;
