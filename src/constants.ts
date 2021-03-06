import * as bitcoinJs from 'bitcoinjs-lib'

import { DaemonConfig } from './types'

let binariesPath: string | undefined

if ((process as NodeJS.Process | undefined) !== undefined) {
  // tslint:disable-next-line:no-require-imports no-var-requires
  binariesPath = require('path').resolve(__dirname, `../bin`)
}

export const BINARIES_PATH: string | undefined = binariesPath

export const DAEMON_CONFIG: DaemonConfig = {
  port: '5817',
  rpcpassword: 'pass',
  rpcport: '5788',
  rpcuser: 'user'
}

export const DAEMON_URI: string = `http://127.0.0.1:${DAEMON_CONFIG.rpcport}`

export const ECA_NETWORK: bitcoinJs.Network = {
  bip32: { public: 0, private: 0 },
  messagePrefix: '\u0018Electra very Signed Message:\n', // TODO Not sure about that yet !
  pubKeyHash: 33,
  scriptHash: 0, // TODO Find this parameter
  wif: 161 // WIF version
}

export const ECA_TRANSACTION_FEE: number = 0.00001
