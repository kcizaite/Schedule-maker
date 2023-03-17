create table CONTACT
(
    CONTACT_ID   BIGINT auto_increment
        primary key,
    TYPE         SMALLINT not null,
    CONTACT_BODY CHARACTER VARYING(255),
    TEACHER_ID   BIGINT   not null,
    constraint FKK18S44KMACPSN4BQ7BAJ6JH3L
        foreign key (TEACHER_ID) references TEACHER
            on delete cascade
);

INSERT INTO PUBLIC.CONTACT (TYPE, CONTACT_BODY, TEACHER_ID) VALUES (2, 'Teams@1', 1);
INSERT INTO PUBLIC.CONTACT (TYPE, CONTACT_BODY, TEACHER_ID) VALUES (3, 'Teams1', 1);
INSERT INTO PUBLIC.CONTACT (TYPE, CONTACT_BODY, TEACHER_ID) VALUES (1, 'Mail@1', 1);
INSERT INTO PUBLIC.CONTACT (TYPE, CONTACT_BODY, TEACHER_ID) VALUES (0, '8 000 11111', 1);
INSERT INTO PUBLIC.CONTACT (TYPE, CONTACT_BODY, TEACHER_ID) VALUES (0, '800022222', 3);
INSERT INTO PUBLIC.CONTACT (TYPE, CONTACT_BODY, TEACHER_ID) VALUES (1, 'Mail@3', 3);
INSERT INTO PUBLIC.CONTACT (TYPE, CONTACT_BODY, TEACHER_ID) VALUES (2, 'Teams@3', 3);
INSERT INTO PUBLIC.CONTACT (TYPE, CONTACT_BODY, TEACHER_ID) VALUES (3, 'Teams3', 3);
INSERT INTO PUBLIC.CONTACT (TYPE, CONTACT_BODY, TEACHER_ID) VALUES (0, '800022222', 2);
INSERT INTO PUBLIC.CONTACT (TYPE, CONTACT_BODY, TEACHER_ID) VALUES (1, 'Mail@h.lt', 2);
INSERT INTO PUBLIC.CONTACT (TYPE, CONTACT_BODY, TEACHER_ID) VALUES (2, 'Teams@2.lt', 2);

