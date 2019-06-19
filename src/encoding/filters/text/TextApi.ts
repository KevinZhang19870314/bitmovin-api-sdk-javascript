import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import TextFilter from '../../../models/TextFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import TextFilterListQueryParams from './TextFilterListQueryParams';

/**
 * TextApi - object-oriented interface
 * @export
 * @class TextApi
 * @extends {BaseAPI}
 */
export default class TextApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Text Filter
   * @param {TextFilter} textFilter
   * @throws {RequiredError}
   * @memberof TextApi
   */
  public create(textFilter?: TextFilter): Promise<TextFilter> {
    return this.restClient.post<TextFilter>('/encoding/filters/text', {}, textFilter).then((response) => {
      return new TextFilter(response);
    });
  }

  /**
   * @summary Delete Text Filter
   * @param {string} filterId Id of the Text Filter
   * @throws {RequiredError}
   * @memberof TextApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/text/{filter_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Text Filter Details
   * @param {string} filterId Id of the Text Filter
   * @throws {RequiredError}
   * @memberof TextApi
   */
  public get(filterId: string): Promise<TextFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<TextFilter>('/encoding/filters/text/{filter_id}', pathParamMap).then((response) => {
      return new TextFilter(response);
    });
  }

  /**
   * @summary List Text Filters
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof TextApi
   */
  public list(queryParams?: TextFilterListQueryParams): Promise<PaginationResponse<TextFilter>> {
    return this.restClient.get<PaginationResponse<TextFilter>>('/encoding/filters/text', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<TextFilter>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new TextFilter(i));
      }
      return paginationResponse;
    });
  }
}