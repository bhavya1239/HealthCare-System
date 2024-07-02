package com.healthcare.DTO;

import lombok.Data;

import java.math.BigInteger;
import java.util.Date;

@Data
public class Appointment {
    private User user;
    private BigInteger appointmentId;
    private Test test;
    private Date dateTime;
    private boolean approved;
}
