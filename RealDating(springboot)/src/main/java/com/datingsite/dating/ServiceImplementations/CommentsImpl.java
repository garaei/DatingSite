package com.datingsite.dating.ServiceImplementations;

import com.datingsite.dating.Entities.Comments;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface CommentsImpl {
    public Comments create(Comments comments);
    public List findAll();
    public Comments findByDate(Date date);
    public Comments findByAurthor(String postedby);
    public Comments delete(String postedby);
    public Optional<Comments> delete(Long id);
}
