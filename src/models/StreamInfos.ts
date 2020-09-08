import {map, mapArray} from '../common/Mapper';
import StreamInfosDetails from './StreamInfosDetails';

/**
 * @export
 * @class StreamInfos
 */
export class StreamInfos {
  /**
   * Timestamp of the event, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ (required)
   * @type {Date}
   * @memberof StreamInfos
   */
  public time?: Date;

  /**
   * Details about billable minutes for each resolution category
   * @type {StreamInfosDetails[]}
   * @memberof StreamInfos
   */
  public streamInfos?: StreamInfosDetails[];

  constructor(obj?: Partial<StreamInfos>) {
    if(!obj) {
      return;
    }
    this.time = map(obj.time, Date);
    this.streamInfos = mapArray(obj.streamInfos, StreamInfosDetails);
  }
}

export default StreamInfos;

