package com.healthcare.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.math.BigInteger;
import java.util.List;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue
    private String userId;
    @OneToMany
    private List<DiagnosticCenter> centerList;
    private String userPassword;
    private String userName;
    private BigInteger contactNo;
    private String userRole;
    private String emailId;
}
