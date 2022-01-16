fileMode: ##@Configuration Sets git fileMode to false
	@echo "Configuring git fileMode to false"
	git config core.fileMode false

files: ##@Copy files and set permissions
	sudo cp .env.example .env
	sudo cp docker-compose.example.yml docker-compose.yml
	sudo mkdir logs
	sudo chmod 777 -R *

install: ##Install dependencies
	@echo "Installing dependencies"
	docker-compose up -d
	docker exec -it nest-rest bash -c "npm install"
	sudo chmod 777 -R *

up: ##Up containers
	docker-compose up -d

start: ##Start server
	docker exec -it nest-rest bash -c "npm start"

migration: ##Run migrations
	docker exec -it nest-rest bash -c "yarn typeorm migration:run"
	
