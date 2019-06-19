import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import AkamaiNetStorageOutput from '../../../models/AkamaiNetStorageOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import AkamaiNetStorageOutputListQueryParams from './AkamaiNetStorageOutputListQueryParams';

/**
 * AkamaiNetstorageApi - object-oriented interface
 * @export
 * @class AkamaiNetstorageApi
 * @extends {BaseAPI}
 */
export default class AkamaiNetstorageApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Akamai NetStorage Output
   * @param {AkamaiNetStorageOutput} akamaiNetStorageOutput The Akamai NetStorage output to be created
   * @throws {RequiredError}
   * @memberof AkamaiNetstorageApi
   */
  public create(akamaiNetStorageOutput?: AkamaiNetStorageOutput): Promise<AkamaiNetStorageOutput> {
    return this.restClient.post<AkamaiNetStorageOutput>('/encoding/outputs/akamai-netstorage', {}, akamaiNetStorageOutput).then((response) => {
      return new AkamaiNetStorageOutput(response);
    });
  }

  /**
   * @summary Delete Akamai NetStorage Output
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof AkamaiNetstorageApi
   */
  public delete(outputId: string): Promise<AkamaiNetStorageOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<AkamaiNetStorageOutput>('/encoding/outputs/akamai-netstorage/{output_id}', pathParamMap).then((response) => {
      return new AkamaiNetStorageOutput(response);
    });
  }

  /**
   * @summary Akamai NetStorage Output Details
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof AkamaiNetstorageApi
   */
  public get(outputId: string): Promise<AkamaiNetStorageOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<AkamaiNetStorageOutput>('/encoding/outputs/akamai-netstorage/{output_id}', pathParamMap).then((response) => {
      return new AkamaiNetStorageOutput(response);
    });
  }

  /**
   * @summary List Akamai NetStorage Outputs
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof AkamaiNetstorageApi
   */
  public list(queryParams?: AkamaiNetStorageOutputListQueryParams): Promise<PaginationResponse<AkamaiNetStorageOutput>> {
    return this.restClient.get<PaginationResponse<AkamaiNetStorageOutput>>('/encoding/outputs/akamai-netstorage', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<AkamaiNetStorageOutput>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new AkamaiNetStorageOutput(i));
      }
      return paginationResponse;
    });
  }
}