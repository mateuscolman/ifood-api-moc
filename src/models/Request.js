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
    scheduled:
    {
        type: Boolean
    },
    isTest:
    {
        type: Boolean
    },
    preparationTimeInSeconds: {
        type: Number
    },
    preparationStartDateTime: {
        type: Date,
        default: Date.now
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
            
        },
        name: //"Nome do restaurante"
        {
            type: String,
            
        },
        phones: [
            //"Telefone do restaurante"
            {
                type: Number,
                
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
                
            },
            state: //"Estado",
            {
                type: String,
               
            },
            city: //"Cidade",
            {
                type: String,
               
            },
            neighborhood: //"Bairro",
            {
                type: String,
               
            },
            streetName: //"Endereço (Tipo logradouro + Logradouro)",
            {
                type: String,
               
            },
            streetNumber: //"Numero",
            {
                type: String,
              
            },
            postalCode: //"CEP"
            {
                type: String,
              
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
          
        },
        name: //"Nome do client",
        {
            type: String,
            
        },
        taxPayerIdentificationNumber: //"CPF/CNPJ do cliente ",
        {
            type: String,
        
        },
        phone: //"Telefone do cliente",
        {
            type: String,
           
        },
        email: //"Email do cliente"
        {
            type: String,
        
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
    benefits: //benefício referente ao desconto da entrega
    [
        {
            value: 
            {
                type: Number
            },
            
            sponsorshipValues:
            {
                IFOOD:
                {
                    type: Number
                },
                MERCHANT:
                {
                    type: Number
                }
            },

            target:
            {
                type: String
            }
        }
    ],

    deliveryMethod: {
        id: {
            type: String
        },
        value: {
            type: Number
        },
        minTime: {
            type: Number
        },
        maxTime: {
            type: Number
        },
        mode: {
            type: String
        },
        deliveredBy: {
            type: String
        }
    },

    deliveryAddress: {
        formattedAddress: //"Endereço completo de entrega",
        {
            type: String,
        },
        country: //"Pais",
        {
            type: String,
            
        },
        state: //"Estado",
        {
            type: String,
            
        },
        city: //"Cidade",
        {
            type: String,
            
        },
        coordinates: {
            latitude: //"Latitude do endereço",
            {
                type: Number,
                
            },
            longitude: //"Longitude do endereço"
            {
                type: Number,
               
            },
        },
        neighborhood: //"Bairro",
        {
            type: String,
           
        },
        streetName: //"Endereço(Tipo logradouro + Logradouro)",
        {
            type: String,
          
        },
        streetNumber: //"Numero",
        {
            type: String,
      
        },
        postalCode: //"CEP",
        {
            type: String,
         
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