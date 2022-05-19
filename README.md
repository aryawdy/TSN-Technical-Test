# TSN-Technical-Test

docker container create --name mongotest --mount "type=bind,source=/D/Coding/Test/test-interview/TSN-Technical-Test/mongo-data,destination=/data/db" --publish 27018:27017 --env MONGO_INITDB_ROOT_USERNAME=arya --env MONGO_INITDB_ROOT_PASSWORD=arya mongo:latest

docker volumn create mongovolume

docker container create --name mongovolume --publish 27018:27017 --mount "type=volume,source=mongo-data,destination=/data/db" --env MONGO_INITDB_ROOT_USERNAME=arya --env MONGO_INITDB_ROOT_PASSWORD=arya mongo:latest

docker container create --name mongovolume --mount "type=volume,source=mongodata,destination=/\_data/db" --publish 27018:27017 --env MONGO_INITDB_ROOT_USERNAME=arya --env MONGO_INITDB_ROOT_PASSWORD=arya mongo:latest

docker container create --name nginxbackup --mount "type=bind,source=/d/Coding/Test/test-interview/TSN-Technical-Test/backup,destination=/backup" --mount "type=volume,source=mongodata,destination=/\_data" nginx:latest

docker container run --rm --name ubuntubackup --mount "type=bind,source=/d/Coding/Test/test-interview/TSN-Technical-Test/backup,destination=/backup" --mount "type=volume,source=mongodata,destination=/\_data" ubuntu:latest tar cvf /backup/backup.tar.gz /\_data

docker container create --name ubuntubackup --mount "type=bind,source=/d/Coding/Test/test-interview/TSN-Technical-Test/backup,destination=/backup" --mount "type=volume,source=mongodata,destination=/\_data" ubuntu:latest

docker container exec -i -t nginxbackup /bin/bash

docker volume inspect ....

/d/Coding/Test/test-interview/TSN-Technical-Test/backup

zip cvf backup/backup.zip.gz /\_data
