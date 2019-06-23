const chai = require('chai');
const message = require('../../routes/message');
const games = require('../../testdata/games');
const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore();

chai.should();


describe('Message Unit Tests', function() {
  it('should pass 1 == 1 (canary test)', function() {
    const one = 1;
    one.should.equal(1);
  });

  before(function() {
    // Connect to local cloud datastore
    // Imports the Google Cloud client library

    async function upsert() {
      // The kind for the new entity
      const kind = 'Game';

      // The Cloud Datastore key for the new entity
      const gameKey1 = datastore.key([kind, 1]);
      const gameKey2 = datastore.key([kind, 2]);
      const gameKey3 = datastore.key([kind, 3]);

      const entities = [
        {
          key: gameKey1,
          data: games[0],
        },
        {
          key: gameKey2,
          data: games[1],
        },
        {
          key: gameKey3,
          data: games[2],
        },
      ];

      // Saves the entity
      await datastore.upsert(entities);
      console.log(`Games saved`);
    }
    upsert();
  });

  after(() => {
    async function query() {
      const kind = 'Game';
      const gameKey1 = datastore.key([kind, 1]);
      const gameKey2 = datastore.key([kind, 2]);
      const gameKey3 = datastore.key([kind, 3]);
      const keys = [gameKey1, gameKey2, gameKey3];

      const result = await datastore.get(keys);
      console.log(`RESULT ${JSON.stringify(result, null, 4)}`);
    }
    query();
  });

  beforeEach(function() {
    // Clear local cloud datastore
    // Upload a game object happening in the future
    // Upload a game object heppning in the past
  });

  it('should add a team member to the yes array of the next game', () => {
    // retrive next game object from local cloud datastore
    //
  });
});
