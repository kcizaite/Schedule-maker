CREATE TABLE IF NOT EXISTS TEACHER_SUBJECT
(
    TEACHER_ID BIGINT not null,
    SUBJECT_ID BIGINT not null,
    primary key (SUBJECT_ID, TEACHER_ID),
    constraint FK625XNJHA5RS0QQYNXSTHK646K
        foreign key (TEACHER_ID) references TEACHER,
    constraint FKDNHS9KXDLNRVHQ5K111C87PNA
        foreign key (SUBJECT_ID) references SUBJECT
);

INSERT INTO PUBLIC.TEACHER_SUBJECT (TEACHER_ID, SUBJECT_ID) VALUES (1, 1);
INSERT INTO PUBLIC.TEACHER_SUBJECT (TEACHER_ID, SUBJECT_ID) VALUES (3, 2);
INSERT INTO PUBLIC.TEACHER_SUBJECT (TEACHER_ID, SUBJECT_ID) VALUES (2, 3);
