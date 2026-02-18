-- CreateTable
CREATE TABLE `Notafiscal` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL DEFAULT '',
    `link` VARCHAR(750) NOT NULL,
    `data` VARCHAR(191) NOT NULL,
    `check` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Notafiscal_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
