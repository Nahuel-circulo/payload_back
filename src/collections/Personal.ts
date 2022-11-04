import { CollectionConfig } from 'payload/types';

const Personal: CollectionConfig = {
  slug: 'Personal',
  auth: true,
  access:{
    create:()=>true,
    read:()=>true,
    update:()=>true,
    delete:()=>true,
    admin:()=>true,
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name:'name',
      type:'text',
      required:true
    },
    {
      name:'email',
      type:'text'
    },
    {
      name:'password',
      type:'text',
      hidden:true
    },
    {
        name:'role',
        required:true,
        relationTo:'role',
        type:'relationship'
    }

  ],
};

export default Personal;