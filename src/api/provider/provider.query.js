export const FIND_ALL_PROVIDERS = 'SELECT * from public.provider'
export const FIND_BY_SPECIALTY = `select p.id as id, p.name as name,
    p.description as description,
    p.img as image,
	4 as rate,
	( SELECT array_to_json(array_agg(row_to_json(d_1.*))) AS array_to_json
           FROM ( SELECT s.*
                   FROM service s
				 left join service_provider sp on sp.id_service = s.id
				 WHERE sp.id_provider = p.id) d_1) AS services
from provider p`
