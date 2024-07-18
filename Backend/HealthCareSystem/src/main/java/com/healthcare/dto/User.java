package com.healthcare.dto;



import jakarta.persistence.*;

import lombok.Data;

import java.math.BigInteger;
import java.util.List;


@Entity
@Data
public class User {
    @Id
    @GeneratedValue//(strategy = GenerationType.UUID)
    private Integer id;

    @OneToMany ( cascade = CascadeType.ALL)
    private List<Appointment> appointments;

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private BigInteger contactNo;
    private boolean isAdmin;

}