/*CREATE PROCEDURE dbo.uspGetAddress3 @City nvarchar(30),@PostalCode nvarchar(10)
AS

SELECT*
FROM Person.Address
WHERE City Like @City +'%' AND PostalCode LIKE @PostalCode
GO

EXEC dbo.uspGetAddress3 @City ='New', @PostalCode='[98]%'*/

CREATE PROCEDURE dbo.uspGetAddress4 @CityName nvarchar(30) OUTPUT
AS
SELECT City FROM Person.Address
WHERE AddressID=38 AND PostalCode=48226
GO
Declare @CityName nvarchar(30)
EXEC dbo.uspGetAddress4 @CityName=@CityName OUTPUT
Print @CityName