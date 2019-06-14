package com.datingsite.dating.Services;

import com.datingsite.dating.Entities.Comments;
import com.datingsite.dating.Repositories.CommentsRepository;
import com.datingsite.dating.ServiceImplementations.CommentsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CommentsService implements CommentsImpl {

    @Autowired
    private CommentsRepository commentsRepository;

    //view comments by aurthor
    @Override
    public Comments findByAurthor(String postedby){
        return  commentsRepository.findByAurthor(postedby);
    }
    //view comments by date
    @Override
    public Comments findByDate(Date date){
        return  commentsRepository.findByDate(date);
    }
    //view all comments information
    @Override
    public List findAll(){
        return commentsRepository.findAll();
    }
    //create comments
    @Override
    public Comments create(Comments comments){

        return commentsRepository.save(comments);
    }
    //delete comments by aurthor
    @Override
    public Comments delete(String postedby){
        Comments comments=findByAurthor(postedby);
        if(comments !=null){
            commentsRepository.delete(comments);
        }
        return comments;
    }
//    @Override
//    public Comments update(Comments comments){
//        return commentsRepository.update(comments);
//    }
    //delete comment by id
    @Override
    public Optional<Comments> delete(Long id) {
       Optional<Comments> com=commentsRepository.findById(id);
        return com;
    }
}
