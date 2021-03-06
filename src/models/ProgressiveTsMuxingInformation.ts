import {map, mapArray} from '../common/Mapper';
import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';
import ProgressiveMuxingInformation from './ProgressiveMuxingInformation';
import ProgressiveTsMuxingInformationByteRanges from './ProgressiveTsMuxingInformationByteRanges';

/**
 * @export
 * @class ProgressiveTsMuxingInformation
 */
export class ProgressiveTsMuxingInformation extends ProgressiveMuxingInformation {
  /**
   * Byte ranges for the segments within the TS file
   * @type {ProgressiveTsMuxingInformationByteRanges[]}
   * @memberof ProgressiveTsMuxingInformation
   */
  public byteRanges?: ProgressiveTsMuxingInformationByteRanges[];

  constructor(obj?: Partial<ProgressiveTsMuxingInformation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.byteRanges = mapArray(obj.byteRanges, ProgressiveTsMuxingInformationByteRanges);
  }
}

export default ProgressiveTsMuxingInformation;

