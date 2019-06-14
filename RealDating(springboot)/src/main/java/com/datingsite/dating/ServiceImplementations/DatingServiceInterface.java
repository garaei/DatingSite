package com.datingsite.dating.ServiceImplementations;

import com.datingsite.dating.Models.Login;
import com.datingsite.dating.Models.Register;

import java.util.Map;

public interface DatingServiceInterface {

    public Map<String,Object> register(Register registerr);
    public Map<String,Object> login(Login loginn);
}
