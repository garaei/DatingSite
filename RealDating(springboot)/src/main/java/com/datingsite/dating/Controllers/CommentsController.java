package com.datingsite.dating.Controllers;

import com.datingsite.dating.Entities.Comments;
import com.datingsite.dating.Services.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/dating")
public class CommentsController {

  @Autowired
  private CommentsService commentsService;

    //creating comments
    @PostMapping("/comments/create")
    public Comments create(@RequestBody Comments comments){
        return commentsService.create(comments);
    }
    //getting all comments information
    @GetMapping("/comments/allComments")
    public List findAll(){
        return commentsService.findAll();
    }
    //getting comments details using date
    @GetMapping("/comments/commentsbydate/{date}")
    public Comments findByDate(@PathVariable("date") Date date){
        return commentsService.findByDate(date);
    }
    //getting comments details using aurthor name
    @GetMapping("/comments/commentsbyaurthor/{postedby}")
    public Comments findByAurthor(@PathVariable("postedby") String postedby){
        return commentsService.findByAurthor(postedby);
    }
    //delete comments using id
    @DeleteMapping("/comments/delete/{id}")
    public Optional<Comments> delete(@PathVariable("id") Long id){
        return  commentsService.delete(id);
    }
    //delete comments using aurthor
    @DeleteMapping("/comments/delete/{postedby}")
    public  Comments delete(@PathVariable("postedby") String postedby){
        return  commentsService.delete(postedby);
    }

}
