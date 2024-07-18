package com.healthcare.dto;

import jakarta.persistence.*;

import lombok.Data;

import java.math.BigInteger;

import java.time.LocalDateTime;

@Data

@Entity

public class Appointment {

    @Id
    @GeneratedValue
    private Integer appointmentId;

    @OneToOne (cascade = CascadeType.ALL)
    private Test test;

    @OneToOne (cascade = CascadeType.ALL)
    private DiagnosticCenter diagnosticCenter;

    private LocalDateTime datetime;
    private boolean approved;

}