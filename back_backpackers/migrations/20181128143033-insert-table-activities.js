"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.insert(
    "activities",
    [
      "name",
      "id_creator",
      "price",
      "capacity",
      "id_place",
      "description",
      "contact",
      "date"
    ],
    [
      "Visite de la Tokyo Tower",
      1,
      7,
      5,
      1,
      "Cherche petit groupe pour visiter ensemble la Tokyo Tower ce Samedi !",
      "0612345678",
      "2019-02-09"
    ],
    callback
  );
  db.insert(
    "activities",
    [
      "name",
      "id_creator",
      "capacity",
      "id_place",
      "description",
      "contact",
      "date"
    ],
    [
      "Tour du musée de Ueno",
      1,
      3,
      2,
      "Je cherche des gens pour apprécier la culture jap au musée de Ueno !",
      "0612345678",
      "2019-02-20"
    ],
    callback
  );
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  version: 1
};
