package edu.icet.controller;

import edu.icet.dto.Student;
import edu.icet.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class StudentController {

    @Autowired
    StudentService service;

    @GetMapping("/get-data")    //showing data
    public List<Student> getData(){     //pathin add karapu studentwa pennawa
        return service.getData();
    }

    @PostMapping("/add-data")   //adding data
    public void addData(@RequestBody Student student){  //student kenek add karanwa of type student
        service.addData(student);
    }

//    @DeleteMapping("/delete-data/{id}")
//    public void deleteData(@PathVariable Integer id){
//        service.deleteData(id);
//    }
}
