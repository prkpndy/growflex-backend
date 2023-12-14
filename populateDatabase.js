const dotenv = require("dotenv").config();
const data = require("./data");

const knex = require("knex")({
  client: "pg",
  connection: {
    connectionString: process.env.DB_URL,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const populateData = () => {
  try {
    knex.schema.hasTable("userDetails").then(async (exists) => {
      if (!exists) {
        await knex.schema.createTable("userDetails", (table) => {
          table.string("firstName");
          table.string("lastName");
          table.string("email");
          table.string("gender");
          table.string("dob");
          table.string("country");
          table.string("state");
          table.string("city");
          table.string("zip");
          table.string("areaOfInterest");
          table.string("password");
          table.string("profilePictureExtension");
          table.string("profilePictureFilePath");
        });

        console.log("---> Table created <---");
      }

      await knex("userDetails").insert(data);

      console.log("---> Data created <---");
    });
  } catch (error) {
    console.error(error);
  }
};

populateData();
