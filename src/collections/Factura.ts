import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Factura: CollectionConfig = {
    slug: 'factura',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
        admin: () => true,
    },
    admin: {
        useAsTitle: 'id',
    },
    fields: [
        {
            name: 'total',
            type: 'text'
        },
        {
            name: 'metodo de pago',
            type: 'relationship',
            hasMany: false,
            relationTo: 'metodop'
        },
        {
            name: 'pedidos',
            type: 'relationship',
            hasMany: true,
            relationTo: 'pedido'
        },
        {
            name:'usuario',
            type:'relationship',
            hasMany:false,
            relationTo:'usuario'
        }
    ]
}

export default Factura;