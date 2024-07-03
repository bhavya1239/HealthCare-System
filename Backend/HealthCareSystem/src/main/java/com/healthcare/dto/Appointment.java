package com.healthcare.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@Entity
public class Appointment {
    @Id
    @GeneratedValue
    private BigInteger appointmentId;

    @OneToOne
    private User user;
    @OneToOne
    private Test test;
    private LocalDateTime dateTime;
    private boolean approved;

    public void setDiagnosticCenter(DiagnosticCenter center) {
    }

    public void setDatetime(LocalDateTime datetime) {
    }
}
