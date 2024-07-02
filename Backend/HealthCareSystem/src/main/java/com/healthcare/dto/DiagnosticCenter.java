package com.healthcare.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class DiagnosticCenter {
    @Id
    @GeneratedValue
    private String centerId;
    private String centerName;
    @OneToMany
    private List<Test> listOfTests;
    @OneToMany
    private List<Appointment> listOfAppointments;
}
