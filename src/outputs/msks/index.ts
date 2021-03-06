import _ from 'lodash'
import axios from 'axios'

import { Output } from '../../types'

type Options = {
  apiRoot: string
  sessionId: string
  token: string
  connectionId: string
  channelName: string
}

const msks: Output<Options> = (options: Options) => async (job, results) => {
  const sendMessage = (text: string) =>
    axios.post(
      `${options.apiRoot}/commands/query`,
      {
        connectionId: options.connectionId,
        channelName: options.channelName,
        text,
      },
      {
        headers: {
          'x-session-id': options.sessionId,
          'x-token': options.token,
        },
      },
    )

  const texts = _.map(results, (result) => result.name)

  for (const text of texts) {
    await sendMessage(text)
  }
}

export default msks
