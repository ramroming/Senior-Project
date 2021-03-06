CREATE TABLE `TYPES` (
	`name` VARCHAR(150) NOT NULL,
	PRIMARY KEY (`name`)
);

CREATE TABLE `BREEDS` (
	`name` VARCHAR(150) NOT NULL,
	`type_name` VARCHAR(150) NOT NULL,
	PRIMARY KEY (`name`)
);

CREATE TABLE `PETS` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(150) NOT NULL,
	`gender` VARCHAR(150) NOT NULL,
	`birth_date` DATETIME NOT NULL,
	`breed_name` VARCHAR(150) NOT NULL,
	`photo` MEDIUMBLOB,
	`pervious_owner` INT,
	`shelter_id` INT,
	`owner_id` INT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `COLORS` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(150) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `COLOR_RECORDS` (
	`pet_id` INT NOT NULL,
	`color_id` INT NOT NULL,
	PRIMARY KEY (`pet_id`,`color_id`)
);

CREATE TABLE `USERS` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(150) NOT NULL,
	`email` VARCHAR(150) NOT NULL,
	`password` VARCHAR(150) NOT NULL,
	`user_type` VARCHAR(150) NOT NULL,
	`personal_info_id` INT NOT NULL,
	`status` BOOLEAN,
	`stmem_type` VARCHAR(150),
	PRIMARY KEY (`id`)
);

CREATE TABLE `PERSONAL_INFO` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR(150) NOT NULL,
	`last_name` VARCHAR(150) NOT NULL,
	`address` VARCHAR(150) NOT NULL,
	`phone_number` VARCHAR(150),
	`photo` MEDIUMBLOB,
	PRIMARY KEY (`id`)
);

CREATE TABLE `RATINGS` (
	`date` DATETIME NOT NULL,
	`client_id` INT NOT NULL,
	`stmem_id` INT NOT NULL,
	`value` INT NOT NULL,
	PRIMARY KEY (`date`,`client_id`,`stmem_id`)
);

CREATE TABLE `TRAINING_TYPES` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(150) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `TRAININGS` (
	`start_date` DATETIME NOT NULL,
	`pet_id` INT NOT NULL,
	`trainer_id` INT NOT NULL,
	`training_type_id` INT NOT NULL,
	`end_date` DATETIME,
	PRIMARY KEY (`start_date`,`pet_id`,`trainer_id`)
);

CREATE TABLE `TREATMENTS` (
	`date` DATETIME NOT NULL,
	`doctor_id` INT NOT NULL,
	`pet_id` INT NOT NULL,
	`case_id` INT NOT NULL,
	`vaccine_id` INT,
	`prescreption_id` INT,
	PRIMARY KEY (`date`,`doctor_id`,`pet_id`)
);

CREATE TABLE `CASES` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(150) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `VACCINES` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(150) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `PRESCRIPTIONS` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`code` VARCHAR(150) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `MEDICINE_PRESCRIPTIONS` (
	`prescription_id` INT NOT NULL,
	`medicine_id` INT NOT NULL,
	`dose` INT NOT NULL,
	PRIMARY KEY (`prescription_id`,`medicine_id`)
);

CREATE TABLE `MEDICINES` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(150) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `APPOINTMENTS` (
	`date` DATETIME NOT NULL,
	`client_id` INT NOT NULL,
	`stmem_id` INT NOT NULL,
	`status` BOOLEAN NOT NULL,
	`appointment_type_id` INT NOT NULL,
	`pet_id` INT,
	PRIMARY KEY (`date`,`client_id`,`stmem_id`)
);

CREATE TABLE `APPOINTMENT_TYPES` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(150) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `FEE_HISTORIES` (
	`date` DATETIME NOT NULL,
	`appointment_type_id` INT NOT NULL,
	`value` FLOAT NOT NULL,
	PRIMARY KEY (`date`,`appointment_type_id`)
);

