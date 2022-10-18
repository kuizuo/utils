import * as CryptoJS from 'crypto-js'
import NodeRSA from 'node-rsa'

export const md5 = (message: string) => CryptoJS.MD5(message).toString()
export const sha1 = (message: string) => CryptoJS.SHA1(message).toString()
export const sha256 = (message: string) => CryptoJS.SHA256(message).toString()
export const sha512 = (message: string) => CryptoJS.SHA512(message).toString()

/**
 * RSA encryption public key
 * @example: publicKey 
 * -----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZiDbSHva6UzSXIibG010ThViS
3b7FoeCKHF/8E7NP+wdBEoAuvCNwVolfEg1AmUtpp4X1Isae89IcW5i8GUWjSzmJ
3XPK4RyfbMwYS6dLr43sLan+v1Gsyi6exeshPXqMeFj0wmDSGiDKg8x6o+CtY1/r
XhadlJC04LeHp9zAgQIDAQAB
-----END PUBLIC KEY-----
 */
export function rsa_enc(publicKey: string, data: string) {
  return new NodeRSA(publicKey, 'pkcs8-public').encrypt(Buffer.from(data), 'base64')
}
