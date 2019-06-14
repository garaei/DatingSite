package com.datingsite.dating.Controllers;

import com.datingsite.dating.Entities.News;
import com.datingsite.dating.Services.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/dating")
public class NewsController {

    @Autowired

    private NewsService newsService;
    //creating news
    @PostMapping("/news/create")
    public News create(@RequestBody News news){
        return newsService.create(news);
    }
    //getting all news information
    @GetMapping("/news/allNews")
    public List findAll(){
        return newsService.findAll();
    }
    //getting news details using date
    @GetMapping("/news/newsbydate/{date}")
    public News findByDate(@PathVariable("date") Date date){
        return newsService.findByDate(date);
    }
    //getting news details using aurthor name
    @GetMapping("/news/newsbyaurthor/{postedby}")
    public News findByAurthor(@PathVariable("postedby") String postedby){
        return newsService.findByAurthor(postedby);
    }
    //updating news
    @PutMapping("/news/update")
    public News update(@RequestBody News news){
        return newsService.update(news);
    }
    //delete information using id
    @DeleteMapping("/news/delete/{id}")
    public  News delete(@PathVariable("id") Long id){
        return  newsService.delete(id);
    }
    //delete information using aurthor
    @DeleteMapping("/news/delete/{postedby}")
    public  News delete(@PathVariable("postedby") String postedby){
        return  newsService.delete(postedby);
    }
}
