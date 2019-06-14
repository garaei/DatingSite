package com.datingsite.dating.Repositories;

import com.datingsite.dating.Entities.Help;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface HelpRepository extends JpaRepository<Help,Long> {
Help findByIdHelp(Long id);
Help findByEmail(String email);
Help findByDate(Date date);
Help deleteByDate(Date date);


}
