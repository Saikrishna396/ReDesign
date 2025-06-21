package com.example.awsApp.awsApp.com.example.awsApp.awsApp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/entering")
public class WelcomeController {
@GetMapping
public ResponseEntity<String> getRes(){
	String s = "welcome to my world baby! Keep smiling always:)";
	return new ResponseEntity<String>(s,HttpStatus.OK);
}
}
