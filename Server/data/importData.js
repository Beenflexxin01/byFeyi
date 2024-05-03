const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Blog = require("../models/BlogModel");

dotenv.config({ path: "./config.env" });
// dotenv.config({ path: "./Server/config.env" });


const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB SUCESSFULLY CONNECTED!"));

// const blogs = JSON.parse(fs.readFileSync(`${__dirname}/blogs.json`, `utf-8`));
const blogs = JSON.parse(fs.readFileSync(`${__dirname}/blogs.json`, `utf-8`));
const importData = async function () {
  try {
    await Blog.create(blogs);
    console.log(
      "Data sucessfully imported! Kindly proceed to your API tester to see the deployed data 😊👌"
    );
  } catch (err) {
    console.log(
      "An error occured while trying to import data 😞☹! Kindly connect to your internet! "
    );
  }
  process.exit(1);
};

const deleteData = async function () {
  try {
    await Blog.deleteMany();
    console.log(
      "Data successfully Deleted! Kindly note that you have no deployed data in your database 🙄🙄"
    );
  } catch (err) {
    console.log(
      "Failed to delete data! Kindly check your internet connection 😪"
    );
  }
  process.exit(1);
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}