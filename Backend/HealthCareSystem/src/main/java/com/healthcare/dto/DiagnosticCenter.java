package com.healthcare.dto;

import jakarta.persistence.*;

import lombok.Data;

import java.util.List;

@Entity
@Data
public class DiagnosticCenter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer centerId;
    private String centerName;
}