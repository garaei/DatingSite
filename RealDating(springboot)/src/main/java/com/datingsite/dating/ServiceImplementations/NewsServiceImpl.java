package com.datingsite.dating.ServiceImplementations;

import com.datingsite.dating.Entities.News;

import java.util.Date;
import java.util.List;

public interface NewsServiceImpl {
    public News findByAurthor(String postedby);
    public News findByDate(Date date);
    public List findAll();
    public News create(News news);
    public News delete(String postedby);
    public News update(News news);
    public News delete(Long id);
}
