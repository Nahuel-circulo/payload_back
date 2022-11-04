import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Pedido: CollectionConfig = {
    slug: 'pedido',
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
            name: 'cantidad',
            type: 'number',
            defaultValue: 1
        },
        {
            name: 'producto',
            type: 'relationship',
            hasMany: false,
            relationTo: 'producto'
        },
        {
            name:'identificador',
            type:'text',
            required:true
        }
    ]
}

export default Pedido;