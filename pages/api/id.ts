// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const graphUrl = new Map();
graphUrl.set(
  "polygon","https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic"
)
graphUrl.set(
  "gnosis-chain","https://api.thegraph.com/subgraphs/name/superfluid-finance/xdai-mainnet"
)
graphUrl.set(
  "optimism","https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-optimism-mainnet"
)
graphUrl.set(
  "avalanche","https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-avalanche-c"
)
graphUrl.set(
  "arbirtum","https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-arbitrum-one"
)
graphUrl.set(
  "bnb","https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-bsc-mainnet"
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
        flowUpdatedEvents {
          totalAmountStreamedUntilTimestamp
        }
        createdAtTimestamp
        updatedAtTimestamp
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

  let data = await response.json();
  data = data["data"]["stream"]
  let amount = parseInt(data["flowUpdatedEvents"][0]["totalAmountStreamedUntilTimestamp"])
  let time = parseInt(data["endTimestamp"]) - parseInt(data["startTimestamp"])
  let tokenFlowRate = amount / time
  console.log(data)
  res.status(200).json({
    flowRate: data["currentFlowRate"],
    sender: data["sender"]["id"],
    reciever: data["receiver"]["id"],
    amount: data["flowUpdatedEvents"][0]["totalAmountStreamedUntilTimestamp"],
    token: data["token"]["symbol"],
    startTimestamp: data["createdAtTimestamp"],
    endTimestamp: data["updatedAtTimestamp"]
  })
}
