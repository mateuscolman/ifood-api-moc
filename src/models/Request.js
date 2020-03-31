const moongose = require('mongoose');

const RequestSchema = new moongose.Schema({
    code: //"CANCELLED",
    {
        type: String,
        required: true,
    },
    correlationId: //"id do cliente",
    {
        type: String,
        required: true,
    },
    reference: //"Id de referencia do pedido"
    {
        type: String,
        required: true,
    },
    shortReference: //"Extranet Id", validar se o controle do shortReference por de ser aleatório
    {
        type: String,
        required: true,
    },
    createdAt: //"Timestamp do pedido",
    {
        type: Date,
        default: Date.now,
    },
    type: //"Tipo do pedido('DELIVERY' ou 'TOGO')",
    {
        type: String,
        required: true,
    },
    merchant: {
        id: // "Identificador unico do restaurante⁎"
        {
            type: String,
            required: true,
        },
        name: //"Nome do restaurante"
        {
            type: String,
            required: true,
        },
        phones: [
            //"Telefone do restaurante"
            {
                type: Number,
                required: true,
            },
        ],
        address: {
            formattedAddress: //"Endereço formatado"
            {
                type: String,
            },
            country: //"Pais",
            {
                type: String,
                required: true,
            },
            state: //"Estado",
            {
                type: String,
                required: true,
            },
            city: //"Cidade",
            {
                type: String,
                required: true,
            },
            neighborhood: //"Bairro",
            {
                type: String,
                required: true,
            },
            streetName: //"Endereço (Tipo logradouro + Logradouro)",
            {
                type: String,
                required: true,
            },
            streetNumber: //"Numero",
            {
                type: String,
                required: true,
            },
            postalCode: //"CEP"
            {
                type: String,
                required: true,
            },
        }
    },
    payments: [ //Forma de pagamento⁎⁎
        {
            name: //"Nome da forma de pagamento",
            {
                type: String,
                required: true,
            },
            code: //"Codigo da forma de pagamento⁎⁎⁎",
            {
                type: String,
                required: true,
            },
            value: //"Valor pago na forma",
            {
                type: Number,
                required: true,
            },
            prepaid: //"Pedido pago ('true' ou 'false')",
            {
                type: Boolean,
                required: true,
            },
            issuer: //"Bandeira"
            {
                type: String,
            },
        }],
    customer: {
        id: //"Id do cliente",
        {
            type: String,
            required: true,
        },
        name: //"Nome do client",
        {
            type: String,
            required: true,
        },
        taxPayerIdentificationNumber: //"CPF/CNPJ do cliente ",
        {
            type: String,
            required: true,
        },
        phone: //"Telefone do cliente",
        {
            type: String,
            required: true,
        },
        email: //"Email do cliente"
        {
            type: String,
            required: true,
        },
    },
    items: [
        {
            name: //"Nome do item",
            {
                type: String,
                required: true,
            },
            quantity: //"Quantidade",
            {
                type: Number,
                required: true,
            },
            price: //"Preço",
            {
                type: Number,
                required: true,
            },
            subItemsPrice: //"Preço dos subitens",
            {
                type: Number,
                required: true,
            },
            totalPrice: //"Preço total",
            {
                type: Number,
                required: true,
            },
            discount: //"Desconto",
            {
                type: Number,
                required: true,
            },
            addition: //"Adição",
            {
                type: Number,
                required: true,
            },
            externalCode: //"Código do e-PDV",
            {
                type: String,
                required: true,
            },
            observations: //"Observação do item",
            {
                type: String,
            },
            subItems: [
                {
                    name: //"Nome do item",
                    {
                        type: String,
                        required: true,
                    },
                    quantity: //"Quantidade",
                    {
                        type: Number,
                        required: true,
                    },
                    price: //"Preço",
                    {
                        type: Number,
                        required: true,
                    },
                    totalPrice: //"Preço total",
                    {
                        type: Number,
                        required: true,
                    },
                    discount: //"Desconto",
                    {
                        type: Number,
                        required: true,
                    },
                    addition: //"Adição",
                    {
                        type: Number,
                        required: true,
                    },
                    externalCode: //"Código do e-PDV"
                    {
                        type: Number,
                        required: true,
                    },
                }
            ]
        }

    ],
    subTotal: //"Total do pedido(Sem taxa de entrega)",
    {
        type: Number,
        required: true,
    },
    totalPrice: //"Total do pedido(Com taxa de entrega)",
    {
        type: Number,
        required: true,
    },
    deliveryFee: //"Taxa de entrega",
    {
        type: Number,
        required: true,
    },
    deliveryAddress: {
        formattedAddress: //"Endereço completo de entrega",
        {
            type: String,
        },
        country: //"Pais",
        {
            type: String,
            required: true,
        },
        state: //"Estado",
        {
            type: String,
            required: true,
        },
        city: //"Cidade",
        {
            type: String,
            required: true,
        },
        coordinates: {
            latitude: //"Latitude do endereço",
            {
                type: Number,
                required: true,
            },
            longitude: //"Longitude do endereço"
            {
                type: Number,
                required: true,
            },
        },
        neighborhood: //"Bairro",
        {
            type: String,
            required: true,
        },
        streetName: //"Endereço(Tipo logradouro + Logradouro)",
        {
            type: String,
            required: true,
        },
        streetNumber: //"Numero",
        {
            type: String,
            required: true,
        },
        postalCode: //"CEP",
        {
            type: String,
            required: true,
        },
        reference: //"Referencia. Ex: Perto do Posto de Gasolina",
        {
            type: String,
        },
        complement: //"Complemento do endereço"
        {
            type: String,
        },
    },
    deliveryDateTime: //"Timestamp do pedido",
    {
        type: Date,
        default: Date.now,
    },
    preparationTimeInSeconds: //"Tempo de preparo do pedido em segundos"
    {
        type: Number,
    },
}
,)

moongose.model('Request', RequestSchema);