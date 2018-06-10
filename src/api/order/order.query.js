export const FIND_ORDERS = 'SELECT * from public.service_order'
export const CREATE_ORDER = 'insert into public.service_order (id_provider,description, delivery,title,status) values($1,$2,$3,$4,$5) returning id'
export const UPDATE_ORDER = 'update service_order set status=$1 where id = $2 returning id'
