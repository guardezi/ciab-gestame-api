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

CREATE TABLE public.provider
(
    id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    name varchar(100) not null,
    description text not null,
    createdat timestamp NOT NULL DEFAULT current_timestamp,
    updatedat timestamp NOT NULL DEFAULT current_timestamp
);

CREATE TABLE public.service_provider
(
    price numeric(10,2) NOT NULL DEFAULT 0.0,
    createdat timestamp
    without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_service uuid NOT NULL,
    id_provider uuid NOT NULL,
    CONSTRAINT pk_service_provider PRIMARY KEY
    (id_service, id_provider),
    CONSTRAINT fk_provider FOREIGN KEY
    (id_provider)
        REFERENCES public.provider
    (id) MATCH SIMPLE
        ON
    UPDATE NO ACTION
        ON
    DELETE NO ACTION,
    CONSTRAINT fk_service
    FOREIGN KEY
    (id_service)
        REFERENCES public.service
    (id) MATCH SIMPLE
        ON
    UPDATE NO ACTION
        ON
    DELETE NO ACTION
)
    WITH
    (
    OIDS = FALSE
)
TABLESPACE pg_default;

