import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql/typeDefs';
import { connectToDB } from './db/connect';
import { resolvers } from './graphql/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });
const PORT = 5000 || process.env.PORT;

connectToDB();

(async () => {
    server.listen(PORT, () => {
        console.log(`
            🚀 Server ready at: http://localhost:${PORT}/graphql
        `)
    })
})();