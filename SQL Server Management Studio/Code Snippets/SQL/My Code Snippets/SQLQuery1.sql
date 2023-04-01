DECLARE @var1 INT, @var2 INT
SET @var1=7
SET @var2=5

PRINT CHAR(9)  +'I have'+ CONVERT(varchar(5),@var1)+' dollars...'

print 'variable 1='+convert (varchar(5),@var1)+char(13)+'variable 2= '+convert(varchar(5),@var2)


print 'variable 1='+convert (varchar(5),@var1)+char(13)+'variable 2= '+convert(varchar(5),@var2)+char(13)+'total:'
print @var1+@var2

If @var1 <= 3 
begin
	print 'variable 1 <='+convert (varchar(5),@var1)+char(13)
end
else
begin
	print 'variable 1 is not <'+convert(varchar(5),@var1)+char(13)
end

if @var1 !=3
begin
	print 'variable 1 is NOT' +convert(varchar(5),@var1)+char(13)
end
else 
begin
	print 'variable 1 is not <'+convert(varchar(5),@var1)+char(13)
end

declare @var1 int, @var2 int
set @var1=3
set @var2=5

if @var1<2
begin
	print '@var1 <1'
end
else if @var1>1 and @var1<3
begin
	print '@var1>1 and @var1<3'
end
else if @var1=4 or @var1<6
begin
	print '@var1=4 or @var1<6'
end
else print '@var1 does not qualify!'

/*this is a silent message*/