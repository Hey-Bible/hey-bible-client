/* tslint:disable */
/* eslint-disable */
/**
 * Hey Bible App API
 * Public API for accessing Bible app data
 *
 * The version of the OpenAPI document: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface VersesGet200ResponseOneOfVerses
 */
export interface VersesGet200ResponseOneOfVerses {
    /**
     * 
     * @type {number}
     * @memberof VersesGet200ResponseOneOfVerses
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof VersesGet200ResponseOneOfVerses
     */
    bibleId?: string;
    /**
     * 
     * @type {string}
     * @memberof VersesGet200ResponseOneOfVerses
     */
    book?: string;
    /**
     * 
     * @type {number}
     * @memberof VersesGet200ResponseOneOfVerses
     */
    chapter?: number;
    /**
     * 
     * @type {number}
     * @memberof VersesGet200ResponseOneOfVerses
     */
    startVerse?: number;
    /**
     * 
     * @type {number}
     * @memberof VersesGet200ResponseOneOfVerses
     */
    endVerse?: number;
    /**
     * 
     * @type {string}
     * @memberof VersesGet200ResponseOneOfVerses
     */
    content?: string;
    /**
     * 
     * @type {Date}
     * @memberof VersesGet200ResponseOneOfVerses
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof VersesGet200ResponseOneOfVerses
     */
    lastUpdated?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof VersesGet200ResponseOneOfVerses
     */
    isFavorite?: boolean;
    /**
     * 
     * @type {Array<object>}
     * @memberof VersesGet200ResponseOneOfVerses
     */
    notes?: Array<object>;
    /**
     * 
     * @type {Array<object>}
     * @memberof VersesGet200ResponseOneOfVerses
     */
    images?: Array<object>;
}

/**
 * Check if a given object implements the VersesGet200ResponseOneOfVerses interface.
 */
export function instanceOfVersesGet200ResponseOneOfVerses(value: object): value is VersesGet200ResponseOneOfVerses {
    return true;
}

export function VersesGet200ResponseOneOfVersesFromJSON(json: any): VersesGet200ResponseOneOfVerses {
    return VersesGet200ResponseOneOfVersesFromJSONTyped(json, false);
}

export function VersesGet200ResponseOneOfVersesFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersesGet200ResponseOneOfVerses {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'bibleId': json['bible_id'] == null ? undefined : json['bible_id'],
        'book': json['book'] == null ? undefined : json['book'],
        'chapter': json['chapter'] == null ? undefined : json['chapter'],
        'startVerse': json['start_verse'] == null ? undefined : json['start_verse'],
        'endVerse': json['end_verse'] == null ? undefined : json['end_verse'],
        'content': json['content'] == null ? undefined : json['content'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'lastUpdated': json['last_updated'] == null ? undefined : (new Date(json['last_updated'])),
        'isFavorite': json['is_favorite'] == null ? undefined : json['is_favorite'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'images': json['images'] == null ? undefined : json['images'],
    };
}

export function VersesGet200ResponseOneOfVersesToJSON(json: any): VersesGet200ResponseOneOfVerses {
    return VersesGet200ResponseOneOfVersesToJSONTyped(json, false);
}

export function VersesGet200ResponseOneOfVersesToJSONTyped(value?: VersesGet200ResponseOneOfVerses | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'bible_id': value['bibleId'],
        'book': value['book'],
        'chapter': value['chapter'],
        'start_verse': value['startVerse'],
        'end_verse': value['endVerse'],
        'content': value['content'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'last_updated': value['lastUpdated'] === null ? null : ((value['lastUpdated'] as any)?.toISOString()),
        'is_favorite': value['isFavorite'],
        'notes': value['notes'],
        'images': value['images'],
    };
}

