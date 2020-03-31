const mongoose = require('mongoose');
const Request = mongoose.model('Request');


var formatter = (requests) => {
    return  pollingReturn = requests.map(r=>{
            return Object.assign({}, { 
                code: r.code, 
                correlationId: r.correlationId,
                createdAt: r.createdAt,
                id: r.id
             } )
        })  
}
module.exports = {
    async polling(req, res) {
        const requests = await Request.find({'code': 'PLACED'});
        // const pollingReturn = requests.map(r=>{
        //     return Object.assign({}, { 
        //         code: r.code
        //      } )
        // })   
        var pollingReturn = await formatter(requests);     
        return res.json({pollingReturn});
    },

    async placeOrder(req, res) {
        const request = await Request.create(req.body);

        return res.send('inserido com sucesso!');
    },

    async order(req, res) {
        const request = await Request.find({'correlationId': req.params.correlationId});

        return res.json(request);
    },

}
