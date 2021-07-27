package com.lakshan.crud.user;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository extends MongoRepository<User,String> {
    @Query("{ 'name' : ?0 }")
    User findByName(String name);
}
