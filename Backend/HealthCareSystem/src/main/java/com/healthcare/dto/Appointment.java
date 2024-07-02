package com.healthcare.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.math.BigInteger;
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
    private Date dateTime;
    private boolean approved;
}
