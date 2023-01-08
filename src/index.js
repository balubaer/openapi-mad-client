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


import ApiClient from './ApiClient';
import Field from './model/Field';
import Figure from './model/Figure';
import GameEnds from './model/GameEnds';
import InitPost from './model/InitPost';
import JoinUpdateResponse from './model/JoinUpdateResponse';
import MoveFigure from './model/MoveFigure';
import Player from './model/Player';
import RollResponse from './model/RollResponse';
import UpdateResponse from './model/UpdateResponse';
import InitGameApi from './api/InitGameApi';
import RunningGameApi from './api/RunningGameApi';


/**
* MAD(Mensch ärger dich nicht! aber in cool!) is a funny family game for one to four people.  Some useful links:  - [Spielregeln PDF](https://www.schmidtspiele.de/files/Produkte/4/49085%20-%20Mensch%20ärgere%20Dich%20nicht®/Mensch_aergere_dich_nicht49085D.pdf).<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MadOpenApi30 = require('index'); // See note below*.
* var xxxSvc = new MadOpenApi30.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MadOpenApi30.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MadOpenApi30.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MadOpenApi30.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.4
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Field model constructor.
     * @property {module:model/Field}
     */
    Field,

    /**
     * The Figure model constructor.
     * @property {module:model/Figure}
     */
    Figure,

    /**
     * The GameEnds model constructor.
     * @property {module:model/GameEnds}
     */
    GameEnds,

    /**
     * The InitPost model constructor.
     * @property {module:model/InitPost}
     */
    InitPost,

    /**
     * The JoinUpdateResponse model constructor.
     * @property {module:model/JoinUpdateResponse}
     */
    JoinUpdateResponse,

    /**
     * The MoveFigure model constructor.
     * @property {module:model/MoveFigure}
     */
    MoveFigure,

    /**
     * The Player model constructor.
     * @property {module:model/Player}
     */
    Player,

    /**
     * The RollResponse model constructor.
     * @property {module:model/RollResponse}
     */
    RollResponse,

    /**
     * The UpdateResponse model constructor.
     * @property {module:model/UpdateResponse}
     */
    UpdateResponse,

    /**
    * The InitGameApi service constructor.
    * @property {module:api/InitGameApi}
    */
    InitGameApi,

    /**
    * The RunningGameApi service constructor.
    * @property {module:api/RunningGameApi}
    */
    RunningGameApi
};
