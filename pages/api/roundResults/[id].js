export default async function handler(req, res) {
  const { query: { id } } = req;
  const baseUrl = `https://www.thesportsdb.com/api/v1/json/2/eventsround.php?id=4328&r=${id}`;
  const resData = await fetch(baseUrl).then((response) => response.text()).then(result => JSON.parse(result));

  res.status(200).json({data: resData});
}
