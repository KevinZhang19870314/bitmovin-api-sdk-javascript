import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import SrtInput from '../../../models/SrtInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {SrtInputListQueryParams, SrtInputListQueryParamsBuilder} from './SrtInputListQueryParams';

/**
 * SrtApi - object-oriented interface
 * @export
 * @class SrtApi
 * @extends {BaseAPI}
 */
export default class SrtApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create SRT input
   * @param {SrtInput} srtInput The SrtInput to be created
   * @throws {BitmovinError}
   * @memberof SrtApi
   */
  public create(srtInput?: SrtInput): Promise<SrtInput> {
    return this.restClient.post<SrtInput>('/encoding/inputs/srt', {}, srtInput).then((response) => {
      return map(response, SrtInput);
    });
  }

  /**
   * @summary Delete SRT input
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof SrtApi
   */
  public delete(inputId: string): Promise<SrtInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<SrtInput>('/encoding/inputs/srt/{input_id}', pathParamMap).then((response) => {
      return map(response, SrtInput);
    });
  }

  /**
   * @summary SRT Input Details
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof SrtApi
   */
  public get(inputId: string): Promise<SrtInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<SrtInput>('/encoding/inputs/srt/{input_id}', pathParamMap).then((response) => {
      return map(response, SrtInput);
    });
  }

  /**
   * @summary List SRT inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SrtApi
   */
  public list(queryParameters?: SrtInputListQueryParams | ((q: SrtInputListQueryParamsBuilder) => SrtInputListQueryParamsBuilder)): Promise<PaginationResponse<SrtInput>> {
    let queryParams: SrtInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SrtInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SrtInput>>('/encoding/inputs/srt', {}, queryParams).then((response) => {
      return new PaginationResponse<SrtInput>(response, SrtInput);
    });
  }
}
