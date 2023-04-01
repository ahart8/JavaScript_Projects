SELECT sp.specialist_fname, sp.specialist_lname, sp.specalist_contact, s.species_name
FROM tbl_specialist sp
INNER JOIN tbl_care c on sp.specialist_id=c.care_specialist 
INNER JOIN tbl_species s on c.care_id=s.species_care 
 WHERE s.species_name='penguin'
;



select * from tbl_specialist; 
select * from tbl_care c;
select * from tbl_species; 

delete spe
from tbl_specialist spe
where 
where specialist_id=5;

delete 
from tbl_specialist;