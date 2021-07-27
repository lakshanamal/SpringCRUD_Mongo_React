package com.lakshan.crud.user;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public void saveStudent(User user){
        userRepository.save(user);
    }

    public User getUserById(String id) {
            return userRepository.findById(id).get();
    }
}
