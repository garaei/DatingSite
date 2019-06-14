package com.datingsite.dating.ServiceImplementations;

import org.springframework.security.core.userdetails.UserDetails;

public interface UserDetailsServiceImpl {
    public UserDetails loadUserByUsername(String username);
}
