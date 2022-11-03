import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const MetotoP: CollectionConfig = {
  slug: 'metodop',
  access:{
    create:()=>true,
    read:()=>true,
    update:()=>true,
    delete:()=>true,
    admin:()=>true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ]
}

export default MetotoP;