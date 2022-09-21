/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
import express from "express";
import db from "../db/connection";
// const express = require("express");
const router = express.Router();
// const db = require("../db/connection");

router.get("/", (req, res) => {
  const query = `SELECT * FROM events`;
  console.log(query);
  db.query(query)
    .then((data) => {
      const widgets = data.rows;
      res.json({ widgets });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

export default router;
