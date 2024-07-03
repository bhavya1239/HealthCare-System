package com.healthcare.dto;



import jakarta.persistence.*;

import lombok.Data;

import java.math.BigInteger;

import java.time.LocalDateTime;

@Data

@Entity

public class


Appointment {

    @Id
    @GeneratedValue
    private BigInteger appointmentId;

    @OneToOne (cascade = CascadeType.ALL)
    private User user;


    private Test test;

    @ManyToOne
    @JoinColumn(name = "center_id")
    private DiagnosticCenter diagnosticCenter;
    private LocalDateTime datetime;
    private boolean approved;

}

