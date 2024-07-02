package com.healthcare.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class DiagnosticCenter {
    @Id
    private String centerId;
    private String centerName;
    private List<Test> listOfTests;
    private List<Appointment> listOfAppointments;
}
