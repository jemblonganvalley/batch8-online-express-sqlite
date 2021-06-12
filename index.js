// import package yang di butuhkan
const express = require("express");
const cors = require("cors");
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./db.sqlite",
  },
});
const app = express();

//setting middlewarenya
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// READ ALL USERS DATA
app.get("/api/users", (req, res) => {
  knex("users")
    .select("*")
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

//CREATE USER DATA / REGISTER
app.post("/api/users", (req, res) => {
  const data = req.body;

  knex("users")
    .insert(data)
    .then((result) => {
      //apakah data berhasil masuk
      if (result.length > 0) {
        res.json({
          success: true,
          message: "data berhasil masuk ke database",
        });
      } else {
        res.json({
          success: false,
          message: "data gagal masuk ke database !",
        });
      }
    })
    .catch((err) => {
      res.json({
        success: false,
        error: err,
        message: "data mungkin sudah di gunakan..!",
      });
    });
});

// UPDATE USER
app.patch("/api/users", (req, res) => {
  const data = req.body;

  knex("users")
    .where({ id: data.id })
    .update(data)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

//DELETE USER
app.delete("/api/users", (req, res) => {
  const data = req.body;
  knex("users")
    .where({ id: data.id })
    .del()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

//LOGIN
app.post("/api/login", (req, res) => {
  const data = req.body;
  knex("users")
    .select("id", "username", "avatar")
    .where({ username: data.username, password: data.password })
    .then((result) => {
      // pengecekan apakah user dan password ada
      if (result.length > 0) {
        res.json({
          success: true,
          message : "login berhasil",
          data: result,
        });
      }
    })
    .then((err) => {
      res.json({
        success: false,
        message : "login gagal",
        error: err,
      });
    });
});

// listener
app.listen(8080, () => {
  console.log("listening port 8080");
});
