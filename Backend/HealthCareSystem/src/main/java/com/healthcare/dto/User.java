package com.healthcare.dto;



import jakarta.persistence.*;

import lombok.Data;

import java.math.BigInteger;

import java.util.List;

@Entity

@Data

public class User {

    @Id

    @GeneratedValue

    private String userId;

    @OneToOne( cascade = CascadeType.ALL)

    private List<Appointment> appointments;

    private String userPassword;

    private String userName;

    private BigInteger contactNo;

    private String userRole;

    private String emailId;

}

