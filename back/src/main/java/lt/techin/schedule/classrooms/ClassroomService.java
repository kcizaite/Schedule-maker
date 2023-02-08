package lt.techin.schedule.classrooms;

import lt.techin.schedule.classrooms.buildings.BuildingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ClassroomService {
    private final ClassroomRepository classroomRepository;
    private final BuildingRepository buildingRepository;

    @Autowired
    public ClassroomService(ClassroomRepository classroomRepository, BuildingRepository buildingRepository) {
        this.classroomRepository = classroomRepository;
        this.buildingRepository = buildingRepository;
    }

    public List<Classroom> getAll() {
        return classroomRepository.findAll();
    }

    public Classroom create(Classroom classroom) {
        return classroomRepository.save(classroom);
    }

    public Classroom update(Long id, Classroom classroom) {
        var existingClassroom = classroomRepository.findById(id).orElse(null);
        if (existingClassroom != null) {
            existingClassroom.setClassroomName(classroom.getClassroomName());
            existingClassroom.setDescription(classroom.getDescription());
            return classroomRepository.save(existingClassroom);
        }
        return null;
    }

//    public boolean deleteById(Long id) {
//        try {
//            classroomRepository.deleteById(id);
//            return true;
//        } catch (EmptyResultDataAccessException exception) {
//            return false;
//        }
//    }

    public Classroom addClassroomToBuilding(Long classroomId, Long buildingId) {
        var existingClassroom = classroomRepository.findById(classroomId)
                .orElse(null);
        var existingBuilding = buildingRepository.findById(buildingId)
                .orElse(null);
        if (existingClassroom != null) {
            existingClassroom.setBuilding(existingBuilding);
            return classroomRepository.save(existingClassroom);
        }
        System.out.println(existingClassroom + " classroom");
        System.out.println(existingBuilding + "  building");
        return null;
    }
}


