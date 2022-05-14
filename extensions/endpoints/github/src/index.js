import axios from "axios";

export default (router) => {
  router.post("/*", async (req, res) => {
    const githubApiUrl = "https://api.github.com";
    const { url, headers } = req;
    const fullUrl = `${githubApiUrl}${url}`;

    try {
      const githubRes = await axios({
        url: fullUrl,
        method: "post",
        data: {
          event_type: "webhook"
        },
        headers: {
          authorization: headers.authorization,
          accept: headers.accept
        }
      });

      const { status, statusText, data } = githubRes;
      res.send(`${status}: ${statusText} ${data}`);
    } catch (error) {
      res.send(`Error: ${error}`);
    }
  });
};
