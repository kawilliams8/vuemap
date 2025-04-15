import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import cors from "cors";
import { pool } from "./db";

// Schema with a new type
const schema = buildSchema(`
  type Location {
    id: ID
    name: String
    latitude: Float
    longitude: Float
  }

  type Query {
    locations: [Location]
  }
`);

// Resolver
const root = {
  locations: async () => {
    const [rows] = await pool.query(
      "SELECT id, name, latitude, longitude FROM locations"
    );
    return rows;
  },
};

const app = express();
app.use(cors()); // Enable for all origins
// OR for stricter control:
// app.use(cors({ origin: 'http://localhost:5173' }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(`🚀 Server running at http://localhost:4000/graphql`);
});
