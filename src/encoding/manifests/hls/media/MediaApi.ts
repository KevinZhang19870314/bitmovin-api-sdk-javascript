import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomTagsApi from './customTags/CustomTagsApi';
import TypeApi from './type/TypeApi';
import VideoApi from './video/VideoApi';
import AudioApi from './audio/AudioApi';
import SubtitlesApi from './subtitles/SubtitlesApi';
import VttApi from './vtt/VttApi';
import ClosedCaptionsApi from './closedCaptions/ClosedCaptionsApi';

/**
 * MediaApi - object-oriented interface
 * @export
 * @class MediaApi
 * @extends {BaseAPI}
 */
export default class MediaApi extends BaseAPI {
  public customTags: CustomTagsApi;
  public type: TypeApi;
  public video: VideoApi;
  public audio: AudioApi;
  public subtitles: SubtitlesApi;
  public vtt: VttApi;
  public closedCaptions: ClosedCaptionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customTags = new CustomTagsApi(configuration);
    this.type = new TypeApi(configuration);
    this.video = new VideoApi(configuration);
    this.audio = new AudioApi(configuration);
    this.subtitles = new SubtitlesApi(configuration);
    this.vtt = new VttApi(configuration);
    this.closedCaptions = new ClosedCaptionsApi(configuration);
  }
}
