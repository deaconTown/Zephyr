/*
  Warnings:

  - You are about to drop the column `emailAddress` on the `User` table. All the data in the column will be lost.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Role] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    [isActive] BIT NOT NULL CONSTRAINT [Role_isActive_df] DEFAULT 1,
    [isDeleted] BIT NOT NULL CONSTRAINT [Role_isDeleted_df] DEFAULT 0,
    CONSTRAINT [Role_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[UserRole] (
    [id] INT NOT NULL IDENTITY(1,1),
    [roleId] INT NOT NULL,
    [userId] INT NOT NULL,
    CONSTRAINT [UserRole_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[OrderStatus] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [isActive] BIT NOT NULL CONSTRAINT [OrderStatus_isActive_df] DEFAULT 1,
    [isDeleted] BIT NOT NULL CONSTRAINT [OrderStatus_isDeleted_df] DEFAULT 0,
    CONSTRAINT [OrderStatus_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Order] (
    [id] INT NOT NULL IDENTITY(1,1),
    [customerId] INT NOT NULL,
    [merchantId] INT NOT NULL,
    [statusId] INT NOT NULL,
    [totalCost] INT NOT NULL,
    CONSTRAINT [Order_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProductOrder] (
    [id] INT NOT NULL IDENTITY(1,1),
    [orderId] INT NOT NULL,
    [productId] INT NOT NULL,
    [quantity] INT NOT NULL,
    CONSTRAINT [ProductOrder_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Product] (
    [id] INT NOT NULL IDENTITY(1,1),
    [merchantId] INT NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [unitCost] INT NOT NULL,
    [stockLevel] INT NOT NULL,
    [imageUrl] NVARCHAR(1000),
    [description] NVARCHAR(1000),
    [isActive] BIT NOT NULL CONSTRAINT [Product_isActive_df] DEFAULT 1,
    [isDeleted] BIT NOT NULL CONSTRAINT [Product_isDeleted_df] DEFAULT 0,
    CONSTRAINT [Product_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- RedefineTables
BEGIN TRANSACTION;
ALTER TABLE [dbo].[User] DROP CONSTRAINT [User_emailAddress_key];
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'User'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [location] NVARCHAR(1000),
    [logoUrl] NVARCHAR(1000),
    [isActive] BIT NOT NULL CONSTRAINT [User_isActive_df] DEFAULT 1,
    [isDeleted] BIT NOT NULL CONSTRAINT [User_isDeleted_df] DEFAULT 0,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email])
);
SET IDENTITY_INSERT [dbo].[_prisma_new_User] ON;
IF EXISTS(SELECT * FROM [dbo].[User])
    EXEC('INSERT INTO [dbo].[_prisma_new_User] ([id],[location],[logoUrl],[name],[password]) SELECT [id],[location],[logoUrl],[name],[password] FROM [dbo].[User] WITH (holdlock tablockx)');
SET IDENTITY_INSERT [dbo].[_prisma_new_User] OFF;
DROP TABLE [dbo].[User];
EXEC SP_RENAME N'dbo._prisma_new_User', N'User';
COMMIT;

-- AddForeignKey
ALTER TABLE [dbo].[UserRole] ADD CONSTRAINT [UserRole_roleId_fkey] FOREIGN KEY ([roleId]) REFERENCES [dbo].[Role]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[UserRole] ADD CONSTRAINT [UserRole_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ProductOrder] ADD CONSTRAINT [ProductOrder_orderId_fkey] FOREIGN KEY ([orderId]) REFERENCES [dbo].[Order]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ProductOrder] ADD CONSTRAINT [ProductOrder_productId_fkey] FOREIGN KEY ([productId]) REFERENCES [dbo].[Product]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
