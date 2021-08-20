import { useEffect } from "react";
import youtubeSearchRequest from "./YoutubeApi/YoutubeApi";

const YoutubeSearch = () => {
  useEffect(() => {
    (async () => {
      const response = await youtubeSearchRequest.get("/search", {
        params: {
          q: "Hello",
        },
      });
      console.log(response);
    })();
  }, []);

  return <div></div>;
};

export default YoutubeSearch;
