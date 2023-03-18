import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Mesa: CollectionConfig = {
  slug: 'mesa',
  access:{
    create:()=>true,
    read:()=>true,
    update:()=>true,
    delete:()=>true,
    admin:()=>true,
  },
  admin: {
    useAsTitle: 'nro_mesa',
  },
  fields: [
    {
      name: 'nro_mesa',
      type: 'number',
    }
  ],
  
}

export default Mesa;