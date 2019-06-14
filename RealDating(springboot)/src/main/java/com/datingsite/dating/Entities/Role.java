package com.datingsite.dating.Entities;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated( EnumType.STRING)
    @NaturalId
    @Column(length = 60)
    private RoleName name;

    public Role() {}

    public Role(RoleName name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public Role setId(Long id) {
        this.id = id;
        return this;
    }

    public RoleName getName() {
        return name;
    }

    public Role setName(RoleName name) {
        this.name = name;
        return this;
    }
}
