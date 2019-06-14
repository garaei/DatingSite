package com.datingsite.dating.Controllers;

import com.datingsite.dating.Entities.Help;
import com.datingsite.dating.Services.HelpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/dating")
public class HelpController {
    @Autowired
    private HelpService helpService;
    //creating the help body
    @PostMapping("/problem/create")
    public Help create(@RequestBody Help help){
        return helpService.create(help);
    }
    //getting all help information
    @GetMapping("/problem/allproblems")
    public List findAll(){
        return helpService.findAll();
    }
    //getting help details using date
    @GetMapping("/problem/allproblems/{date}")
    public Help findByDate(@PathVariable("date") Date date){
        return helpService.findByDate(date);
    }
    //getting help details using id
    @GetMapping("/problem/allproblems/{id}")
    public Help findById(@PathVariable("id") Long id)
    {
        return helpService.findById(id);
    }
    //getting help details using email
    @GetMapping("/problem/allproblem/{email}")
    public Help findById(@PathVariable("email") String email){
        return helpService.findByEmail(email);
    }
    //delete information using id
    @DeleteMapping("/problem/delete/{id}")
    public  Help delete(@PathVariable("id") Long id){
    return  helpService.delete(id);
    }
    //delete information using date
    @DeleteMapping("/problem/delete/{date}")
    public  Help delete(@PathVariable("date") Date date){
        return  helpService.deleteByDate(date);
    }
}
