package edu.icet.service;

import edu.icet.dto.Student;

import java.util.List;

public interface StudentService {       // an interface cannot create objects.

    List<Student> getData();

    void addData(Student student);
}
