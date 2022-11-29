CREATE TABLE [dbo].[Customers]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] VARCHAR(20) NOT NULL, 
    [Surname] VARCHAR(30) NOT NULL, 
    [Content] VARCHAR(MAX) NOT NULL, 
    [Title] VARCHAR(30) NOT NULL, 
    [EmailAddress] VARCHAR(50) NOT NULL
)
