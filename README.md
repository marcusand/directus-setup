# directus setup

basic directus boilerplate

## installation

1. clone repo
2. copy `.env.example` to `.env`
3. set variables in `.env`
4. run directus with `docker-compose up -d`


## updating

1. `docker-compose pull`
2. `docker-compose up -d`

from docs:
`The images will be pulled and the containers recreated. Migrations will happen automatically so once the containers have started you will be on the latest version (or the version you specified).` 