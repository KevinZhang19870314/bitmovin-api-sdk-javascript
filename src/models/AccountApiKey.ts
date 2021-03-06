import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AccountApiKey
 */
export class AccountApiKey extends BitmovinResource {
  /**
   * Key value for authentication with the Bitmovin API (required)
   * @type {string}
   * @memberof AccountApiKey
   */
  public value?: string;

  constructor(obj?: Partial<AccountApiKey>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
  }
}

export default AccountApiKey;

