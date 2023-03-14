create table CLASSROOM
(
    ID             BIGINT  auto_increment not null
        primary key,
    ACTIVE         BOOLEAN not null,
    BUILDING       SMALLINT,
    CLASSROOM_NAME CHARACTER VARYING(200),
    CREATED_DATE   TIMESTAMP,
    DESCRIPTION    CHARACTER VARYING(2000),
    MODIFIED_DATE  TIMESTAMP
);

INSERT INTO PUBLIC.CLASSROOM (ACTIVE, BUILDING, CLASSROOM_NAME, CREATED_DATE, DESCRIPTION, MODIFIED_DATE) VALUES (true, 1, '101ww', '2023-03-09 18:19:58.424367', 'Klasė 101', '2023-03-10 06:09:06.563433');
INSERT INTO PUBLIC.CLASSROOM (ACTIVE, BUILDING, CLASSROOM_NAME, CREATED_DATE, DESCRIPTION, MODIFIED_DATE) VALUES (true, 0, '202', '2023-03-09 18:19:58.427365', 'Klasė 202', '2023-03-09 18:19:58.427365');
INSERT INTO PUBLIC.CLASSROOM (ACTIVE, BUILDING, CLASSROOM_NAME, CREATED_DATE, DESCRIPTION, MODIFIED_DATE) VALUES (true, 1, '201', '2023-03-09 18:19:58.427365', 'Klasė 201', '2023-03-09 18:19:58.427365');
INSERT INTO PUBLIC.CLASSROOM (ACTIVE, BUILDING, CLASSROOM_NAME, CREATED_DATE, DESCRIPTION, MODIFIED_DATE) VALUES (true, 1, '101', '2023-03-10 06:05:33.519362', 'Klasė 101', '2023-03-10 06:05:33.519362');
INSERT INTO PUBLIC.CLASSROOM (ACTIVE, BUILDING, CLASSROOM_NAME, CREATED_DATE, DESCRIPTION, MODIFIED_DATE) VALUES (true, 0, '202', '2023-03-10 06:05:33.523458', 'Klasė 202', '2023-03-10 06:05:33.523458');
INSERT INTO PUBLIC.CLASSROOM (ACTIVE, BUILDING, CLASSROOM_NAME, CREATED_DATE, DESCRIPTION, MODIFIED_DATE) VALUES (true, 1, '201', '2023-03-10 06:05:33.523458', 'Klasė 201', '2023-03-10 06:05:33.523458');
INSERT INTO PUBLIC.CLASSROOM (ACTIVE, BUILDING, CLASSROOM_NAME, CREATED_DATE, DESCRIPTION, MODIFIED_DATE) VALUES (true, 1, '101', '2023-03-10 06:06:10.422822', 'Klasė 101', '2023-03-10 06:06:10.422822');
INSERT INTO PUBLIC.CLASSROOM (ACTIVE, BUILDING, CLASSROOM_NAME, CREATED_DATE, DESCRIPTION, MODIFIED_DATE) VALUES (true, 0, '202', '2023-03-10 06:06:10.426819', 'Klasė 202', '2023-03-10 06:06:10.426819');
INSERT INTO PUBLIC.CLASSROOM (ACTIVE, BUILDING, CLASSROOM_NAME, CREATED_DATE, DESCRIPTION, MODIFIED_DATE) VALUES (true, 1, '201', '2023-03-10 06:06:10.426819', 'Klasė 201', '2023-03-10 06:06:10.426819');
