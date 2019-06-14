package com.datingsite.dating.Repositories;

import com.datingsite.dating.Entities.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Optional;

@Repository
public interface CommentsRepository extends JpaRepository<Comments,Long> {

    Optional<Comments> findById(Long id);

    Comments findByDate(Date date);

    Comments findByAurthor(String postedby);
}
