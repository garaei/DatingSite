package com.datingsite.dating.Repositories;

import com.datingsite.dating.Entities.ImagesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<ImagesEntity,String> {

}
