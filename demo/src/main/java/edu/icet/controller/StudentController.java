package edu.icet.controller;

import edu.icet.dto.Student;
import edu.icet.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class StudentController {

    @Autowired
    StudentService service;

    @GetMapping("/get-student")
    public List<Student> getStudent(){
        return service.getStudent();
    }

    @PostMapping("/add-student")
    public void addStudent(@RequestBody Student student){
        service.addStudent(student);
    }

    @DeleteMapping("/delete-student/{id}")
    public void deleteStudentBYId(@PathVariable Integer id){
        service.deleteStudentById(id);
    }

    @PutMapping("/update-student")
    public void updateStudent(@RequestBody Student student){
        service.updateStudent(student);
    }

    @GetMapping("/find-by-name/{name}")
    public List<Student> findByName(@PathVariable String name){
        return service.findByName(name);
    }
}
