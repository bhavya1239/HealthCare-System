package com.healthcare.dto;

import lombok.Data;

import java.util.List;

@Data
public class DiagnosticCenter {
    private String centerName;
    private String centerId;
    private List<Test> listOfTests;
    private List<Appointment> listOfAppointments;
}
