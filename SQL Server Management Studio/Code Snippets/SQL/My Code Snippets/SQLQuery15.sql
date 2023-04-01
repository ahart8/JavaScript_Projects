SElECT n.nutrition_type FROM tbl_nutrition n WHERE n.nutrition_cost>=600;

SELECT s.species_name as "Species Name:", n.nutrition_type as "Nutrition Type:" FROM tbl_nutrition n INNER JOIN tbl_species s on n.nutrition_id=s.species_nutrition;