const fs = require("fs");
const path = require("path");

// creating folder
// *mkdir   *mkdirSync

const createDir = () =>
  fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
    if (err) throw err;
    console.log("created the folder...");
  });

// creating file and write to it
const writeFile = () =>
  fs.writeFile(
    path.join(__dirname, "/test", "testFile.txt"),
    "this'll be the file content...",
    {},
    (err) => {
      if (err) throw err;
      //   append conent to existing file
      fs.appendFile(
        path.join(__dirname, "/test", "testFile.txt"),
        "appended content goes here!",
        {},
        (err) => {
          if (err) throw err;
          console.log("data appended sucessfully..");
        }
      );
    }
  );

//   read file content
const readFile = () =>
  fs.readFile(
    path.join(__dirname, "/test", "testFile.txt"),

    "utf-8",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );

const renameFile = () => {
  fs.mkdir(path.join(__dirname, "/newFolder"), (err) => {
    if (err) throw err;
  });
  fs.rename(
    path.join(__dirname, "/test", "testFile.txt"),
    path.join(__dirname, "/newFolder", "helloWorld.txt"),
    (err) => {
      if (err) throw err;
      console.log("file renamed and moved");
    }
  );
};

renameFile();
