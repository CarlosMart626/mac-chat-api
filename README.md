# mac-chat-api-docker
It's a dockerized Slack service from Devslopes repo [mac-chat-api](https://github.com/devslopes/mac-chat-api) to deploy anywhere is supported docker.

This docker services also include configuration to run MongoDB.

Any doubt about the chat service go to Devslopes repo [mac-chat-api](https://github.com/devslopes/mac-chat-api)

Getting Started
---------------
#### Run a local instance
* Run the following commands

```sh
# Build images
docker-compose build

# Start services:
docker-compose up

# To stop services
docker-compose down

```

Now go to your favorite browser and type `http://localhost:3005/` you'll see the service running.