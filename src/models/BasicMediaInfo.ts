import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class BasicMediaInfo
 */
export class BasicMediaInfo extends BitmovinResponse {
  /**
   * The value is a quoted-string which specifies the group to which the Rendition belongs. (required)
   * @type {string}
   * @memberof BasicMediaInfo
   */
  public groupId?: string;

  /**
   * Primary language in the rendition.
   * @type {string}
   * @memberof BasicMediaInfo
   */
  public language?: string;

  /**
   * Identifies a language that is associated with the Rendition.
   * @type {string}
   * @memberof BasicMediaInfo
   */
  public assocLanguage?: string;

  /**
   * Human readable description of the rendition. (required)
   * @type {string}
   * @memberof BasicMediaInfo
   */
  public name?: string;

  /**
   * If set to true, the client SHOULD play this Rendition of the content in the absence of information from the user.
   * @type {boolean}
   * @memberof BasicMediaInfo
   */
  public isDefault?: boolean;

  /**
   * If set to true, the client MAY choose to play this Rendition in the absence of explicit user preference.
   * @type {boolean}
   * @memberof BasicMediaInfo
   */
  public autoselect?: boolean;

  /**
   * Contains Uniform Type Identifiers
   * @type {string[]}
   * @memberof BasicMediaInfo
   */
  public characteristics?: string[];

  constructor(obj?: Partial<BasicMediaInfo>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.groupId = map(obj.groupId);
    this.language = map(obj.language);
    this.assocLanguage = map(obj.assocLanguage);
    this.name = map(obj.name);
    this.isDefault = map(obj.isDefault);
    this.autoselect = map(obj.autoselect);
    this.characteristics = mapArray(obj.characteristics);
  }
}

export default BasicMediaInfo;

