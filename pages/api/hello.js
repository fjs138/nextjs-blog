/* *
 * accessing http://localhost:3000/api/hello  displays {"text":"Hello"}
 * 'req' is an instance of http.IncomingMessage, plus some pre-built middlewares
 * 'res' is an instance of http.ServerResponse, plus some helper functions
 *
 * */

export default function handler(req, res) {
  res.status(200).json({ teamName: "Flyers" });
}
// Do Not Fetch an API Route from getStaticProps or getStaticPaths