package com.lakshan.crud.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUser(){
        return ResponseEntity.ok(userService.getUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id){
        return ResponseEntity.ok(userService.getUserById(id));
    }
    @PostMapping
    public ResponseEntity saveStudent(@RequestBody User user){
        userService.saveStudent(user);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
