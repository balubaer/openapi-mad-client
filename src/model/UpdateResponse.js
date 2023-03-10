/**
 * MAD - OpenAPI 3.0
 * MAD(Mensch ärger dich nicht! aber in cool!) is a funny family game for one to four people.  Some useful links:  - [Spielregeln PDF](https://www.schmidtspiele.de/files/Produkte/4/49085%20-%20Mensch%20ärgere%20Dich%20nicht®/Mensch_aergere_dich_nicht49085D.pdf)
 *
 * The version of the OpenAPI document: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Field from './Field';
import GameEnds from './GameEnds';
import Player from './Player';

/**
 * The UpdateResponse model module.
 * @module model/UpdateResponse
 * @version 0.0.4
 */
class UpdateResponse {
    /**
     * Constructs a new <code>UpdateResponse</code>.
     * current game status
     * @alias module:model/UpdateResponse
     */
    constructor() { 
        
        UpdateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateResponse} obj Optional instance to populate.
     * @return {module:model/UpdateResponse} The populated <code>UpdateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateResponse();

            if (data.hasOwnProperty('playingField')) {
                obj['playingField'] = ApiClient.convertToType(data['playingField'], [Field]);
            }
            if (data.hasOwnProperty('activePlayer')) {
                obj['activePlayer'] = Player.constructFromObject(data['activePlayer']);
            }
            if (data.hasOwnProperty('rollResult')) {
                obj['rollResult'] = ApiClient.convertToType(data['rollResult'], 'Number');
            }
            if (data.hasOwnProperty('isWon')) {
                obj['isWon'] = GameEnds.constructFromObject(data['isWon']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateResponse</code>.
     */
    static validateJSON(data) {
        if (data['playingField']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['playingField'])) {
                throw new Error("Expected the field `playingField` to be an array in the JSON data but got " + data['playingField']);
            }
            // validate the optional field `playingField` (array)
            for (const item of data['playingField']) {
                Field.validateJsonObject(item);
            };
        }
        // validate the optional field `activePlayer`
        if (data['activePlayer']) { // data not null
          Player.validateJSON(data['activePlayer']);
        }
        // validate the optional field `isWon`
        if (data['isWon']) { // data not null
          GameEnds.validateJSON(data['isWon']);
        }

        return true;
    }


}



/**
 * array of all fields
 * @member {Array.<module:model/Field>} playingField
 */
UpdateResponse.prototype['playingField'] = undefined;

/**
 * @member {module:model/Player} activePlayer
 */
UpdateResponse.prototype['activePlayer'] = undefined;

/**
 * result of rolling the dice
 * @member {Number} rollResult
 */
UpdateResponse.prototype['rollResult'] = undefined;

/**
 * @member {module:model/GameEnds} isWon
 */
UpdateResponse.prototype['isWon'] = undefined;






export default UpdateResponse;

