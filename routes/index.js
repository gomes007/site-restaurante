var conn = require("./../inc/db");

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  conn.query("SELECT * FROM tb_menus ORDER BY title", (err, results) => {
    if (err) {
      console.log(err);
    }
    res.render("index", {
      title: "Restaurante",
      menus: results,
    });
  });
});


router.get("/contact", function (req, res, next) {
  res.render("contact", {
    title: 'Contato - Restaurante'
  });
});


router.get("/menu", function (req, res, next) {
  res.render("menu", {
    title: 'Menu - Restaurante'
  });
});

router.get("/reservation", function (req, res, next) {
  res.render("reservation", {
    title: 'Reservation - Restaurante'
  });
});

router.get("/services", function (req, res, next) {
  res.render("services", {
    title: 'Services - Restaurante'
  });
});



module.exports = router;
