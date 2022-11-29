CREATE TABLE [dbo].[Emails]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [EmailAddress] VARCHAR(50) NOT NULL, 
    [Password] VARCHAR(MAX) NOT NULL 
)

GO
