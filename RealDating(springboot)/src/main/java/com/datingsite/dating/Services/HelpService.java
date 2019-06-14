package com.datingsite.dating.Services;

import com.datingsite.dating.Entities.Help;
import com.datingsite.dating.Repositories.HelpRepository;
import com.datingsite.dating.ServiceImplementations.HelpServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


@Service
public class HelpService implements HelpServiceImpl {

@Autowired
    private HelpRepository helpRepository;

//create help
@Override
public Help create(Help help){

    return helpRepository.save(help);
}
//delete help by id
@Override
    public Help delete(Long id){
    Help help=findById(id);
    if(help !=null){
        helpRepository.delete(help);
    }
    return help;
}
//retrieve all help information
@Override
public List findAll(){
    return helpRepository.findAll();
}
//finding help by id
@Override
    public Help findById(Long id){
    return  helpRepository.findByIdHelp(id);
    }
    //finding help by email
    @Override
    public Help findByEmail(String email){
        return  helpRepository.findByEmail(email);
    }
    //finding help by date
    @Override
    public Help findByDate(Date date){
        return  helpRepository.findByDate(date);
    }
    //updating help without any condition
//    @Override
//    public Help update(Help help){
//    return null;
//    }
    //delete help by date
    @Override
    public Help deleteByDate(Date date){
        Help help=findByDate(date);
        if(help !=null){
            helpRepository.deleteByDate(date);
        }
        return help;
    }
}
