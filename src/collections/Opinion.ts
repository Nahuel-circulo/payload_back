import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Opinion: CollectionConfig = {
  slug: 'opinion',
  access:{
    create:()=>true,
    read:()=>true,
    update:()=>true,
    delete:()=>true,
    admin:()=>true,
  },
  admin: {
    useAsTitle: 'comment',
  },
  fields: [
    {
      name: 'comment',
      type: 'text',
    },
   
      {
        name:'calification',
        type:'number',
      },
      {
        name:'user',
        type:'relationship',
        relationTo:'usuario',
        hasMany:false,
      },
    
  ],
}

export default Opinion;