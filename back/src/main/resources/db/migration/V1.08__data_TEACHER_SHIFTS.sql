create table TEACHER_SHIFTS
(
    SHIFT_ID   BIGINT,
    TEACHER_ID BIGINT not null
        primary key
);

INSERT INTO PUBLIC.TEACHER_SHIFTS (SHIFT_ID, TEACHER_ID) VALUES (1, 1);
INSERT INTO PUBLIC.TEACHER_SHIFTS (SHIFT_ID, TEACHER_ID) VALUES (2, 2);
