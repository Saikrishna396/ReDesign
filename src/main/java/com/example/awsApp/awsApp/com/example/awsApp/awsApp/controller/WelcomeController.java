package com.example.awsApp.awsApp.com.example.awsApp.awsApp.controller;

import java.util.Map;
import java.util.Random;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "*")
@RestController


public class WelcomeController {

    @PostMapping(value = "/entering", consumes = "application/x-www-form-urlencoded")
    public ResponseEntity<String> getRes(@RequestParam("name") String name, @RequestParam("crushName") String crushName){
        System.out.println("Received name: " + name);
        System.out.println("Received crush name: " + crushName);
int percentage = new Random().nextInt(51)+50;
        if (name == null || name.trim().isEmpty()) {
            return new ResponseEntity<>("Name not provided!", HttpStatus.BAD_REQUEST);
        }

        String response = "Your Pair is adorable 💖 "+name+" 💖 "+crushName+" = "+percentage+"%";
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
