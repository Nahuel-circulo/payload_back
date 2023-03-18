import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const RolesPersona: CollectionConfig = {
    slug: 'rol-persona',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
        admin: () => true,
    },
    admin: {
        useAsTitle: 'name',
    },
    labels: {
        singular: 'Rol Persona',
        plural: 'Rol Personas'
    },
    fields: [

        {
            name: 'name',
            type: 'text',
        },
        
    ],
}

export default RolesPersona;