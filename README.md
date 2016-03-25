# IoT JavaScript Client

## Usage

Download and include the iot.js script file to your HTML File

```js
<script type="text/javascript" src="iot.js"></script>
```

Embed this code in another script tag

```js

var APP_KEY = <YOUR APP KEY>
var DEV_KEY = <YOUR DEV KEY>
var SECRECT = <YOUR SECRECT KEY>

// Create an IoT Client 

var IoT = new IoT(APP_KEY,DEV_KEY,SECRECT)

```
Provide the APP,DEV and SECRET Keys

### Functionalities

```js

// Connecting to IoT Server
IoT.connect()

// Setting the State
IoT.setData("YOUR STATE / DATA")

// Retriving the State
IoT.getData("YOUR STATE / DATA")

// Disconnecting from the IoT Server
IoT.disconnect()
```
