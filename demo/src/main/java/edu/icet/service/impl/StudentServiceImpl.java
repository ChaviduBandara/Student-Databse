package edu.icet.service.impl;

import edu.icet.dto.Student;
import edu.icet.repository.StudentRepository;
import edu.icet.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository repository;

    @Override
    public List<Student> getStudent(){
        List<Student> all = repository.findAll();   // databse eken data aran all kiyana list eka add karagannwa.
        return all;
    }

    @Override
    public void addStudent(Student student) {
        repository.save(student);   // database ekata add karanwa
    }

    @Override
    public void deleteStudentById(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public void updateStudent(Student student) {
        repository.save(student);
    }

    @Override
    public List<Student> findByName(String name) {
        return repository.findByName(name);
    }
}
