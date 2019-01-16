drop table aula if exists
drop table aula_listaReservas if exists
drop table authorities if exists
drop table reserva if exists
drop table USER if exists
drop sequence if exists hibernate_sequence
create sequence hibernate_sequence start with 1 increment by 1
create table aula (id bigint not null, NAME varchar(255), primary key (id))
create table aula_listaReservas (Aula_id bigint not null, listaReservas_idReserva bigint not null, primary key (Aula_id, listaReservas_idReserva))
create table authorities (AUTHORITY varchar(255) not null, USERNAME varchar(255), primary key (AUTHORITY))
create table reserva (idReserva bigint not null, fechaFin timestamp, fechaInicio timestamp, username_USERNAME varchar(255), primary key (idReserva))
create table USER (USERNAME varchar(255) not null, EMAIL varchar(255), ENABLED boolean, LASTNAME varchar(255), PASSWORD varchar(255), primary key (USERNAME))
alter table aula_listaReservas add constraint UK_is01psh4xkyd2riguwt3p43v9 unique (listaReservas_idReserva)
alter table aula_listaReservas add constraint FKce2j3sgm2wc802xvdrdnd8frb foreign key (listaReservas_idReserva) references reserva
alter table aula_listaReservas add constraint FKe8qsd4tmij6jim8uad0m3lbto foreign key (Aula_id) references aula
alter table authorities add constraint FKbllhwmv2ax8l3y6mlh01qui9p foreign key (USERNAME) references USER
alter table reserva add constraint FK3970knv7hlq3hhe4df4gaynub foreign key (username_USERNAME) references USER