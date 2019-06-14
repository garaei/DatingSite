package com.datingsite.dating.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Help {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    private Date date;
    private int phone;
    private String  email;
    private  String problem;

    public Help(Date date, int phone, String email, String problem) {
        this.date = date;
        this.phone = phone;
        this.email = email;
        this.problem = problem;
    }

    public Long getHelpId() {
        return id;
    }

    public Help setHelpId(Long id) {
        this.id = id;
        return this;
    }

    public Date getDate() {
        return date;
    }

    public Help setDate(Date date) {
        this.date = date;
        return this;
    }

    public int getPhone() {
        return phone;
    }

    public Help setPhone(int phone) {
        this.phone = phone;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public Help setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getProblem() {
        return problem;
    }

    public Help setProblem(String problem) {
        this.problem = problem;
        return this;
    }
}
