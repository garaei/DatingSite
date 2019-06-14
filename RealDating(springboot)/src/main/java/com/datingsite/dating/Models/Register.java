package com.datingsite.dating.Models;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Temporal;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.Set;

public class Register {
    @NotBlank
    @Size(min = 3, max = 50)
    private String firstname;
    @NotBlank
    @Size(min = 3, max = 50)
    private String lastname;
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    @CreationTimestamp
    private Date createddate;
    @NotBlank
    @Size(min = 6, max = 50)
    private String username;
    @NotBlank
    @Size(min = 8, max = 50)
    private String password;
    @NotBlank
    @Size(min = 8, max = 50)
    private String confirmPassword;
    private Set<String> role;


    public String getFirstname() {
        return firstname;
    }

    public Register setFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }

    public String getLastname() {
        return lastname;
    }

    public Register setLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public Register setEmail(String email) {
        this.email = email;
        return this;
    }

    public Date getCreateddate() {
        return createddate;
    }

    public Register setCreateddate(Date createddate) {
        this.createddate = createddate;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public Register setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public Register setPassword(String password) {
        this.password = password;
        return this;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public Register setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
        return this;
    }

    public Set<String> getRole() {
        return role;
    }

    public Register setRole(Set<String> role) {
        this.role = role;
        return this;
    }
}
