import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import DrmApi from './drm/DrmApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import WebmMuxing from '../../../../models/WebmMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {WebmMuxingListQueryParams, WebmMuxingListQueryParamsBuilder} from './WebmMuxingListQueryParams';

/**
 * WebmApi - object-oriented interface
 * @export
 * @class WebmApi
 * @extends {BaseAPI}
 */
export default class WebmApi extends BaseAPI {
  public customdata: CustomdataApi;
  public drm: DrmApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.drm = new DrmApi(configuration);
  }

  /**
   * @summary Add WebM muxing
   * @param {string} encodingId Id of the encoding.
   * @param {WebmMuxing} webmMuxing The WebM muxing to be created
   * @throws {BitmovinError}
   * @memberof WebmApi
   */
  public create(encodingId: string, webmMuxing?: WebmMuxing): Promise<WebmMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<WebmMuxing>('/encoding/encodings/{encoding_id}/muxings/webm', pathParamMap, webmMuxing).then((response) => {
      return map(response, WebmMuxing);
    });
  }

  /**
   * @summary Delete WebM muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the WebM muxing
   * @throws {BitmovinError}
   * @memberof WebmApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/webm/{muxing_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary WebM muxing details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the WebM muxing
   * @throws {BitmovinError}
   * @memberof WebmApi
   */
  public get(encodingId: string, muxingId: string): Promise<WebmMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<WebmMuxing>('/encoding/encodings/{encoding_id}/muxings/webm/{muxing_id}', pathParamMap).then((response) => {
      return map(response, WebmMuxing);
    });
  }

  /**
   * @summary List WebM muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof WebmApi
   */
  public list(encodingId: string, queryParameters?: WebmMuxingListQueryParams | ((q: WebmMuxingListQueryParamsBuilder) => WebmMuxingListQueryParamsBuilder)): Promise<PaginationResponse<WebmMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: WebmMuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new WebmMuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<WebmMuxing>>('/encoding/encodings/{encoding_id}/muxings/webm', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<WebmMuxing>(response, WebmMuxing);
    });
  }
}
