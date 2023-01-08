# MadOpenApi30.InitGameApi

All URIs are relative to *https://127.0.0.1/api/mad/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**choseAGame**](InitGameApi.md#choseAGame) | **GET** /choseGame | chose a game
[**instantiateGameObjectWithGivenGameSetting**](InitGameApi.md#instantiateGameObjectWithGivenGameSetting) | **POST** /init | select game object type and set game options
[**joinAGame**](InitGameApi.md#joinAGame) | **GET** /joinGame | sends join Request
[**playersStatus**](InitGameApi.md#playersStatus) | **GET** /joinUpdate/{gameId} | get the player list
[**startTheGame**](InitGameApi.md#startTheGame) | **GET** /startGame/{gameId} | start the game



## choseAGame

> [Number] choseAGame()

chose a game

ask for the aktive games

### Example

```javascript
import MadOpenApi30 from 'mad_open_api_3_0';

let apiInstance = new MadOpenApi30.InitGameApi();
apiInstance.choseAGame((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## instantiateGameObjectWithGivenGameSetting

> Number instantiateGameObjectWithGivenGameSetting(opts)

select game object type and set game options



### Example

```javascript
import MadOpenApi30 from 'mad_open_api_3_0';

let apiInstance = new MadOpenApi30.InitGameApi();
let opts = {
  'initPost': new MadOpenApi30.InitPost() // InitPost | 
};
apiInstance.instantiateGameObjectWithGivenGameSetting(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **initPost** | [**InitPost**](InitPost.md)|  | [optional] 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## joinAGame

> joinAGame(gameId, playerName, playerColor)

sends join Request

sends game id to join, name and color

### Example

```javascript
import MadOpenApi30 from 'mad_open_api_3_0';

let apiInstance = new MadOpenApi30.InitGameApi();
let gameId = 789; // Number | which game you wanna join
let playerName = "playerName_example"; // String | name of the player
let playerColor = "playerColor_example"; // String | color of the player
apiInstance.joinAGame(gameId, playerName, playerColor, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **Number**| which game you wanna join | 
 **playerName** | **String**| name of the player | 
 **playerColor** | **String**| color of the player | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## playersStatus

> JoinUpdateResponse playersStatus(gameId)

get the player list

send the players which has currently joined the game

### Example

```javascript
import MadOpenApi30 from 'mad_open_api_3_0';

let apiInstance = new MadOpenApi30.InitGameApi();
let gameId = 789; // Number | game you`ve joined
apiInstance.playersStatus(gameId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **Number**| game you&#x60;ve joined | 

### Return type

[**JoinUpdateResponse**](JoinUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## startTheGame

> startTheGame(gameId)

start the game

start the multiplayer game

### Example

```javascript
import MadOpenApi30 from 'mad_open_api_3_0';

let apiInstance = new MadOpenApi30.InitGameApi();
let gameId = 789; // Number | game you`ve joined
apiInstance.startTheGame(gameId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **Number**| game you&#x60;ve joined | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

