import {map} from '../common/Mapper';
import InputStream from './InputStream';
import StreamSelectionMode from './StreamSelectionMode';

/**
 * @export
 * @class DvbTeletextInputStream
 */
export class DvbTeletextInputStream extends InputStream {
  /**
   * Id of input
   * @type {string}
   * @memberof DvbTeletextInputStream
   */
  public inputId?: string;

  /**
   * Path to media file
   * @type {string}
   * @memberof DvbTeletextInputStream
   */
  public inputPath?: string;

  /**
   * Specifies the algorithm how the stream in the input file will be selected
   * @type {StreamSelectionMode}
   * @memberof DvbTeletextInputStream
   */
  public selectionMode?: StreamSelectionMode;

  /**
   * Position of the stream
   * @type {number}
   * @memberof DvbTeletextInputStream
   */
  public position?: number;

  /**
   * Page number of the subtitles
   * @type {number}
   * @memberof DvbTeletextInputStream
   */
  public page?: number;

  constructor(obj: Partial<DvbTeletextInputStream>) {
    super(obj);

    this.inputId = obj.inputId;
    this.inputPath = obj.inputPath;
    this.selectionMode = obj.selectionMode;
    this.position = obj.position;
    this.page = obj.page;
  }
}

export default DvbTeletextInputStream;
