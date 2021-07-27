package com.lakshan.crud.user;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("users")  // only for mongo if mysql @Entity
public class User {


    @Id
    private String id;
    private String name;
    private String age;
    private String phone;
    private String DOB;
    private String role;

    public User(String id, String name, String age,String phone,String DOB,String role) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone=phone;
        this.DOB=DOB;
        this.role=role;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDOB() {
        return DOB;
    }

    public void setDOB(String DOB) {
        this.DOB = DOB;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }
}
