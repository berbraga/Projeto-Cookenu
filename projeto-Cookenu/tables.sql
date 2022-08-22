-- Active: 1661191850838@@127.0.0.1@3306@projetocookenu

show databases;

show TABLES;

drop table User ;

drop table Followeres ;

drop table Receita ;

create table
    if not exists User (
        id_usuario varchar(300) not null primary key,
        name varchar(100) not null,
        email varchar(150) not null,
        password varchar(500) not null,
        role varchar(6) not null
    );

create table
    if not exists Followeres (
        id_segue varchar(300),
        id_sigo varchar(300),
        primary key (id_segue, id_sigo),
        name varchar(100),
        foreign key (id_segue) references User (id_usuario),
        foreign key (id_sigo) references User (id_usuario)
    );

create table
    Recipe (
        id_receita varchar(300) not null primary key,
        title varchar(100) not null,
        description text not null,
        data_preparo date not null,
        id_usuario varchar(300),
        constraint fk_usuario foreign key (id_usuario) references User (id_usuario)
    );