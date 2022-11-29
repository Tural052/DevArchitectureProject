CREATE TABLE [dbo].[Employee]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] VARCHAR(20) NOT NULL, 
    [Surname] VARCHAR(20) NOT NULL, 
    [EmailId] INT NOT NULL, 
    [Education] VARCHAR(MAX) NOT NULL, 
    [Position] VARCHAR(30) NOT NULL
)
