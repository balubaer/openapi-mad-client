# MadOpenApi30.RunningGameApi

All URIs are relative to *https://127.0.0.1/api/mad/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrentGameStatus**](RunningGameApi.md#getCurrentGameStatus) | **GET** /update/{gameId} | request the current status of the game
[**moveFigure**](RunningGameApi.md#moveFigure) | **GET** /moveFigure | moves a figure
[**rollDice**](RunningGameApi.md#rollDice) | **GET** /rollDice/{gameId} | rolls a dice



## getCurrentGameStatus

> UpdateResponse getCurrentGameStatus(gameId)

request the current status of the game



### Example

```javascript
import MadOpenApi30 from 'mad_open_api_3_0';

let apiInstance = new MadOpenApi30.RunningGameApi();
let gameId = 56; // Number | which game you are playing
apiInstance.getCurrentGameStatus(gameId, (error, data, response) => {
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
 **gameId** | **Number**| which game you are playing | 

### Return type

[**UpdateResponse**](UpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## moveFigure

> MoveFigure moveFigure(gameId, fieldId)

moves a figure

move figure x on field fieldId

### Example

```javascript
import MadOpenApi30 from 'mad_open_api_3_0';

let apiInstance = new MadOpenApi30.RunningGameApi();
let gameId = 789; // Number | which game you are playing
let fieldId = 56; // Number | ID of the field where the figure to be moved stands
apiInstance.moveFigure(gameId, fieldId, (error, data, response) => {
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
 **gameId** | **Number**| which game you are playing | 
 **fieldId** | **Number**| ID of the field where the figure to be moved stands | 

### Return type

[**MoveFigure**](MoveFigure.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rollDice

> RollResponse rollDice(gameId)

rolls a dice

rolls a d6

### Example

```javascript
import MadOpenApi30 from 'mad_open_api_3_0';

let apiInstance = new MadOpenApi30.RunningGameApi();
let gameId = 56; // Number | which game you are playing
apiInstance.rollDice(gameId, (error, data, response) => {
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
 **gameId** | **Number**| which game you are playing | 

### Return type

[**RollResponse**](RollResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

