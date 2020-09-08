import {map, mapArray} from '../common/Mapper';
import SrtStatisticLink from './SrtStatisticLink';
import SrtStatisticRecv from './SrtStatisticRecv';
import SrtStatisticSend from './SrtStatisticSend';
import SrtStatisticWindow from './SrtStatisticWindow';

/**
 * @export
 * @class SrtStatistics
 */
export class SrtStatistics {
  /**
   * UUID of the statistic event
   * @type {string}
   * @memberof SrtStatistics
   */
  public id?: string;

  /**
   * Timestamp when the srt statistics event was created, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof SrtStatistics
   */
  public createdAt?: Date;

  /**
   * UUID of an encoding
   * @type {string}
   * @memberof SrtStatistics
   */
  public encodingId?: string;

  /**
   * UUID of the SRT input used to capture this statistics
   * @type {string}
   * @memberof SrtStatistics
   */
  public srtInputId?: string;

  /**
   * Whether the SRT input that generated this statistics was selected (i.e. actively used) at the time or not
   * @type {boolean}
   * @memberof SrtStatistics
   */
  public srtInputSelected?: boolean;

  /**
   * UUID of the associated organization
   * @type {string}
   * @memberof SrtStatistics
   */
  public orgId?: string;

  /**
   * UUID of the associated api-user
   * @type {string}
   * @memberof SrtStatistics
   */
  public userId?: string;

  /**
   * @type {SrtStatisticLink}
   * @memberof SrtStatistics
   */
  public link?: SrtStatisticLink;

  /**
   * @type {SrtStatisticWindow}
   * @memberof SrtStatistics
   */
  public window?: SrtStatisticWindow;

  /**
   * @type {SrtStatisticRecv}
   * @memberof SrtStatistics
   */
  public recv?: SrtStatisticRecv;

  /**
   * @type {SrtStatisticSend}
   * @memberof SrtStatistics
   */
  public send?: SrtStatisticSend;

  constructor(obj?: Partial<SrtStatistics>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.createdAt = map(obj.createdAt, Date);
    this.encodingId = map(obj.encodingId);
    this.srtInputId = map(obj.srtInputId);
    this.srtInputSelected = map(obj.srtInputSelected);
    this.orgId = map(obj.orgId);
    this.userId = map(obj.userId);
    this.link = map(obj.link, SrtStatisticLink);
    this.window = map(obj.window, SrtStatisticWindow);
    this.recv = map(obj.recv, SrtStatisticRecv);
    this.send = map(obj.send, SrtStatisticSend);
  }
}

export default SrtStatistics;

