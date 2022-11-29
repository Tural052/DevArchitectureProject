CREATE TABLE [dbo].[Services]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [ServiceName] VARCHAR(50) NOT NULL, 
    [ServiceDescription] VARCHAR(MAX) NOT NULL, 
    [IsActiveService] BIT NOT NULL
)
