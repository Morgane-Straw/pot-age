import nextConnect from 'next-connect';


const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});


apiRoute.post((req ,res) => {
    console.log(req.body);
  res.status(200).json({ data: req.body });
});

apiRoute.get((req ,res) => {
res.status(200).json({ data: "Success" });
});

export default apiRoute;

