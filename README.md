# taboo
Taboo web game

#instructions
1. Clone or download the project
2. Make sure you have mongo installed. Open terminal/cmd prompt, and create a mongo instance by typing "mongod"
3. Type "mongo" to login to mongo-db
4. Create a db: use taboodb
5. Now create 'words' collection(table) in this db: db.createCollection("words")
6. Also create 'games' collection(table) in this db: db.createCollection("games")
7. Copy all the data present in words_new.json file which is project and paste it in 'words' collection: db.words.insert(<DATA>)
8. You are almost done, npm modules are already in project, so open terminal/cmd prompt and run the following command: gulp
9. Wait for some time and you shall see Taboo up and running :D
