package com.datingsite.dating.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    private Date date;
    private  String news;
    private String postedby;

    public Comments(Date date, String news,String postedby) {
        this.date = date;
        this.news = news;
        this.postedby= postedby;
    }

    public Long getId() {
        return id;
    }

    public Comments setId(Long id) {
        this.id = id;
        return this;
    }

    public Date getDate() {
        return date;
    }

    public Comments setDate(Date date) {
        this.date = date;
        return this;
    }

    public String getNews() {
        return news;
    }

    public Comments setNews(String news) {
        this.news = news;
        return this;
    }

    public String getPostedby() {
        return postedby;
    }

    public Comments setPostedby(String postedby) {
        this.postedby = postedby;
        return this;
    }
}
