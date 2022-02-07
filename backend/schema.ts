// ! OLD CODE
import { makeExecutableSchema } from "graphql-tools";
import { typeDefs } from "./type-defs";
import { resolvers } from "./resolvers";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// * NEW CODE
// import { typeDefs } from "./type-defs";
// import { resolvers } from "./resolvers";

// const { makeExecutableSchema } = require("@graphql-tools/schema");

// export const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });
