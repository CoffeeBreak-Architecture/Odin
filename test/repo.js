const expect = require('chai').expect
const repo = require('../roomRepo')

describe('Room repository', function () {
    it('createRoom', async function () {
        let room = await repo.createRoom()
        expect(room).to.exist  
    })

    it ('getRoom', async function () {
        let room = await repo.createRoom();
        let get = await repo.getRoom(room.id)
        expect(get).to.exist
    })

    it ('Negative getRoom', async function () {
        try {
            let get = await repo.getRoom('DoesNotExist')
            expect(get).to.not.exist
        }catch (error) {
            expect(error.response.status).to.equal(404)
        }
    })
})