import {map, mapArray} from '../common/Mapper';
import AudioGroupConfiguration from './AudioGroupConfiguration';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class StreamInfo
 */
export class StreamInfo extends BitmovinResource {
  /**
   * It MUST match the value of the GROUP-ID attribute of an Audio EXT-X-MEDIA tag elsewhere in the Master Playlist. Either this or `audioGroups` must be set.
   * @type {string}
   * @memberof StreamInfo
   */
  public audio?: string;

  /**
   * HLS Audio Group Configuration. You will want to use this configuration property in case you specify conditions on audio streams. The first matching audio group will be used for the specific variant stream. Either this or `audio` must be set.
   * @type {AudioGroupConfiguration}
   * @memberof StreamInfo
   */
  public audioGroups?: AudioGroupConfiguration;

  /**
   * It MUST match the value of the GROUP-ID attribute of a Video EXT-X-MEDIA tag elsewhere in the Master Playlist
   * @type {string}
   * @memberof StreamInfo
   */
  public video?: string;

  /**
   * It MUST match the value of the GROUP-ID attribute of a Subtitles EXT-X-MEDIA tag elsewhere in the Master Playlist
   * @type {string}
   * @memberof StreamInfo
   */
  public subtitles?: string;

  /**
   * If the value is not 'NONE', it MUST match the value of the GROUP-ID attribute of a Closed Captions EXT-X-MEDIA tag elsewhere in the Playlist (required)
   * @type {string}
   * @memberof StreamInfo
   */
  public closedCaptions?: string;

  /**
   * Id of the encoding. (required)
   * @type {string}
   * @memberof StreamInfo
   */
  public encodingId?: string;

  /**
   * Id of the stream. (required)
   * @type {string}
   * @memberof StreamInfo
   */
  public streamId?: string;

  /**
   * Id of the muxing. (required)
   * @type {string}
   * @memberof StreamInfo
   */
  public muxingId?: string;

  /**
   * Id of the DRM.
   * @type {string}
   * @memberof StreamInfo
   */
  public drmId?: string;

  /**
   * Path to segments. (required)
   * @type {string}
   * @memberof StreamInfo
   */
  public segmentPath?: string;

  /**
   * The URI of the playlist file. (required)
   * @type {string}
   * @memberof StreamInfo
   */
  public uri?: string;

  /**
   * Number of the first segment. Default is 0.
   * @type {number}
   * @memberof StreamInfo
   */
  public startSegmentNumber?: number;

  /**
   * Number of the last segment. Default is the last one that was encoded.
   * @type {number}
   * @memberof StreamInfo
   */
  public endSegmentNumber?: number;

  /**
   * Force the addition of the frame rate attribute to all stream infos.
   * @type {boolean}
   * @memberof StreamInfo
   */
  public forceFrameRateAttribute?: boolean;

  /**
   * Force the addition of the video-range attribute to all stream infos.
   * @type {boolean}
   * @memberof StreamInfo
   */
  public forceVideoRangeAttribute?: boolean;

  constructor(obj?: Partial<StreamInfo>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.audio = map(obj.audio);
    this.audioGroups = map(obj.audioGroups, AudioGroupConfiguration);
    this.video = map(obj.video);
    this.subtitles = map(obj.subtitles);
    this.closedCaptions = map(obj.closedCaptions);
    this.encodingId = map(obj.encodingId);
    this.streamId = map(obj.streamId);
    this.muxingId = map(obj.muxingId);
    this.drmId = map(obj.drmId);
    this.segmentPath = map(obj.segmentPath);
    this.uri = map(obj.uri);
    this.startSegmentNumber = map(obj.startSegmentNumber);
    this.endSegmentNumber = map(obj.endSegmentNumber);
    this.forceFrameRateAttribute = map(obj.forceFrameRateAttribute);
    this.forceVideoRangeAttribute = map(obj.forceVideoRangeAttribute);
  }
}

export default StreamInfo;

