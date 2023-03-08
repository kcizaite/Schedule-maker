package lt.techin.schedule.teachers;

import com.fasterxml.jackson.annotation.JsonFormat;
import lt.techin.schedule.shift.ShiftDto;
import lt.techin.schedule.teachers.contacts.ContactDto2;
import lt.techin.schedule.teachers.helpers.TeacherShiftDto;
import lt.techin.schedule.teachers.helpers.TeacherSubjectsDto;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Set;

/**
 * A DTO for the {@link lt.techin.schedule.teachers.Teacher} entity
 */
public class TeacherDto implements Serializable {
    private Long id;
    private String fName;
    private String lName;
    private Set<TeacherSubjectsDto> subjectsList;
//    private List<ContactDto> contacts;
    private ContactDto2 contacts;
//    private TeacherShiftDto teacherShiftDto;
    //    private String savedSubjectsList;
    private ShiftDto selectedShift;
    private String workHoursPerWeek;
    private Boolean isActive;

    @JsonFormat(pattern = "yyyy.MM.dd HH:mm")
    private LocalDateTime dateCreated;
    @JsonFormat(pattern = "yyyy.MM.dd HH:mm")
    private LocalDateTime dateModified;

    public TeacherDto() {
    }

/////////////////////////


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public Set<TeacherSubjectsDto> getSubjectsList() {
        return subjectsList;
    }

    public void setSubjectsList(Set<TeacherSubjectsDto> subjectsList) {
        this.subjectsList = subjectsList;
    }

    public ContactDto2 getContacts() {
        return contacts;
    }

    public void setContacts(ContactDto2 contacts) {
        this.contacts = contacts;
    }

    public ShiftDto getSelectedShift() {
        return selectedShift;
    }

    public void setSelectedShift(ShiftDto selectedShift) {
        this.selectedShift = selectedShift;
    }

    public String getWorkHoursPerWeek() {
        return workHoursPerWeek;
    }

    public void setWorkHoursPerWeek(String workHoursPerWeek) {
        this.workHoursPerWeek = workHoursPerWeek;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

    public LocalDateTime getDateModified() {
        return dateModified;
    }

    public void setDateModified(LocalDateTime dateModified) {
        this.dateModified = dateModified;
    }

    @Override
    public String toString() {
        return "TeacherDto{" +
                "id=" + id +
                ", fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", subjectsList=" + subjectsList +
                ", contacts=" + contacts +
                ", selectedShift=" + selectedShift +
                ", workHoursPerWeek='" + workHoursPerWeek + '\'' +
                ", isActive=" + isActive +
                ", dateCreated=" + dateCreated +
                ", dateModified=" + dateModified +
                '}';
    }
}

