# ![LOGO](logo.png) Server sent events **flow**ground Connector

[SSE](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events) connector for the [flowground platform](https://app.flowground.net/ "Flowground platform")

> [SSE](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events) is a server push technology enabling a client to receive automatic updates from a server via HTTP connection.

## Setting up credentials
The first step in using SSE connector is configuring the credentials
1. On platform go to "Integrate → Credentials"
2. Select the SSE connector
3. Select "+ Add New Credential"
4. Give your credentials a name
5. Use URL for the server to which you want to connect
8. Click on "Verify"
9. Click on "Save"

## Using the connector
### triggers:
* realtimeEvents → trigger for receiving events from an event streaming server in real-time; it is required to set flow type to real-time

## License

**flow**ground :- Telekom iPaaS / server-sent-events-connector<br/>
Copyright © 2020, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: https://flowground.net/en/support-and-contact

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.