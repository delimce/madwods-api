/*
 Navicat Premium Data Transfer

 Source Server         : madwods_sqlite
 Source Server Type    : SQLite
 Source Server Version : 3036000 (3.36.0)
 Source Schema         : main

 Target Server Type    : SQLite
 Target Server Version : 3036000 (3.36.0)
 File Encoding         : 65001

 Date: 04/08/2022 00:27:07
*/

PRAGMA foreign_keys = false;

-- ----------------------------
-- Table structure for sqlite_sequence
-- ----------------------------
DROP TABLE IF EXISTS "sqlite_sequence";
CREATE TABLE sqlite_sequence(name,seq);

-- ----------------------------
-- Records of sqlite_sequence
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for tbl_bodypart
-- ----------------------------
DROP TABLE IF EXISTS "tbl_bodypart";
CREATE TABLE "tbl_bodypart" (
  "id" integer NOT NULL,
  "name" text(100) NOT NULL,
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL,
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Records of tbl_bodypart
-- ----------------------------
BEGIN;
INSERT INTO "tbl_bodypart" ("id", "name", "created_at", "updated_at") VALUES (1, 'Shouders', '2022-03-18 20:57:12', '2022-03-18 20:57:15');
INSERT INTO "tbl_bodypart" ("id", "name", "created_at", "updated_at") VALUES (2, 'Upper arms', '2022-03-18 20:57:28', '2022-03-18 20:57:32');
INSERT INTO "tbl_bodypart" ("id", "name", "created_at", "updated_at") VALUES (3, 'Forearms', '2022-03-18 20:57:51', '2022-03-18 20:57:54');
INSERT INTO "tbl_bodypart" ("id", "name", "created_at", "updated_at") VALUES (4, 'Chest', '2022-03-18 20:58:10', '2022-03-18 20:58:13');
INSERT INTO "tbl_bodypart" ("id", "name", "created_at", "updated_at") VALUES (5, 'Legs', '2022-03-18 20:58:33', '2022-03-18 20:58:36');
INSERT INTO "tbl_bodypart" ("id", "name", "created_at", "updated_at") VALUES (6, 'Calves', '2022-03-18 20:58:48', '2022-03-18 20:58:51');
INSERT INTO "tbl_bodypart" ("id", "name", "created_at", "updated_at") VALUES (7, 'Butt', '2022-03-18 20:59:57', '2022-03-18 21:00:00');
INSERT INTO "tbl_bodypart" ("id", "name", "created_at", "updated_at") VALUES (8, 'Back', '2022-03-18 21:00:19', '2022-03-18 21:00:22');
INSERT INTO "tbl_bodypart" ("id", "name", "created_at", "updated_at") VALUES (9, 'Lower back', '2022-03-18 21:00:35', '2022-03-18 21:00:40');
INSERT INTO "tbl_bodypart" ("id", "name", "created_at", "updated_at") VALUES (10, 'Abs', '2022-03-18 21:01:02', '2022-03-18 21:01:05');
INSERT INTO "tbl_bodypart" ("id", "name", "created_at", "updated_at") VALUES (11, 'Neck', '2022-03-18 21:01:40', '2022-03-18 21:01:44');
INSERT INTO "tbl_bodypart" ("id", "name", "created_at", "updated_at") VALUES (12, 'Heart', '2022-03-18 23:39:35', '2022-03-18 23:39:39');
INSERT INTO "tbl_bodypart" ("id", "name", "created_at", "updated_at") VALUES (13, 'Arms', '2022-03-18 23:42:39', '2022-03-18 23:42:43');
COMMIT;

-- ----------------------------
-- Table structure for tbl_measure
-- ----------------------------
DROP TABLE IF EXISTS "tbl_measure";
CREATE TABLE "tbl_measure" (
  "id" integer NOT NULL,
  "name" text(50) NOT NULL,
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL,
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Records of tbl_measure
-- ----------------------------
BEGIN;
INSERT INTO "tbl_measure" ("id", "name", "created_at", "updated_at") VALUES (1, 'REP', '2022-03-18 20:40:08', '2022-03-18 20:40:12');
INSERT INTO "tbl_measure" ("id", "name", "created_at", "updated_at") VALUES (2, 'CAL', '2022-03-18 20:45:07', '2022-03-18 20:45:12');
INSERT INTO "tbl_measure" ("id", "name", "created_at", "updated_at") VALUES (3, 'DISTANCE', '2022-03-26 07:33:51', '2022-03-26 07:33:55');
COMMIT;

-- ----------------------------
-- Table structure for tbl_movement
-- ----------------------------
DROP TABLE IF EXISTS "tbl_movement";
CREATE TABLE "tbl_movement" (
  "id" integer NOT NULL,
  "name" text(255) NOT NULL,
  "desc" text(255),
  "type_id" integer NOT NULL,
  "level_id" integer NOT NULL,
  "created_at" text,
  "updated_at" text,
  PRIMARY KEY ("id"),
  CONSTRAINT "tbl_movement_ibfk_1" FOREIGN KEY ("level_id") REFERENCES "tbl_movement_level" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT "tbl_movement_ibfk_2" FOREIGN KEY ("type_id") REFERENCES "tbl_movement_type" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- ----------------------------
-- Records of tbl_movement
-- ----------------------------
BEGIN;
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (1, 'Air Squad', 'description', 3, 1, '2022-03-26 10:29:35', '2022-05-23 22:07:04');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (2, 'Burpee', NULL, 4, 1, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (3, 'Push Up', NULL, 3, 1, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (4, 'Pull Up', NULL, 3, 1, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (5, 'Sit Up', NULL, 3, 1, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (6, 'Run', NULL, 4, 1, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (7, 'Bench Press', NULL, 1, 1, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (8, 'Deadlift', NULL, 1, 1, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (9, 'Back Squat', NULL, 1, 1, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (10, 'Overhead Press', NULL, 1, 1, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (11, 'Hang Clean', NULL, 1, 1, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (12, 'Overhead Squad', NULL, 1, 2, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (13, 'Power Clean', NULL, 1, 1, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (14, 'Squad Clean', NULL, 1, 2, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (15, 'Power Snatch', NULL, 1, 1, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (16, 'Hang Snatch', NULL, 1, 1, '2022-03-26 10:29:35', '2022-03-26 10:29:54');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (17, 'Thruster', NULL, 1, 2, '2022-03-26 21:37:58', '2022-03-26 21:38:01');
INSERT INTO "tbl_movement" ("id", "name", "desc", "type_id", "level_id", "created_at", "updated_at") VALUES (18, 'Back Squat', NULL, 1, 1, '2022-04-11 00:01:19', '2022-04-11 00:01:22');
COMMIT;

-- ----------------------------
-- Table structure for tbl_movement_bodypart
-- ----------------------------
DROP TABLE IF EXISTS "tbl_movement_bodypart";
CREATE TABLE "tbl_movement_bodypart" (
  "id" integer NOT NULL,
  "movement_id" integer NOT NULL,
  "bodypart_id" integer NOT NULL,
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "tbl_movement_bodypart_ibfk_1" FOREIGN KEY ("movement_id") REFERENCES "tbl_movement" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT "tbl_movement_bodypart_ibfk_2" FOREIGN KEY ("bodypart_id") REFERENCES "tbl_bodypart" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- ----------------------------
-- Records of tbl_movement_bodypart
-- ----------------------------
BEGIN;
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (1, 1, 5, '2022-03-18 21:06:58', '2022-03-18 21:07:01');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (2, 1, 7, '2022-03-18 21:14:54', '2022-03-18 21:14:58');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (3, 2, 12, '2022-03-18 23:39:57', '2022-03-18 23:40:00');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (4, 3, 1, '2022-03-18 23:43:16', '2022-03-18 23:43:19');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (5, 3, 4, '2022-03-18 23:43:34', '2022-03-18 23:43:37');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (6, 3, 13, '2022-03-18 23:43:49', '2022-03-18 23:43:53');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (7, 4, 8, '2022-03-18 23:47:41', '2022-03-18 23:47:45');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (8, 4, 13, '2022-03-18 23:47:57', '2022-03-18 23:48:01');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (9, 5, 10, '2022-03-19 00:21:58', '2022-03-19 00:26:20');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (10, 6, 12, '2022-03-26 07:39:32', '2022-03-26 07:39:36');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (11, 7, 1, '2022-03-26 09:58:44', '2022-03-26 09:58:47');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (12, 7, 2, '2022-03-26 09:58:56', '2022-03-26 09:58:59');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (13, 7, 4, '2022-03-26 09:59:09', '2022-03-26 09:59:12');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (14, 8, 5, '2022-03-26 10:01:19', '2022-03-26 10:01:22');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (15, 8, 7, '2022-03-26 10:01:31', '2022-03-26 10:01:33');
INSERT INTO "tbl_movement_bodypart" ("id", "movement_id", "bodypart_id", "created_at", "updated_at") VALUES (16, 8, 9, '2022-03-26 10:01:45', '2022-03-26 10:02:13');
COMMIT;

-- ----------------------------
-- Table structure for tbl_movement_level
-- ----------------------------
DROP TABLE IF EXISTS "tbl_movement_level";
CREATE TABLE "tbl_movement_level" (
  "id" integer NOT NULL,
  "name" text(30) NOT NULL,
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL,
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Records of tbl_movement_level
-- ----------------------------
BEGIN;
INSERT INTO "tbl_movement_level" ("id", "name", "created_at", "updated_at") VALUES (1, 'BASIC', '2022-03-18 20:07:10', '2022-03-18 20:07:13');
INSERT INTO "tbl_movement_level" ("id", "name", "created_at", "updated_at") VALUES (2, 'INTERMEDIATE', '2022-03-19 00:17:02', '2022-03-20 10:29:33');
INSERT INTO "tbl_movement_level" ("id", "name", "created_at", "updated_at") VALUES (3, 'ADVANCED', '2022-03-19 00:18:41', '2022-03-20 10:29:39');
INSERT INTO "tbl_movement_level" ("id", "name", "created_at", "updated_at") VALUES (4, 'ELITE', '2022-03-19 00:19:03', '2022-03-20 10:29:47');
COMMIT;

-- ----------------------------
-- Table structure for tbl_movement_measure
-- ----------------------------
DROP TABLE IF EXISTS "tbl_movement_measure";
CREATE TABLE "tbl_movement_measure" (
  "id" integer NOT NULL,
  "movement_id" integer NOT NULL,
  "measure_id" integer NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "tbl_movement_measure_ibfk_1" FOREIGN KEY ("movement_id") REFERENCES "tbl_movement" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT "tbl_movement_measure_ibfk_2" FOREIGN KEY ("measure_id") REFERENCES "tbl_measure" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- ----------------------------
-- Records of tbl_movement_measure
-- ----------------------------
BEGIN;
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (1, 1, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (2, 2, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (3, 3, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (4, 4, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (5, 5, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (6, 6, 2);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (7, 6, 3);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (8, 7, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (9, 8, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (10, 9, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (11, 10, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (12, 11, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (13, 12, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (14, 13, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (15, 14, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (16, 15, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (17, 16, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (19, 17, 1);
INSERT INTO "tbl_movement_measure" ("id", "movement_id", "measure_id") VALUES (20, 18, 1);
COMMIT;

-- ----------------------------
-- Table structure for tbl_movement_type
-- ----------------------------
DROP TABLE IF EXISTS "tbl_movement_type";
CREATE TABLE "tbl_movement_type" (
  "id" integer NOT NULL,
  "name" text(30) NOT NULL,
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL,
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Records of tbl_movement_type
-- ----------------------------
BEGIN;
INSERT INTO "tbl_movement_type" ("id", "name", "created_at", "updated_at") VALUES (1, 'WEIGHTLIFTING', '2022-03-18 19:55:56', '2022-03-18 19:58:30');
INSERT INTO "tbl_movement_type" ("id", "name", "created_at", "updated_at") VALUES (2, 'GYMNASTICS', '2022-03-18 19:57:23', '2022-03-18 19:57:27');
INSERT INTO "tbl_movement_type" ("id", "name", "created_at", "updated_at") VALUES (3, 'BODYWEIGTH', '2022-03-18 19:57:49', '2022-03-18 19:57:53');
INSERT INTO "tbl_movement_type" ("id", "name", "created_at", "updated_at") VALUES (4, 'CARDIO', '2022-03-18 19:58:03', '2022-03-18 19:58:08');
COMMIT;

-- ----------------------------
-- Table structure for tbl_variant
-- ----------------------------
DROP TABLE IF EXISTS "tbl_variant";
CREATE TABLE "tbl_variant" (
  "id" integer NOT NULL,
  "name" text(150) NOT NULL,
  "level_id" integer,
  PRIMARY KEY ("id"),
  CONSTRAINT "tbl_variant_ibfk_1" FOREIGN KEY ("level_id") REFERENCES "tbl_movement_level" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- ----------------------------
-- Records of tbl_variant
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for tbl_wod
-- ----------------------------
DROP TABLE IF EXISTS "tbl_wod";
CREATE TABLE "tbl_wod" (
  "id" integer NOT NULL,
  "name" text(120) NOT NULL,
  "desc" text(255),
  "type_id" integer NOT NULL,
  "level_id" integer,
  "classic" integer NOT NULL,
  "rounds" integer,
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "tbl_wod_ibfk_1" FOREIGN KEY ("type_id") REFERENCES "tbl_wod_type" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT "tbl_wod_ibfk_2" FOREIGN KEY ("level_id") REFERENCES "tbl_movement_level" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- ----------------------------
-- Records of tbl_wod
-- ----------------------------
BEGIN;
INSERT INTO "tbl_wod" ("id", "name", "desc", "type_id", "level_id", "classic", "rounds", "created_at", "updated_at") VALUES (1, 'Frank', 'Heroes', 3, 2, 1, 3, '2022-03-26 21:29:42', '2022-03-26 21:52:31');
COMMIT;

-- ----------------------------
-- Table structure for tbl_wod_detail
-- ----------------------------
DROP TABLE IF EXISTS "tbl_wod_detail";
CREATE TABLE "tbl_wod_detail" (
  "id" integer NOT NULL,
  "wod_id" integer NOT NULL,
  "movement_id" integer NOT NULL,
  "measure_id" integer,
  "quantity" integer,
  "quantity2" integer,
  "quantity3" integer,
  "weigth" real,
  "weight2" real,
  "weight3" real,
  "order" integer,
  "extra" text(200),
  PRIMARY KEY ("id"),
  CONSTRAINT "tbl_wod_detail_ibfk_1" FOREIGN KEY ("wod_id") REFERENCES "tbl_wod" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT "tbl_wod_detail_ibfk_2" FOREIGN KEY ("movement_id") REFERENCES "tbl_movement" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT "tbl_wod_detail_ibfk_3" FOREIGN KEY ("measure_id") REFERENCES "tbl_measure" ("id") ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- ----------------------------
-- Records of tbl_wod_detail
-- ----------------------------
BEGIN;
INSERT INTO "tbl_wod_detail" ("id", "wod_id", "movement_id", "measure_id", "quantity", "quantity2", "quantity3", "weigth", "weight2", "weight3", "order", "extra") VALUES (1, 1, 4, 1, 21, 15, 9, NULL, NULL, NULL, 2, NULL);
INSERT INTO "tbl_wod_detail" ("id", "wod_id", "movement_id", "measure_id", "quantity", "quantity2", "quantity3", "weigth", "weight2", "weight3", "order", "extra") VALUES (2, 1, 17, 1, 21, 15, 9, 95.0, 65.0, NULL, 1, NULL);
COMMIT;

-- ----------------------------
-- Table structure for tbl_wod_type
-- ----------------------------
DROP TABLE IF EXISTS "tbl_wod_type";
CREATE TABLE "tbl_wod_type" (
  "id" integer NOT NULL,
  "name" text(100) NOT NULL,
  "desc" text(200),
  "created_at" text NOT NULL,
  "updated_at" text NOT NULL,
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Records of tbl_wod_type
-- ----------------------------
BEGIN;
INSERT INTO "tbl_wod_type" ("id", "name", "desc", "created_at", "updated_at") VALUES (1, 'EMOM', 'Stands for “every minute on the minute”. Start a running clock and do a set number of reps at regular intervals, typically (but not necessarily, despite the name) at the start of each minute. ', '2022-03-20 10:26:19', '2022-03-20 10:26:19');
INSERT INTO "tbl_wod_type" ("id", "name", "desc", "created_at", "updated_at") VALUES (2, 'AMRAP', '“As many rounds as possible”. Complete a given exercise combination as many times as you can within a given time. It’s a battle of mind over searing muscle.', '2022-03-20 10:26:19', '2022-03-20 10:26:19');
INSERT INTO "tbl_wod_type" ("id", "name", "desc", "created_at", "updated_at") VALUES (3, 'RFT', '“Rounds for time” means completing a given number of rounds of a circuit as fast as possible. The short rest periods help develop long-lasting muscle endurance.', '2022-03-20 10:26:19', '2022-03-20 10:26:19');
INSERT INTO "tbl_wod_type" ("id", "name", "desc", "created_at", "updated_at") VALUES (4, 'Chipper', 'A one-round series of exercises, usually with high reps, to be completed in the fastest time possible. A high-volume, muscle-building grind.', '2022-03-20 10:26:19', '2022-03-20 10:26:19');
INSERT INTO "tbl_wod_type" ("id", "name", "desc", "created_at", "updated_at") VALUES (5, 'Ladder', 'One or more movements, increasing or decreasing the workload over time.', '2022-03-20 10:26:19', '2022-03-20 10:26:19');
INSERT INTO "tbl_wod_type" ("id", "name", "desc", "created_at", "updated_at") VALUES (6, 'Tabata', 'Do eight rounds of high-intensity intervals, alternating 20 seconds effort with 10 seconds rest. A fat-eviscerating finisher.', '2022-03-20 10:26:19', '2022-03-20 10:26:19');
COMMIT;

-- ----------------------------
-- View structure for vw_movements
-- ----------------------------
DROP VIEW IF EXISTS "vw_movements";
CREATE VIEW "vw_movements" AS SELECT
	`m`.`id` AS `id`,
	`m`.`name` AS `name`,
	`m`.`desc` AS `desc`,
	`t`.`name` AS `type`,
	`l`.`name` AS `level`,
	group_concat( DISTINCT `me`.`name`) AS `measures`,
	group_concat( DISTINCT `bp`.`name`) AS `body` 
FROM
	((((((
							`tbl_movement` `m`
							JOIN `tbl_movement_type` `t` ON ((
									`m`.`type_id` = `t`.`id` 
								)))
						JOIN `tbl_movement_level` `l` ON ((
								`m`.`level_id` = `l`.`id` 
							)))
					JOIN `tbl_movement_measure` `mm` ON ((
							`m`.`id` = `mm`.`movement_id` 
						)))
				JOIN `tbl_measure` `me` ON ((
						`me`.`id` = `mm`.`measure_id` 
					)))
			LEFT JOIN `tbl_movement_bodypart` `mb` ON ((
					`m`.`id` = `mb`.`movement_id` 
				)))
		LEFT JOIN `tbl_bodypart` `bp` ON ((
				`mb`.`bodypart_id` = `bp`.`id` 
			))) 
GROUP BY
	`m`.`id`;

-- ----------------------------
-- View structure for vw_wods
-- ----------------------------
DROP VIEW IF EXISTS "vw_wods";
CREATE VIEW "vw_wods" AS select `w`.`id` AS `id`,`w`.`name` AS `name`,`wt`.`name` AS `type`,count(0) AS `movements` from ((`tbl_wod` `w` join `tbl_wod_detail` `wd` on((`w`.`id` = `wd`.`wod_id`))) join `tbl_wod_type` `wt` on((`w`.`type_id` = `wt`.`id`))) group by `w`.`id`;

-- ----------------------------
-- Indexes structure for table tbl_movement
-- ----------------------------
CREATE INDEX "main"."level_id"
ON "tbl_movement" (
  "level_id" ASC
);
CREATE INDEX "main"."type_id"
ON "tbl_movement" (
  "type_id" ASC
);

-- ----------------------------
-- Indexes structure for table tbl_movement_bodypart
-- ----------------------------
CREATE INDEX "main"."bodypart_id"
ON "tbl_movement_bodypart" (
  "bodypart_id" ASC
);
CREATE INDEX "main"."movement_id"
ON "tbl_movement_bodypart" (
  "movement_id" ASC
);

PRAGMA foreign_keys = true;
