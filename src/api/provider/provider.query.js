export const FIND_ALL_PROVIDERS = 'SELECT * from public.provider'
export const FIND_BY_SPECIALTY = `select p.name as name,
	p.description as description,
	4 as rate,
	( SELECT array_to_json(array_agg(row_to_json(d_1.*))) AS array_to_json
           FROM ( SELECT s.*
                   FROM service s
                  WHERE s.id = sp.id_service) d_1) AS services
from service_provider sp
left join provider p 
	on p.id = sp.id_provider
where sp.id_service in ($1)`