CREATE TABLE `SHELTERS` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`capacity` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ADOPTION_ADS` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`date` DATETIME NOT NULL,
	`ad_type` VARCHAR(150) NOT NULL,
	`status` BOOLEAN NOT NULL,
	`pet_id` INT NOT NULL,
	`shelter_id` INT,
	`client_id` INT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `COMMENTS` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`date` DATETIME NOT NULL,
	`text` VARCHAR(150) NOT NULL,
	`adoption_ad_id` INT NOT NULL,
	`client_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ADOPTION_REQUESTS` (
	`date` DATETIME NOT NULL,
	`client_id` INT NOT NULL,
	`adoption_ad_id` INT NOT NULL,
	PRIMARY KEY (`client_id`,`adoption_ad_id`)
);

ALTER TABLE `BREEDS` ADD CONSTRAINT `BREEDS_fk0` FOREIGN KEY (`type_name`) REFERENCES `TYPES`(`name`);

ALTER TABLE `PETS` ADD CONSTRAINT `PETS_fk0` FOREIGN KEY (`breed_name`) REFERENCES `BREEDS`(`name`);

ALTER TABLE `PETS` ADD CONSTRAINT `PETS_fk1` FOREIGN KEY (`shelter_id`) REFERENCES `SHELTERS`(`id`);

ALTER TABLE `PETS` ADD CONSTRAINT `PETS_fk2` FOREIGN KEY (`owner_id`) REFERENCES `USERS`(`id`) ON DELETE CASCADE;

ALTER TABLE `COLOR_RECORDS` ADD CONSTRAINT `COLOR_RECORDS_fk0` FOREIGN KEY (`pet_id`) REFERENCES `PETS`(`id`);

ALTER TABLE `COLOR_RECORDS` ADD CONSTRAINT `COLOR_RECORDS_fk1` FOREIGN KEY (`color_id`) REFERENCES `COLORS`(`id`);

ALTER TABLE `USERS` ADD CONSTRAINT `USERS_fk0` FOREIGN KEY (`personal_info_id`) REFERENCES `PERSONAL_INFO`(`id`) ON DELETE CASCADE;

ALTER TABLE `RATINGS` ADD CONSTRAINT `RATINGS_fk0` FOREIGN KEY (`client_id`) REFERENCES `USERS`(`id`);

ALTER TABLE `RATINGS` ADD CONSTRAINT `RATINGS_fk1` FOREIGN KEY (`stmem_id`) REFERENCES `USERS`(`id`);

ALTER TABLE `TRAININGS` ADD CONSTRAINT `TRAININGS_fk0` FOREIGN KEY (`pet_id`) REFERENCES `PETS`(`id`);

ALTER TABLE `TRAININGS` ADD CONSTRAINT `TRAININGS_fk1` FOREIGN KEY (`trainer_id`) REFERENCES `USERS`(`id`);

ALTER TABLE `TRAININGS` ADD CONSTRAINT `TRAININGS_fk2` FOREIGN KEY (`training_type_id`) REFERENCES `TRAINING_TYPES`(`id`);

ALTER TABLE `TREATMENTS` ADD CONSTRAINT `TREATMENTS_fk0` FOREIGN KEY (`doctor_id`) REFERENCES `USERS`(`id`);

ALTER TABLE `TREATMENTS` ADD CONSTRAINT `TREATMENTS_fk1` FOREIGN KEY (`pet_id`) REFERENCES `PETS`(`id`);

ALTER TABLE `TREATMENTS` ADD CONSTRAINT `TREATMENTS_fk2` FOREIGN KEY (`case_id`) REFERENCES `CASES`(`id`);

ALTER TABLE `TREATMENTS` ADD CONSTRAINT `TREATMENTS_fk3` FOREIGN KEY (`vaccine_id`) REFERENCES `VACCINES`(`id`);

ALTER TABLE `TREATMENTS` ADD CONSTRAINT `TREATMENTS_fk4` FOREIGN KEY (`prescreption_id`) REFERENCES `PRESCRIPTIONS`(`id`);

ALTER TABLE `MEDICINE_PRESCRIPTIONS` ADD CONSTRAINT `MEDICINE_PRESCRIPTIONS_fk0` FOREIGN KEY (`prescription_id`) REFERENCES `PRESCRIPTIONS`(`id`);

ALTER TABLE `MEDICINE_PRESCRIPTIONS` ADD CONSTRAINT `MEDICINE_PRESCRIPTIONS_fk1` FOREIGN KEY (`medicine_id`) REFERENCES `MEDICINES`(`id`);

ALTER TABLE `APPOINTMENTS` ADD CONSTRAINT `APPOINTMENTS_fk0` FOREIGN KEY (`client_id`) REFERENCES `USERS`(`id`) ON DELETE CASCADE;

ALTER TABLE `APPOINTMENTS` ADD CONSTRAINT `APPOINTMENTS_fk1` FOREIGN KEY (`stmem_id`) REFERENCES `USERS`(`id`) ON DELETE CASCADE;

ALTER TABLE `APPOINTMENTS` ADD CONSTRAINT `APPOINTMENTS_fk2` FOREIGN KEY (`appointment_type_id`) REFERENCES `APPOINTMENT_TYPES`(`id`);

ALTER TABLE `APPOINTMENTS` ADD CONSTRAINT `APPOINTMENTS_fk3` FOREIGN KEY (`pet_id`) REFERENCES `PETS`(`id`) ON DELETE CASCADE;

ALTER TABLE `FEE_HISTORIES` ADD CONSTRAINT `FEE_HISTORIES_fk0` FOREIGN KEY (`appointment_type_id`) REFERENCES `APPOINTMENT_TYPES`(`id`);

ALTER TABLE `ADOPTION_ADS` ADD CONSTRAINT `ADOPTION_ADS_fk0` FOREIGN KEY (`pet_id`) REFERENCES `PETS`(`id`);

ALTER TABLE `ADOPTION_ADS` ADD CONSTRAINT `ADOPTION_ADS_fk1` FOREIGN KEY (`shelter_id`) REFERENCES `SHELTERS`(`id`);

ALTER TABLE `ADOPTION_ADS` ADD CONSTRAINT `ADOPTION_ADS_fk2` FOREIGN KEY (`client_id`) REFERENCES `USERS`(`id`);

ALTER TABLE `COMMENTS` ADD CONSTRAINT `COMMENTS_fk0` FOREIGN KEY (`adoption_ad_id`) REFERENCES `ADOPTION_ADS`(`id`);

ALTER TABLE `COMMENTS` ADD CONSTRAINT `COMMENTS_fk1` FOREIGN KEY (`client_id`) REFERENCES `USERS`(`id`);

ALTER TABLE `ADOPTION_REQUESTS` ADD CONSTRAINT `ADOPTION_REQUESTS_fk0` FOREIGN KEY (`client_id`) REFERENCES `USERS`(`id`) ON DELETE CASCADE;

ALTER TABLE `ADOPTION_REQUESTS` ADD CONSTRAINT `ADOPTION_REQUESTS_fk1` FOREIGN KEY (`adoption_ad_id`) REFERENCES `ADOPTION_ADS`(`id`);
























