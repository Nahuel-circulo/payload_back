import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Reservation: CollectionConfig = {
  slug: 'reservations',
  access:{
    create:()=>true,
    read:()=>true,
    update:()=>true,
    delete:()=>true,
    admin:()=>true,
  },
  admin: {
    useAsTitle: 'fecha',
  },
  fields: [
    {
      name: 'fecha',
      type: 'text',
    },
    {
        name:'horario',
        type:'radio',
        options:[
          {
            label:'Matutino',
            value:'M'
          },
          {
            label:'Nocturno',
            value:'N'
          }
        ],
        defaultValue:'M',
        admin:{
          layout:'horizontal'
        }
  
      },
      {
        name:'confirmado',
        type:'checkbox',
        label:'Reserva confirmada',
        defaultValue:false
      },
      {
        name:'cancelado',
        type:'checkbox',
        label:'Reserva cancelada',
        defaultValue:false
      },
      {
        name:'comensales',
        type:'number',
        defaultValue:1
      },
      {
        name:'user',
        type:'relationship',
        relationTo:'usuario',
        hasMany:false
      },
      {
        name:'mesa',
        type:'relationship',
        relationTo:'mesa',
        hasMany:false
      }

    
  ],
}

export default Reservation;