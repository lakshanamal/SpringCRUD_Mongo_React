package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/student")
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping
    public ResponseEntity addStudent(@RequestBody Student student){
        studentService.addStudent(student);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    public void updateStudent(){

    }
    @GetMapping
    public String getAllStudent(){
        return "huis";
    }
    public void getStudentByName(){

    }
    public void deleteStudent(){

    }



}
