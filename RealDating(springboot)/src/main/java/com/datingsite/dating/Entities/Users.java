package com.datingsite.dating.Entities;






import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
//a table users will be created where username and email will be unique
//no users will have same email or username  @UniqueConstraits
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "username"
        }),
        @UniqueConstraint(columnNames = {
                "email"
        })
})
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "firstname is required")
    @Size(max = 50, min = 3)
    private String firstname;
    @NotBlank(message = "lastname is required")
    @Size(max = 50, min = 3)
    private String lastname;
    @NaturalId
    @NotBlank(message = "email is required")
    @Size(max = 50)
    @Email(message = "invalid email")
    private String email;
    @CreationTimestamp
    private Date createddate;
    @NotBlank(message = "username is required")
    @Size(max = 50,min = 6)
    private String username;
    @NotBlank(message = "username is required")
    @Size(min=6, max = 25)
    private String password;
    @NotBlank(message = "password confirmation is required")
    private String confirmPassword;

    //showing many to many relationship between users and roles
    @ManyToMany(fetch = FetchType.LAZY)
    // a table user_ROLES WILL BE CREATED TO HANDLE A MANY TO MANY RELATIONSHIP
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public Long getId() {
        return id;
    }

    public Users setId(Long id) {
        this.id = id;
        return this;
    }

    public Date getCreateddate() {
        return createddate;
    }

    public Users setCreateddate(Date createddate) {
        this.createddate = createddate;
        return this;
    }

    public String getFirstname() {
        return firstname;
    }

    public Users setFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }

    public String getLastname() {
        return lastname;
    }

    public Users setLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public Users setEmail(String email) {
        this.email = email;
        return this;
    }



    public String getUsername() {
        return username;
    }

    public Users setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public Users setPassword(String password) {
        this.password = password;
        return this;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public Users setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
        return this;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public Users setRoles(Set<Role> roles) {
        this.roles = roles;
        return this;
    }
}
