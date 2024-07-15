package com.healthcare.dto;



import jakarta.persistence.*;

import lombok.Data;

import java.math.BigInteger;


@Entity
@Data
public class User {
    @Id
    @GeneratedValue//(strategy = GenerationType.UUID)
    private Integer id;

    @OneToOne( cascade = CascadeType.ALL)
    private Appointment appointments;

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private BigInteger contactNo;
    private String userRole;

}