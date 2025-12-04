CREATE TABLE `signups` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `signups_id` PRIMARY KEY(`id`),
	CONSTRAINT `signups_email_unique` UNIQUE(`email`)
);
