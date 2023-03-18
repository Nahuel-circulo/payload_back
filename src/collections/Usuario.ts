import payload from 'payload';
import { CollectionConfig } from 'payload/types';

const Usuario: CollectionConfig = {
  slug: 'usuario',
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
      name:'gender',
      type:'radio',
      options:[
        {
          label:'Mujer',
          value:'M'
        },
        {
          label:'Hombre',
          value:'H'
        }
      ],
      defaultValue:'M',
      admin:{
        layout:'horizontal'
      }

    },
  ],
  endpoints: [
    {
        path: '/send',
        method: 'get',
        handler: async (req, res, next) => {
            
            
            payload.sendEmail({
                from: 'nahuelyad@gmail.com',
                to: 'sylvester41@ethereal.email',
                subject: 'Prueba',
                html:'Hola mensaje de prueba'
            })
            res.status(200).send('Enviado')
        }
    }
],
};

export default Usuario;