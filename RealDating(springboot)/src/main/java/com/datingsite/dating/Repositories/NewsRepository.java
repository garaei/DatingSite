package com.datingsite.dating.Repositories;

import com.datingsite.dating.Entities.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface NewsRepository extends JpaRepository<News, Long> {


    News findByDate(Date date);

    News findByAurthor(String postedby);

    News update(News news);
    News
     findByOneId(Long id);
}
