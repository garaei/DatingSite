package com.datingsite.dating.ServiceImplementations;

import com.datingsite.dating.Entities.Help;

import java.util.Date;
import java.util.List;

public interface HelpServiceImpl {

    public Help create(Help help);
    public Help delete(Long id);
    public List findAll();
    public Help findById(Long id);
    public Help findByEmail(String email);
//    public Help update(Help help);
    public Help findByDate(Date date);
    public Help deleteByDate(Date date);
}
