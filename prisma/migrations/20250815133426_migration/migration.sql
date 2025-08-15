-- CreateTable
CREATE TABLE `Notafiscal` (
    `id` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `lido` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Notafiscal_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
