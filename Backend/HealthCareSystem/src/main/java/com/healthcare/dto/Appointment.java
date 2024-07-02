package com.healthcare.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

import java.math.BigInteger;
import java.util.Date;

@Data
@Entity
public class Appointment {
    @Id
    @GeneratedValue
    private BigInteger appointmentId;
    private User user;
    private Test test;
    private Date dateTime;
    private boolean approved;
}
