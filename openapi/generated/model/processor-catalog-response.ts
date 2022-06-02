/* tslint:disable */
/* eslint-disable */
/**
 * Red Hat Openshift SmartEvents Fleet Manager
 * The API exposed by the fleet manager of the SmartEvents service.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: openbridge-dev@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ProcessorSchemaEntryResponse } from './processor-schema-entry-response';

/**
 * 
 * @export
 * @interface ProcessorCatalogResponse
 */
export interface ProcessorCatalogResponse {
    /**
     * 
     * @type {string}
     * @memberof ProcessorCatalogResponse
     */
    'kind'?: string;
    /**
     * 
     * @type {Array<ProcessorSchemaEntryResponse>}
     * @memberof ProcessorCatalogResponse
     */
    'items'?: Array<ProcessorSchemaEntryResponse>;
}

