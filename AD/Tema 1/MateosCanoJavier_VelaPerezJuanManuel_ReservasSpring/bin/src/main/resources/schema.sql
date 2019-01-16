drop table aula if exists
drop table aula_listaReservas if exists
drop table authorities if exists
drop table reserva if exists
drop table USER if exists
drop sequence if exists hibernate_sequence
create sequence hibernate_sequence start with 1 increment by 1
create table aula (idAula bigint not null, nombreAula varchar(255), username_USERNAME varchar(255), primary key (idAula))
create table aula_listaReservas (Aula_idAula bigint not null, listaReservas_idReserva bigint not null, primary key (Aula_idAula, listaReservas_idReserva))
create table authorities (AUTHORITY varchar(255) not null, USERNAME varchar(255), primary key (AUTHORITY))
create table reserva (idReserva bigint not null, fechaFin timestamp, fechaInicio timestamp, username_USERNAME varchar(255), primary key (idReserva))
create table USER (USERNAME varchar(255) not null, EMAIL varchar(255), ENABLED boolean, LASTNAME varchar(255), PASSWORD varchar(255), primary key (USERNAME))
alter table aula_listaReservas add constraint UK_is01psh4xkyd2riguwt3p43v9 unique (listaReservas_idReserva)
alter table aula add constraint FKiioye3puupgk2yvsvo13idwx0 foreign key (username_USERNAME) references USER
alter table aula_listaReservas add constraint FKce2j3sgm2wc802xvdrdnd8frb foreign key (listaReservas_idReserva) references reserva
alter table aula_listaReservas add constraint FK5htg91d9xufkjctcu3dl9rui0 foreign key (Aula_idAula) references aula
alter table authorities add constraint FKbllhwmv2ax8l3y6mlh01qui9p foreign key (USERNAME) references USER
alter table reserva add constraint FK3970knv7hlq3hhe4df4gaynub foreign key (username_USERNAME) references USER