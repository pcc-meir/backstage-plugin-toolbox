import { AddLocationRequest, AddLocationResponse, CatalogApi, CatalogRequestOptions, GetEntitiesByRefsRequest, GetEntitiesByRefsResponse, GetEntitiesRequest, GetEntitiesResponse, GetEntityAncestorsRequest, GetEntityAncestorsResponse, GetEntityFacetsRequest, GetEntityFacetsResponse, Location, QueryEntitiesRequest, QueryEntitiesResponse, ValidateEntityResponse } from '@backstage/catalog-client';
import { CompoundEntityRef, Entity } from '@backstage/catalog-model';
export declare class CatalogApiMock implements CatalogApi {
    addLocation(_location: AddLocationRequest, _options?: CatalogRequestOptions): Promise<AddLocationResponse>;
    getEntities(_request?: GetEntitiesRequest, _options?: CatalogRequestOptions): Promise<GetEntitiesResponse>;
    getEntitiesByRefs(_request: GetEntitiesByRefsRequest, _options?: CatalogRequestOptions): Promise<GetEntitiesByRefsResponse>;
    getEntityAncestors(_request: GetEntityAncestorsRequest, _options?: CatalogRequestOptions): Promise<GetEntityAncestorsResponse>;
    getEntityByRef(_entityRef: string | CompoundEntityRef, _options?: CatalogRequestOptions): Promise<Entity | undefined>;
    getEntityFacets(_request: GetEntityFacetsRequest, _options?: CatalogRequestOptions): Promise<GetEntityFacetsResponse>;
    getLocationById(_id: string, _options?: CatalogRequestOptions): Promise<Location | undefined>;
    getLocationByRef(_locationRef: string, _options?: CatalogRequestOptions): Promise<Location | undefined>;
    refreshEntity(_entityRef: string, _options?: CatalogRequestOptions): Promise<void>;
    removeEntityByUid(_uid: string, _options?: CatalogRequestOptions): Promise<void>;
    removeLocationById(_id: string, _options?: CatalogRequestOptions): Promise<void>;
    validateEntity(_entity: Entity, _locationRef: string, _options?: CatalogRequestOptions): Promise<ValidateEntityResponse>;
    queryEntities(_request?: QueryEntitiesRequest, _options?: CatalogRequestOptions): Promise<QueryEntitiesResponse>;
    getLocationByEntity(_entity: string | CompoundEntityRef, _options?: CatalogRequestOptions): Promise<Location | undefined>;
}
