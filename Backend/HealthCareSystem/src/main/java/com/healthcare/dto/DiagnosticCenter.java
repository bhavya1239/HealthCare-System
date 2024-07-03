package com.healthcare.dto;



import jakarta.persistence.*;

import lombok.Data;

import java.util.List;

@Entity

@Data

public class DiagnosticCenter {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String centerId;
    private String centerName;

    @OneToMany(mappedBy = "diagnosticCenter", cascade = CascadeType.ALL)

    private List<Test> listOfTests;

    @OneToMany(mappedBy = "diagnosticCenter", cascade = CascadeType.ALL)

    private List<Appointment> listOfAppointments;

}

