package com.datingsite.dating.Services;

import com.datingsite.dating.Entities.News;
import com.datingsite.dating.Repositories.NewsRepository;
import com.datingsite.dating.ServiceImplementations.NewsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class NewsService implements NewsServiceImpl {
    @Autowired
    private NewsRepository newsRepository;

    //view news by aurthor
    @Override
    public News findByAurthor(String postedby){
        return  newsRepository.findByAurthor(postedby);
    }
    //view news by date
    @Override
    public News findByDate(Date date){
        return  newsRepository.findByDate(date);
    }
    //view all news information
    @Override
    public List findAll(){
        return newsRepository.findAll();
    }
    //create news
    @Override
    public News create(News news){

        return newsRepository.save(news);
    }
    //delete news by aurthor
    @Override
    public News delete(String postedby){
        News news=findByAurthor(postedby);
        if(news !=null){
            newsRepository.delete(news);
        }
        return news;
    }
    @Override
    public News update(News news){
        return newsRepository.update(news);
    }
@Override
    public News delete(Long id) {
        return newsRepository.findByOneId(id);
    }
}
