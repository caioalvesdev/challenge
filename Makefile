NAME=nestjs-app
DOCKER_COMPOSE_CMD=sudo docker compose

all: up

build:
	$(DOCKER_COMPOSE_CMD) build

up:
	$(DOCKER_COMPOSE_CMD) up

down:
	$(DOCKER_COMPOSE_CMD) down

exec:
	docker exec -it $(NAME) /bin/sh

run:
	npm run start:dev

up-build: build up

up-exec: up exec

up-dev:
	docker exec -it $(NAME) npm run start:dev
