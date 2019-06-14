package com.datingsite.dating.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    private Date date;
    private String  title;
    private  String postedby;
    private  String news;

    public News(Date date, String title, String postedby, String news) {
        this.date = date;
        this.title = title;
        this.postedby = postedby;
        this.news = news;
    }

    public Long getId() {
        return id;
    }

    public News setId(Long id) {
        this.id = id;
        return this;
    }

    public Date getDate() {
        return date;
    }

    public News setDate(Date date) {
        this.date = date;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public News setTitle(String title) {
        this.title = title;
        return this;
    }

    public String getPostedby() {
        return postedby;
    }

    public News setPostedby(String postedby) {
        this.postedby = postedby;
        return this;
    }

    public String getNews() {
        return news;
    }

    public News setNews(String news) {
        this.news = news;
        return this;
    }
}
