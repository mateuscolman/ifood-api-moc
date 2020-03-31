const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Store = mongoose.model('Store');

const createToken = (userId) => {
    return jwt.sign({id: userId}, 'ifood-moc', {expiresIn: '7d'});
}

 module.exports = {
 
    async authentication(req, res) {
        const { client_id, client_secret, grant_type, username, password } = await req.body;
        if (!client_id || !client_secret || !grant_type || !username || !password) return res.send({error: 'Dados insuficientes!'});

        try {
            const store = await Store.find({client_id}).select('+password');
            if (!client_id || !username) return res.send({error: 'Usuário não cadastrado'});

            const passOk = await bcrypt.compare(password, store.password);
            if (!passOk) res.send({error: 'Não foi possível realizar a autenticação'});
            user.password = undefined;
            return res.json({store, token: createToken(store.id)});
        }
        
        catch (err) {
            return res.send('Erro ao buscar loja');
        }
    },

    async createStore(req, res) {
        const { client_id, client_secret, grant_type, username, password } = await req.body;
        if (!client_id || !client_secret || !grant_type || !username || !password) return res.send({error: 'Dados insuficientes!'});

        try {
            if (await Store.findOne({ username })) return res.send({ error: 'Loja já cadastrado!'});
            const store = await Store.create(req.body);
            return res.send(store)
        }

        catch (err) {
            return res.send('Erro ao criar loja');
        }

    }
}