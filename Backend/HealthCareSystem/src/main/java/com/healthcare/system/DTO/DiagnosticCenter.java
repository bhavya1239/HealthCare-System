package com.healthcare.system.DTO;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class DiagnosticCenter {

    private String centerId;
    private String centerName;
    private List<Test> listOfTests;
    private List<Appointment> listOfAppointments;
}
