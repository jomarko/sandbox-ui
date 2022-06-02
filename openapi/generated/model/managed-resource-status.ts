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



/**
 * 
 * @export
 * @enum {string}
 */

export const ManagedResourceStatus = {
    Accepted: 'accepted',
    Preparing: 'preparing',
    Provisioning: 'provisioning',
    Ready: 'ready',
    Deprovision: 'deprovision',
    Deleting: 'deleting',
    Deleted: 'deleted',
    Failed: 'failed'
} as const;

export type ManagedResourceStatus = typeof ManagedResourceStatus[keyof typeof ManagedResourceStatus];



