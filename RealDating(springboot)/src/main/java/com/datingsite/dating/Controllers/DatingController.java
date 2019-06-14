package com.datingsite.dating.Controllers;

import com.datingsite.dating.Models.Login;
import com.datingsite.dating.Models.Register;
import com.datingsite.dating.Services.DatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4235")
@RestController
public class DatingController {

    @Autowired
    private DatingService datingService;

    //user register end point
    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody Register register){
        Map<String,Object> map = new HashMap<>();
        map=datingService.register(register);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    //user login end point
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody Login login){
        Map<String,Object> map = new HashMap<>();
        map=datingService.login(login);
        return ResponseEntity.status(200).body(map);
    }
}
