

select top 100 * from category
select top 100 * from color
select top 100 * from itemtypes
select top 100 * from PartColor
select top 100 * from PartsCatelog

select count(*) from PartColor
select count(*) from PartsCatelog


select top 2000 p.itemId, p.itemName, p.ImageLink, pc.CodeName, pc.Color, c.colorId, c.RGB
from PartsCatelog p 
join PartColor pc on p.ItemId = pc.ItemId
left outer join color c on pc.Color = c.ColorName


