CREATE TABLE public.services
(
    id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    
    createdat timestamp NOT NULL DEFAULT current_timestamp,
    updatedat timestamp NOT NULL DEFAULT current_timestamp
);

CREATE UNIQUE INDEX IF NOT EXISTS uk_profile_login ON public.profile(login);



CREATE TABLE public.services
(
    id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    login varchar(100) NOT NULL,
    password varchar(100) NOT NULL,
    status integer default 1,
    type integer,
    createdat timestamp NOT NULL DEFAULT current_timestamp,
    updatedat timestamp NOT NULL DEFAULT current_timestamp
);

CREATE UNIQUE INDEX
IF NOT EXISTS uk_profile_login ON public.profile
(login);




-- creation
CREATE TABLE public.service
(
    id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    title varchar(100) not null,
    description text not null,
    price decimal(10,2) NOT NULL default 0.0,
    createdat timestamp NOT NULL DEFAULT current_timestamp,
    updatedat timestamp NOT NULL DEFAULT current_timestamp
);