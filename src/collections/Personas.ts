import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Persona: CollectionConfig = {
    slug: 'persona',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
        admin: () => true,
    },
    admin: {
        useAsTitle: 'dni',
    },
    labels: {
        singular: 'Persona',
        plural: 'Personas'
    },
    fields: [
        {
            name: 'dni',
            type: 'number',
        },
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'rol',
            type: 'relationship',
            relationTo:'rol-persona'
        },
        {
            name:'description',
            type:'richText'
        }

    ],
}

export default Persona;