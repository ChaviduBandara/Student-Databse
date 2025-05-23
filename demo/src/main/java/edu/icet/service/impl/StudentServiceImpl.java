package edu.icet.service.impl;

import edu.icet.dto.Student;
import edu.icet.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class StudentServiceImpl implements StudentService {


    List<Student> studentList = new ArrayList<>();

    @Override
    public List<Student> getData(){
        return studentList;
    }

    @Override
    public void addData(Student student){
        studentList.add(student);
    }

//    @Override
//    public void deleteData(Integer id) {
//        studentList.remove(id);
//    }
}
