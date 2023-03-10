create table MODULE
(
    ID            BIGINT auto_increment
        primary key,
    CREATED_DATE  TIMESTAMP,
    DELETED       BOOLEAN not null,
    MODIFIED_DATE TIMESTAMP,
    NAME          CHARACTER VARYING(255),
    NUMBER        CHARACTER VARYING(255)
);

INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (1, '2023-03-09 18:19:58.391616', false, '2023-03-09 18:19:58.391616', 'I modulis', 'A01');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (2, '2023-03-09 18:19:58.414893', false, '2023-03-09 18:19:58.414893', 'II modulis', 'A02');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (3, '2023-03-09 18:19:58.415892', false, '2023-03-09 18:19:58.415892', 'III modulis', 'A03');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (4, '2023-03-09 23:33:14.497545', false, '2023-03-09 23:33:14.497545', 'fhfhfh', 'xxfhfh');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (5, '2023-03-09 23:33:18.467147', false, '2023-03-09 23:33:18.467147', 'fghfghfh', 'fhgfhfgh');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (6, '2023-03-09 23:33:21.916199', false, '2023-03-09 23:33:21.916199', 'fghfhfgh', 'fhgfhfhfgh');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (7, '2023-03-09 23:33:25.490405', false, '2023-03-09 23:33:25.490405', 'fhgfhfh', 'fhfhfhfh');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (8, '2023-03-09 23:33:29.456100', false, '2023-03-09 23:33:29.456100', 'jfgjiii', 'fghfhfh');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (9, '2023-03-09 23:33:33.370481', false, '2023-03-09 23:33:33.370481', 'fgfhfghf', 'fghfhfgfhgf');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (10, '2023-03-09 23:34:02.710343', false, '2023-03-09 23:36:07.175349', 'fsfhsgfhf', 'fghyttyrt');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (11, '2023-03-09 23:34:07.279110', false, '2023-03-09 23:34:07.279110', 'dsgdfsdgfg', 'fghrtrthr');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (12, '2023-03-10 06:05:33.484907', false, '2023-03-10 06:05:33.484907', 'I modulis', 'A01');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (13, '2023-03-10 06:05:33.511367', false, '2023-03-10 06:05:33.511367', 'II modulis', 'A02');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (14, '2023-03-10 06:05:33.512366', false, '2023-03-10 06:05:33.512366', 'III modulis', 'A03');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (16, '2023-03-10 06:06:10.394840', false, '2023-03-10 06:06:10.394840', 'I modulis', 'A01');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (17, '2023-03-10 06:06:10.413827', false, '2023-03-10 06:06:10.413827', 'II modulis', 'A02');
INSERT INTO PUBLIC.MODULE (ID, CREATED_DATE, DELETED, MODIFIED_DATE, NAME, NUMBER) VALUES (18, '2023-03-10 06:06:10.414826', false, '2023-03-10 06:06:10.414826', 'III modulis', 'A03');
