/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:8A7mlXLbDaps@ep-shrill-night-a57rf6eu.us-east-2.aws.neon.tech/ai-interviewer?sslmode=require',
    }
  };