package com.healthcare.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class DiagnosticCenter {
    @Id
    @GeneratedValue
    private String centerId;
    private String centerName;
    private List<Test> listOfTests;
    private List<Appointment> listOfAppointments;
}
