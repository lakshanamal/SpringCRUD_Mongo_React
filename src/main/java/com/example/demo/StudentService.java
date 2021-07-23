package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public void addStudent(Student student){
         studentRepository.save(student);
    }
    public void updateStudent(){

    } public List<Student> getAllStudent(){
    return studentRepository.findAll();
    }

    public void getStudentByName(){

    } public void deleteStudent(){

    }
}
