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

export default buildConfig({
  serverURL: 'https://payloadback-production.up.railway.app',
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
    Opinion
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
