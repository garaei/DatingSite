package com.datingsite.dating.Repositories;

import com.datingsite.dating.Entities.Role;
import com.datingsite.dating.Entities.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {
    Optional<Role> findByName(RoleName roleName);

}
