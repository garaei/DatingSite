package com.datingsite.dating.Services;

import com.datingsite.dating.Entities.Users;
import com.datingsite.dating.Models.Login;
import com.datingsite.dating.Models.Register;
import com.datingsite.dating.Repositories.DatingRepository;
import com.datingsite.dating.ServiceImplementations.DatingServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@Transactional
public class DatingService implements DatingServiceInterface {

    @Autowired
    private DatingRepository datingRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public Map<String, Object> register(Register registerr){
        Map<String,Object> map=new HashMap<>();
        Users users=new Users();

       //getting the values of two passwords for the matching purpose
        String one=registerr.getConfirmPassword();
        String two=registerr.getPassword();

        //checking if the two passwords match
        if(!(two.equals(one))){
            Map<String,Object> mapp=new HashMap<>();
            mapp.put("status",400);
            mapp.put("message","YOUR PASSWORD DOES NOT MATCH");
            return mapp;

        }


        //get the user input password
        String pass=registerr.getPassword();

        //bycrypting of password
        String pass1=passwordEncoder.encode(pass);

        //saving details to the database
        users.setConfirmPassword(pass1);
        users.setUsername(registerr.getUsername());
        users.setCreateddate(new Date(System.currentTimeMillis()));
        users.setFirstname(registerr.getFirstname());

        users.setEmail(registerr.getEmail());
        users.setLastname(registerr.getLastname());
        users.setEmail(registerr.getEmail());
        datingRepository.save(users);

        //displaying the responses
         map.put("status", "200");
         map.put("message","SUCCESFULLY REGISTERED");
         return map;
    }

@Override
    public Map<String, Object> login(Login loginn){

        //getting the user login credentials
        String loginusername=loginn.getUsername();
        String password= loginn.getPassword();
        //bycrypting password before  doing a password match with the one in the database
    String loginpassword=passwordEncoder.encode(password);

    // checking a user by username and password
    Optional<Users> users=datingRepository.findByUsername(loginusername);

    //check if no user exist or validity of the provided credentials
    Map<String,Object> map=new HashMap<>();
    if(!(users.isPresent())){
        map.put("STATUS","404");
        map.put("message","INVALID PASSWORD OR USERNSAME");
        return map;
    }
    Users user=new Users();
    //display user firstname and lastname when login process is succesful
    map.put("firstname",user.getFirstname() );
    map.put("LASTNAME",user.getLastname() );
    map.put("status" ,200);
    map.put("message","SUCCESFULLY LOG IN");
    return map;
    }


}
