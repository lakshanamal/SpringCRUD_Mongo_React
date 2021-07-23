package com.example.demo;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.math.BigDecimal;
import java.time.ZonedDateTime;
import java.util.List;

@Document("student")
public class Student {
    @Id
    private String id;
    @Field(name="first")
    private String firstName;
    @Field(name="last")
    private String lastName;

    public Student(String id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    //    private String email;
//    private Gender gender;
//    private Address address;
//    private List<String> favoriteSubject;
//    private BigDecimal totalSpendInBook;
//    private ZonedDateTime created;
}
