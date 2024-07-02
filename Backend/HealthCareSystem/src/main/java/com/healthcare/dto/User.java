package com.healthcare.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.math.BigInteger;
import java.util.List;

@Entity
@Data
public class User {
    @Id
    private String userId;
    private List<DiagnosticCenter> centerList;
    private String userPassword;
    private String userName;
    private BigInteger contactNo;
    private String userRole;
    private String emailId;
}
