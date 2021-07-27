package com.lakshan.crud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrudApplication implements Runnable {

    public static void main(String[] args) {
        SpringApplication.run(CrudApplication.class, args);
        Thread t1=new Thread();
        t1.start();
    }


    public void run() {
        System.out.println("Thread is running");

    }
}