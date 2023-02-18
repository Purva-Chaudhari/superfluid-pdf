// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const graphUrl = new Map();
graphUrl.set(
  "polygon","https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic"
)

/*
  @param sender
  @param recipient
  @param chainId
*/

/*
 * Mapping of chainId with the urls 
 * Query the url 
 */

function createRequestBody(id: string | string[]){
  return {
    query: `query ($id: ID!) {
      stream(id: $id) {
        currentFlowRate
        sender {
          id
        }
        receiver {
          id
        }
        token {
          symbol
        }
        streamedUntilUpdatedAt
      }
    }`,
    variables: { id }
};
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let gUrl;
  let body;
  if (req.query.chain != undefined) {
    gUrl = graphUrl.get(req.query.chain);
  } else {
    res.status(502).json({ error: 'chain not defined' })
  }
  if (req.query.streamId != undefined) {
    body = createRequestBody(req.query.streamId);
    console.log(req.query.streamId)
  }
  
  const response = await fetch(
    gUrl, 
    {
      method: 'post',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    }
    );

  const data = await response.json();

  res.status(200).json(data)
}
