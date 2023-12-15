/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emailAddress]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `emailAddress` to the `User` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[User] DROP CONSTRAINT [User_email_key];

-- AlterTable
ALTER TABLE [dbo].[User] DROP COLUMN [email];
ALTER TABLE [dbo].[User] ADD [emailAddress] NVARCHAR(1000) NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_emailAddress_key] UNIQUE NONCLUSTERED ([emailAddress]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
