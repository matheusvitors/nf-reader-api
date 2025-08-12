-- CreateTable
CREATE TABLE `Notafisca` (
    `id` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Notafisca_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
