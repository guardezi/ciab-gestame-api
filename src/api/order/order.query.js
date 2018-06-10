export const FIND_ORDERS = 'SELECT * from public.service_order'
export const CREATE_ORDER = 'insert into public.service_order (id_provider,description, delivery,title) values($1,$2,$3,$4) returning id'
