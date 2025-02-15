package lt.techin.schedule.teachers.contacts;

import jakarta.annotation.PostConstruct;
import lt.techin.schedule.teachers.Teacher;
import lt.techin.schedule.teachers.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ContactService {
    private final ContactRepository contactRepository;
    private final TeacherRepository teacherRepository;
    private Teacher dummyTeacher;

    @Autowired
    public ContactService(ContactRepository contactRepository, TeacherRepository teacherRepository) {
        this.contactRepository = contactRepository;
        this.teacherRepository = teacherRepository;
        dummyTeacher = new Teacher(0L, "_Dummy", "_Dummy", true);
    }

    @PostConstruct
    public void loadInitialContactData() {
        if (contactRepository.findAll().size() < 5
                && teacherRepository.findAll().size() > 0) {
            contactRepository.deleteAll();
            var teachers = teacherRepository.findAll();
            List<Contact> contactsToAdd = new ArrayList<>();
            for (int i = 0; i < teachers.size(); i++) {
                contactsToAdd.add(new Contact(teachers.get(i), ContactType.PHONE_NUMBER,
                        44444 + Integer.toString(i)));
            }
            contactRepository.saveAll(contactsToAdd);
        }
    }

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    public List<Contact> getContactsByTeacherId(Long id) {
        dummyTeacher.setId(id);
        var result = contactRepository.findContactsByTeacher(dummyTeacher);
        return result;
    }

    public List<Contact> createContacts(Teacher teacher, List<Contact> contacts) {
        List<Contact> filledContacts = contacts.stream()
                .peek(c -> c.setTeacher(teacher))
                .toList();
        return contactRepository.saveAll(filledContacts);
    }

    public List<Contact> updateContacts(Teacher teacher) {
        contactRepository.deleteAllByTeacher(teacher);
        var newContacts = teacher.getContacts().stream()
                .map(c -> {
                    c.setTeacher(teacher);
                    return c;
                }).toList();
        return contactRepository.saveAll(newContacts);

    }

    public Optional<Contact> getContactById(Long id) {
        var result = contactRepository.findById(id);
        return result;
    }

    public void deleteContactsByTeacher(Teacher teacher) {
        contactRepository.deleteAllByTeacher(teacher);
    }
}
