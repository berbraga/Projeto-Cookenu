-- Active: 1656526084015@@35.226.146.116@3306@silveira-21814729-bernardo-bragas

select * from Usuario;

drop table Seguidores;

drop table Receita;

drop table Usuario ;

create table
    Usuario (
        id_usuario varchar(300) not null primary key,
        nome varchar(100) not null,
        email varchar(150) not null,
        senha varchar(1000) not null,
        role varchar(5) not null,
        token varchar(300) not null
    );

select * from Usuario;

insert into Usuario
values (
        "asdfasdasd",
        "bernardo",
        "bernardo@braga",
        "asdfsadfasd",
        "admin",
        "dfasd TOKEN"
    );

create table
    Seguidores (
        id_segue varchar(300),
        id_sigo varchar(300),
        primary key (id_segue, id_sigo),
        nome varchar(300),
        foreign key (id_segue) references Usuario (id_usuario),
        foreign key (id_sigo) references Usuario (id_usuario)
    );

create table
    Receita (
        id_receita varchar(300) not null primary key,
        titulo varchar(100) not null,
        descricao text not null,
        data_preparo date not null,
        id_usuario varchar(300),
        constraint fk_usuario foreign key (id_usuario) references Usuario (id_usuario)
    );