CREATE TABLE [dbo].[Vacancies]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] VARCHAR(20) NOT NULL, 
    [Surname] VARCHAR(30) NOT NULL, 
    [EmailAddress] VARCHAR(50) NOT NULL, 
    [VacancyHeader] VARCHAR(30) NOT NULL, 
    [MobileNumber] NVARCHAR(13) NOT NULL
)
