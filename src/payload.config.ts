import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Media from './collections/Media';
import Producto from './collections/Product';
import Mesa from './collections/Tables';
import Usuario from './collections/Usuario';
import Reservation from './collections/Reservation';
import Opinion from './collections/Opinion';
import Categoria from './collections/Categoria';
import Pedido from './collections/Pedido';
import Factura from './collections/Factura';
import MetotoP from './collections/MetodoP';
import Personal from './collections/Personal';
import Role from './collections/Role';
import Persona from './collections/Personas';
import RolesPersona from './collections/RolesPersonas';

const url = 'http://localhost:3000'
// const url ='https://payloadback-production.up.railway.app'
export default buildConfig({
  serverURL: url,
  admin: {
    user: Users.slug,
  },

  collections: [
    Users,
    Media,
    Producto,
    Mesa,
    Usuario,
    Reservation,
    Opinion,
    Categoria,
    Pedido,
    Factura,
    MetotoP,
    Personal,
    Role,
    Persona,
    RolesPersona
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  
});
