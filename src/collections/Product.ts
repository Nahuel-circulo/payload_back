import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Producto: CollectionConfig = {
  slug: 'producto',
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
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'price',
      type: 'text',
    },
    {
      name:'image',
      type:'upload',
      relationTo:'media'
    },
    {
      name:'delivery',
      type:'checkbox',
      label:'Es apto para delivery?',
      defaultValue:false
    }
    ,
    {
      name:'categoria',
      type:'relationship',
      hasMany:false,
      relationTo:'categoria'
    }
  ],
}

export default Producto;