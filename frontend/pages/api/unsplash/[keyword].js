import { createApi} from "unsplash-js";


export default function handler(req, res) {
  const api=createApi({accessKey:process.env.Unsplash_Access_Key});
  // console.log(process.env)
  api.search
        .getPhotos({ query: req.query.keyword, lang:"fr"})
        .then(result => {
          res.status(200).json(result.response.results.map(r=>r.urls))
          // setPhotosResponse(result);
        })
        .catch(() => {
          res.status(500).json({Error:"something went wrong!"})
        });
}
