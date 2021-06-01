const expect = require('chai').expect
const axios = require('axios')
const url = 'http://localhost:3020'

describe ('Odin routes', function () {
    it ('POST /rooms', async function () {
        let response = await axios.post(url + '/rooms')
        expect(response.data.id).to.exist
        expect(response.status).to.equal(201)
    })

    it ('GET /rooms/:roomId', async function () {
        let response = await axios.post(url + '/rooms')
        let get = await axios.get(url + '/rooms/' + response.data.id)
        expect(get.data.id).to.equal(response.data.id)
        expect(get.data.id).to.exist
        expect(get.status).to.equal(200)
    })

    it ('Negative GET /rooms/:roomId', async function () {
        try {
            let get = await axios.get(url + '/rooms/howmanyofthesemustiwrite')
            expect(get.data.id).to.not.exist
        }catch(error) {
            expect(error.response.status).to.equal(404)
        }
    })
})