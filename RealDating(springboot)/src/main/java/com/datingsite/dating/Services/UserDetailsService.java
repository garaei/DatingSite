package com.datingsite.dating.Services;


import com.datingsite.dating.Entities.Users;
import com.datingsite.dating.Repositories.DatingRepository;
import com.datingsite.dating.ServiceImplementations.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsService implements UserDetailsServiceImpl {

    @Autowired
    private DatingRepository datingRepository;

@Override
@Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Users user = datingRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User Not Found with -> username or email" + username));
    return UserPrinciple.build(user);

    }

}
