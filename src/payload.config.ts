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

const url ='http://localhost:3000'
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
    Categoria
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
